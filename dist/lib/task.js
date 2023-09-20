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
                Object.assign(Obj, { idLevel2: tempObj[0].idLevel2, namaKegiatan: tempObj[0].text }, tempObj[1], tempArr[0])
                console.log(Obj)

                var idLevel1 = Obj.idLevel1
                var namaPemda = arrSel[0].text
                var idLevel2 = Obj.idLevel2
                var namaKegiatan = Obj.namaKegiatan
                var idLevel3 = Obj.idLevel3
                var namaTA = Obj.text
                var role = Obj.role
                var start = Obj.start
                var end = Obj.end

                // level: Number,
                // idTask: { type: String, unique: true }, //kodePemda/keg if TA code plus ObjectID
                // // idLevel: String,

                // name: String,
                // role: String,
                // start: Date,
                // end: Date,
                // progress: Number,
                // dependencies: String,
                // created_by: String,



                var prmCheckLvl1 = {
                    method: "get",
                    tableName: "taskModel",
                    json: { idTask: idLevel1 }
                }

                r.comm(prmCheckLvl1, () => {
                    if (r.dataReturn.success == 0) {

                        var prmCreateLvl1 = {
                            method: "create",
                            tableName: "taskModel",
                            json: {
                                level: 1,
                                idTask: idLevel1,
                                name: namaPemda,
                                start,
                                end,
                                progress: 20
                            }
                        }

                        r.comm(prmCreateLvl1, () => {
                            lvl2routine()
                        })

                    } else lvl2routine()
                })

                var lvl2routine = () => {

                    var prmCheckLvl2 = {
                        method: "get",
                        tableName: "taskModel",
                        json: { idTask: idLevel2 }
                    }

                    r.comm(prmCheckLvl2, () => {
                        console.log(r.dataReturn)
                        if (r.dataReturn.success == 0) {

                            var prmCreateLvl2 = {
                                method: "create",
                                tableName: "taskModel",
                                json: {
                                    level: 2,
                                    idTask: idLevel2,
                                    name: namaKegiatan,
                                    start,
                                    end,
                                    progress: 20,
                                    dependencies: idLevel1,
                                }
                            }

                            r.comm(prmCreateLvl2, () => {
                                taskRoutine()
                            })

                        } else taskRoutine()
                    })
                }

                var taskRoutine = () => {

                    var prmCreateTask = {
                        method: "create",
                        tableName: "taskModel",
                        json: {
                            level: 3,
                            idTask: idLevel3 + "-" + r.ObjectID(),
                            name: namaTA + " [" + role + "]",
                            start: start,
                            end: end,
                            progress: 20,
                            dependencies: idLevel2,
                        }
                    }

                    r.comm(prmCreateTask, () => {
                        g.updateParent(idLevel2, start, end)
                        g.getData(() => g.getTaskData(() => g.showTab()))
                        r.closeMdl()

                    })

                }

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

    updateParent: (idLevel2, start, end, cb) => {

        var getLvl2IDprm = {
            method: "get",
            tableName: "taskModel",
            idTask: idLevel2
        }

        r.comm(getLvl2IDprm, () => {

            var lvl2Data = r.dataReturn.message[0]
            console.log(lvl2Data)

            var idLevel1 = lvl2Data.dependencies
            var kegID = lvl2Data._id

            var startKeg = lvl2Data.start
            var endKeg = lvl2Data.end

            var newStart, newEnd

            if (new Date(start) < new Date(startKeg)) {
                newStart = start
            } else { newStart = startKeg }

            if (new Date(end) > new Date(endKeg)) {
                newEnd = end
            } else { newEnd = endKeg }

            var updateKeg = {
                method: "update",
                tableName: "taskModel",
                id: kegID,
                json: { start: newStart, end: newEnd }

            }

            r.comm(updateKeg, () => {

                var getLvl1IDprm = {
                    method: "get",
                    tableName: "taskModel",
                    idTask: idLevel1
                }

                r.comm(getLvl1IDprm, () => {

                    var lvl1Data = r.dataReturn.message[0]
                    console.log(lvl1Data)

                    var PemID = lvl1Data._id
                    var startPem = lvl1Data.start
                    var endPem = lvl1Data.end

                    var newStart, newEnd

                    if (new Date(start) < new Date(startPem)) {
                        newStart = start
                    } else { newStart = startPem }

                    if (new Date(end) > new Date(endPem)) {
                        newEnd = end
                    } else { newEnd = endPem }

                    var updatePem = {
                        method: "update",
                        tableName: "taskModel",
                        id: PemID,
                        json: { start: newStart, end: newEnd }
                    }
                    r.comm(updatePem, () => {

                        cb ? cb() : null
                    })


                })


            })


        })

    },

    taskList: null,
    taskTable: null,
    holidays: null,

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
                var no = 0
                g.taskList.forEach(d => {
                    if (d.level == 3) {

                        d.urut = no + 1
                    }
                });
                g.taskList = g.taskList.sort((a, b) => a.urut - b.urut);
            }

            var getHolidayprm = {
                method: "getAll",
                tableName: "liburModel"
            }

            r.comm(getHolidayprm, () => {
                console.log(r.dataReturn)
                if (r.dataReturn.success == 1) {
                    var holyArr = [];
                    [...r.dataReturn.message].forEach(d => {

                        var tgl = new Date(d.datetime_ms).toLocaleString({  timeZone: 'Asia/Jakarta'}).split(',')[0];
                        holyArr.push(tgl)

                    })
                    console.log(holyArr)
                    g.holidays = holyArr
                } else {

                    r.tell('warning', "Silakan isi data Hari Libur terlebih dahulu", 2222, () => {
                        //  m.route.set("/libur")
                    })
                }

                cb ? cb() : null
            })
        })
    },


    showTab: () => {

        var line = []


        if (g.taskList) {
            g.taskList.forEach((d, idx) => {

                if (d.level == 3) {

                    var contact

                    g.taList.forEach(ta => {
                        if (ta.kode == d.idTask.split('-')[0]) { contact = ta.contact }
                    })

                    var kegiatan, wilayahDependant, wilayah
                    g.taskList.forEach(task => {
                        if (task.idTask == d.dependencies) {
                            kegiatan = task.name
                            wilayahDependant = task.dependencies

                        }
                    })

                    g.taskList.forEach(task => {
                        if (task.idTask == wilayahDependant) {
                            wilayah = task.name


                        }
                    })


                    var start = r.indoDateFmt(d.start)
                    var end = r.indoDateFmt(d.end)

                    var durasi = r.diffdays(d.start, d.end)
                    var durasiWithHolidays = r.workingDaysBetweenDates(d.start, d.end, g.holidays)



                    var row = [{ c: d.urut }, { c: d.name.split('[')[0], r: { id: d._id } }, { c: contact },
                    { c: kegiatan }, { c: wilayah }, { c: d.name.split('[')[1].slice(0, -1) }, { c: start }, { c: end },
                    { c: durasi +" | "+durasiWithHolidays }, { c: "Hari Kalender | Kerja" }]
                    line.push(row)

                   
                }


            })
        }


        g.body = line

        g.taskTableShow()


    },



    taList: null,

    pemdaList: null,
    kegData: null,
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


                        g.kegData = [...r.dataReturn.message]
                        g.oneTwoLvlData = g.pemdaList
                        var kegiatan = []

                        g.oneTwoLvlData.forEach(pem => {
                            g.kegData.forEach(keg => keg.pemda_ref == pem._id ? kegiatan.push(keg) : null)
                            pem.kegiatan = kegiatan
                            if (pem.kegiatan.length == 0) {
                                r.tell('warning', "mohon lengkapi data kegiatan untuk Pemda " + pem.nama + " dulu", 1650, () => m.route.set("/kegiatan"))
                            }
                            kegiatan = []
                        })


                    }

                    var prmTA = {
                        method: "getAll", tableName: "taModel"
                    }

                    r.comm(prmTA, () => {
                        if (r.dataReturn.success != 0) {

                            g.taList = [...r.dataReturn.message]
                            console.log(g.taList)

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
        r.tunda(() => console.log(g.oneTwoLvlData), 5000)

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