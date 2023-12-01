var readlineSync = require('readline-sync');
let name=readlineSync.question('Enter your name : ');

function greetMessage(){
    return name;
}
let gm=greetMessage();
console.log("Hellow ",gm);