import ref from './ref.js'
import nav from './nav.js'
import footer from './footer.js'

import noway from './noway.js'
import login from './login.js'

import dash from './dash.js'
import pemda from './pemda.js'
import kegiatan from './kegiatan.js'
import ta from './ta.js'
import task from './task.js'

import testGate from './testGate.js'
import md_employees from "./md_employees.js"


// import test from './test.js'

console.log('loaded index')



var showNews = () => {
  return m(Layout, m(news))
}

var Home = {

   
  oninit: () => {
    
    ref.checkAdm()
    console.log(ref.fullname)

  },

  onupdate: () => {
    ref.checkAdm()

    //   !item?  ref.loginBtnDisabled = false
    //  : ref.loginBtnDisabled = true
  },

  content: ()=>{

   var hi = ref.fullname ? ref.fullname.charAt(0).toUpperCase() + ref.fullname.slice(1) : "Silakan login"
    return   [

           m('p', { class: 'text-3xl font-bold' }, 'Selamat Datang'), m('br'), m('p', { class: 'text-2xl  ' },  hi)
    ]
 
  },


  view: () => {

    return ref.header(Home.content())


  }
}

var Layout = {
  oninit: () => {
    ref.checkAdm()

    m.mount(ref.getById('nav'), nav)
    m.mount(ref.getById('footer'), footer)
  },

  onupdate: () => {
    ref.checkAdm()
  },

  view: vnode => {
    return m('div', vnode.children)
  }
}

var tag = 'SISTA'

m.route(ref.getById('content'), '/', {
  '/': {
    render: () => {
      return m(Layout, m(dash))
    },
    onmatch: () => {
      document.title = 'DashBoard - ' + tag
    }
  },

  '/noway': {
    render: () => {
      return m(Layout, m(noway))
    },
    onmatch: () => {
      document.title = 'Noway - ' + tag
    }
  },
  '/login': {
    render: () => {
      return m(Layout, m(login))
    },
    onmatch: () => {
      document.title = 'Login - ' + tag
    }
  },

  '/pemda': {
    render: () => {
      return m(Layout, m(pemda))
    },
    onmatch: () => {
      document.title = 'Daftar Pemerintah Daerah - ' + tag
    }
  },

  '/kegiatan': {
    render: () => {
      return m(Layout, m(kegiatan))
    },
    onmatch: () => {
      document.title = 'Daftar Kegiatan - ' + tag
    }
  },

  '/ta': {
    render: () => {
      return m(Layout, m(ta))
    },
    onmatch: () => {
      document.title = 'Daftar Tenaga Ahli - ' + tag
    }
  },

  '/task': {
    render: () => {
      return m(Layout, m(task))
    },
    onmatch: () => {
      document.title = 'Penugasan Tenaga Ahli - ' + tag
    }
  },

  // '/test': {
  //   render: () => {
  //     return m(Layout, m(test))
  //   },
  //   onmatch: () => {
  //     document.title = 'Testing - ' + tag
  //   }
  // },

  '/md_employees': {
    render: () => {
      return m(Layout, m(md_employees))
    },
    onmatch: () => {
      document.title = 'Master Data: Employees - ' + tag
    }
  },
 

  '/userlist': {
    render: () => {
      return m(Layout, m(userlist))
    },
    onmatch: () => {
      document.title = 'User Management - ' + tag
    }
  },
  '/ulist_det/:opd': {
    render: () => {
      return m(Layout, m(ulist_det))
    },
    onmatch: () => {
      document.title = 'User Management - ' + tag
    }
  },
  '/mopd': {
    render: () => {
      return m(Layout, m(mopd))
    },
    onmatch: () => {
      document.title = 'Manajemen Organisasi Perangkat Daerah - ' + tag
    }
  },

  '/mnews': {
    render: () => {
      return m(Layout, m(mnews))
    },
    onmatch: () => {
      document.title = 'Manajemen Berita - ' + tag
    }
  },

  '/reports': {
    render: () => {
      return m(Layout, m(reports))
    },
    onmatch: () => {
      document.title = 'Pelaporan - ' + tag
    }
  },
  '/playground': {
    render: () => {
      return m(Layout, m(playground))
    },
    onmatch: () => {
      document.title = 'Playground - ' + tag
    }
  },
  '/admin': {
    render: () => {
      window.location.href = '/admin'
    },
    onmatch: () => {
      document.title = 'Playground - ' + tag
    }
  }
})
