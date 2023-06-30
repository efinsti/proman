import ref from './ref.js'
import Auth from "./auth.js"


class errHandle {
    constructor(code) {
        this.code = code;
        this.name = 'errHandle';
    }
}

var isAdmin

var loginFire = () => {

    if (Auth.canSubmit() ) {

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

                ref.tell("error", "password tidak sesuai",1100, ()=>{btn.disabled = !Auth.canSubmit()})
                
                

            } else if (e.code === 404) {

                ref.tell("error", "user tidak terdaftar",1100, ()=>{btn.disabled = !Auth.canSubmit()})
                
            } else if (e.code === 500) {

                ref.tell("error", "ada kesalahan di server, hubungi admin",1100, ()=>{btn.disabled = !Auth.canSubmit()})

                
            }

        })
    } else {

        ref.tell("warning", "field input belum lengkap",1100, ()=>{btn.disabled = !Auth.canSubmit()})
        


    }

}



const userLogin = {



    view: function () {
        return m("div", { "class": "section is-medium " },
            m("div", { "class": "columns is-mobile is-centered" },
                m("div", { "class": "column is-two-fifths" },
                    m(".box",
                        [   m("header", {style:"text-align:center;"},
                        [
              
                          m("h6",
                            [
                              m("br"),
                              m("img", {"src":"img/ven.png","width":"50%"}),
                              m("br")
                            ]
                          ),
                    
                        
                          m("hr", 
                          )
                        ]
                      ),
                            m(".form", {
                                "class": "login", onkeypress: function checkSubmit(e) {
                                    if (e && e.keyCode == 13) {
                                        loginFire()
                                    }
                                }
                            },


                                [
                                    m("div", { "class": "field" },
                                        m("p", { "class": "control has-icons-left has-icons-right" },
                                            [
                                                m("input[type=text]", {
                                                    "class": "input", "placeholder": "Nama User",

                                                    oninput: (e) => { Auth.setUser(e.target.value) },
                                                    value: Auth.user


                                                }),
                                                m("span", { "class": "icon is-small is-left" },
                                                    m("i", { "class": "fas fa-user" })
                                                ),
                                                m("span", { "class": "icon is-small is-right" },
                                                    m("i", { "class": "fas fa-check" })
                                                )
                                            ]
                                        )
                                    ),
                                    m("div", { "class": "field" },
                                        m("p", { "class": "control has-icons-left" },
                                            [
                                                m("input[type=password]", {
                                                    "class": "input", "placeholder": "Password",

                                                    oninput: function (e) { Auth.setPassword(e.target.value) },
                                                    value: Auth.password

                                                }),
                                                m("span", { "class": "icon is-small is-left" },
                                                    m("i", { "class": "fas fa-lock" })
                                                )
                                            ]
                                        )
                                    )
                                ]
                            ),
                            m("br"),
                            m("div", { "class": "field" },

                                m("button", {
                                    "class": "button is-primary", id:"loginBtn",
                                    disabled: !Auth.canSubmit(),
                                  //  "aria-disabled": !Auth.canSubmit(),
                                    onclick: ()=>{loginFire()}


                                },
                                    "Login")
                            )

                        ]
                    ))
            ))
    }
}




export default userLogin



 