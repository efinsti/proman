

// const AutoNumeric = require('autonumeric')
class errHandle {
    constructor(code) {
        this.code = code;
        this.success = 0;
        this.name = 'errHandle';
    }
}

class ObjectID {
    constructor() {
        var tss = Math.floor(Date.now() / 1000)
        var genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        this.id = tss.toString(16) + genRanHex(16)
    }
}

var ref = {
    mdlData: null,
    typeRumus: null,
    typeIKK: null,
    admMenu: false,
    kecMenu: false,
    desMenu: false,
    entitasAktif: null,
    logout: () => {
        localStorage.removeItem(ref.lsname);
        ref.admMenu = null,
            ref.logged = null
        ref.username = null
        ref.loginBtnDisabled = false
        m.route.set("/");
        m.redraw();



    },
    checkAdm: (cb) => {
        cb == undefined ? cb = () => { } : null
        if (ref.islogged(true)) {
            ref.logged.map(l => {
                (l == "superadmin" || l == "admin") ? (ref.admMenu = true, ref.kecMenu = false, ref.desMenu = false) : false
                l.length == 8 ? (ref.kecMenu = true, ref.admMenu = false, ref.desMenu = false) : true
                l.length == 13 ? (ref.kecMenu = false, ref.admMenu = false, ref.desMenu = true) : true
                console.log(l, ref.admMenu, ref.kecMenu, ref.desMenu)
                ref.entitasAktif = l

            })
        }
        cb()
    },

    ObjectID: () => {
        return new ObjectID().id
    },



    tunda: (fungsi, msLama) => {
        var myStopFunction = () => {
            clearTimeout(myTimeout);
        }
        var munculkan = () => {
            fungsi()
            myStopFunction()
        }
        var myTimeout = setTimeout(munculkan, msLama);
    },
    checkpass: (cabac) => {

        const secret = "$2y$10$ocjiVRZkNTDccxnHqidnhOL7L0YakaxWLRogFDUNdlsTkhWL3leEW"
        var text
        var pass = prompt("Masukkan Password:", "rahasiaOemoem");
        if (pass == null || pass == "") {
            text = "User cancelled the prompt";
            ref.tell('error', text, 1236, () => { })
            cabac(text)

        } else {
            var param = { arep: "takonmeneh", opo: pass, secret: secret }
            var cb = () => {
                text = ref.dataReturn.message
                if (text) {
                    ref.tell('success', 'Hasil ' + pass + ' adalah:' + text, 1236, () => { })
                    cabac(text)
                } else { cabac(text) }
            }
            ref.comm(param, cb)
        }

    },

    withThis: (obj, cb) => cb(obj),
    username: null,
    fullname: null,
    loginBtnDisabled: false,
    logged: null,
    lsname: "scripter",
    getls: (k) => {
        const itemStr = localStorage.getItem(k)
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        console.log(item.expiry, ref.username)

        var difference = item.expiry - now.getTime();

        var minutesDifference = Math.floor(difference / 1000 / 60);

        console.log('difference = ' +
            minutesDifference + ' minute/s ');

        if (minutesDifference < 15) {
            var newItem = {}

            Object.assign(newItem, { fullname: item.fullname, user: item.user, token: item.token, roles: item.roles, expiry: now.getTime() + 1800000 })

            if (item.opd) {
                Object.assign(newItem, { opd: item.opd })
            }

            localStorage.removeItem(k)
            ref.setls(JSON.stringify(newItem))

        }


        if (now.getTime() > item.expiry) {
            localStorage.removeItem(k)
            return null
        }
        return item
    },
    setls: (i) => {
        localStorage.setItem(ref.lsname, i)
    },

    tell: (type, msg, time, cb) => {

        time == undefined ? time = 3000 : true
        cb == undefined ? cb = () => { } : true

        var iswe = ['info', 'success', 'warning', 'error', 'query']
        var typeComp;
        var theID = ref.ObjectID();

        iswe.includes(type) ? null : console.log('type not define')
        var num = null
        iswe.forEach((t, idx) => {
            type == t ? num = idx : null
        })

        typeComp = 'alert-' + iswe[num]
        console.log(typeComp)
        // bg - violet - 400
        var comp = [
            m("div", { "class": "toast " },
                m("div", { "class": "alert " + typeComp },
                m("span", {"class":"loading loading-ring loading-md"}),
                    m("span",
                        msg
                    ),
                    m("div",
                        [

                            typeComp == "alert-query" ? m("button", {
                                "class": "btn btn-sm btn-primary", onclick: () => {

                                    cb()
                                    remove(theID)
                                }
                            },
                                "Lanjut"
                            ) : null,
                            m("button", { "class": "btn btn-sm ml-1", onclick: () => { remove(theID) } },
                                typeComp == "alert-query" ? "Batal" : "X"
                            ),

                        ]
                    )
                ), // m("progress", { "class": "progress  mt-0", "value": "10", "max": "100" })
            )
        ]

        var remove = (theID) => {
            var theToastEl = ref.getById(theID)
            theToastEl.remove()
        }

        var iDiv = document.createElement('div');

        iDiv.id = theID
        document.getElementsByTagName('body')[0].appendChild(iDiv);
        var theToastEl = ref.getById(theID)
        m.render(theToastEl, m({ view: () => comp }))
        ref.tunda(() => {
            var theToastEl = ref.getById(theID)
            if (theToastEl) remove(theID)
        }, time)


    },

    tell2: (type, msg, time, cb) => {

        time == undefined ? time = 3000 : true
        cb == undefined ? cb = () => { } : true
        var title

        type == "success" ? title = "Berhasil" : type == "error" ? title = "Error" :
            type == "warning" ? title = "Perhatian" : type == "question" ? (title = "Konfirmasi") : null

        var QObject = {
            //  position: 'center',
            buttons: [
                ['<button><b>Lanjut</b></button>', (i, t) => {
                    i.hide({ transitionOut: 'fadeOut' }, t, 'button');
                    cb()
                }, true],
                ['<button>Batal</button>', (i, t) => {
                    i.hide({ transitionOut: 'fadeOut' }, t, 'button');
                    return false
                }],
            ],
        }

        var cbObj = {
            onClosed: cb,
        }

        var mainObj = {
            title: title,
            message: msg,
            timeout: time
        }

        type == "question" ? _.assign(mainObj, QObject) : _.assign(mainObj, cbObj)
        iziToast[type](mainObj);

    },

    islogged: (diam) => {

        var item = ref.getls(ref.lsname);

        if (item === null) {
            ref.logged = null
            diam == undefined ?
                ref.tell("error", 'waktu login habis, atau anda belum login, mohon login kembali', 1500, () => {
                    m.route.set('/')
                }) : null


        } else {
            var rolesArr = item.roles
            ref.username = item.user
            ref.fullname = item.fullname
            ref.loginBtnDisabled = true
            ref.logged = rolesArr

            rolesArr.map(item => {
                Object.assign(ref, { [item]: true })
            })
            return item
        }

    },

    getById: (id) => {
        return document.getElementById(id)
    },
    getByCN: (cn) => {
        return document.getElementsByClassName(cn)
    },
    getByName: (nama) => {
        return document.getElementsByName(nama)
    },


    getByTag: (tag) => {
        return document.getElementsByTagName(tag)
    },
    getqsAll: (tag) => {
        return document.querySelectorAll(tag)
    },





    mdl: { "Joy": "lutju sekali" },

    makeModal: name => m('.modal',
        { class: ref.mdl[name] && 'is-active' },
        m('.modal-background'),
        m('.modal-content', ref.mdl[name]),
        m('.modal-close.is-large',
            {
                "aria-label": "close",
                onclick: () => [
                    ref.mdl[name] = null,
                    m.redraw()]
            })
    ),

    makeModal2: name => m('.modal',
        { class: ref.mdl[name] && 'is-active' },
        m('.modal-background'),
        m('.modal-content', m(ref.mdl[name])),
        m('.modal-close.is-large',
            {
                "aria-label": "close",
                onclick: () => [
                    ref.mdl[name] = null,
                    m.redraw()]
            })
    ),
    formdata: null,
    form: (schema, label, id, cb, kelas, xfunc) => {

        xfunc == undefined ? xfunc = () => { } : true

        //     var param = [{id:"username", label:"User Name", type:"text", ph:"nama User", value:null, disabled:false}]

        kelas == undefined ? kelas = "column is-12" : null

        return m('div', { "class": kelas }, m('.box', m("form", { action: "#" },

            schema[0].id ? [

                schema.map(sc => {
                    return m(".field",
                        m("label", { "class": "label" }, sc.label),
                        m(".control",
                            sc.id.substring(0, 6) == "select" ?
                                m("div", { "class": "select" },
                                    m("select", { "id": sc.id },
                                        sc.options.map(i => {
                                            return m("option", { "value": i.value, },
                                                i.desc)
                                        })
                                    )) :
                                m("input", { "id": sc.id, "class": "input", "type": sc.type, "placeholder": sc.ph, "value": sc.value, "disabled": sc.disabled })
                        ))
                })] : m(".field",
                    m("label", { "class": "label" }, label),
                    m(".control",
                        m("div", { "class": "select" },
                            m("select", { "id": id },
                                schema.map(sc => {
                                    return m("option", { "value": sc.kode, },
                                        sc.desc)

                                })
                            )))),
            m("div", { "class": "control" },
                m("button", {
                    "id": "tombolKirim", "class": "button is-link", onclick: (e) => {

                        e = e || window.event
                        e.preventDefault()
                        var IDs = []

                        schema.map(s => {
                            IDs.push(s.id)
                        })


                        var jsondata = {}
                        IDs.map(idInput => {
                            _.assign(jsondata, { [idInput]: ref.getById(idInput).value })
                        })

                        ref.formdata = jsondata

                        cb()
                    }
                },
                    "Kirim"
                ),

                m('button', {
                    class: "button is-danger ml-2", onclick: (e) => {

                        e.preventDefault()


                        xfunc()
                    }
                }, "Batal")

            ))))
    },



    get: (url, cb) => {

        var lstor = ref.islogged()

        if (lstor) {

            m.request({
                method: "GET",
                url: url

            }).then(data => {

                console.log(data)

                if (data) {

                    ref.dataReturn = data
                    cb()

                } else {


                    ref.tell("error", "API down or syntax error", 1200, () => { })

                    ref.dataReturn = data
                    cb()
                }


            }).catch(err => {
                console.log(err)
                ref.dataReturn = err
                cb()
                // ref.tell(err, "error", 999, cb())
            })
        } else {

            var h = window.location.href
            var arr = h.split("/");
            var result = arr[0] + "//" + arr[2]
            ref.tell("error", "sesi login berakhir", 699, () => { location.replace(result) })
        }

    },

    cl: (item) => {
        return console.log(item)
    },
    isLetter: (str) => {

        var regExp = /[a-zA-Z]/g;
        return regExp.test(str)

    },
    comm: (operation, cb, responseType) => {

        responseType ? responseType : responseType = "json";


        var tableName
        var ops

        var arepArr = ["golek", "ngisi", "owah", "busak"]
        var arepObj = { "golek": null, "ngisi": "simpan", "owah": "update", "busak": "hapus" }
        if (arepArr.includes(operation.arep)) {
            tableName = operation.nang
        } else tableName = null

        arepArr.map(a => { a == operation.arep ? ops = arepObj[a] : null })

        //   console.log(responseType)

        // mrikso, golek, ngisi -> nang = table name
        //   console.log(operation, typeof (operation))

        var lstor = ref.islogged(true)

        if (lstor) {

            m.request({
                method: "POST",
                url: "./api/gerbang",
                headers: { "Authorization": "Bearer " + lstor.token, 'Accept': 'Accept:text/html,application/json,*/*' },
                body: operation,
                responseType: responseType
            }).then(data => {

                console.log(operation)
                console.log(data)

                if (data) {

                    if (data.success == 0) {
                        console.log("return warning/error")

                        throw new errHandle(data.status);
                    } else {

                        console.log("data ok", ops)
                        if (tableName && ops) {
                            //  ref.tell("success", ops +  " berhasil", 1200, () => {
                            ref.dataReturn = data
                            cb()
                            // })
                        } else {
                            ref.dataReturn = data
                            cb()

                        }

                    }
                } else {
                    console.log("data not exist/syntax error")
                    if (tableName && ops) {
                        ref.tell("error", ops + " data pada table " + tableName + " gagal", 1200, () => { })
                    }
                    ref.dataReturn = data
                    cb()
                }


            }).catch(err => {


                ref.dataReturn = err
                cb()

            })
        } else {

            var h = window.location.href
            var arr = h.split("/");
            var result = arr[0] + "//" + arr[2]
            ref.tell("error", "sesi login berakhir, mohon login kembali", 1699, () => { location.replace(result) })
        }
    },

    comm2: (operation, cb, responseType) => {

        responseType ? responseType : responseType = "json";

        var tableName
        var ops

        var arepArr = ["golek", "ngisi", "owah", "busak"]
        var arepObj = { "golek": null, "ngisi": "simpan", "owah": "update", "busak": "hapus" }
        if (arepArr.includes(operation.arep)) {
            tableName = operation.nang
        } else tableName = null

        arepArr.map(a => { a == operation.arep ? ops = arepObj[a] : null })

        m.request({
            method: "POST",
            url: "./api/news",
            headers: { "Authorization": "Bearer " + "Hamung SHAK", 'Accept': 'Accept:text/html,application/json,*/*' },
            body: operation,
            responseType: responseType
        }).then(data => {

            console.log(operation)
            console.log(data)

            if (data) {

                if (data.success == 0) {
                    console.log("return warning/error")

                    throw new errHandle(data.status);
                } else {

                    console.log("data ok", ops)
                    if (tableName && ops) {
                        //  ref.tell("success", ops +  " berhasil", 1200, () => {
                        ref.dataReturn = data
                        cb()
                        // })
                    } else {
                        ref.dataReturn = data
                        cb()

                    }

                }
            } else {
                console.log("data not exist/syntax error")
                if (tableName && ops) {
                    ref.tell("error", ops + " data pada table " + tableName + " gagal", 1200, () => { })
                }
                ref.dataReturn = data
                cb()
            }


        }).catch(err => {


            ref.dataReturn = err
            cb()

        })

    },

    comm3: (operation, cb, responseType) => {

        responseType ? responseType : responseType = "json";

        var tableName
        var ops

        var arepArr = ["golek", "ngisi", "owah", "busak"]
        var arepObj = { "golek": null, "ngisi": "simpan", "owah": "update", "busak": "hapus" }
        if (arepArr.includes(operation.arep)) {
            tableName = operation.nang
        } else tableName = null

        arepArr.map(a => { a == operation.arep ? ops = arepObj[a] : null })

        m.request({
            method: "POST",
            url: "./api/start",
            headers: { "Authorization": "Bearer " + "HSHAK", 'Accept': 'Accept:text/html,application/json,*/*' },
            body: operation,
            responseType: responseType
        }).then(data => {

            console.log(operation)
            console.log(data)

            if (data) {

                if (data.success == 0) {
                    console.log("return warning/error")

                    throw new errHandle(data.status);
                } else {

                    console.log("data ok", ops)
                    if (tableName && ops) {
                        //  ref.tell("success", ops +  " berhasil", 1200, () => {
                        ref.dataReturn = data
                        cb()
                        // })
                    } else {
                        ref.dataReturn = data
                        cb()

                    }

                }
            } else {
                console.log("data not exist/syntax error")
                if (tableName && ops) {
                    ref.tell("error", ops + " data pada table " + tableName + " gagal", 1200, () => { })
                }
                ref.dataReturn = data
                cb()
            }


        }).catch(err => {


            ref.dataReturn = err
            cb()

        })

    },


    comm4: (operation, cb, responseType) => {

        responseType ? responseType : responseType = "json";
        var tableName
        var ops

        var arepArr = ["golek", "ngisi", "owah", "busak"]
        var arepObj = { "golek": null, "ngisi": "simpan", "owah": "update", "busak": "hapus" }
        if (arepArr.includes(operation.arep)) {
            tableName = operation.nang
        } else tableName = null

        arepArr.map(a => { a == operation.arep ? ops = arepObj[a] : null })

        m.request({
            method: "POST",
            url: "./api/daftar",
            headers: { 'Accept': 'Accept:text/html,application/json,*/*' },
            body: operation,
            responseType: responseType
        }).then(data => {

            console.log(operation)
            console.log(data)

            if (data) {

                if (data.success == 0) {
                    console.log("return warning/error")

                    throw new errHandle(data.status);
                } else {


                    ref.dataReturn = data
                    cb()



                }
            } else {
                console.log("data not exist/syntax error")
                if (tableName && ops) {
                    ref.tell("error", ops + " data pada table " + tableName + " gagal", 1200, () => { })
                }
                ref.dataReturn = data
                cb()
            }


        }).catch(err => {


            ref.dataReturn = err
            cb()

        })

    },

    comm5: (operation, cb, responseType) => {

        responseType ? responseType : responseType = "json";


        var tableName
        var ops

        var arepArr = ["golek", "ngisi", "owah", "busak"]
        var arepObj = { "golek": null, "ngisi": "simpan", "owah": "update", "busak": "hapus" }
        if (arepArr.includes(operation.arep)) {
            tableName = operation.nang
        } else tableName = null

        arepArr.map(a => { a == operation.arep ? ops = arepObj[a] : null })


        m.request({
            method: "POST",
            url: "./api/start",
            headers: { 'Accept': 'Accept:text/html,application/json,*/*' },
            body: operation,
            responseType: responseType
        }).then(data => {

            console.log(operation)
            console.log(data)

            if (data) {

                if (data.success == 0) {
                    console.log("return warning/error")

                    throw new errHandle(data.status);
                } else {

                    console.log("data ok", ops)
                    if (tableName && ops) {
                        //  ref.tell("success", ops +  " berhasil", 1200, () => {
                        ref.dataReturn = data
                        cb()
                        // })
                    } else {
                        ref.dataReturn = data
                        cb()

                    }

                }
            } else {
                console.log("data not exist/syntax error")
                if (tableName && ops) {
                    ref.tell("error", ops + " data pada table " + tableName + " gagal", 1200, () => { })
                }
                ref.dataReturn = data
                cb()
            }


        }).catch(err => {


            ref.dataReturn = err
            cb()

        })

    },
    dataReturn: null,

    titleCase: (str) => {
        return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
    },


    getSecondPart: (str) => {
        return str.split(" ").slice(1).join(" ");
    },

    getFirstPart: (str) => {
        return str.split(" ")[0];
    },

    customSort: (d, key, order) => {
        var sort = {
            asc: function (a, b) {
                var l = 0, m = Math.min(a.value.length, b.value.length);
                while (l < m && a.value[l] === b.value[l]) {
                    l++;
                }
                return l === m ? a.value.length - b.value.length : a.value[l] - b.value[l];
            },
            desc: function (a, b) {
                return sort.asc(b, a);
            }
        },

            // temporary array holds objects with position and sort-value
            mapped = d.map(function (el, i) {
                return { index: i, value: el[key].split('.').map(Number) };
            });

        // sorting the mapped array containing the reduced values
        mapped.sort(sort[order] || sort.asc);

        // container for the resulting order
        return mapped.map(function (el) {
            return d[el.index];
        });
    },

    autoNumEls: [],

    autoNumOpsiRp: {
        digitGroupSeparator: '.',
        decimalCharacter: ',',
        currencySymbol: 'Rp',
        currencySymbolPlacement: AutoNumeric.options.currencySymbolPlacement.prefix,
        roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric,
    },

    autoNum: (id) => {

        var el = ref.getById(id)

        if (AutoNumeric.getAutoNumericElement(el) === null) {
            var oid = new AutoNumeric(el, ref.autoNumOpsiRp);
            ref.autoNumEls.push(oid)
        }

    },

    autoNumRemove: () => {
        ref.autoNumEls.forEach(el => {
            el.remove()
        })
        ref.autoNumEls = []
    },

    checkInputs: (arrInputs) => {

        var empty = []
        arrInputs.forEach((i, idx) => {
            typeof (i) == 'string' ? null : i = i.toString()
            _.isEmpty(i) ? empty.push(idx) : null

        })
        return empty

    },
    chunkArray: (arr, size) =>
        arr.length > size
            ? [arr.slice(0, size), ...ref.chunkArray(arr.slice(size), size)]
            : [arr],



    crTab: (id, tab) => {


        var table = []
        var titleComp = []
        var bodyComp = []
        var titlePart = []

        console.log(tab)

        for (var key in tab) {
            tab[key].map(arr => {
                if (key == "title") {



                    var arrCon = arr.split("|")
                    //  console.log(arrCon)
                    if (arrCon.length == 1) {
                        titleComp.push({ content: arrCon[0] })

                    }
                    if (arrCon.length == 2) {
                        var ObjCon = {}
                        var Obj = JSON.parse(arrCon[1])
                        //   console.log(Obj)
                        _.forIn(Obj, (value, key) => {

                            _.assign(ObjCon, { [key]: value })
                        });
                        _.assign(ObjCon, { content: arrCon[0] })

                        titleComp.push(ObjCon)
                    }



                } else {
                    var arrTemp = []
                    //   console.log(arr)
                    if (typeof (arr[0]) !== "number") {
                        //   console.log(arr[0], arr)
                        arr.map(i => {
                            var arrCon
                            typeof (i) == 'string' ? arrCon = i.split("|") : arrCon = i

                            //  console.log("arcon:", arrCon, "length:", arrCon.length)
                            //   console.log("arcon type:", typeof(arrCon)) 

                            if (arrCon.length == 1) {

                                arrTemp.push({ content: arrCon[0] })


                            } else {

                                // console.log("arcon type:", typeof (arrCon), arrCon)

                                var ObjCon = {}

                                var Obj = JSON.parse(arrCon[1])
                                //  console.log(Obj)
                                _.forIn(Obj, function (value, key) {

                                    _.assign(ObjCon, { [key]: value })
                                });
                                _.assign(ObjCon, { content: arrCon[0] })

                                arrTemp.push(ObjCon)
                            }

                        })
                    } else {
                        var ObjAdded = { cSpan: arr[0], content: arr[1] }
                        arrTemp.push(ObjAdded)
                    }

                    bodyComp.push(arrTemp)
                }
            })
        }

        //  console.log(titleComp, bodyComp)

        titleComp.map(t => {

            var objComp = {}
            _.forIn(t, (value, key) => {

                // key == "cSpan" ? _.assign(objComp, { colspan: value }) : null
                // key == "rSpan" ? _.assign(objComp, { rowspan: value }) : null
                // key == "style" ? _.assign(objComp, { style: value }) : null

                key == "cSpan" ? _.assign(objComp, { colspan: t[key] }) :
                    key == "rSpan" ? _.assign(objComp, { rowspan: t[key] }) :
                        _.assign(objComp, { [key]: t[key] })
            });

            titlePart.push(m("th", objComp, t.content))
        })


        table.push(m('div', { class: "table-container" }, m("table", { class: "table is-bordered", style: "margin:auto;", id: id },
            m("thead", { class: "is-size-6" }, m("tr",

                titlePart

            )),
            m("tbody", { class: "is-size-6" },
                bodyComp.map(i => {
                    return m('tr', { class: "row" }, i.map(t => {


                        var objComp = {}

                        for (var key in t) {
                            // console.log(`${property}: ${object[property]}`);

                            key == "cSpan" ? _.assign(objComp, { colspan: t[key] }) :
                                key == "rSpan" ? _.assign(objComp, { rowspan: t[key] }) :
                                    _.assign(objComp, { [key]: t[key] })
                        }

                        var mComp


                        objComp.contenteditable == undefined ? mComp = m('td', objComp, t.content) :
                            mComp = m('td', objComp, m.trust(t.content))

                        return mComp


                    }))
                })

            )
        )))

        return table


    },

    crTab2: (id, tab) => {
        var table = []
        var titleComp = []
        var bodyComp = []
        var titlePart = []

        for (var key in tab) {
            tab[key].map(arr => {
                if (key == "title") {



                    var arrCon = arr.split("|")
                    //  console.log(arrCon)
                    if (arrCon.length == 1) {
                        titleComp.push({ content: arrCon[0] })

                    }
                    if (arrCon.length == 2) {
                        var ObjCon = {}
                        var Obj = JSON.parse(arrCon[1])
                        //   console.log(Obj)
                        _.forIn(Obj, (value, key) => {

                            _.assign(ObjCon, { [key]: value })
                        });
                        _.assign(ObjCon, { content: arrCon[0] })

                        titleComp.push(ObjCon)
                    }



                } else {
                    var arrTemp = []
                    //   console.log(arr)
                    if (typeof (arr[0]) !== "number") {
                        console.log(arr[0], arr)
                        arr.map(i => {
                            var arrCon
                            typeof (i) == 'string' ? arrCon = i.split("|") : arrCon = i

                            //  console.log("arcon:", arrCon, "length:", arrCon.length)
                            //   console.log("arcon type:", typeof(arrCon)) 

                            if (arrCon.length == 1) {

                                arrTemp.push({ content: arrCon[0] })


                            } else {

                                //  console.log("arcon type:", typeof (arrCon), arrCon)

                                var ObjCon = {}

                                var Obj = JSON.parse(arrCon[1])
                                //  console.log(Obj)
                                _.forIn(Obj, function (value, key) {

                                    _.assign(ObjCon, { [key]: value })
                                });
                                _.assign(ObjCon, { content: arrCon[0] })

                                arrTemp.push(ObjCon)
                            }
                        })
                    } else {
                        var ObjAdded = { cSpan: arr[0], content: arr[1] }
                        arrTemp.push(ObjAdded)
                    }

                    bodyComp.push(arrTemp)
                }
            })
        }

        //  console.log(titleComp, bodyComp)

        titleComp.map(t => {

            var objComp = {}
            _.forIn(t, (value, key) => {

                key == "cSpan" ? _.assign(objComp, { colspan: value }) : null
                key == "rSpan" ? _.assign(objComp, { rowspan: value }) : null
                key == "style" ? _.assign(objComp, { style: value }) : null
                _.assign(objComp, { class: "sticky-table-headers__sticky fixed" })
            });

            titlePart.push(m("th", objComp, t.content))
        })


        table.push(m("table", { class: "table is-bordered ml-0", id: id },
            m("thead", { class: "is-size-6" }, m("tr", { class: "werna" },

                titlePart

            )),
            m("tbody", { class: "is-size-6" },
                bodyComp.map(i => {
                    return m('tr', i.map(t => {

                        var objComp = {}

                        for (var key in t) {
                            // console.log(`${property}: ${object[property]}`);


                            key == "cSpan" ? _.assign(objComp, { colspan: t[key] }) :
                                key == "rSpan" ? _.assign(objComp, { rowspan: t[key] }) :
                                    _.assign(objComp, { [key]: t[key] })
                        }



                        var mComp
                        objComp.contenteditable == undefined ? mComp = m('td', objComp, t.content) :
                            mComp = m('td', objComp, m.trust(t.content))

                        return mComp


                    }))
                })

            )
        ))

        return table

    },

    showModalicious: (title, x, svbtn) => {

        var g = m({
            view: () => m("div", { "class": "modal is-active", id: "modalicious" },
                m("div", { "class": "modal-background" }),
                m("div", { "class": "modal-card" },
                    m("header", { "class": "modal-card-head" },
                        m("p", { "class": "modal-card-title" },
                            title),
                        m("button", { "class": "delete", "aria-label": "close", onclick: () => ref.removeMdl() })),
                    m("section", { "class": "modal-card-body" }, m({ view: () => x })),
                    m("footer", { "class": "modal-card-foot" },
                        m({ view: () => svbtn }),
                        m("button", { "class": "button is-danger is-outlined", onclick: () => ref.removeMdl() },
                            "Batal"
                        )
                    )
                )
            )
        })

        m.redraw()
        return g
    },

    showModal: (x) => {

        var g = m({
            view: () => m('.modal.is-active', m('.modal-background'), m('.modal-content', m({ view: () => x })), m('.modal-close.is-large', {
                "aria-label": "close", onclick: () => ref.removeMdl()
            }))
        })

        m.redraw()
        return g
    },

    showModalToo: (title, x, svbtn) => {

        var g = m({
            view: () => m("div", { "class": "modal is-active" },
                m("div", { "class": "modal-background" }),
                m("div", { "class": "modal-card" },
                    m("header", { "class": "modal-card-head" },
                        m("p", { "class": "modal-card-title" },
                            title),
                        m("button", { "class": "delete", "aria-label": "close", onclick: () => ref.removeMdl() })),
                    m("section", { "class": "modal-card-body" }, m({ view: () => x })),
                    m("footer", { "class": "modal-card-foot" },
                        m({ view: () => svbtn }),
                        m("button", { "class": "button is-danger is-outlined", onclick: () => ref.removeMdl() },
                            "Batal"
                        )
                    )
                )
            )
        })

        m.redraw()
        return g
    },


    removeMdl: () => {
        ref.getByCN("modal")[0].classList.remove('is-active')

    },


    numFmt: (classNames, dec) => {

        dec == undefined ? dec = 6 : null

        classNames == undefined ? classNames = null : null


        var el;
        classNames ? el = [...ref.getByCN(classNames)] : null

        if (el && el.length > 0) {



            if (ref.autoNumArr) {
                ref.autoNumArr.forEach(autoEl => autoEl.remove())
            }

            el.forEach(e => {

                var anyar = new AutoNumeric(e, {

                    decimalCharacter: ',',
                    digitGroupSeparator: '.',
                    unformatOnSubmit: true,
                    decimalPlaces: dec,
                    watchExternalChanges: true
                })


                ref.autoNumArr.push(anyar)

                //   console.log("init ", classNames)

            })

        }
    },
    retNum: (el) => {
        var elem = ref.getById(el)
        return AutoNumeric.getNumericString(elem)
    },

    autoNumArr: [],

    polos: (str) => {

        //  console.log(str)

        const dotsRemoved = str.replaceAll('.', '')
        const commaRemoved = dotsRemoved.replace(",", ".");
        // console.log(commaRemoved)
        return commaRemoved;

    },

    cari: (id, idTab, col) => {
        var input = ref.getById(id);
        var filters = input.value.toUpperCase().split(' '); // create several filters separated by space
        var table = ref.getById(idTab);
        var tr = table.getElementsByTagName("tr");

        for (let i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName("td")[col];

            if (td) {
                const txtValue = td.textContent || td.innerText;
                tr[i].style.display = "none"; // hide each row

                for (var filter of filters) { // add the rows matching a filter
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    }
                }
            }
        }
    },

    fmtRp: (num) => { return num.toLocaleString('id', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) },
    urutFn: (fn1, fn2) => {
        fn2(fn1)
    },


    gTab: (id, tab) => {



        var table = []

        var bodyPart = []
        var titlePart = []

        var footerPart = []
        console.log(tab)

        /*
      {c:any, d:any, r:any}
   */


        for (var key in tab) {
            tab[key].map((arr, idx) => {

                var trObj = {}
                var objComp = []

                arr.map(obj => {

                    var tdComp = {}
                    var ctn, tdComp

                    _.forIn(obj, (value, key) => {

                        if (key == 'r') { _.assign(trObj, value) }
                        else if (key == 'd') { tdComp = value }
                        else if (key == 'c') { ctn = value }

                    })

                    objComp.push(m('td', tdComp, ctn))

                })

                var arrTemp = []

                if (key == 'body') {
                    _.assign(trObj, {
                        onclick: (e) => {

                            ref.getById(id).querySelectorAll('tr').forEach(el => {
                                el.classList.remove('is-selected')
                            })
                            // var selEl = ref.getById('theRow' + idx)
                            // selEl.classList.add('is-selected')

                            e = e || window.event;
                            var target = e.target;


                            while (target && target.nodeName !== "TR") {
                                target = target.parentNode;
                            }

                            if (target) { target.classList.add('is-selected') }


                        }
                    })
                }

                arrTemp.push(m('tr', trObj, objComp))
                key == 'title' ? titlePart.push(arrTemp) : key == 'body' ? bodyPart.push(arrTemp) : footerPart.push(arrTemp)


            })
        }


        table.push(m('div', { class: "table-container" }, m("table", { class: "table is-bordered", style: "margin:auto;", id: id },
            m("thead", { class: "is-size-6" }, titlePart),
            m("tbody", { class: "is-size-6" }, bodyPart),
            m("tfoot", { class: "is-size-6" }, footerPart),
        )))

        return table

    }

}


export default ref
