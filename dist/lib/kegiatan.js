import r from './ref.js'
var modal

var g = {

    body: null,
    modal: null,

    kegList: () => {

        var title = []
        var line = [{ c: 'Daftar Kegiatan', d: { "colspan": "3", "class": "text-center font-bold text-lg bg-base-200" } }]
        title.push(line)
        var line = [{ c: 'No.' }, { c: "Kode Pemda" }, { c: "Nama Pemda" }, { r: { class: "font-black " } }]
        title.push(line)

        var body = g.body == null || g.body == false ? [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center  " } }]] : g.body


        var foot = []

        line = [{
            d: { colspan: 3 }, c: m("p", { "class": "buttons text-center" },
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

    kegAkorCr: (kegObj) => {

        var line = [[{ c: kegObj.no }, { c: kegObj.kode, r: { id: kegObj._id } }, { c: kegObj.nama }]]
        var content = r.gTab(kegObj._id, { body: line })

        return m("div", { "class": "collapse-content" },
            content
        )

    },

    pemdaAkorCr: (pemdaObj) => {

        var line = [[{ c: pemdaObj.no }, { c: pemdaObj.kode, r: { id: pemdaObj._id } }, { c: pemdaObj.nama }]]
        var content = r.gTab("table" + pemdaObj._id, { body: line })


        return [

            m("div", { "class": "collapse collapse-plus bg-base-200" },
                [
                    m("input", { "type": "radio", "name": "my-accordion-3", "checked": "checked" }),
                    m("div", { "class": "collapse-title text-xl font-medium" },
                        content
                    ),
                    m('div', { id: "ctn" + pemdaObj._id })
                ]
            ),
        ]

    },

    showAkor:()=>{

        


    },

    showTab: () => {

        g.body = [[{ c: 'LOADING ... ', d: { "colspan": "3", "class": "text-center font-bold " } }]]
        m.redraw()

        var param = {
            method: "getAll", tableName: "kegModel"
        }

        r.comm(param, () => {
            console.log(r.dataReturn)
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
        })

    },

    pemdaList:null,
    getPemda:()=>{


        var param = {
            method: "getAll", tableName: "pemdaModel"
        }

        r.comm(param, ()=>{
            if(r.dataReturn.success!==0){
                g.pemdaList = [...r.dataReturn.message]
                console.log(g.pemdaList)
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

        g.getPemda()



    },

    oncreate: () => {

        g.modal = r.makeModal()

        // r.urutFn(() => { g.modal = r.makeModal() }, () => { modal = r.getById('modalicious') })

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Manajemen Tenaga Ahli"),
            g.kegList(),
            g.modal
        ]

    }

}

export default g