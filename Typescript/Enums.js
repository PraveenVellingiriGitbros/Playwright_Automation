"use strict";
/*
Enums - Fixed set of constant values that should not change.
Ex: Environments like - QA, DEV, PRE_Prod, PROD

npx tsc Enums.ts - Convert into Enums.ts file to Javascript file and run the Enums.js
*/
var Environment;
(function (Environment) {
    Environment["QA"] = "QA";
    Environment["DEV"] = "DEV";
    Environment["PRE_PROD"] = "PRE PROD";
    Environment["PROD"] = "PROD";
})(Environment || (Environment = {}));
const currentENV = Environment.QA;
switch (currentENV) {
    case Environment.QA:
        (console.log("Running QA"));
        break;
}
