const fs = require("fs");

const lines = fs.readFileSync("day04-input.txt", "utf-8").split("\n");

const cards = [];
let pileOfCards = 0;

lines.map(line => {
    const winNums = line.split(": ")[1].split(" | ")[0].split(" ").map(w => parseInt(w)).filter(w => w!= NaN);
    const myNums = line.split(": ")[1].split(" | ")[1].split(" ").map(m => parseInt(m)).filter(m => m!= NaN);
    cards.push({winNums: winNums, myNums: myNums, copies: 1});
})

cards.forEach((card, index) => {
    let matches = 0;
    let currCopies = card.copies;
    card.winNums.forEach(w => {
        if(card.myNums.includes(w) && Number.isInteger(w)) {
            matches++;
        }
    })
    for(let i = 1; i <= matches; i++) {
        cards[index + i].copies += currCopies;
    }
})

cards.forEach(card => {
    pileOfCards += card.copies;
})

console.log(pileOfCards);