import r from './ref.js'
var modal

var g = {

    bodykeg: null,
    modal: null,



    addKeg: (idPemda, kodePemda) => {

        console.log('addKeg called')

        modal = r.getById('modalicious')

        /*
    gForm params = (
    
        title,
        sub-title,
        bodyArr [{
                    type: text | textarea | file | select | checkbox | radio 
        cbr: [ {                   
                label: //also as id and name
                lblHelper: 
                checked            } ]
        id:
        selectOpt: []
        dataMsg:
        label: 
        required :
        col : length (1-6)
        colstart : 
        val :         }]
    } 
    */

        var bodyArr = [{
            type: 'text', label: "Kode Kegiatan", id: "kode", dataMsg: "Kode Kegiatan", required: true, col: 6, colstart: 1, val: null
        }, {
            type: 'text', label: "Nama Kegiatan", id: "nama", dataMsg: "Nama Kegiatan", required: true, col: 6, colstart: 1, val: null
        },

        ]

        var xFn = () => {
            r.closeMdl()
        }

        var vFn = (e) => {

            var theArr = r.getValues()
            console.log(theArr)

            if (theArr) {
                var data = theArr[0]
                data.kode = kodePemda + "." + data.kode
                Object.assign(data, { pemda_ref: idPemda })

                var param = {
                    method: "get", json: { kode: data.kode }, tableName: "kegModel"
                }

                r.comm(param, () => {
                    console.log(r.dataReturn)
                    if (r.dataReturn.success == 0) {
                        var svparam = {
                            method: "create",
                            tableName: "kegModel",
                            json: data

                        }
                        r.comm(svparam, () => {
                            if (r.dataReturn.success == 0) {
                                r.tell('error', 'gagal menyimpan data Kegiatan', 3500)
                            } else {
                                r.tell('success', "data Kegiatan berhasil disimpan", 2000, () => {

                                    r.closeMdl()
                                    g.getData(() => g.showAkor(kodePemda)) // not triggered, safe


                                })
                            }
                        })
                    } else {
                        r.tell('error', 'Kode Kegiatan sudah digunakan', 3500)
                    }
                })
            }




        }

        var comp = r.gForm("Kegiatan Baru", "Kode dan Nama wajib diisi", bodyArr, xFn, vFn)
        g.modal = r.makeModalToo(m({ view: () => comp }))

        r.tunda(() => r.showModal(), 250)

    },



    pemdaAkorCr: (pemdaObj, ctnKeg, kode) => {


        var line = [[{ c: pemdaObj.no + ".", d: { width: "50px", } }, { c: pemdaObj.kode, r: { id: pemdaObj._id }, d: { width: "100px", class: "text-accent-focus italic" } }, { c: pemdaObj.nama, d: { class: "text-accent-focus italic" } }]]
        var content = r.gTab("pemtab" + pemdaObj._id, { body: line }, "table-fixed border-spacing-0.5 border-separate ")


        return [

            m("div", { "class": "collapse collapse-arrow border border-base-300" },
                [
                    m("input", { "type": "radio", "name": "nve", "checked": kode == pemdaObj.kode ? "checked" : false }),
                    m("div", { "class": "collapse-title text-xl font-medium" },
                        content
                    ),
                    //m('div', { id: "ctn" + pemdaObj._id })
                    ctnKeg
                ]
            ),
        ]

    },

    showAkor: (kodePemda) => {

        console.log('showAkor called', kodePemda)

        var theAkor = []



        if (g.allData != null) {
            g.allData = r.customSort(g.allData, "kode")
            g.allData.forEach((p, idx) => {

                Object.assign(p, { no: idx + 1 })

                var kegComp = (i) => m("div", { "class": "collapse-content" }, i)



                var insertComp

                if (p.kegiatan.length > 0) {

                    g.bodyKegCr(p.kegiatan, () => { insertComp = g.kegList(p._id, p.kode, p.nama) })

                } else {

                    insertComp = [
                        m('span', "Pemda " + p.nama + " belum memiliki kegiatan"),
                        m("button", {
                            "class": "btn btn-success btn-sm mt-3", onclick: () => {


                                g.addKeg(p._id, p.kode)

                            }
                        },
                            m("span", { "class": "icon w-8" },
                                m("i", { "class": "fa-solid fa-file-circle-plus" }) //<i class="fa-solid fa-file-circle-plus"></i>
                            )
                        ),
                    ]



                }



                theAkor.push(g.pemdaAkorCr(p, kegComp(m('div', { class: "flex flex-col justify-center items-center" }, insertComp)), kodePemda))
                g.mainAkor = m({ view: () => theAkor })


            })
        }





    },

    bodyKegCr: (dataKeg, cb) => {

        console.log(dataKeg)


        var line = []

        var no = 0
        dataKeg.forEach(d => {

            no++
            var row = [{ c: no }, { c: d.kode, r: { id: d._id } }, { c: d.nama }]
            line.push(row)
        })

        g.bodykeg = line

        console.log(g.bodykeg)
        cb()


    },

    kegList: (idPemda, kodePemda, namaPemda) => {

        var title = []
        var line = [{ c: 'Daftar Kegiatan Pemda ' + namaPemda, d: { "colspan": "3", "class": "text-center font-bold text-lg  " } }]
        title.push(line)
        var line = [{ c: 'No.' }, { c: "Kode Kegiatan" }, { c: "Nama Kegiatan", r: { class: "font-black " } }]
        title.push(line)

        var body = g.bodykeg == null || g.bodykeg == false ? [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center  " } }]] : g.bodykeg

        console.log(body)


        var foot = []

        line = [{
            d: { colspan: 3 }, c: m("p", { "class": "buttons text-center" },
                [
                    m("button", {
                        "class": "btn btn-success btn-sm", onclick: () => {

                            g.bodykeg == null ? r.tell('warning', 'still loading', 2500) : g.addKeg(idPemda, kodePemda)

                        }
                    },
                        m("span", { "class": "icon w-8" },
                            m("i", { "class": "fa-solid fa-file-circle-plus" }) //<i class="fa-solid fa-file-circle-plus"></i>
                        )
                    ),
                    m("button", { "class": "btn btn-warning btn-sm ml-1", onclick: () => { } },
                        m("span", { "class": "icon w-8" },
                            m("i", { "class": "fa-solid fa-folder-open" })
                        )
                    ),
                    m("button", { "class": "btn btn-error btn-sm ml-1" },
                        m("span", { "class": "w-8" },
                            m("i", { "class": "fas fa-trash" })
                        )
                    )
                ]
            )
        }
        ]

        foot.push(line)

        return m('div', { class: "preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[36rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4" },
            r.gTab("tab" + idPemda, { title, body, bandeng: foot },))


    },

    pemdaList: null,
    allData: null,
    getData: (cb) => {


        var param = {
            method: "getAll", tableName: "pemdaModel"
        }

        r.comm(param, () => {
            if (r.dataReturn.success !== 0) {
                g.pemdaList = [...r.dataReturn.message]

                g.allData = []

                var prm = {
                    method: "getAll",
                    tableName: "kegModel",
                }

                r.comm(prm, () => {
                    if (r.dataReturn.success != 0) {

                        var kegData = [...r.dataReturn.message]

                        var kegiatan = []

                        g.allData = g.pemdaList

                        g.allData.forEach(pem => {
                            kegData.forEach(keg => {
                                if (keg.pemda_ref == pem._id) {
                                    kegiatan.push(keg)
                                }
                            })
                            pem.kegiatan = kegiatan
                            kegiatan = []
                        })

                    }

                    cb ? cb() : null

                })




            } else {

                r.tell('warning', "Silakan isi data Pemda terlebih dahulu", 2222, () => {
                    m.route.set("/pemda")
                })

            }
        })

    },

    mainAkor: null,


    //------------------------
    oninit: () => {

        // var method = req.body.method
        // var tableName = req.body.tableName
        // var id = req.body.id
        // var json = req.body.json
        // var fn =  req.body.fn

        g.getData(() => g.showAkor())
        console.log(g.allData)


    },

    oncreate: () => {

        g.modal = r.makeModal()

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Master Kegiatan"),
            g.allData ? g.mainAkor : m('div', { class: "flex justify-center items-center my-3" }, m("span", { "class": "loading loading-spinner  loading-xl" })),
            g.modal
        ]

    }

}

export default g