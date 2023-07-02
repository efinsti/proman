import r from './ref.js'

 



const daptar = {



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
                            "class": inputClassDefault, "id": "fullname", "data-name": "Nama Lengkap", "type": "text", "required": "required", onblur: (e) => {

                              r.lockInput(e, "Nama Lengkap harus diisi")
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
                            "class": inputClassDefault, "id": "username", "data-name": "Nama User", "type": "text", "required": "required", onblur: (e) => {

                              r.lockInput(e, "Nama User harus diisi")
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
                              "class": inputClassDefault, "id": "email", "data-name": "Email", "type": "email", "autocomplete": "email", "required": "required", onblur: (e) => {

                                r.lockInput(e, "Alamat email harus diisi")
                              }
                            })
                          )
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

                                r.lockInput(e, "Password harus diisi")
                              }
                            })
                          )
                        ]
                      ),
                      m("div",
                        [
                          m("label", { "class": "label" },
                            [
                              m("span", { "class": "label-text" },
                                "Konfirmasi Password"
                              ),

                            ]),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "pwd2", "data-name": "Konfirmasi Password", "type": "password", "required": "required", onblur: (e) => {

                                r.lockInput(e, "konfirmasi password harus diisi")
                              }
                            })
                          )
                        ]
                      ),
                      m("div",
                        [
                          m("label", { "class": "label" },
                            [
                              m("span", { "class": "label-text" },
                                "Kode Akses"
                              ),

                            ]),
                          m("div", { "class": "mt-2" },
                            m("input", {
                              "class": inputClassDefault, "id": "secret", "data-name": "Kode Akses", "type": "password", "required": "required", onblur: (e) => {

                                r.lockInput(e, "Kode akses harus diisi")
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

                    if (tempArr[0].pwd !== tempArr[0].pwd2) {
                      r.tell("warning", "Konfirmasi password harus sama dengan password")
                    } else {
                     var json = tempArr[0]
                    
                      m.request({
                        method: "POST",
                        url: "./api/daftar",
                        body: json
                    
                      }).then(data => {
                        console.log(data)
                        if(data.success==0){
                          r.tell("error",data.message)
                        } else {

                          r.tell("success","User berhasil didaftarkan, Anda akan masuk halaman login", 5000, ()=>{
                            m.route.set('/login')
                            m.redraw()
                            console.log("cb-test")
                          })

                        }

                      })
                    
                    }

                  }
                }},

                "Kirim"
              )
            )
          ]
        )
      )


    )

  }
}




export default daptar



