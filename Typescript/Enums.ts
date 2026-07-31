/* 
Enums - Fixed set of constant values that should not change.
Ex: Environments like - QA, DEV, PRE_Prod, PROD

npx tsc Enums.ts - Convert into Enums.ts file to Javascript file and run the Enums.js
*/

enum Environment  {

    QA = 'QA',
    DEV = 'DEV',
    PRE_PROD = 'PRE PROD',
    PROD = 'PROD'
}

let baseUrl = Environment.QA
console.log(baseUrl);



