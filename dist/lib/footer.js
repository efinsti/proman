 
const footer =  {

    view : () =>  {

        return m("footer", {"class":"footer p-10 bg-base-200 text-base-content"},
        [
          m("div",
            [
              m("img", {src:"/img/ven.png", "width":"88","height":"78"}),
              m("p",
                [
                  "Venice System",
                  m("br"),
                  "Providing reliable tech since long time ago"
                ]
              )
            ]
          ),
          m("div",
            [
              m("span", {"class":"footer-title"}, 
                "Jasa Layanan"
              ),
              m("a", {"class":"link link-hover"}, 
                "Merk"
              ),
              m("a", {"class":"link link-hover"}, 
                "Disain"
              ),
              m("a", {"class":"link link-hover"}, 
                "Pemasaran"
              ),
              m("a", {"class":"link link-hover"}, 
                "Periklanan"
              )
            ]
          ),
          m("div",
            [
              m("span", {"class":"footer-title"}, 
                "Company"
              ),
              m("a", {"class":"link link-hover"}, 
                "Tentang"
              ),
              m("a", {"class":"link link-hover"}, 
                "Contact"
              ),
              m("a", {"class":"link link-hover"}, 
                "Jobs"
              ),
              m("a", {"class":"link link-hover"}, 
                "Press kit"
              )
            ]
          ),
          m("div",
            [
              m("span", {"class":"footer-title"}, 
                "Legal"
              ),
              m("a", {"class":"link link-hover"}, 
                "Terms of use"
              ),
              m("a", {"class":"link link-hover"}, 
                "Privacy policy"
              ),
              m("a", {"class":"link link-hover"}, 
                "Cookie policy"
              )
            ]
          )
        ]
      )
    }
  
}

export default footer
 
