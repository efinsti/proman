import r from './ref.js'

 
var tasks = [
  {
    id: 'Task 1',
    name: 'Pemerintah Nusantara',
    start: '2023-03-28',
    end: '2023-12-31',
    progress: 100,
    
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
    name: 'Ir. Sukarno',
    start: '2023-03-28',
    end: '2023-05-30',
    progress: 100,
    dependencies: 'Task 2',
    custom_class: 'bar-milestone' // optional
  },

  {
    id: 'Task 4',
    name: 'Ir. Joko Widodo',
    start: '2023-06-01',
    end: '2023-12-31',
    progress: 20,
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

 
 
content : () => [
  
  m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'),  m('p', { class: 'text-2xl mb-4 text-center ' },  "Manajemen Tenaga Ahli"),
  m('div', {id:"gantt"}),
  m('div', {id:"viewMode"})
],

  oninit : ()=>{
    ganttOpts.view_mode = 'Month'
  },

oncreate: ()=>{

  var gantt = new Gantt("#gantt", tasks, g.opts);
  gantt.change_view_mode('Month')

},

  view:  ()  => {

    return  g.content()

  }
}




export default g



