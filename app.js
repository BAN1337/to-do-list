const express = require('express')
const checkListRouter = require('./src/routes/checklist')
const app = express()
require('./config/database')

app.use(express.json())

app.use('/checklists', checkListRouter)

app.listen(3000, () => {
    console.log('Servidor foi iniciado!')
})

/*const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next()
}

app.use(log)

app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas :)</h1>')
})

app.get('/JSON', (req, res) => {
    res.json({
        title: 'Tarefa X',
        done: true 
    })
})*/