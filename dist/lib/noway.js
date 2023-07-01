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

          ref.tell("success", "login berhasil", 896, () => {
            console.log("checkadm")
            ref.checkAdm(() => { console.log('check done') })
            m.redraw()
            m.route.set("/")
          })

        }

      } else { throw new errHandle(500) }




    }).catch(e => {

      console.log(e)
      console.log(JSON.stringify(e))

      if (e.code === 401 || e.code === 422) {

        ref.tell("error", "password tidak sesuai", 1100, () => { btn.disabled = !Auth.canSubmit() })



      } else if (e.code === 404) {

        ref.tell("error", "user tidak terdaftar", 1100, () => { btn.disabled = !Auth.canSubmit() })

      } else if (e.code === 500) {

        ref.tell("error", "ada kesalahan di server, hubungi admin", 1100, () => { btn.disabled = !Auth.canSubmit() })


      }

    })
  } else {

    r.tell("warning", "field input belum lengkap", 1100, () => { btn.disabled = !Auth.canSubmit() })



  }

}

function reply_click(e, msg) {
  var el = r.getById(e.target.id)

  if (el) {
    if (el.value.trim() == "") {
      el.classList.remove('input-accent')
      el.classList.add('input-error')
      r.tell("query", msg, 5000, () => { console.log("horeee") })
      el.focus()
    } else {
      el.classList.add('input-accent')
      el.classList.remove('input-error')
    }
  }

}

const userLogin = {



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
                      "Pendaftaran Admin"
                    )
                  ),

                ]
              ),
              m("div", { "class": "mt-10 sm:mx-auto sm:w-full sm:max-w-sm" },
                [
                  m("form", { "class": "space-y-2", "action": "#", "method": "POST" },
                    [
                      m("div", { "class": "form-control w-full max-w-md" },
                        [
                          m("label", { "class": "label" },
                            [
                              m("span", { "class": "label-text" },
                                "Nama Lengkap"
                              ),

                            ]
                          ),


                          m("input", {
                            "class": inputClassDefault, "id": "fname", "name": "fname", "type": "text", "required": "required", onblur: (e) => {

                              reply_click(e, "Nama Lengkap harus diisi")
                            }
                          })

                        ]
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
                            "class": inputClassDefault, "id": "uname", "name": "uname", "type": "text", "required": "required", onblur: (e) => {

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
                                "Alamat Email"
                              ),

                            ]),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "email", "name": "email", "type": "email", "autocomplete": "email", "required": "required", onblur: (e) => {

                                reply_click(e, "Alamat email harus diisi")
                              }
                            })
                          )
                        ]
                      ),
                      m("div",
                        [
                          m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "pwd1" },
                            "Password"
                          ),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "pwd1", "name": "pwd1", "type": "password", "required": "required", onblur: (e) => {

                                reply_click(e, "Password harus diisi")
                              }
                            })
                          )
                        ]
                      ),
                      m("div",
                        [
                          m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "pwd2" },
                            "Konfirmasi Password"
                          ),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "pwd2", "name": "pwd2", "type": "password", "required": "required", onblur: (e) => {

                                reply_click(e, "konfirmasi password harus diisi")
                              }
                            })
                          )
                        ]
                      ),
                      m("div",
                        [
                          m("label", { "class": "block text-sm font-medium leading-6 text-gray-900", "for": "secret" },
                            "Kode"
                          ),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "secret", "name": "secret", "type": "password", "required": "required", onblur: (e) => {

                                reply_click(e, "Secret harus diisi")
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
              m("button", { "class": "btn btn-primary mt-2" },
                "Buy Now"
              )
            )
          ]
        )
      )


    )

  }
}




export default userLogin



