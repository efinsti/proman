 
import ref from "./ref.js"
import nav from "./nav.js"
import footer from "./footer.js"
 
import noway from "./noway.js"  
import login from "./login.js"
 
 console.log("loaded index")

var showNews = () => {

    return m(Layout, m(news));
}

 

 
var Home = { 

    oninit: () => {

        ref.checkAdm()

        //   !item?  ref.loginBtnDisabled = false
        //  : ref.loginBtnDisabled = true
    },

    onupdate: () => {

        ref.checkAdm()

        //   !item?  ref.loginBtnDisabled = false
        //  : ref.loginBtnDisabled = true
    },

    


    view: () => {

        return m('.section is-medium',
            m('.columns', { style: "text-align:center;" },
                m(".column", { class: "is-full" },

                    // ref.logged ? "Selamat datang " + ref.username.charAt(0).toUpperCase() + ref.username.slice(1) :
                    //     m.route.set("/login")
                    // ref.logged ? m("video", { "height": "", "muted": "muted", "autoplay": "autoplay", "loop": "loop", "style": { "width": "100%" } },
                    //     m("source", { "src": "/views/assets/images/elppd.mp4", "type": "video/mp4" })) : m.route.set("/login")
                    // ref.logged ? showdash() : showNews()
                    m("div", {"class":"alert alert-success"},
                    [
                      m("svg", {"class":"stroke-current shrink-0 h-6 w-6","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24"}, 
                        m("path", {"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})
                      ),
                      m("span", 
                        "Your purchase has been confirmed!"
                      )
                    ]
                  )


                )
            ))
    }
}


var Layout = {

    oninit: () => {
        ref.checkAdm()

        m.mount(ref.getById('nav'), nav);
        m.mount(ref.getById('footer'), footer);
    },

    onupdate: () => {
        ref.checkAdm()
    },

    view: (vnode) => {
        return m('div', vnode.children);
    }
};

var tag = "Venetian"

 

m.route(ref.getById('content'), '/', {

    '/': {
        render: () => {

            return m(Layout, m(Home));
        },
        onmatch: () => {

            document.title = "DashBoard - " + tag

        }
    },

    '/noway': {
        render: () => {

            return m(Layout, m(noway));
        },
        onmatch: () => {

            document.title = "Noway - " + tag

        }
    },
    '/login': {
        render: () => {

            return m(Layout, m(login));
        },
        onmatch: () => {

            document.title = "Login - " + tag

        }
    },
    '/entitas': {
        render: () => {

            return m(Layout, m(entitas));
        },
        onmatch: () => {

            document.title = "Data Pemda - " + tag

        }
    },

    '/wilayah': {
        render: () => {

            return m(Layout, m(wilayah));
        },
        onmatch: () => {

            document.title = "Data Desa - " + tag

        }
    },

    '/umag': {
        render: () => {

            return m(Layout, m(umag));
        },
        onmatch: () => {

            document.title = "Users' Management - " + tag

        }
    },

    '/pagu': {
        render: () => {

            return m(Layout, m(pagu));
        },
        onmatch: () => {

            document.title = "Sumber Dana - " + tag

        }
    },

    '/alokasi': {
        render: () => {

            return m(Layout, m(alokasi));
        },
        onmatch: () => {

            document.title = "Alokasi Sumber Dana - " + tag

        }
    },

    '/pengajuan': {
        render: () => {

            return m(Layout, m(pengajuan));
        },
        onmatch: () => {

            document.title = "Pengajuan Transfer Dana - " + tag

        }
    },

    '/verifikasi': {
        render: () => {

            return m(Layout, m(verifikasi));
        },
        onmatch: () => {

            document.title = "Verifikasi Pengajuan Transfer Dana - " + tag

        }
    },

    '/transfer': {
        render: () => {

            return m(Layout, m(transfer));
        },
        onmatch: () => {

            document.title = "Transfer Sumber Dana - " + tag

        }
    },

    '/konfirmasi': {
        render: () => {

            return m(Layout, m(konfirmasi));
        },
        onmatch: () => {

            document.title = "Konfirmasi Transfer Sumber Dana - " + tag

        }
    },

    '/rekonsiliasi': {
        render: () => {

            return m(Layout, m(rekonsiliasi));
        },
        onmatch: () => {

            document.title = "Rekonsiliasi Transfer - " + tag

        }
    },

    '/belanja': {
        render: () => {

            return m(Layout, m(belanja));
        },
        onmatch: () => {

            document.title = "Realisasi Belanja - " + tag

        }
    },

    '/ds_dropping': {
        render: () => {

            return m(Layout, m(ds_dropping));
        },
        onmatch: () => {

            document.title = "Pengajuan Pengucuran Dana - " + tag

        }
    },

    '/ds_konfirmasi': {
        render: () => {

            return m(Layout, m(ds_konfirmasi));
        },
        onmatch: () => {

            document.title = "Konfirmasi Penerimaan Dana - " + tag

        }
    },

    '/ds_belanja': {
        render: () => {

            return m(Layout, m(ds_belanja));
        },
        onmatch: () => {

            document.title = "Konfirmasi Penerimaan Dana - " + tag

        }
    },

    '/kc_verify': {
        render: () => {

            return m(Layout, m(kc_verify));
        },
        onmatch: () => {

            document.title = "Verifikasi Pengajuan Pengucuran Dana - " + tag

        }
    },

    '/userlist': {
        render: () => {

            return m(Layout, m(userlist));
        },
        onmatch: () => {

            document.title = "User Management - " + tag

        }
    },
    '/ulist_det/:opd': {
        render: () => {

            return m(Layout, m(ulist_det));
        },
        onmatch: () => {

            document.title = "User Management - " + tag

        }
    },
    '/mopd': {
        render: () => {

            return m(Layout, m(mopd));
        },
        onmatch: () => {

            document.title = "Manajemen Organisasi Perangkat Daerah - " + tag

        }
    },
 
    '/mnews': {
        render: () => {

            return m(Layout, m(mnews));
        },
        onmatch: () => {

            document.title = "Manajemen Berita - " + tag

        }
    },
 
    '/reports': {
        render: () => {

            return m(Layout, m(reports));
        },
        onmatch: () => {

            document.title = "Pelaporan - " + tag

        }
    },
    '/playground': {
        render: () => {

            return m(Layout, m(playground));
        },
        onmatch: () => {


            document.title = "Playground - " + tag

        }
    },
    '/admin': {
        render: () => {

            window.location.href = '/admin'
        },
        onmatch: () => {


            document.title = "Playground - " + tag

        }
    },



})

