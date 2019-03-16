const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida ={
        nombre: 'pablo', 
        apellido: 'roman',
        edad: req.url
    }
        res.write(JSON.stringify(salida));
        res.end();
})
    .listen(8080);

    console.log('Eescuchando el puerto 8080');  