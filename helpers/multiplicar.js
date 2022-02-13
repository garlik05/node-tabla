const fs = require('fs');
const color = require('colors');

// hacemos una promesa con la funcion crear archivo asignando la palabra async al parametro base

const crearArchivo = async(base = 5,listar = false,hasta = 10) => { 
  try {
  
  let salida,consola = "";


  for (let i = 1; i <= hasta ; i++) {
    salida += `            ${base} x ${i} = ${base * i}\n`;
    consola += `            ${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
  }

  if(listar){
    console.clear();
    console.log("===================================".rainbow);
    console.log(`          Tabla del ${base}          `.blue.bgWhite);
    console.log("===================================".rainbow);
    console.log(consola);
    
  }


  fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

  return `tabla-${base}.txt creada`.green;

}catch (err) {
  throw err;
}
  
  
};

module.exports = {
    crearArchivo 
}