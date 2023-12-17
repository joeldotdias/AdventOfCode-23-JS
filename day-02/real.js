const fs = require("fs");

class GameRecord {
    constructor(id, picks) {
        this.id = id;
        this.picks = picks;
        this.minRed = 0;
        this.minGreen = 0;
        this.minBlue = 0;
    }

    setMinRed(minRed) {
        this.minRed = minRed;
    }
    setMinGreen(minGreen) {
        this.minGreen = minGreen;
    }
    setMinBlue(minBlue) {
        this.minBlue = minBlue;
    }
}

class colourPick {
    constructor(colour, n) {
        colour = this.colour
        n = this.n;
    }
}

const lookupTable = new Map([
    ["red", 12],
    ["green", 13],
    ["blue", 14],
]);

const lines = fs.readFileSync("example.txt", "utf-8").split("\n");

const gameRecords = [];
var sum = 0;

lines.map( line => {
    let id = parseInt(line.split(": ")[0].substring(5));
    let picks = line.split(": ")[1].split("; ");
    console.log(picks);
    const colourPicks = [];
    picks.map( pick => {
        colourPicks.push(getColourPicks(pick));
    });
    gameRecords.push(new GameRecord(id, colourPicks));
});

console.log(gameRecords[0].picks);

// for(let gameRecord in gameRecords) {
//     for(let i = 0; i< gameRecords.picks.length; i++) {
//         //console.log(`${gameRecord.id} ${pick}`);
//         pick = gameRecord.picks[i];
//         if(i == 0) {

//         }
//     }
// }

function getColourPicks(pick) {
    const colourPicks = [];

    pick.split(", ").map( colourPick => {
        colourPicks.push({
            colour: colourPick.split(" ")[1],
            n: parseInt(colourPick.split(" ")[0])
        });
    });

    console.log(colourPicks);
    return colourPicks;
}