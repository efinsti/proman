import r from "./ref.js"
 

var g = {

    oninit: ()=>{

        
    },

    content : [
        m('p',
        { class: 'text-3xl font-bold' }, 'Daftar Karyawan'),

    ],

    view: () => {
        return r.header(g.content
        )
    }
}

export default g