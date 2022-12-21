
const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response)=>{ //Metodo get para conectarese al servidor
    response.send('125*125=15625')
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
