const express= require('express');
const taskRouter = require('./routes/task');
const logger = require('./utils/logger');
const fs= require('fs');
const soap = require('soap');
const taskSoap = require('./soap/tasks');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/api/tasks', taskRouter);

app.use((request, responnse)=>{
    logger.warn("Not found");
    response.status(404).send("Not found page");
})

const server = app.listen(3000, ()=>{
    logger.info("El servidor esta activo y corriendo en el puerto 3000");

    const wsdlPath = path.join(__dirname, 'soap', 'taskService.wsdl');
    const wsdl = fs.readFileSync(wsdlPath, 'utf-8');

    soap.listen(server, '/wsdl', taskSoap, wsdl);
});