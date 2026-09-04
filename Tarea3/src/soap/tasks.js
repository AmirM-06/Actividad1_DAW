const taskService = require('../service/taskService');
const logger = require('../utils/logger');

module.exports = 
{
    TaskService:{
        TaskServicePort:
        {
            GetTasks(args, callback){
                const tasks = TaskService.getTask();
                logger.info("Lista de tareas enviada en soap")
                callback({tasks: tasks});
            },
            AddTask(args, callback)
            {
                const task = taskService.createTask(args.title);
                logger.info("Tarea creada en soap");
                callback({task}); 
                
            }
        }
    }
}