import r from './ref.js'


class errHandle {
  constructor(code) {
    this.code = code;
    this.name = 'errHandle';
  }
}

var isAdmin


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

var loginFire = () => {


  var tempArr = r.getValues()
  console.log(tempArr)
  var unfilled = []

  for (const [key, value] of Object.entries(tempArr[0])) {

    if (value == "") {
      var entry = tempArr[1][key]
      unfilled.push(entry)
    }
  }


  var fn = table => {
    table.increments('id')
    table.string('name')
    table.integer('age')}
  
  console.log('process')
  var json = { fullname: "Adminata Nagari Jaya" }
  console.log(json)

  var du = new DeviceUUID();
console.log(du, du.get(), du.parse());

  var param = { fn, method: "getAll", tableName: "users"}
  var cb = () => {
    console.log('return')
    console.log(r.dataReturn)
  }
  console.log(param)
  r.comm(param, cb)



}

const login = {

  oncreate: () => {
    document.onkeydown = function (e) {

      if (e.key == "Enter") {
        loginFire()
      }
    }
  },

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
                            "class": inputClassDefault, "id": "signing_key", "data-name": "Nama User", "type": "text", "required": "required", onblur: (e) => {

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
                              "class": inputClassDefault, "id": "token", "data-name": "Password", "type": "password", "required": "required", onblur: (e) => {

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
                "class": "btn btn-primary mt-2",
                onclick: () => loginFire()
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



