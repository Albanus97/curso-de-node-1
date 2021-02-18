
const fs = require("fs");
const crearArchivo= (base = 5)=>{
    console.log("TABULA QUINTA"); 
    let salida = "";
    for (let i = 1; i <= 10; i++) {
         let result = 5* i ;
         salida += `${base} x ${i} = ${base * i}\n`;  
    }
    console.log (salida);
    fs.writeFileSync("tabla del 5.txt",salida); 
        console.log ("listo calisto");
    
}
 module.exports = {
     crearArchivo
 }