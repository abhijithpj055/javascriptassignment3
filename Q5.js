var readlineSync = require('readline-sync');
let rows=readlineSync.question('Enter number of rows: ');

function printPattern()
{
    for(let i=1;i<=rows;i++)
    {
        console.log("*".repeat(i));
    }
}

printPattern();