const argv = require('./config/yargs').argv;
const color = require('color');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado'))
            .catch(e => console.log(e));
        console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}