import r from './ref.js'
var modal

var g = {

    body: null,
    modal: null,

    taList: () => {

      
        var title = []
        var line = [{ c: 'Daftar Tenaga Ahli ', d: { "colspan": "4", "class": "text-center font-bold text-lg bg-base-200" } }]
        title.push(line)
        var line = [{ c: 'No.' }, { c: "NIK" }, { c: "Nama Tenaga Ahli", r: { class: "font-black " }  }, {c:"Nomor Kontak"}]
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

        g.tabelPemda = m({view:()=>r.gTab("taList", { title, body, bandeng: foot })})
     


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
            type: 'tel', label: "Contact Number", id: "nama", dataMsg: "Contact Number", required: true, col: 6, colstart: 1, val: null
        },

        ]

        var xFn = () => {
            modal.close()
        }

        var vFn = (e) => {

            var theArr = r.getValues()
            console.log(theArr)

            if(theArr){
                    var data = theArr[0]
            var param = {
                method: "get", json: { kode: data.kode }, tableName: "taModel"
            }

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
                            r.tell('error', 'gagal menyimpan data Tenaga Ahli', 3500)
                        } else {
                            r.tell('success', "data Tenaga Ahli berhasil disimpan", 2000, () => {

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
                    var row = [{ c: no }, { c: d.kode, r: { id: d._id } }, { c: d.nama }]
                    line.push(row)
                })

                g.body = line

            }

             g.taList()
        })

    },

    tabelPemda:null,


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

        g.modal = g.addTA()

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Daftar Tenaga Ahli"),
            m('div', { class: "flex justify-center items-center my-6" }, m('div', {class:"preview border-base-300 bg-base-100 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[36rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4"},  g.tabelPemda)
             ),
            g.modal
        ]

    }

}

export default g