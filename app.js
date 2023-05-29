//console.clear()
const argv = require('process').argv
const tarea = require('./funcionesDeTareas')
require('colors')

const op = argv[2]

switch(op){

    case "listar":
        tarea.listar()
        break;

    default:
        if(op === undefined){
            console.log("Atención-Tienes que pasar una acción.".yellow);
            
            break;
        }else{
            console.log("No entiendo qué quieres hacer".red);
        break;
    }

}