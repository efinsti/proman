const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    }
}



app.post('/skala/:params', opts, function (request, reply) {
    console.log(request.body)
    console.log(request.query)
    console.log(request.params)
    console.log(request.headers)

    console.log(request.ip)

    console.log(request.hostname)
    console.log(request.protocol)
    console.log(request.url)

    request.log.info('some info')
    reply.send({ hello: 'world' })
})

app.post('/api/hashit', (req, res) => {
    console.log(req)
    var pwd = req.body.pwd
   
    try {
         genHash.gen(pwd).then(data => {
            console.log("theForce", data)
            res.send(data);
            r.hash = null;
        })

    }
    catch (err) {
        throw (err)
    }
    finally {
        console.log('finally')
    }
})

//contoh gtab

showHistory: (id_pagu, id_desa) => {

    var namaSD, namaDesa


    g.alokasiDesaMap.forEach(alo => {
        if (alo.id_pagu == id_pagu) {
            namaSD = alo.nama_pagu
            namaDesa = alo.nama_desa
        }
    })
    console.log(g.alokasiDesaMap, g.pengajuanDesaMap, g.submitted)
    var title = []
    var line = [{ c: 'Histori Pengajuan', d: { "colspan": "6", "class": "has-text-centered has-text-weight-bold" } }]
    title.push(line)
    line = [{ c: namaSD, d: { "class": "has-text-weight-bold has-text-centered", "colspan": "6" } }]
    title.push(line)
    line = [{ c: 'No', d: { "class": "has-text-weight-semibold" } }, { c: 'Tanggal', d: { "class": "has-text-weight-semibold" } },
    { c: 'No. Bukti', d: { "class": "has-text-weight-semibold" } },
    { c: 'Uraian', d: { "class": "has-text-weight-semibold" } },
    { c: 'Nominal', d: { "class": "has-text-weight-semibold" } },
    { c: 'Status', d: { "class": "has-text-weight-semibold" } }]
    title.push(line)
    var line
    var body = []


    var nothing = () => {
        line = [{ c: 'Belum ada Pengajuan dari Desa ' + namaDesa + ' atas Sumber Dana ' + namaSD, d: { "class": "has-text-danger has-text-centered", "colspan": "6" } }]

        title.push(line)
    }

    if (g.submitted.length > 0) {

        var nemu = 0

        g.submitted.forEach((tr, idx) => {
            if (tr.id_pagu == id_pagu) {
                nemu++

                var date = new Date(tr.tanggal + 'T00:00:00');

                var options = {
                    year: 'numeric', month: 'long', day: 'numeric'
                };
                var newDate = (date.toLocaleString('id-ID', options));

                var centerClass = { "class": "has-text-centered", "style": "vertical-align:middle;" }
                var rightClass = { "class": "has-text-right", "style": "vertical-align:middle;" }
                var leftClass = { "class": "has-text-left", "style": "vertical-align:middle;" }

                var status, statusClass
                if (+tr.verified < 0) {
                    status = 'Dalam proses verifikasi'
                } else if (~~tr.verified == 0) {
                    status = 'Ditolak'
                    statusClass = { "class": "has-text-centered has-text-danger", "style": "vertical-align:middle;" }
                }
                else {
                    status = 'Disetujui'
                    statusClass = { "class": "has-text-centered has-text-success", "style": "vertical-align:middle;" }
                }

                line = [{ c: (nemu).toString(), d: { "class": "has-text-centered", "style": "vertical-align:middle;", id:tr.kode_pdf } },
                { c: newDate, d: { "class": "has-text-centered", "style": "vertical-align:middle;" } },
                { c: tr.no_bukti, d: leftClass },
                { c: tr.uraian, d: leftClass },
                { c: r.fmtRp(+tr.pengajuan), d: rightClass },
                { c: status, d: statusClass },
                ]

                body.push(line)


            }
        })
        if (nemu == 0) {
            nothing()
        }

    } else {
        nothing()
    }

    var foot = []

    line = [{d:{colspan:6}, c: m("p", { "class": "buttons" },
        [
            m("button", { "class": "button is-success is-light", onclick: () => g.formPengajuan(id_pagu, id_desa) },
                m("span", { "class": "icon is-small" },
                    m("i", { "class": "fa-solid fa-file-circle-plus" })
                )
            ),
            m("button", { "class": "button is-warning is-light", onclick: () => g.editForm(id_pagu, id_desa) },
                m("span", { "class": "icon is-small" },
                    m("i", { "class": "fa-solid fa-folder-open" })
                )
            ),
            m("button", { "class": "button is-danger is-light" },
                m("span", { "class": "icon is-small" },
                    m("i", { "class": "fas fa-trash" })
                )
            )
        ]
    )}
    ]

    foot.push(line)

    var divider = m("div", { "class": "is-divider", "data-content": "Daftar Histori Pengajuan" })

    var comp = r.gTab("histori", { title: title, body: body, SHAK: foot })

    r.urutFn(m.render(r.getById('histori'), m({ view: () => [divider, comp] })), () => r.tunda(() => r.numFmt('autoNum', 2), 250))
}


let workingDaysBetweenDates = (d0, d1) => {
    /* Two working days and an sunday (not working day) */
    var holidays = ['2016-05-03', '2016-05-05', '2016-05-07'];
    var startDate = parseDate(d0);
    var endDate = parseDate(d1);  
  
  // Validate input
    if (endDate <= startDate) {
      return 0;
    }
  
  // Calculate days between dates
    var millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    startDate.setHours(0, 0, 0, 1);  // Start just after midnight
    endDate.setHours(23, 59, 59, 999);  // End just before midnight
    var diff = endDate - startDate;  // Milliseconds between datetime objects    
    var days = Math.ceil(diff / millisecondsPerDay);
  
    // Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days -= weeks * 2;
  
    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();
      
    // Remove weekend not previously removed.   
    if (startDay - endDay > 1) {
      days -= 2;
    }
    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == 0 && endDay != 6) {
      days--;  
    }
    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == 6 && startDay != 0) {
      days--;
    }
    /* Here is the code */
    holidays.forEach(day => {
      if ((day >= d0) && (day <= d1)) {
        /* If it is not saturday (6) or sunday (0), substract it */
        if ((parseDate(day).getDay() % 6) != 0) {
          days--;
        }
      }
    });
    return days;
  }
           
  

var api =  ` https://api-holidays-id.rizkysam.web.id/holidays/2023`