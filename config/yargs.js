const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base de multiplicar'
  })
  .option("l",{
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option("h",{
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Muestra hasta que numero instancia'
  })
  .check((argv, options) => {
    console.log("yargs", argv);
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv;