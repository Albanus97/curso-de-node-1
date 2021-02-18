
const{crearArchivo} = require ("./helpers/multiplicar");
console.clear();

const argv= require("yargs")
.option("b",{
    alias: "base",
    type: "number",
    demandOption: true
})
.check((argv,options)=>{
    if(isNaN(argv.b)){
       throw "pone un numero, pelotudo!"
    }
    return true;
})
.argv;




//const base = 5;


//crearArchivo(base);
//const[,,arg3="pingo" ] = process.argv;
//const[,base="choto" ] = arg3.split("=");
//console.log(base);
console.log(argv);