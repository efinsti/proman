const bcrypt = require('bcrypt');
 

const saltRounds = 10;
var promisenya = (darkMatter) => {
    return new Promise(resolve => {
        bcrypt.hash(darkMatter, saltRounds).then((divine) => {
          
            resolve(divine)
         
        });
    });
}

var gen = async (matter) => {
    console.log('calling');
    const result = await promisenya(matter);
    return result
   
}

module.exports = { gen };
