//funcionalidades de app
const fs = require("fs");
const tareasJSON = fs.readFileSync("./app-tareas/tareas.json","utf-8");


module.exports = {
    tareas : JSON.parse(tareasJSON),

    listar: function(tareas = this.tareas){
        console.log("----");
        tareas.forEach(({titulo,estado}) => {
            console.log(`titulo: ${titulo} -estado: ${estado}`.blue);
        });
    }
}

