import r from './ref.js'
var modal

var a = {

    body: null,
    modal : null,

    pemdaList: () => {

        var title = []
        var line = [{ c: 'Daftar Pemerintah Daerah', d: { "colspan": "3", "class": "text-center font-bold" } }]
        title.push(line)

        var body = a.body == null?[[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center font-bold" } }]]:"hahah"


        var foot = []

        line = [{
            d: { colspan: 3 }, c: m("p", { "class": "buttons" },
                [
                    m("button", { "class": "btn btn-success btn-sm", onclick: () => { } },
                        m("span", { "class": "icon w-8" },
                            m("i", { "class": "fa-regular fa-file" }) //<i class="fa-regular fa-file"></i>
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

        return r.gTab("histori", { title, body, SHAK: foot })


    },

    addPemda:()=>{



    },


    //------------------------
    oninit: () => {

        // var method = req.body.method
        // var tableName = req.body.tableName
        // var id = req.body.id
        // var json = req.body.json
        // var fn =  req.body.fn

        var param = {
            method: "getAll", tableName: "pemdaModel"
        }

        r.comm(param, () => {
            console.log(r.dataReturn)
            if (r.dataReturn.success == 0) {
                a.body = null
            }
        })

        g.modal = r.makeModal()
        modal = r.getById('modalicious')

    },

    view: () => {

        return [

            m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), m('p', { class: 'text-2xl mb-4 text-center ' }, "Manajemen Tenaga Ahli"),
            a.pemdaList(),
            g.modal
        ]

    }

}

export default a