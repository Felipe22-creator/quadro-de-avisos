//importar as dependências
const express = require('express')
const bodyParser = require('body-parser')


//inicializando o express
const app = express()


//configurar a view engine e configuarar a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))


//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//rotas
app.get("/", (req,res) =>{
    res.send("Vai Etim!!!")
})



//escutar uma porta
app.listen(3000)