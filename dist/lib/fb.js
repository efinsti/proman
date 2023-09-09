import r from "./ref.js"

var modal

var rowTemplate = type => [
    m("tr",
        [
            m("td", { class: "w-1/6" },
                "type"
            ),
            m("td", { class: "w-1/6" }, m("input", { "class": "input input-bordered  ", "type": "text", id: "type", value: type, disabled: true })),
            m("td", { class: "w-1/6" },
                "id"
            ),
            m("td", { class: "w-1/6" }, m("input", { "class": "input input-bordered  ", "type": "text", id: "id" })),
            m("td", { class: "w-1/6" },
                "label"
            ),
            m("td", { class: "w-1/6" }, m("input", { "class": "input input-bordered ", "type": "text", id: "label" }))
        ]
    ),
    m("tr",
        [
            m("td",
                "required"
            ),
            m("td", m("select", { "class": "select select-bordered", "id": "required" },
                [
                    m("option",
                        "true"
                    ),
                    m("option",
                        "false"
                    )
                ]
            )),
            m("td",
                "col"
            ),
            m("td", m("input", { "class": "input input-bordered ", "type": "number", id: "col" })),
            m("td",
                "colStart"
            ),
            m("td", m("input", { "class": "input input-bordered ", "type": "number", id: "colStart" }))
        ]
    ),
    m("tr",
        [
            m("td", { class: "w-1/6" },
                "value"
            ),
            m("td", { "colspan": "2", class: "w-2/6" }, m("input", { "class": "input input-bordered w-full ", "type": "text", id: "value" })),
            m("td", { class: "w-1/6" },
                "dataMsg"
            ),
            m("td", { "colspan": "2", class: "w-2/6" }, m("input", { "class": "input input-bordered w-full", "type": "text", id: "dataMsg" }))
        ]
    )
]

var cbrRow = (type) => [m("tr",
    m("td", "cbr_label"),
    m("td", m("input", { "class": "input input-bordered input-sm w-full max-w-xs" + type, "type": "text", id: "label" })),
    m("td", "lblHelper"), m("td", m("input", { "class": "input input-bordered input-sm w-full max-w-xs", "type": "text", lblHelper: "lblHelper" })),
    m("td", "checked"), m("td", m("td", m("select", { "class": "select select-bordered", "id": "checked" },
        [
            m("option",
                "false"
            ),
            m("option",
                "true"
            )
        ]
    ))))]

var opts = m("tr",
    [
        m("td", { class: "w-2/6", colspan: "2" },
            "Options - pisahkan dengan koma"
        ),
        m("td", { "colspan": "4", class: "w-4/6" }, m("input", { "class": "input input-bordered w-full", "type": "text", id: "opts" })),

    ]
)




var inputClassDefault = "input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  "
 

var titlePart = []
var bodyPart = []
var sikil = []


titlePart.push([{ c: "Form Builder", d: { colspan: "6" }, r: { class: "bg-base-300" } }])


var line

line = [{ c: "Judul Form:", d: { class: " w-2/6", colspan: "2" } }, {
    d: { class: "w-4/6", colspan: "4" },
    c: m("input", {
        "class": inputClassDefault, "id": "title", "data-name": "Judul Form", "type": "text", "required": "required",
    })
}]

bodyPart.push(line)

line = [{ c: "Keterangan Form:", d: { class: " w-2/6", colspan: "2" } }, {
    d: { class: "w-4/6", colspan: "4" },
    c: m("input", {
        "class": inputClassDefault, "id": "subtitle", "data-name": "Keterangan Form", "type": "text", "required": "required",
    })
}]

bodyPart.push(line)

line = [{
    c: [m('button', {
        class: 'btn', onclick: () => {
            console.log('newRow')

            var options = ['text', 'email', 'number', 'phone', 'file', 'select', 'radio', 'checkbox']
            var askComp = [
                m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "inpType" },
                    "Jenis Input"
                ),
                m("div", { "class": "mt-2" },
                    m("select", { "class": "select select-sm select-bordered", "id": "inpType", "name": "country", "autocomplete": "country-name" },

                        options.map(o => {
                            return m("option", o)
                        })

                    )
                )
            ]

            g.modal = r.makeModal(askComp, (e) => {

                var f = e || window.event

                var type = r.getById('inpType').value
                console.log(type);
                var template
                ['text', 'email', 'number', 'phone', 'file'].includes(type) ? template = 1 : ["radio", "checkbox"].includes(type) ? template = 2 : template = 3


                console.log(template)
                var tableRef = r.getById('theForm')
                if (tableRef) {
                    var lastID = r.ObjectID()
                    var tbody = document.createElement("tbody");
                    tbody.setAttribute("id", lastID)
                    g.lastID.push(lastID)
                    tableRef.append(tbody);
                    if (template == 1) { m.render(r.getById(lastID), m({ view: () => rowTemplate(type) })) }
                    else if (template == 3) {
                        var temp = rowTemplate(type)
                        temp.push(opts)

                        m.render(r.getById(lastID), m({ view: () => temp }))
                    } else {
                        console.log(template)
                        f.preventDefault()
                        if (modal.hasAttribute("open")) {
                            modal.close()
                        }

                        var viyeiki = [
                            m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "inpType" },
                                "Masukkan jumlah radio/checkbox"
                            ),
                            m("div", { "class": "mt-2" },
                                m("input", { "class": "input input-bordered  ", "type": "number", id: "jmlCbr" })),
                        ]

                        g.modal = r.makeModal(viyeiki, () => {

                            var kaping = r.getById('jmlCbr').value
                            var CBRcomp = []
                            for (var x = 0; x < kaping; x++) {
                                CBRcomp.push(cbrRow(type))
                            }

                            var comp = rowTemplate(type)
                            comp.push(CBRcomp)

                            m.render(r.getById(lastID), m({ view: () => comp }))


                        }, null)


                        modal.showModal()
                        m.redraw()
                    }

                }

            }, null)

            modal.showModal()


        }
    }, "New Row"), m('button', {class : "btn btn-accent", onclick:()=>{
        var oTable = r.getById('theForm')

        var rawdata1 = [...oTable.rows].map(t => [...t.children].map(u => u.firstChild.value))
        var rawdata2 = [...oTable.rows].map(t => [...t.children].map(u => u.innerText))

        console.log("rawdata1, ",rawdata1)
        console.log("rawdata2, ",rawdata2)


    }}, "Kirim")]
}]

sikil.push(line)

var idTable = "theForm"
var tab = { title: titlePart, body: bodyPart, sikil }
var dumb = true


var comp = r.header2(r.gTab(idTable, tab, dumb))

var g = {

    oncreate: () => {
        modal = r.getById('modalicious')
    },


    lastID: [],
    modal: r.makeModal(),
    view: () => { return m('div', comp, g.modal) }

}

export default g


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
       colStart : 
       value :         }]
   } 
   */

