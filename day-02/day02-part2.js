const fs = require("fs");

const games = fs.readFileSync("day02-input.txt", "utf-8").split("\n");

const validGamesSum = games.map( game => {
    const minBalls = {
        red: 0,
        green: 0,
        blue: 0
    };
    game.split(": ")[1]
        .split("; ")
        .forEach(pick => {
            const draws = pick.split(", ")
            return draws.forEach(draw => {
                const [count, colour] = draw.split(" ");
                if(minBalls[colour] < parseInt(count)) {
                    minBalls[colour] = parseInt(count);
                }
            });
        });
    return minBalls.red * minBalls.green * minBalls.blue;
}).reduce((sum, validGame) => {
    return sum + validGame;
});

console.log(validGamesSum);