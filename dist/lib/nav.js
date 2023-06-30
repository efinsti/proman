 
import r from "./ref.js"


var state = { "Hamung": "Hamung Keagungan Katresnan" }
var count = [1, 2, 3]
var burgerItem = []
count.map(o => { burgerItem.push(m("span", { "aria-hidden": "true" })) })

var lo = () => {

  r.tell("question", "Anda yakin akan keluar?", 20000, () => {
    localStorage.removeItem(ref.lsname);
    r.admMenu = null,
      r.logged = null
    r.username = null
    r.loginBtnDisabled = false
    r.tell("success", "User telah log out", 877, () => {
      m.redraw();
      m.route.set("/");

    })
  })
}



var nav = {

  oninit: () => {
    Object.assign(state, { burgerMenu: null })
  },

  onupdate: ()=>{

  },

  view: () => {
    return m("div", {"class":"navbar bg-base-200"},
    [
      m("div", {"class":"navbar-start"},
        [
          m("div", {"class":"dropdown"},
            [
              m("label", {"class":"btn btn-ghost lg:hidden","tabindex":"0"}, 
                m("svg", {"class":"h-5 w-5","xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor"}, 
                  m("path", {"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M4 6h16M4 12h8m-8 6h16"})
                )
              ),
              m("ul", {"class":"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52","tabindex":"0"},
                [
                  m("li", 
                    m("a", 
                      "Item 1"
                    )
                  ),
                  m("li",
                    [
                      m("a", 
                        "Parent"
                      ),
                      m("ul", {"class":"p-2"},
                        [
                          m("li", 
                            m("a", 
                              "Submenu 1"
                            )
                          ),
                          m("li", 
                            m("a", 
                              "Submenu 2"
                            )
                          )
                        ]
                      )
                    ]
                  ),
                  m("li", 
                    m("a", 
                      "Item 3"
                    )
                  )
                ]
              )
            ]
          ),
          m("a", {"class":"btn btn-ghost normal-case text-xl"}, 
            "daisyUI"
          )
        ]
      ),
      m("div", {"class":"navbar-center hidden lg:flex"}, 
        m("ul", {"class":"menu menu-horizontal px-1"},
          [
            m("li", 
              m("a", 
                "Item 1"
              )
            ),
            m("li", {"tabindex":"0"}, 
              m("details",
                [
                  m("summary", 
                    "Parent"
                  ),
                  m("ul", {"class":"p-2"},
                    [
                      m("li", 
                        m("a", 
                          "Submenu 1"
                        )
                      ),
                      m("li", 
                        m("a", 
                          "Submenu 2"
                        )
                      )
                    ]
                  )
                ]
              )
            ),
            m("li", 
              m("a", 
                "Item 3"
              )
            )
          ]
        )
      ),
      m("div", {"class":"navbar-end"}, 

      m("input", {"class":"toggle","type":"checkbox", onclick:()=>{
        var tog = [...r.getByCN('toggle')]
       
        if(tog[0].checked){
          document.documentElement.setAttribute("data-theme", "dark")      //changes "data-myval" to "20"
        } else {
          document.documentElement.removeAttribute("data-theme") 
        }
      }}),

        m("a", {"class":"btn ml-2"}, 
          "Button"
        )
      )
    ]
  )

  }
}

export default nav