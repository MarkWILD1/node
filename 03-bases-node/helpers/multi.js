const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base, listar = false, hasta = 10) => {

    try {

        let salida = 0
        for (let i = 0; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`
        }

        if(listar) {
            console.log(colors.cyan("======================="))
            console.log(colors.cyan(`Tabla del ${base}`))
            console.log(colors.cyan("======================="))

            console.log(colors.cyan(salida))
        }
        

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)

        return colors.green(`Tabla-${base}.txt creada`)

    } catch (error) {
        throw new Error(error)
    }


}


module.exports = {
    crearArchivo
}