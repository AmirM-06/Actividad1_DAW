# Tarea3: Desarrollo de Servicios Web con Node.js

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo De Aplicaciones Web |
| **Docente** | Ramirez Martinez Luis Antonio |
| **Actividad** | Desarrollo de Servicios Web con Node.js |
| **Alumno** | Amir Ovedi Mendiaz Rodriguez |
| **Matrícula** | 385686 |
| **Fecha de entrega** | 04/09/2026 |

## Descripción

Esta actividad consiste en la creación de un todo-list utilizando node.js. Mediante el cual se puede
crear nuevas tareas, actualizar las tareas ya creadas, ver tareas y eliminar tareas.

## Objetivo

El objetivo de la actividad es poner a prueba los conocimientos que se supone que debemos tener para crear un api y analizar y ver como podemos procesar peticiones y respuestas.

## Tecnologías utilizadas
- Node.js: Entorno de ejecución para JavaScript en el servidor.
- JavaScript: Lenguaje de programación principal del proyecto.
- Express.js (v5.2.1): Framework web
- log4js: Librería utilizada para el registro de logs
- soap: Librería utilizada para la integración y consumo de servicios web basados en el protocolo SOAP.
- Jest: Herramienta y framework de pruebas unitarias (Desarrollo).
- ESLint: Herramienta de análisis estático para identificar errores y mantener un estilo de código limpio (Desarrollo).

## Requisitos previos
- Node.js (v18.0.0 o superior)
- npm (v9.0.0 o superior)

## Instalación

*Indica, paso a paso, cómo obtener el proyecto y dejarlo listo para ejecutarse a partir de una clonación limpia del repositorio.*

Clonar el repositorio del proyecto
*git clone <URL_DEL_REPOSITORIO>*

Navegar al directorio del proyecto
*cd <NOMBRE_DEL_REPOSITORIO>*

Instalar todas las dependencias 
*npm install*

## Ejecución
Para poner el funccionamiento el servidor web y empezar a hacer realizar peticiones:
*npm run dev*

## Scripts / comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev`  | incia el servidor en modo de desarrollo |
| `npm run test` | Ejecuta el set de pruebas unitarias     |
| `npm run lint` | Analiza todo el proyecto desde la raiz  |
| `ctrl + c`     | Detiene el servidor una vez iniciado    |

## Funcionalidades / uso

*Crear una tarea utilizando metodo POST:* para crear una tarea por medio de este metodo
es necesario acceder mediante la ruta api/tasks/ y enviar un objeto JSON, por ejemplo: {"title": "el titulo de la tarea"}.

*Obtener todas las tareas utilizando el método GET:* para obtener el listado completo de tareas registradas por medio de este método es necesario acceder mediante la ruta api/tasks/.

*Obtener una tarea específica utilizando el método GET:* para consultar una tarea en especifico es necesario acceder a la ruta api/tasks/:id (id es el identificador de la tarea que desea buscar y se asigno durante su creación).

*Actualizar una tarea utilizando el método PUT:* para modificar una tarea ya existente haciendo uso de este método es necesario acceder a la ruta api/tasks/:id enviando el identificador de la tarea a actualizar y un objeto JSON en el cuerpo con los datos a modificar.
Ejemplo: 
{
    "title": "Nuevo titulo de la tarea",
    "completed": "true/false"
}

*Eliminar una tarea utilizando el método DELETE:* para eliminar una tarea del sistema por medio de este método es necesario acceder a la ruta api/tasks/:id especificando el identificador de la tarea que se desea borrar y posteriormente saldra la tarea eliminada.

## Pruebas
Para realizar pruebas unitarias en esta practica se utilizo el framework Jest.
Para correr estas pruebas ejecute:
*npm run test*
Las pruebas se aseguran de que lo siguiente se ejecute de manera correcta:
- Creación de una tarea
- Consulta de una tarea
- Modificación de una tarea
- Eliminación de una tarea
## Análisis de calidad de código
Para analizar la calidad del codigo en esta practica se utilzo la herramienta EsLint.
Este analisis se realizará al ejecutar el comando
*npm run lint*

## Estructura general del proyecto

*Presenta brevemente cómo está organizado el código fuente.*

```text
proyecto/
├── src/                  # Codigo fuente de la aplicación
├── tests/                # Carpeta de pruebas
├── eslint.config.js      # Configuración del linter
├── package.json          # Dependencias y scripts del proyecto
├── package-lock.json     # Versiones de dependencias
└── README.md             # Documentación general del proyecto
```

## Autor

Amir Ovedi Mendiaz Rodriguez — 385686
