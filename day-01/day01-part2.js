const fs = require("fs");

const lookup = new Map();
lookup.set("one", "o1e");
lookup.set("two", "t2o");
lookup.set("three", "t3e");
lookup.set("four", "f4r");
lookup.set("five", "f5e");
lookup.set("six", "s6x");
lookup.set("seven", "s7n");
lookup.set("eight", "e8t");
lookup.set("nine", "n9e");

const lines = fs.readFileSync("day01-input.txt", "utf-8").split("\n");
var sum = 0;

lines.forEach(line => {
    sum += getNumberFromLine(line);
})

console.log(sum);

function getNumberFromLine(line) {
    let leftmost = -1;
    let rightmost = -1;

    replaceNumStrs(line).split("").forEach( ch => {
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

function replaceNumStrs(line) {
    let keys = lookup.keys();
    let currKey = keys.next();
    while(!currKey.done) {
        if(line.search(currKey.value) != -1) {            
            line = line.replace(currKey.value, lookup.get(currKey.value));
            keys = lookup.keys();
        } else {
            currKey = keys.next();
        } 
    }
    return line;
}

function isNumeric(char) {
    return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57);
}