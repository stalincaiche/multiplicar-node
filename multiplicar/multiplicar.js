const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("Base no es un número");
            return;
        } else if (!Number(limite)) {
            reject("Límite no es un número");
            return;
        }

        for (let index = 0; index <= limite; index++) {
            console.log(`${base} * ${index} = ${base * index}`);
        }

    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("No es un número");
            return;
        } else if (!Number(limite)) {
            reject("Límite no es un número");
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-${limite}.txt`);
            console.log(`The file has been saved!`);
        });
    })
}


module.exports = {
    crearArchivo,
    listarTabla
}