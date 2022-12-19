const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasksList = await Task.find();
        return res.render("index", { tasksList, task: null, taskDelete: null });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
    return res.render("index");
}

const createTask = async (req, res) => {

    const task = req.body;

    if (!task.task && !task.description) {
        return res.redirect("/")
    }

    try {
        await Task.create(task)
        return res.redirect("/")
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
};
const getById = async (req,res) => {
    try {
        const taskDelete = await Task.findOne({_id: req.params.id})
        const tasksList = await Task.find();
        if(req.params.method == "update"){
        const task = await Task.findOne({_id: req.params.id})
        res.render("index", {task, taskDelete: null,tasksList})
    }else{
        const taskDelete = await Task.findOne({_id: req.params.id})
        res.render("index", {task: null, taskDelete,tasksList})
    }
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const updateOneTask = async (req,res) =>{
    try {
        const task = req.body;
        const description = req.body
        await Task.updateOne({ _id: req.params.id}, task,description);
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

const deleteOneTask = async (req,res) => {
    try {
        await Task.deleteOne({_id: req.params.id})
        res.redirect("/")
    }catch(err){
        res.status(500).send({ error: err.message })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getById,
    updateOneTask,
    deleteOneTask
};