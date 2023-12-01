var readlineSync = require('readline-sync');
let n=readlineSync.question('Enter a number : ');
let square,sum=0;

function sumOfSquares(){
    for(let i=1;i<=n;i++)
    {
        square=i**2
        sum+=square
    }
    console.log("The sum of squares is =",sum);
}
sumOfSquares();