//Cargar datos utilizando entrada estandar
const readline = require('readline');

const sc = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n1;
let n2;
let result;


function calculate() {

    sc.question('----------Calculadora------------- \n[1] - Suma \n[2] - Resta \n[3] - Multiplicacion \n[4] - Division \n[5] - Cerrar Calculadora \n--------------------------------- \n', (option) => {
        switch (parseInt(option)) {
            case 1:
                suma();
                calculate();
                break;
            case 2:
                resta();
                calculate();
                break;
            case 3:
                multiplicacion();
                calculate();
                break;
            case 4:
                division();
                calculate();
                break;
            case 5: 
                cerrarProg();
                sc.close;
                break;
            default:
                console.log("Por favor digite un numero ");
                calculate();
                break              
        };
    })
}

function suma() {
    sc.question('Ingrese el primer numero: ', (n1Str) => {
        const n1 = parseInt(n1Str);
        sc.question('Ingrese el segundo numero: ', (n2Str) => {
            const n2 = parseInt(n2Str)
            result = n1 + n2;
            console.log("El resultado de la suma es: " + result);
            calculate();
        })
    });
};

function resta() {
    sc.question('Ingrese el primer numero: ', (n1Str) => {
        const n1 = parseInt(n1Str);
        sc.question('Ingrese el segundo numero: ', (n2Str) => {
            const n2 = parseInt(n2Str);
            result = n1 - n2;
            console.log("El resultado de la resta es: " + result);
            calculate();
        })
    });
};

function multiplicacion() {
    sc.question('Ingrese el primer numero: ', (n1Str) => {
        const n1 = parseInt(n1Str)
        sc.question('Ingrese el segundo numero: ', (n2Str) => {
            const n2 = parseInt(n2Str);
            result = n1 * n2;
            console.log("El resultado de la multiplication es: " + result);
            calculate();
        })
    });
};

function division() {
    sc.question('Ingrese el primer numero: ', (n1Str) => {
        const n1 = parseInt(n1Str);
        sc.question('Ingrese el segundo numero: ', (n2Str) => {
            const n2 = parseInt(n2Str);
            if(n2 === 0) {
                console.log('La operacion no esta permitida, el segundo numero no podra ser 0---')
                sc.question('Ingrese el segundo numero: ', (n2Str) => {
                    const n2 = parseInt(n2Str);
                    result = n1 / n2;
                    console.log("El resultado de la division es: " + result);
                    calculate();
                });
            } else {
                result = n1 / n2;
                console.log("El resultado de la division es: " + result);
                calculate();
            }
        })
    });
};

function cerrarProg() {
    console.log("Calculadora finalizada...Hasta pronto!");
    sc.close;
};


calculate();