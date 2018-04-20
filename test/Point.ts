

import Point from "../src/Point";

let A = Point.createSomePoint("A");
let B = A.createPointSomewhereElse("B");
let C = Point.createSomePoint("C");

console.log(`A at same place as B? ${A.isAtSamePlace(B)}`);
console.log(`B at same place as A? ${B.isAtSamePlace(A)}`);
console.log(`A at same place as C? ${A.isAtSamePlace(C)}`);
console.log(`C at same place as B? ${C.isAtSamePlace(B)}`);
