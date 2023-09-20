import r from './ref.js'



var tasksExample = [
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
    name: 'BJ Habibie',
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
  language: "id", // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
  custom_popup_html: null

}


var g = {


  taskList: null,
  ganttData: null,
  getTaskData: (cb) => {

    var getTaskprm = {
      method: "getAll",
      tableName: "taskModel"
    }

    r.comm(getTaskprm, () => {
      if (r.dataReturn.success == 1) {

        g.taskList = [...r.dataReturn.message]

        var Obj = { custom_class: 'bar-milestone' }
        var allData = []

        g.taskList.forEach(t => {
          Object.assign(Obj, {
            id: t.idTask,
            name: t.name,
            start: t.start,
            end: t.end,
            progress: t.progress,
            dependencies: t.dependencies ? t.dependencies : null
          })

          allData.push(Obj)
          Obj = { custom_class: 'bar-milestone' }
        })


        // id: 'Task 3',
        // name: 'BJ Habibie',
        // start: '2023-03-28',
        // end: '2023-07-30',
        // progress: 100,
        // dependencies: 'Task 2',
        // custom_class: 'bar-milestone' // optional

        //   {
        //     "_id": "650a68696ccd2c972c5f4170",
        //     "level": 1,
        //     "idTask": "11",
        //     "name": "Kalasan",
        //     "start": "2023-03-01T00:00:00.000Z",
        //     "end": "2023-04-08T00:00:00.000Z",
        //     "progress": 20,
        //     "created_by": "64f9cd91f33faa63db77269c",
        //     "__v": 0
        // }


        g.ganttData = allData

        cb ? cb() : null
      } else {
        g.ganttData = tasksExample

      }

    })

  },

  showGantt: () => {

    var ganttElem
    var borokokok = (cb) => {
      ganttElem = r.getById('gantt')
      if (ganttElem) cb()
    }
    borokokok(() => {
      var gantt = new Gantt("#gantt", g.ganttData, ganttOpts);
      gantt.change_view_mode('Month')
    })



  },


  oninit: () => {


    g.getTaskData(() => {

      console.log(g.ganttData, g.taskList)
      g.showGantt()

    })

  },

  oncreate: () => {

    // if (r.logged) {



    //     var gantt = new Gantt("#gantt", tasksExample, ganttOpts);
    //   //  gantt.change_view_mode('Month')




    // }



  },

  view: () => {

    var hi
    r.fullname ? hi = r.fullname.charAt(0).toUpperCase() + r.fullname.slice(1) : null

    return m('div', m('div', { class: 'text-3xl font-bold text-center mt-6' }, 'Solusi Teknologi Informasi'),
      m('p', { class: 'text-2xl mb-4 text-center ' }, "Manajemen Tenaga Ahli"),
      hi == null ? m('div', { class: "text-xl text-center mb-5" }, "Silakan login") : m('div',
        m('svg', { id: "gantt" }),
        m('div', { id: "viewMode" }),
        g.modal,))

  }
}




export default g



