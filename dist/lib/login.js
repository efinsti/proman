import r from './ref.js'


var isAdmin

function reply_click(e, msg) {
  var el = r.getById(e.target.id)

  if (el) {
    if (el.value.trim() == '') {
      el.classList.remove('input-accent')
      el.classList.add('input-error')
      r.tell('error', msg, 5000, () => { })
      el.focus()
    } else {
      el.classList.add('input-accent')
      el.classList.remove('input-error')
    }
  }
}

var loginFire = () => {
  var tempArr = r.getValues()
  console.log(tempArr)
  var unfilled = []

  for (const [key, value] of Object.entries(tempArr[0])) {
    if (value == '') {
      var entry = tempArr[1][key]
      unfilled.push(entry)
    }
  }

  unfilled.length > 0
    ? r.tell('warning', unfilled.join(', ') + ' belum diisi')
    : null

  if (unfilled.length == 0) {
    console.log('process')
    var json = tempArr[0]

    console.log(json)
    r.fpGen
      .then(fp => fp.get())
      .then(result => {
        // This is the visitor identifier:
        const middlefinger2u = result.visitorId
        Object.assign(json, {middlefinger2u })

        m.request({
          method: 'POST',
          url: './api/login',
          body: json
        }).then(data => {
          console.log(data)
          if (data.success == 0) {
            r.tell('error', data.message)
          } else {
            console.log(data.message)
    
            var arrRoles = data.message.role.split(' ')
            var newRoles = []
            arrRoles.map(r => {
              r == 'superadmin' || r == 'admin'
                ? (isAdmin = true)
                : (isAdmin = false)
              newRoles.push(r)
            })
            var item = {}
            var now = new Date()
            Object.assign(item, {
              fullname: data.message.fullname,
              user: data.message.username,
              token: data.message.token,
              roles: newRoles,
              expiry: now.getTime() + 3600000
            })
    
            r.setls(JSON.stringify(item))
    
            r.tell('success', 'login berhasil', 896, () => {
              console.log('checkadm')
              r.checkAdm(() => {
                console.log('check done')
              })
              m.redraw()
              m.route.set('/')
            })
          }
        })


      })
      .catch(error => console.error(error))
  

   
  }
}

const login = {
  oncreate: () => {
    r.loginBtnDisabled = true
    document.onkeydown = function (e) {
      if (e.key == 'Enter') {
        loginFire()
      }
    }
    m.redraw()
  },

  view: function () {
    var inputClassDefault = 'input input-bordered input-accent w-full max-w-md'

    return m(
      'div',
      { class: 'flex h-auto w-auto flex-col  items-center px-6 py-12 lg:px-8' },

      m(
        'div',
        { class: 'card w-1/3  bg-base-300 shadow-xl' },
        m('div', { class: 'card-body' }, [
          // m("h2", { "class": "card-title" },
          //   "Pendaftaran Admin"
          // ),

          [
            m('div', { class: 'md:mx-auto md:w-full md:max-w-md' }, [
              m('img', {
                class: 'mx-auto h-50 w-auto',
                src: '/img/ven.png',
                alt: 'Your Company'
              }),
              m(
                'div',
                { class: 'max-w-md' },
                m('h1', { class: 'text-2xl text-center font-bold' }, 'Login')
              )
            ]),
            m('div', { class: 'mt-10 sm:mx-auto sm:w-full sm:max-w-sm' }, [
              m('form', { class: 'space-y-2', action: '#', method: 'POST' }, [
                m('div', { class: 'form-control w-full max-w-md' }),
                m('div', [
                  m('label', { class: 'label' }, [
                    m('span', { class: 'label-text' }, 'User Name')
                  ]),

                  m('input', {
                    class: inputClassDefault,
                    id: 'username',
                    'data-name': 'Nama User',
                    type: 'text',
                    required: 'required',
                    onblur: e => {
                      reply_click(e, 'Nama User harus diisi')
                    }
                  })
                ]),

                m('div', [
                  m('label', { class: 'label' }, [
                    m('span', { class: 'label-text' }, 'Password')
                  ]),
                  m(
                    'div',
                    { class: 'mt-2' },
                    m('input', {
                      class: inputClassDefault,
                      id: 'pwd',
                      'data-name': 'Password',
                      type: 'password',
                      required: 'required',
                      onblur: e => {
                        reply_click(e, 'Password harus diisi')
                      }
                    })
                  )
                ])
              ])
            ])
          ],

          m(
            'div',
            { class: 'card-actions justify-center' },
            m(
              'button',
              {
                class: 'btn btn-primary mt-2',
                onclick: () => loginFire()
              },

              'Login'
            )
          )
        ])
      )
    )
  }
}

export default login
