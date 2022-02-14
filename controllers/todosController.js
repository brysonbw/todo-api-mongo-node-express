const TodoModel = require("../models/Todos")

// get all todos
module.exports.getTodosHandler = async (req, res) => {
    try {
        const todos = await TodoModel.find({})
        res.json(todos)
     } catch (error) {
         console.log(error)
     }
  };


// create a todo
module.exports.createTodoHandler = async (req, res) => {
    try {
        const {title, description} = req.body
        const newTodo = new TodoModel({
            title: title,
            description: description
        })
        const savedTodo = await newTodo.save()
        res.json(savedTodo)
    } catch (error) {
        console.log(error)
    }
  };


// get a todo by ID
module.exports.todoHandler = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await TodoModel.find({_id: id})
        res.json(todo)
    } catch (error) {
        console.log(error)
    }
  };


 // update a todo
module.exports.updateTodoHandler = async (req, res) => {
    try {
        const {id} = req.params
        const {title, description} = req.body
        await TodoModel.updateOne({_id: id}, {
            $set: {
                title: title,
                description: description
            }
        })

        const updatedTodo = await TodoModel.find({_id: id})
         res.json(updatedTodo)
    } catch (error) {
        console.log(error)
    }
  };


 // delete a todo
module.exports.deleteTodoHandler = async (req, res) => {
    try {
        const {id} = req.params
        await TodoModel.deleteOne({_id: id})
        res.json("Todo successfully deleted!")
    } catch (error) {
        console.log(error)
    }
  };
