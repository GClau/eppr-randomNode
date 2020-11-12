const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Adivina un numero ? ", function(numero) {
    console.log( 
        "adivina el numero que estoy pensando"
    )
    var random = between(1,3)
  console.log(
      random
  )
  if (numero == random){
console.log("Felicidades!!")
  } else {
    console.log(`Tu dijiste: ${numero}`);
  }
  
    rl.close();
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
  