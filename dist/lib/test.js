import r from './ref.js'


var root = document.body


export default m.mount(root, {
    view: function() {
        return m("div", {"class":"overflow-x-auto"}, 
m("table", {"class":"table"},
  [
    m("thead", 
      m("tr", {class:"bg-base-200"},
        [
          m("th"),
          m("th", 
            "Name"
          ),
          m("th", 
            "Job"
          ),
          m("th", 
            "Favorite Color"
          )
        ]
      )
    ),
    m("tbody",
      [
        m("tr",
          [
            m("th", 
              "1"
            ),
            m("td", 
              "Cy Ganderton"
            ),
            m("td", 
              "Quality Control Specialist"
            ),
            m("td", 
              "Blue"
            )
          ]
        ),
        m("tr",
          [
            m("th", 
              "2"
            ),
            m("td", 
              "Hart Hagerty"
            ),
            m("td", 
              "Desktop Support Technician"
            ),
            m("td", 
              "Purple"
            )
          ]
        ),
        m("tr",
          [
            m("th", 
              "3"
            ),
            m("td", 
              "Brice Swyre"
            ),
            m("td", 
              "Tax Accountant"
            ),
            m("td", 
              "Red"
            )
          ]
        )
      ]
    )
  ]
)
)
    }
})
