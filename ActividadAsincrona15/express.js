
// const http=require('http')

// const hostname = '127.0.0.1'
// const port = 3080
// //funcion
// const server = http.createServer((request, response)=>{
//     response.statusCode = 200; // 200 HTTP response status codes captura el eeror si lo hay(error 404 por ejemplo)
//     response.setHeader('Content-Type', 'text/plain')
//     response.end('Jhon Jhonatan ASTUCURI BARRIAL')
// })
 
// server.listen(port, hostname, () => { 
//     console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`)
// })




 const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response)=>{ //Metodo get para conectarese al servidor
    response.send('125*125=15625')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
