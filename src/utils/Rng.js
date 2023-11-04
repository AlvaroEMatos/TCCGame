import seedrandom from 'seedrandom';

var rng = seedrandom(Date.now());

export default {
    setSeed: (seed) => {
        rng = seedrandom(seed);
    },
    getRandom: (max = 1) => {
        return rng() * max;
    },
    getRandomInt: (max) => {
        return Math.floor(rng() * max);
    },
    next: () => {
        rng = seedrandom(rng());
    },
}