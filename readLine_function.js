const readline = require('readline');

const result = readline.createInterface({
  input: process.stdin,  // Mohit
  output: process.stdout //
})

result.question("Please enter your name: ", (arg) =>{
  console.log(`Hello ${arg}`)
  result.close()
})

