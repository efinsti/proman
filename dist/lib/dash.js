import r from './ref.js'

var modal

var tasks = [
  {
    id: 'Task 1',
    name: 'Pemerintah Nusantara',
    start: '2023-03-28',
    end: '2023-12-31',
    progress: 80,
    
    custom_class: 'bar-milestone' // optional
  },

  {
    id: 'Task 2',
    name: 'Kegiatan Bangun Negeri',
    start: '2023-03-28',
    end: '2023-12-31',
    progress: 80,
    dependencies: 'Task 1',
    custom_class: 'bar-milestone' // optional
  },

  {
    id: 'Task 3',
    name: 'Habibie',
    start: '2023-03-28',
    end: '2023-07-30',
    progress: 100,
    dependencies: 'Task 2',
    custom_class: 'bar-milestone' // optional
  },

  {
    id: 'Task 4',
    name: 'Abdurrahman Wahid',
    start: '2023-06-01',
    end: '2023-12-31',
    progress: 73,
    dependencies: 'Task 2',
    custom_class: 'bar-milestone' // optional
  },



];


var ganttOpts = {
  header_height: 50,
  column_width: 30,
  step: 24,
  view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
  bar_height: 20,
  bar_corner_radius: 3,
  arrow_curve: 5,
  padding: 18,
  view_mode: 'Month',
  date_format: 'YYYY-MM-DD',
  language: 'en', // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
  custom_popup_html: null

}


var g = {

  modal: null,

  pemdaList: () => {

    var title = []
    var line = [{ c: 'Daftar Pemerintah Daerah', d: { "colspan": "3", "class": "text-center font-bold" } }]
    title.push(line)

    var body = [[{ c: 'Data masih kosong', d: { "colspan": "3", "class": "text-center font-bold" } }]]


    var foot = []

    line = [{
      d: { colspan: 3 }, c: m("p", { "class": "buttons" },
        [
          m("button", { "class": "btn-primary btn-sm", onclick: () => { } },
            m("span", { "class": "icon is-small" },
              m("i", { "class": "fa-solid fa-file-circle-plus" })
            )
          ),
          m("button", { "class": "btn-warning btn-sm", onclick: () => { } },
            m("span", { "class": "icon is-small" },
              m("i", { "class": "fa-solid fa-folder-open" })
            )
          ),
          m("button", { "class": "btn-error btn-sm" },
            m("span", { "class": "icon is-small" },
              m("i", { "class": "fas fa-trash" })
            )
          )
        ]
      )
    }
    ]

    foot.push(line)



    var comp = r.gTab("histori", { title, body, SHAK: foot })
    g.modal = r.makeModal(comp, () => console.log('wasu'), true)
    modal.showModal()
    m.redraw()

    console.log('done')


  },

  modal: r.makeModal(),
 
  oninit: () => {

    // if (r.logged) {
    //   ganttOpts.view_mode = 'Month'
    // } else m.route.set("/login")



  },

  oncreate: () => {

    if (r.logged) {

      var gantt = new Gantt("#gantt", tasks, g.opts);
      gantt.change_view_mode('Month')
      modal = r.getById('modalicious')
    }



  },

  view: () => {

    var hi 
    r.fullname ? hi = r.fullname.charAt(0).toUpperCase() + r.fullname.slice(1) : null

    return     m('div', m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'), 
    m('p', { class: 'text-2xl mb-4 text-center ' }, "Manajemen Tenaga Ahli"),
    hi == null ? m('div', { class: "text-xl text-center mb-5" }, "Silakan login") : m('div',
      m('svg', { id: "gantt" }),
      m('div', { id: "viewMode" }),
      g.modal,))

  }
}




export default g



