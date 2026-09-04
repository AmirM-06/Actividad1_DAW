const express = require('express');
const taskService = require('../service/taskService');
const logger = require('../utils/logger');


const router = express.Router();

//POST
router.post('/', (request, response)=>{
    let title = request.body.title;
    let task = taskService.createTask(title);
    logger.info(`Tarea con el id = ${task.id} creada.`);
    response.status(201).json(task);
})

//GET
router.get('/', (request, response)=>{
    response.json(taskService.getTask());
});

//GET
router.get('/:id', (request, response)=>{
    const id = request.params.id;
    response.json(taskService.getTaskById(id));
});

//PUT
router.put('/:id', (request, response)=>{
    const id = request.params.id;
    let taskToUpdate = taskService.updateTask(id, request.body);
    logger.info(`Tarea con el id = ${taskToUpdate.id} se ha modificado.`);
    response.json(taskToUpdate);

})


//DELETE
router.delete('/:id', (request, response)=>{
    const id = request.params.id;
    let taskToDelete =  taskService.deleteTask(id);
    logger.warn(`Tarea con el id = ${taskToDelete.id} ha sido eliminada.`);
    response.json(taskToDelete);
});


module.exports = router;