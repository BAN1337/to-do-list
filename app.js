const express = require('express')
const path = require('path')
const checkListRouter = require('./src/routes/checklist')
const taskRouter = require('./src/routes/task')
const rootRouter = require('./src/routes/index')
require('./config/database')
const methodOverride = require('method-override')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method', {methods: ['POST', 'GET']}));

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', rootRouter)
app.use('/checklists', checkListRouter)
app.use('/checklists', taskRouter.checklistDepedent)
app.use('/tasks', taskRouter.simple)

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