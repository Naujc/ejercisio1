const http = require ('http');
const port = 3000;

http.createServer ((req, res) => {
    res.write('hola mundo desde el servidor!');
    res.end();
})
.listen (port, ()=> {
    console.log(`servidor escuchando en http://localhost:${port}`)
})