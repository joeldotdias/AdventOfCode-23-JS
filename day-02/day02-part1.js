const fs = require("fs");

class GameRecord {
    constructor(id, picks) {
        this.id = id;
        this.picks = picks;
    }
}

class ColourRecord {
    constructor(colour, n) {
        this.colour = colour;
        this.n = n;
    }
}

const lookupTable = new Map([
    ["red", 12],
    ["green", 13],
    ["blue", 14],
]);

const lines = fs.readFileSync("day02-input.txt", "utf-8").split("\n");

var sum = 0;
const gameRecords = [];

lines.map( line => {
    const gameId = parseInt(line.split(": ")[0].substring(5));
    const picks = getPickRecords(line.split(":")[1].split(";"));
    gameRecords.push(new GameRecord(gameId, picks));
})


for(let i = 0; i < gameRecords.length; i++) {
    let gameRec = gameRecords[i];
    var flag = true;

    const picks = gameRec.picks;
    for(let i = 0; i < picks.length; i++) {
        const pick = picks[i];
        if(pick.n > lookupTable.get(pick.colour)) {
            flag = false;
            break;
        }
    }
    if(flag) {
        sum += gameRec.id;
    }
}

console.log(sum);

function getPickRecords(picksInfo) {
    const picks = [];
    picksInfo.forEach( pick => {
        pick.split(",").forEach( colourBalls => {
            colourBalls = colourBalls.trim();
            let colour = colourBalls.split(" ")[1]
            let n = parseInt(colourBalls.split(" ")[0]);
            picks.push(new ColourRecord(colour, n));
        })
    })
    return picks;
}