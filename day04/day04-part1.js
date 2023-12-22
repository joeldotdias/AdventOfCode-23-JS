const fs = require("fs");

const lines = fs.readFileSync("day04-input.txt", "utf-8").split("\n");

const cards = [];
let score = 0;

lines.map(line => {
    const winNums = line.split(": ")[1].split(" | ")[0].split(" ").map(w => parseInt(w));
    const myNums = line.split(": ")[1].split(" | ")[1].split(" ").map(m => parseInt(m));
    cards.push({winNums: winNums, myNums: myNums});
})

cards.forEach(card => {
    let matches = 0;
    card.winNums.forEach(w => {
        if(card.myNums.includes(w) && Number.isInteger(w)) {
            matches++;
        }
    })
    score += matches != 0 ? Math.pow(2, matches - 1) : 0;
})

console.log(score);