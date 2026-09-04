describe('taskService', ()=> {
    let taskService;

    beforeEach(()=>
    {
        jest.resetModules();
        taskService = require('../src/service/taskService');
    });

    test('crear una tarea', ()=>
    {
        const task = taskService.createTask("Estudiar node.js");
        expect(task).toMatchObject(
            {
                title: "Estudiar node.js",
                complete: false
            }
        )
        expect(task.id).toBeDefined();
    });

    test('Consultar las tareas', ()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');

        expect(taskService.getTask()).toHaveLength(2);
    });

    test('Modificar una tarea', ()=>{
        const task = taskService.createTask("Estudiar node.js");
        const updateTask = taskService.updateTask(task.id, {completed: true})
        expect(updateTask.completed).toBe(true);

    });


    test('Eliminar tarea', ()=>{
 
        const task = taskService.createTask("Estudiar node.js");
        taskService.deleteTask(task.id);
        expect(taskService.getTask()).toHaveLength(0);

    });



});