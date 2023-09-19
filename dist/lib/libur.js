import r from './ref.js'
var modal

var g = {

    body: null,
    modal: null,

    liburList: () => {

        console.log('liburList called')

        var title = []
        var line = [{ c: 'Daftar Hari Libur', d: { "colspan": "4", "class": "text-center font-bold text-lg bg-base-200" } }]
        title.push(line)
        var line = [{ c: 'No.' }, { c: "Hari" }, { c: "Tanggal", r: { class: "font-black " } }, { c: "Peringatan" }]
        title.push(line)

        var body = g.body == null || g.body == false ? [[{ c: 'Data masih kosong', d: { "colspan": "4", "class": "text-center  " } }]] : g.body


        var foot = []

        line = [{
            d: { colspan: 4 }, c: m("p", { "class": "buttons text-center" },
                [
                    m("button", {
                        "class": "btn btn-success btn-sm", onclick: () => {

                            g.body == null ? r.tell('warning', 'still loading', 2500) : g.verify(() => g.impor())

                        }
                    },
                        m("span", "Impor"
                            //<i class="fa-solid fa-file-circle-plus"></i>
                        )
                    ),
                    m("button", { "class": "btn btn-warning btn-sm ml-1", onclick: () => { } },
                        m("span", "Edit"
                        )
                    ),

                ]
            )
        }
        ]

        foot.push(line)

        g.tabelLibur = m({ view: () => r.gTab("liburList", { title, body, bandeng: foot }) })

    },

    verify: (cb) => {

        var bodyArr = [{
            type: 'text', label: "Sandi", id: "secret", dataMsg: "Password", required: true, col: 6, colStart: 1, val: null
        },
        ]

        var xFn = () => {
            r.closeMdl()
        }

        var vFn = (e) => {

            var theArr = r.getValues()
            console.log(theArr)

            if (theArr) {
                m.request({
                    method: "POST",
                    url: "./api/auth1",
                    body: theArr[0]

                }).then(data => {
                    console.log(data)
                    if (data.success == 1) {


                        cb()

                    } else {
                        r.tell('error', 'sandi salah', 5555, () => {
                            r.getById('modaliciousTooSimpanBtn').innerHTML = "<span>Simpan</span>"
                        })
                    }
                })
            }


        }

        g.modal = null;

        var borokokok = (cb) => {
            g.modal = r.makeModalToo(m({ view: () => r.gForm("Secret", "Masukkan Password", bodyArr, xFn, vFn) }))
            if (g.modal) {
                cb();
            }
        }

        borokokok(() => r.showModal())


    },

    imporData: null,

    impor: () => {

        var thisYear = new Date().getFullYear();
        console.log(typeof (thisYear), thisYear)


        var prmcek = {
            method: "get",
            tableName: "liburModel",
            json: { year: '' + thisYear }
        }

        r.comm(prmcek, () => {
            console.log(r.dataReturn)
            if (r.dataReturn.success == 1) {
                r.tell('error', "data libur telah diimpor", 2222, () => {
                    r.closeMdl()
                })
            } else {
                var url = "https://api-holidays-id.rizkysam.web.id/holidays/2023"

                r.get(url, () => {
                    g.imporData = r.dataReturn.data
                    console.log(g.imporData)

                    if (g.imporData) {
                        var prm = {
                            method: "create",
                            tableName: "liburModel",
                            json: g.imporData
                        }

                        r.comm(prm, () => {
                            console.log(r.dataReturn)
                            r.closeMdl()
                            g.showTab()
                        })
                    }



                })
            }
        })





    },

    addPemda: () => {

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
            type: 'text', label: "Kode Pemda", id: "kode", dataMsg: "Kode Pemda", required: true, col: 6, colstart: 1, val: null
        }, {
            type: 'text', label: "Nama Pemda", id: "nama", dataMsg: "Nama Pemda", required: true, col: 6, colstart: 1, val: null
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
                var param = {
                    method: "get", json: { kode: data.kode }, tableName: "liburModel"
                }

                r.comm(param, () => {
                    console.log(r.dataReturn)
                    if (r.dataReturn.success == 0) {
                        var svparam = {
                            method: "create",
                            tableName: "liburModel",
                            json: data

                        }
                        r.comm(svparam, () => {
                            if (r.dataReturn.success == 0) {
                                r.tell('error', 'gagal menyimpan data Pemda', 3500)
                            } else {
                                r.tell('success', "data Pemda berhasil disimpan", 2000, () => {

                                    modal.close()
                                    g.showTab()


                                })
                            }
                        })
                    } else {
                        r.tell('error', 'Kode Pemda sudah digunakan', 3500)
                    }
                })
            }




        }

        var comp = r.gForm("Pemda Baru", "Kode dan Nama wajib diisi", bodyArr, xFn, vFn)
        return r.makeModalToo(m({ view: () => comp }))


    },

    showTab: () => {

        g.body = [[{ c: 'LOADING ... ', d: { "colspan": "3", "class": "text-center font-bold " } }]]
        m.redraw()

        var param = {
            method: "getAll", tableName: "liburModel"
        }

        r.comm(param, () => {
            console.log(r.dataReturn)
            modal = r.getById('modalicious')
            if (r.dataReturn.success == 0) {
                g.body = false
            } else {
                //   [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center font-bold" } }]] 



                var line = []

                //      var line = [{ c: 'No.' }, { c: "Hari" }, { c: "Tanggal", r: { class: "font-black " } }, { c: "Peringatan" }]

                var no = 0
                r.dataReturn.message.forEach(d => {

                    var tgl = d.date + " " + d.month + " " + d.year

                    no++
                    var row = [{ c: no }, { c: d.day, r: { id: d._id } }, { c: tgl }, { c: d.holiday }]
                    line.push(row)
                })

                g.body = line

            }

            g.liburList()
        })

    },

    tabelLibur: null,


    //------------------------
    oninit: () => {

        // var method = req.body.method
        // var tableName = req.body.tableName
        // var id = req.body.id
        // var json = req.body.json
        // var fn =  req.body.fn

        g.showTab()


    },

    oncreate: () => {

        g.modal = g.addPemda()

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Master Hari Libur"),
            m('div', { class: "flex justify-center items-center my-6" }, m('div', { class: "preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[36rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4" },
                g.tabelLibur ? g.tabelLibur : m('div', { class: "flex justify-center items-center my-3" }, m("span", { "class": "loading loading-spinner  loading-xl" })))
            ),
            g.modal
        ]

    }

}

export default g