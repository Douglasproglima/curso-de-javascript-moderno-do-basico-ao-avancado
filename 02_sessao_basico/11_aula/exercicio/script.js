let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

console.log(varA, varB, varC);
console.log("");

/* Old Soluction
let varAB = varA;
varA = varB;
varB = varC;
varC = varAB;
*/

//New Soluction
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
console.log("");
