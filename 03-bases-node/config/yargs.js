const argv = require('yargs')
    .option('b', {
        alias: 'number',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de muntiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta que numero va la tabla de multiplicar'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv


module.exports = argv