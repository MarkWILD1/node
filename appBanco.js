//Capturar datos del usuario ingresados desde consola usando la entrada estandar

const readline = require('readline');

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 0;

function menuBanco() {
    console.log('-----------Menu-------------')
    console.log('[1] - Depositar')
    console.log('[2] - Consultar saldo')
    console.log('[3] - Extraer')
    console.log('[4] - Cerrar programa')
    console.log('----------------------------');

    sc.question('', (opcion) => {
        switch (parseInt(opcion)) {
            case 1: 
                depositar();
                break; 
            case 2:
                consultarSaldo();
                break;
            case 3:
                extraer();
                break;
            case 4:
                cerrarPrograma();
                break;
            default:
                console.log('Por favor, ingrese el numero de la opcion desea: ')
                menuBanco();                
        }
    });
}

function depositar() {
    sc.question('\nIngrese el monto que desea depositar: $', (monto) => {
        saldo += parseFloat(monto);
        console.log('Has depositado: $', monto);
        menuBanco();
    });  
}

function consultarSaldo() {
    console.log(`Tu saldo actual es $${saldo}`);
    menuBanco();
}

function extraer() {
    sc.question('Ingrese el monto que desea extraer: $', (monto) => {
        if(parseFloat(monto) > saldo){
            console.log('No tienes saldo suficiente')
        } else {
            saldo -= parseFloat(monto);
            console.log('Has extraido: $', monto);
        }
        menuBanco();
    });
};

function cerrarPrograma() {
    console.log('Gracias por utilizar nuestro banco....Programa encerrado, hasta pronto!');
    sc.close();
};

menuBanco();

