const bcrypt = require('bcrypt');


var promisenya = (darkMatter, quark) => {
    return new Promise(resolve => {
        bcrypt.compare(darkMatter, quark).then((divine) => {

            resolve(divine)

        });
    });
}

var cek = async (theo, adrian) => {
    console.log('calling');
    const result = await promisenya(theo, adrian);
    return result

}

module.exports = { cek };
