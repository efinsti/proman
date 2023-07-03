import r from './ref.js'


class errHandle {
  constructor(code) {
    this.code = code;
    this.name = 'errHandle';
  }
}

var isAdmin


var loginFire = () => {

  if (Auth.canSubmit()) {

    var btn = ref.getById('loginBtn')
    btn.disabled = true

    // Auth.login 
    m.request({
      method: "POST",
      url: "/api/login",
      body: { username: Auth.user, password: Auth.password }
    }).then(data => {

      //    console.log(data)

      if (data) {
        if (data.success == 0) {

          throw new errHandle(data.status);
        } else {

          var arrRoles = data.roles.split(",");
          var newRoles = []
          arrRoles.map(r => {
            r == "superadmin" || r == "admin" ? isAdmin = true : isAdmin = false
            newRoles.push(r)

          })
          var item = {}
          var now = new Date()
          Object.assign(item, { fullname: data.fullname, user: data.username, token: data.token, roles: newRoles, expiry: now.getTime() + 36000000 })

          //  Object.assign(data, { expiry: now.getTime() + 1800000}) // 30 min
          // Object.assign(data, { expiry: now.getTime() + 180000}) // 3 min

          ref.setls(JSON.stringify(item))
          if (!isAdmin) {
            var prm = {
              arep: "golek",

              nang: "entitas",
              opo: ["nama"],
              sing: { "kode": ["s", arrRoles[0]] },
            }

            var cb = () => {

              console.log(ref.dataReturn)

              _.assign(item, {

                opd: ref.dataReturn.message[0].nama
              })
              localStorage.removeItem(ref.lsname);
              ref.setls(JSON.stringify(item))


            }
            ref.comm(prm, cb)
          }

   

        }

      } else { throw new errHandle(500) }




    }).catch(e => {

      console.log(e)
      console.log(JSON.stringify(e))

      if (e.code === 401 || e.code === 422) {

        ref.tell("error", "password tidak sesuai", 1100, () => { })



      } else if (e.code === 404) {

        ref.tell("error", "user tidak terdaftar", 1100, () => { })

      } else if (e.code === 500) {

        ref.tell("error", "ada kesalahan di server, hubungi admin", 1100, () => { })


      }

    })
  } else {

    r.tell("warning", "field input belum lengkap", 1100, () => { })



  }

}

function reply_click(e, msg) {
  var el = r.getById(e.target.id)

  if (el) {
    if (el.value.trim() == "") {
      el.classList.remove('input-accent')
      el.classList.add('input-error')
      r.tell("error", msg, 5000, () => { })
      el.focus()
    } else {
      el.classList.add('input-accent')
      el.classList.remove('input-error')
    }
  }

}

const login = {



  view: function () {

    var inputClassDefault = "input input-bordered input-accent w-full max-w-md"

    return m("div", { "class": "flex h-auto w-auto flex-col  items-center px-6 py-12 lg:px-8" },

      m("div", { "class": "card w-1/3  bg-base-300 shadow-xl" },
        m("div", { "class": "card-body" },
          [
            // m("h2", { "class": "card-title" },
            //   "Pendaftaran Admin"
            // ),


            [
              m("div", { "class": "md:mx-auto md:w-full md:max-w-md" },
                [
                  m("img", { "class": "mx-auto h-50 w-auto", "src": "/img/ven.png", "alt": "Your Company" }),
                  m("div", { "class": "max-w-md" },
                    m("h1", { "class": "text-2xl text-center font-bold" },
                      "Login"
                    )
                  ),

                ]
              ),
              m("div", { "class": "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" },
                [
                  m("form", { "class": "space-y-2", "action": "#", "method": "POST" },
                    [
                      m("div", { "class": "form-control w-full max-w-md" },

                      ),
                      m("div",
                        [
                          m("label", { "class": "label" },
                            [
                              m("span", { "class": "label-text" },
                                "User Name"
                              ),

                            ]
                          ),


                          m("input", {
                            "class": inputClassDefault, "id": "username", "data-name": "Nama User", "type": "text", "required": "required", onblur: (e) => {

                              reply_click(e, "Nama User harus diisi")
                            }
                          })

                        ]
                      ),

                      m("div",
                        [
                          m("label", { "class": "label" },
                            [
                              m("span", { "class": "label-text" },
                                "Password"
                              ),

                            ]),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "pwd", "data-name": "Password", "type": "password", "required": "required", onblur: (e) => {

                                reply_click(e, "Password harus diisi")
                              }
                            })
                          )
                        ]
                      ),


                    ]
                  ),

                ]
              )
            ],

            m("div", { "class": "card-actions justify-center" },
              m("button", {
                "class": "btn btn-primary mt-2", onclick: () => {

                  var tempArr = r.getValues()
                  console.log(tempArr)
                  var unfilled = []

                  for (const [key, value] of Object.entries(tempArr[0])) {

                    if (value == "") {
                      var entry = tempArr[1][key]
                      unfilled.push(entry)
                    }
                  }

                  unfilled.length > 0 ? r.tell("warning", unfilled.join(', ') + " belum diisi") : null

                  if (unfilled.length == 0) {


                    var json = tempArr[0]

                    m.request({
                      method: "POST",
                      url: "./api/login",
                      body: json

                    }).then(data => {
                      console.log(data)
                      if (data.success == 0) {
                        r.tell("error", data.message)
                      } else {

                        

                          console.log(data.message)

                          var arrRoles = data.message.role.split(" ");
                          var newRoles = []
                          arrRoles.map(r => {
                            r == "superadmin" || r == "admin" ? isAdmin = true : isAdmin = false
                            newRoles.push(r)
                
                          })
                          var item = {}
                          var now = new Date()
                          Object.assign(item, { fullname: data.fullname, user: data.username, token: data.token, roles: newRoles, expiry: now.getTime() + 3600000 })
                           
                          r.setls(JSON.stringify(item))

                          
                          r.tell("success", "login berhasil", 896, () => {
                            console.log("checkadm")
                            r.checkAdm(() => { console.log('check done') })
                            m.redraw()
                            m.route.set("/")
                          })
                        

                      }

                    })

                  }

                }
              },

                "Kirim"
              )
            )
          ]
        )
      )


    )

  }
}




export default login



