import r from './ref.js'
var modal

var g = {

    body: null,
    modal: null,

    pemdaList: () => {

        var title = []
        var line = [{ c: 'Daftar Pemerintah Daerah', d: { "colspan": "3", "class": "text-center font-bold" } }]
        title.push(line)

        var body = g.body == null || g.body == false ? [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center  " } }]] : g.body


        var foot = []

        line = [{
            d: { colspan: 3 }, c: m("p", { "class": "buttons" },
                [
                    m("button", {
                        "class": "btn btn-success btn-sm", onclick: () => {

                            g.body == null ? r.tell('warning', 'still loading', 2500) : g.addPemda()

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

        return r.gTab("histori", { title, body, bandeng: foot })


    },

    addPemda: () => {

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
            type: 'text', label: "Kode Pemda", id: "kode", dataMsg: "Kode Pemda", required: true, col: 6, colstart: 1, val: null
        }, {
            type: 'text', label: "Nama Pemda", id: "nama", dataMsg: "Nama Pemda", required: true, col: 6, colstart: 1, val: null
        },

        ]

        var xFn = () => {
            modal.close()
        }

        var vFn = (e) => {

            var theArr = r.getValues()
            console.log(theArr)

            var data = theArr[0]
            var param = {
                method: "get", json: { kode: data.kode }, tableName: "pemdaModel"
            }

            r.comm(param, () => {
                console.log(r.dataReturn)
                if (r.dataReturn.success == 0) {
                    var svparam = {
                        method: "create",
                        tableName: "pemdaModel",
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

        var comp = r.gForm("Pemda Baru", "Kode dan Nama wajib diisi", bodyArr, xFn, vFn)
        g.modal = r.makeModalToo(m({ view: () => comp }))
        modal.showModal()


    },

    showTab: () => {

        g.body = [[{ c: 'LOADING ... ', d: { "colspan": "3", "class": "text-center font-bold " } }]]
        m.redraw()

        var param = {
            method: "getAll", tableName: "pemdaModel"
        }

        r.comm(param, () => {
            console.log(r.dataReturn)
            if (r.dataReturn.success == 0) {
                g.body = false
            } else {
             //   [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center font-bold" } }]] 

           

             var line = []

                r.dataReturn.message.forEach(d=>{
                    var row = [{c:d.kode, r:{id:d._id}}, {c:d.nama}]
                    line.push(row)
                })

                g.body = line

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

        g.showTab()


    },

    oncreate: () => {

        g.modal = r.makeModal()

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Manajemen Tenaga Ahli"),
            g.pemdaList(),
            g.modal
        ]

    }

}

export default g