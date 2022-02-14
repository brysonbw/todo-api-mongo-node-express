const express = require('express')
const router = express.Router()
const {
    getTodosHandler,
    createTodoHandler,
    todoHandler,
    updateTodoHandler,
    deleteTodoHandler
} = require("../controllers/todosController")

// routes

// all todos
router.get('/todos', getTodosHandler)
// create todo
router.post('/create', createTodoHandler)
// a todo
router.get('/todo/:id', todoHandler)
// update todo
router.put('/todo/:id', updateTodoHandler)
// delete todo
router.delete('/todo/:id', deleteTodoHandler)

  

module.exports = router