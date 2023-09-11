import ref from './ref.js'
import nav from './nav.js'
import footer from './footer.js'

import noway from './noway.js'
import login from './login.js'

import dash from './dash.js'
import pemda from './pemda.js'
import kegiatan from './kegiatan.js'

import testGate from './testGate.js'
import md_employees from "./md_employees.js"

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

  '/testgate': {
    render: () => {
      return m(Layout, m(testGate))
    },
    onmatch: () => {
      document.title = 'Testing - ' + tag
    }
  },

  '/md_employees': {
    render: () => {
      return m(Layout, m(md_employees))
    },
    onmatch: () => {
      document.title = 'Master Data: Employees - ' + tag
    }
  },

  '/umag': {
    render: () => {
      return m(Layout, m(umag))
    },
    onmatch: () => {
      document.title = "Users' Management - " + tag
    }
  },

  '/pagu': {
    render: () => {
      return m(Layout, m(pagu))
    },
    onmatch: () => {
      document.title = 'Sumber Dana - ' + tag
    }
  },

  '/alokasi': {
    render: () => {
      return m(Layout, m(alokasi))
    },
    onmatch: () => {
      document.title = 'Alokasi Sumber Dana - ' + tag
    }
  },

  '/pengajuan': {
    render: () => {
      return m(Layout, m(pengajuan))
    },
    onmatch: () => {
      document.title = 'Pengajuan Transfer Dana - ' + tag
    }
  },

  '/verifikasi': {
    render: () => {
      return m(Layout, m(verifikasi))
    },
    onmatch: () => {
      document.title = 'Verifikasi Pengajuan Transfer Dana - ' + tag
    }
  },

  '/transfer': {
    render: () => {
      return m(Layout, m(transfer))
    },
    onmatch: () => {
      document.title = 'Transfer Sumber Dana - ' + tag
    }
  },

  '/konfirmasi': {
    render: () => {
      return m(Layout, m(konfirmasi))
    },
    onmatch: () => {
      document.title = 'Konfirmasi Transfer Sumber Dana - ' + tag
    }
  },

  '/rekonsiliasi': {
    render: () => {
      return m(Layout, m(rekonsiliasi))
    },
    onmatch: () => {
      document.title = 'Rekonsiliasi Transfer - ' + tag
    }
  },

  '/belanja': {
    render: () => {
      return m(Layout, m(belanja))
    },
    onmatch: () => {
      document.title = 'Realisasi Belanja - ' + tag
    }
  },

  '/ds_dropping': {
    render: () => {
      return m(Layout, m(ds_dropping))
    },
    onmatch: () => {
      document.title = 'Pengajuan Pengucuran Dana - ' + tag
    }
  },

  '/ds_konfirmasi': {
    render: () => {
      return m(Layout, m(ds_konfirmasi))
    },
    onmatch: () => {
      document.title = 'Konfirmasi Penerimaan Dana - ' + tag
    }
  },

  '/ds_belanja': {
    render: () => {
      return m(Layout, m(ds_belanja))
    },
    onmatch: () => {
      document.title = 'Konfirmasi Penerimaan Dana - ' + tag
    }
  },

  '/kc_verify': {
    render: () => {
      return m(Layout, m(kc_verify))
    },
    onmatch: () => {
      document.title = 'Verifikasi Pengajuan Pengucuran Dana - ' + tag
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
