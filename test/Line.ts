

import Point from "../src/Point";
import Line from "../src/Line";

let A = Point.createSomePoint("A");
let B = A.createPointSomewhereElse("B");
let AB = Line.join(A, B);
// let C = Point.createSomePoint("C");
console.log(`Point ${A}, point ${B} and line ${AB}`);
console.log(`A at end of AB? ${AB.isPointAtEndOfLine(A)}`);
console.log(`B at end of AB? ${AB.isPointAtEndOfLine(B)}`);
