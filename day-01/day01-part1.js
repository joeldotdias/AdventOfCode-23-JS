const fs = require("fs");

const lines = fs.readFileSync("day01-input.txt", "utf-8").split("\n");
var sum = 0;

lines.forEach(line => {
    sum += getNumberFromLine(line);
})

console.log(sum);

function getNumberFromLine(line) {
    let leftmost = -1;
    let rightmost = -1;
    line.split("").forEach( ch => {
        if(isNumeric(ch)) {
            let num = parseInt(ch);
            if(leftmost == -1) {
                leftmost = num;
                rightmost = num;
            } else {
                rightmost = num;
            }
        }
    })

    return leftmost * 10 + rightmost;
}

function isNumeric(char) {
    return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);
}