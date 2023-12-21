const fs = require("fs");

const lines = fs.readFileSync("day03-input.txt", "utf-8").split("\n");

let rows = lines.length;
let cols = lines[0].length;

let nums = [];

for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
        let n = "" + lines[i][j];
        if(isNaN(n)) continue;

        let num = n;
        while(++j < cols) {
            if(isNumeric(lines[i][j])) {
                num += lines[i][j];
            } else {
                break;
            }
        }

        let top = i === 0 ? "" : lines[i - 1].substring(j - num.length - 1, j + 1);
        let bottom = i === rows - 1 ? "" : lines[i + 1].substring(j - num.length - 1, j + 1);
        let left = j - num.length - 1 <= 0 ? "" : lines[i][j - num.length - 1];
        let right = lines[i][j];

        if(hasSymbol(top) || hasSymbol(bottom) || hasSymbol(left) || hasSymbol(right)) {
            nums.push(parseInt(num));
        }
    }
}

let sum = 0;
nums.forEach(n => {
    sum += n;
})

console.log(sum);

function isNumeric(ch) {
    return (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57);
}

function hasSymbol(seq) {
    let flag = false;
    
    if(seq === undefined) {
        return flag;
    }
    else if(seq.length === 0) {
        return flag;
    }
    else {
        seq.split("").forEach( s => {
            flag = flag || (isNaN(s) && s != ".");
        })
        return flag;
    }
}