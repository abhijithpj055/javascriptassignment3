var readlineSync = require('readline-sync');
let num=readlineSync.question('Enter the n th number: ');
 function printNumber(){
    for(let i=1;i<=num;i++)
    {
      console.log(i);
    }
}
printNumber();