var readlineSync = require('readline-sync');
let num=readlineSync.question('Enter a number : ');
 function printEvenNumbers(n){
    console.log('Even numbers are:')
    for(let i=2;i<=num;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
printEvenNumbers();