const routes = require("express").Router();
const TaskControllers = require('../controllers/TaskControllers');


routes.get("/", TaskControllers.getAllTasks);
routes.post("/create", TaskControllers.createTask);
routes.get("/getById/:id/:method", TaskControllers.getById);
routes.post("/updateOne/:id", TaskControllers.updateOneTask);
routes.get("/deleteOne/:id", TaskControllers.deleteOneTask);

module.exports = routes;