const express = require('express')

const checklistDepedentRoute = express.Router()

const Checklist = require('../models/checklist')
const Task = require('../models/task')

checklistDepedentRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = new Task()
    } catch (error) {
        res.status(422).render('pages/error', {error: 'Erro ao carregar o formulário '})
    }
})