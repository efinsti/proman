import r from './ref.js'
var modal

var g = {

    body: null,
    modal: null,

    taList: () => {


        var title = []
        var line = [{ c: 'Daftar Tenaga Ahli ', d: { "colspan": "4", "class": "text-center font-bold text-lg bg-base-200" } }]
        title.push(line)
        var line = [{ c: 'No.' }, { c: "NIK" }, { c: "Nama Tenaga Ahli", r: { class: "font-black " } }, { c: "Nomor Kontak" }]
        title.push(line)

        var body = g.body == null || g.body == false ? [[{ c: 'Data masih kosong', d: { "colspan": "4", "class": "text-center  " } }]] : g.body


        var foot = []

        line = [{
            d: { colspan: 4 }, c: m("p", { "class": "buttons text-center" },
                [
                    m("button", {
                        "class": "btn btn-success btn-sm", onclick: () => {

                            g.body == null ? r.tell('warning', 'still loading', 2500) : r.showModal()

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

        g.tabelPemda = m({ view: () => r.gTab("taList", { title, body, bandeng: foot }) })

    },

    addTA: () => {

        //  modal = r.getById('modalicious')

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
            type: 'number', label: "NIK", id: "kode", dataMsg: "NIK", required: true, col: 6, colstart: 1, val: null
        }, {
            type: 'text', label: "Nama Tenaga Ahli", id: "nama", dataMsg: "Nama Tenaga Ahli", required: true, col: 6, colstart: 1, val: null
        }, {
            type: 'tel', label: "Contact Number", id: "contact", dataMsg: "Contact Number", required: true, col: 6, colstart: 1, val: null
        },

        ]

        var xFn = () => {
            modal.close()
        }

        var vFn = (e) => {

            var theArr = r.getValues()
            console.log(theArr)

            if (theArr) {
                var data = theArr[0]
                var param = {
                    method: "get", json: { kode: data.kode }, tableName: "taModel"
                }

                console.log(data)

                var regExp = /[a-zA-Z]/g;
                var testString = data.contact

                var lanjut

                if (regExp.test(testString)) {
                    r.tell('error', 'No telepon mengandung huruf', 1233)
                } else {
                    lanjut = true
                }

                console.log(lanjut)

                if (lanjut) {
                    r.comm(param, () => {
                        console.log(r.dataReturn)
                        if (r.dataReturn.success == 0) {
                            var svparam = {
                                method: "create",
                                tableName: "taModel",
                                json: data

                            }
                            r.comm(svparam, () => {
                                if (r.dataReturn.success == 0) {
                                    r.tell('error', 'gagal menyimpan data Penugasan', 3500)
                                } else {
                                    r.tell('success', "data Penugasan berhasil disimpan", 2000, () => {

                                        modal.close()
                                        g.showTab()


                                    })
                                }
                            })
                        } else {
                            r.tell('error', 'NIK sudah terdaftar', 3500)
                        }
                    })
                }


            }




        }

        var comp = r.gForm("Entry Tenaga Ahli", "Semua field wajib diisi", bodyArr, xFn, vFn)
        return r.makeModalToo(m({ view: () => comp }))


    },

    showTab: () => {

        g.body = [[{ c: 'LOADING ... ', d: { "colspan": "3", "class": "text-center font-bold " } }]]
        m.redraw()

        var param = {
            method: "getAll", tableName: "taModel"
        }

        r.comm(param, () => {
            console.log(r.dataReturn)
            modal = r.getById('modalicious')
            if (r.dataReturn.success == 0) {
                g.body = false
            } else {
                //   [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center font-bold" } }]] 



                var line = []

                var no = 0
                r.dataReturn.message.forEach(d => {
                    no++
                    var row = [{ c: no }, { c: d.kode, r: { id: d._id } }, { c: d.nama }, {c:d.contact}]
                    line.push(row)
                })

                g.body = line

            }

            g.taList()
        })

    },

    tabelPemda: null,

    pemdaList: null,
    oneTwoLvlData: null,
    getData: (cb) => {


        var param = {
            method: "getAll", tableName: "pemdaModel"
        }

        r.comm(param, () => {
            if (r.dataReturn.success !== 0) {
                g.pemdaList = [...r.dataReturn.message]

                g.oneTwoLvlData = []

                var count = 0

                g.pemdaList.forEach(p => {
                    count++
                    var idPemda = p._id
                    var prm = {
                        method: "get",
                        tableName: "kegModel",
                        json: { pemda_ref: idPemda }
                    }

                    r.comm(prm, () => {
                        if (r.dataReturn.success != 0) {


                            var kegData

                            kegData = [...r.dataReturn.message]


                            // console.log(kegData)

                            Object.assign(p, { kegiatan: kegData })
                            // console.log(p)
                        } else {
                            Object.assign(p, { kegiatan: [] })
                            r.tell('warning',"mohon lengkapi data kegiatan untuk Pemda "+p.nama+" dulu",1650,()=>m.route.set("/kegiatan"))
                        }

                        g.oneTwoLvlData.push(p)
                        if (count == g.pemdaList.length) {
                            cb ? cb() : null
                        }
                    })

                })


            } else {

                r.tell('warning', "Silakan isi data Pemda terlebih dahulu", 2222, () => {
                    m.route.set("/pemda")
                })

            }
        })

    },




    //------------------------
    oninit: () => {

        // var method = req.body.method
        // var tableName = req.body.tableName
        // var id = req.body.id
        // var json = req.body.json
        // var fn =  req.body.fn

        g.getData(()=>console.log(g.oneTwoLvlData))


    },

    oncreate: () => {

        g.modal = g.addTA()

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Penugasan Tenaga Ahli"),
            m('div', { class: "flex justify-center items-center my-6" }, m('div', { class: "preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[36rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4" },
                g.tabelPemda ? g.tabelPemda : m('div', { class: "flex justify-center items-center my-3" }, m("span", { "class": "loading loading-spinner  loading-xl" })))
            ),
            g.modal
        ]

    }

}

export default g