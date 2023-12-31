"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculation = void 0;
function calculation() {
    let sideLength = 1000;
    let topArray = new Array(sideLength).fill(0);
    let leftArray = new Array(sideLength).fill(0);
    let bottomArray = new Array(sideLength).fill(0);
    let rightArray = new Array(sideLength).fill(0);
    let square = [topArray, leftArray, bottomArray, rightArray];
    let rand1 = Math.floor(Math.random() * sideLength);
    let rand2 = Math.floor(Math.random() * sideLength);
    while (rand1 == rand2) {
        rand2 = Math.floor(Math.random() * sideLength);
    }
    square[Math.floor(Math.random() * 4)][rand1] = 1;
    square[Math.floor(Math.random() * 4)][rand2] = 1;
    let side1 = -1;
    let side2 = -1;
    for (let i = 0; i < square.length; i++) {
        let countOnSide = 0;
        for (let j = 0; j < square[i].length; j++) {
            if (square[i][j] == 1) {
                countOnSide += 1;
            }
        }
        if (countOnSide == 2) {
            return false;
        }
        else if (countOnSide == 1) {
            if (side1 == -1) {
                side1 = i;
            }
            else {
                side2 = i;
            }
        }
    }
    if (side1 - side2 == 2 || side2 - side1 == 2) {
        return true;
    }
    let a = square[side1].indexOf(1);
    let a_squared = a * a;
    let b = square[side2].indexOf(1);
    let b_squared = b * b;
    let length = Math.sqrt(a_squared + b_squared);
    if (length > sideLength) {
        return true;
    }
    else {
        return false;
    }
    return undefined;
}

let results = [];
let trueVales = 0;
for (let i = 0; i < 100000; i++) {
    if (typeof (calculation_1.calculation) != undefined) {
        let answer = (0, calculation_1.calculation)();
        results.push(answer);
        if (answer == true) {
            trueVales += 1;
        }
    }
}
let probability = trueVales / results.length;
console.log(`Probability to 3dp: \n ${probability.toFixed(3)}`);
