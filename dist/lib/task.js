import r from './ref.js'
var modal

var g = {

    body: null,
    modal: null,

    taskTableShow: () => {


        var title = []
        var line = [{ c: 'Daftar Penugasan ', d: { "colspan": "10", "class": "text-center font-bold text-lg bg-base-200" } }]
        title.push(line)
        var line = [{ c: 'No.' }, { c: "Nama Tenaga Ahli", r: { class: "font-black " } }, { c: "Nomor Kontak" }, { c: "Kegiatan" },
        { c: "Wilayah" }, { c: "Tugas/Peran" }, { c: "Tgl Mulai" }, { c: "Sampai dengan" }, { c: "Durasi" }, { c: "Unit" }]
        title.push(line)

        var body = g.body == null || g.body == false ? [[{ c: 'Data masih kosong', d: { "colspan": "10", "class": "text-center  " } }]] : g.body


        var foot = []

        line = [{
            d: { colspan: 10 }, c: m("p", { "class": "buttons text-center" },
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

        g.taskTable = m({ view: () => r.gTab("taList", { title, body, divine: foot }, "table") })

    },

    addNewTask: (cb) => {



        var bodyArr = [{
            type: 'select', label: "Pilih Pemda", id: "idLevel1", dataMsg: "Pemda", required: true, col: 6, colStart: 1, value: null, selectOpt: g.selectOptPemda()
        },

        ]

        var xFn = () => {
            r.closeMdl()
        }

        var vFn = (e) => {

            var arrSel = r.getSelected()

            var kodePemda = arrSel[0].idLevel1

            r.closeMdl()


            var line = [{ c: 'No.' }, { c: "Nama Tenaga Ahli", r: { class: "font-black " } }, { c: "Nomor Kontak" }, { c: "Kegiatan" },
            { c: "Wilayah" }, { c: "Sebagai/Peran" }, { c: "Tgl Mulai" }, { c: "Sampai dengan" }, { c: "Durasi" }, { c: "Unit" }]


            var bodyArrAgain = [{
                type: 'select', label: "(semua field harus diisi/dipilih)", id: "idLevel2", dataMsg: "Kegiatan", required: true, col: 6, colStart: 1, value: null, selectOpt: g.selectOptKeg(kodePemda)
            },
            {
                type: 'select', label: "Pilih Tenaga Ahli", id: "idLevel3", dataMsg: "Tenaga Ahli", required: true, col: 3, colStart: 1, value: null, selectOpt: g.selectOptTA()
            },
            {
                type: 'text', label: "Tugas/Peran", id: "role", dataMsg: "Tugas/Peran", required: true, col: 3, colStart: 4, value: null,
            },
            {
                type: 'date', label: "Tanggal mulai", id: "start", dataMsg: "Tanggal mulai", required: true, col: 3, colStart: 4, value: null,
            },
            {
                type: 'date', label: "Sampai dengan", id: "end", dataMsg: "Tanggal selesai", required: true, col: 3, colStart: 4, value: null,
            },


            ]


            var xFn2 = () => {
                r.closeMdl()
                g.addNewTask()

            }

            var vFn2 = () => {

                var tempObj = r.getSelected()
                console.log(tempObj)
                var tempArr = r.getValues()
                console.log(tempArr)
                var Obj = { idLevel1: kodePemda }
                Object.assign(Obj, tempObj[0], tempObj[1], tempArr[0])
                console.log(Obj)

                //cek level1 with idLevel1, if not exist:
                /*

                level : 1
                idTask : idLevel1


                     level: Number,
                     idTask: { type: String, unique: true }, //kodePemda/keg if TA code plus ObjectID
                     idLevel: null,

                     name: idLevel1-Name
                     role: null
                     start: startdate
                     end: enddate,
                     progress: 20,
                     dependencies: null,
                     created_by: String,
                     duration_unit: String






                */



            }

            g.modal = r.makeModalToo(m({ view: () => r.gForm("Entry Penugasan", "Pilih Kegiatan pada Pemda " + arrSel[0].text, bodyArrAgain, xFn2, vFn2) }))
            r.tunda(() => r.showModal(), 500)

        }


        g.modal = r.makeModalToo(m({ view: () => r.gForm("Entry Penugasan", "Pilih Wilayah Penugasan", bodyArr, xFn, vFn) }))
        cb ? cb() : null

    },

    taskList: null,
    taskTable: null,

    getTaskData: (cb) => {

        var param = {
            method: "getAll", tableName: "taskModel"
        }
        r.comm(param, () => {
            console.log(r.dataReturn)

            if (r.dataReturn.success == 0) {
                g.body = false
            } else {
                g.taskList = [...r.dataReturn.message]
            }
            cb ? cb() : null
        })

    },


    showTab: () => {

        var line = []

        var no = 0
        if (g.taskList) {
            g.taskList.message.forEach(d => {
                no++
                var row = [{ c: no }, { c: d.kode, r: { id: d._id } }, { c: d.nama }, { c: d.contact }]
                line.push(row)
            })
        }


        g.body = line

        g.taskTableShow()


    },



    taList: null,

    pemdaList: null,
    oneTwoLvlData: null,
    selectOptPemda: () => {

        var selectOpt = []

        g.oneTwoLvlData.forEach(p => {
            selectOpt.push({ kode: p.kode, nama: p.nama })
        })

        return selectOpt

    },

    selectOptKeg: (kodePemda) => {

        var selectOpt = []

        g.oneTwoLvlData.forEach(p => {
            if (p.kode == kodePemda) {
                p.kegiatan.forEach(k => {
                    selectOpt.push({ kode: k.kode, nama: k.nama })
                })
            }
        })

        return selectOpt

    },
    selectOptTA: () => {

        var selectOpt = []

        g.taList.forEach(p => {
            selectOpt.push({ kode: p.kode, nama: p.nama })
        })

        return selectOpt

    },

    getData: (cb) => {


        var param = {
            method: "getAll", tableName: "pemdaModel"
        }

        r.comm(param, () => {
            if (r.dataReturn.success !== 0) {
                g.pemdaList = [...r.dataReturn.message]

                g.oneTwoLvlData = []





                var prm = {
                    method: "getAll",
                    tableName: "kegModel",

                }

                r.comm(prm, () => {
                    if (r.dataReturn.success != 0) {


                        var kegData = [...r.dataReturn.message]
                        g.oneTwoLvlData = g.pemdaList
                        var kegiatan = []

                        g.oneTwoLvlData.forEach(pem => {
                            kegData.forEach(keg => {
                                if (keg.pemda_ref = pem._id) {
                                    kegiatan.push(keg)
                                }
                            })
                            pem.kegiatan = kegiatan
                            if (kegiatan.length == 0) {
                                r.tell('warning', "mohon lengkapi data kegiatan untuk Pemda " + pem.nama + " dulu", 1650, () => m.route.set("/kegiatan"))
                            } else {
                                kegiatan = []
                            }

                        })


                    }

                    var prmTA = {
                        method: "getAll", tableName: "taModel"
                    }

                    r.comm(prmTA, () => {
                        if (r.dataReturn.success != 0) {

                            g.taList = [...r.dataReturn.message]
                            console.log(g.taList)

                            // console.log(p)
                        } else {

                            r.tell('warning', "mohon lengkapi data Tenaga Ahli terlebih dahulu", 1650, () => m.route.set("/ta"))
                        }
                        cb ? cb() : null
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

        g.getData(() => g.getTaskData(() => { g.addNewTask(() => g.showTab()) }))

    },

    oncreate: () => {



        //   console.log(g.modal)

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Penugasan Tenaga Ahli"),
            m('div', { class: "flex justify-center items-center my-6" }, m('div', { class: "preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[36rem] max-w-7xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4" },
                g.taskTable ? g.taskTable : m('div', { class: "flex justify-center items-center my-3" }, m("span", { "class": "loading loading-spinner  loading-xl" })))
            ),
            g.modal
        ]

    }

}

export default g