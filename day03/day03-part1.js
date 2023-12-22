const fs = require("fs");

const lines = fs.readFileSync("day03-input.txt", "utf-8").split("\n");

const syms = [];
const nums = [];
let sum = 0;
let num = "";

lines.forEach((line, y) => {
    let numsInRow = [];
    line.split("").forEach((ch, x) => {
        if (isNumeric(ch)){
            num += ch; 
        } else {
            if(isNaN(ch) && ch != ".") {
                syms.push({s: ch, x: x, y: y});
            }
            if(num != "") {
                let realx = x === 0 ? 140 : x
                numsInRow.push({n: num, x1: realx - num.length, x2: realx - 1});
                num = "";
            }
        } 
    })
    nums.push(numsInRow);
})

syms.forEach(sym => {
    sx = sym.x, sy = sym.y;
    for(let i = sy - 1; i <= sy + 1; i++) {
        nums[i].forEach(num => {
            let nx1 = num.x1, nx2 = num.x2;
            if((nx1 === sx || nx1 === sx - 1 || nx1 === sx + 1 || nx2 === sx || nx2 === sx  - 1|| nx2 === sx + 1)) {
                sum += parseInt(num.n);
            }
        })
    }
})

console.log(sum);

function isNumeric(ch) {
    return (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57);
}