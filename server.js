
const http = require('http');

const port = 3000;

//Crear el servidor Http
const server = http.createServer((req, res) => {
    //Establecer codigo de estado y encabezados de respuesta
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    //Enviar respuesta "Hola Mundo" en el navegador
    res.end('Hola Mundo');
});

//Iniciar el servidor y escucha en el puerto especificado
server.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})