const http=require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response)=>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain')
    response.end('Hola Mundo')
})
server.listen(port, hostname, () => { //si hay alguna llamada del exterior
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`)
})