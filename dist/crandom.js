"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class crandom {
    /**
     * Generates a random number in the given range (inclusive)
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator, default is 0, increment for harder, decrement for easier (max dec: -2)
     * @returns {Number} number generated in the given range
     */
    static rand(min, max, difficulty = crandom.defaultDifficulty) {
        var _a;
        if (min > max)
            throw new Error('[RANGE_ERROR] Min value cannot be greater than max value.');
        if (min === undefined || max === undefined)
            throw new Error('[UNDEFINED_VALUES] Min and max values cannot be undefined.');
        let possibilityMap = crandom.mapPossibilites(min, max, difficulty);
        let generatedRandom = crandom.generateRandom(min, max, difficulty);
        return (_a = crandom.finder(generatedRandom, possibilityMap)) !== null && _a !== void 0 ? _a : min;
    }
    /**
     * Sets the default difficulty
     * @param {Number} diff Difficulty value
     */
    static setDifficulty(diff) {
        crandom.defaultDifficulty = diff;
    }
    /**
     * Finds the given number inside map and returns the value
     * @param {Number} value Value to find
     * @param {Map} map Map that contains rarity ranges
     * @returns {Number} Random number in the desired range
     */
    static finder(value, map) {
        for (const key of map.keys()) {
            if (value >= key[0] && value <= key[1])
                return map.get(key);
        }
    }
    /**
     *
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator
     * @returns {Map} Map of the possibilities
     */
    static mapPossibilites(min, max, difficulty) {
        let map = new Map();
        let lastStartPoint = Math.pow(min, difficulty);
        for (let i = 0; i <= (max - min); i++) {
            // determine range
            let valueRange = [lastStartPoint, lastStartPoint + (Math.pow(max - i, difficulty) - Math.pow(max - i - 1, difficulty)) - 1];
            // assign max value for the next iteration
            lastStartPoint = valueRange[1] + 1;
            // check for max^difficulty value
            valueRange[1] = valueRange[1] > Math.pow(max, difficulty) ? Math.pow(max, difficulty) : valueRange[1];
            map.set(valueRange, min + i);
        }
        return map;
    }
    /**
     * Generates a random in the possibility range
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator
     * @param {Number} bias Bias of the randomizer (feature)
     * @returns {Number} Randomly generated number in possibility range
     */
    static generateRandom(min, max, difficulty, bias = 0) {
        const randomNumber = (Math.random() * (Math.pow(max, difficulty) - Math.pow(min, difficulty))) + Math.pow(min, difficulty) + 0.1;
        return Math.floor(randomNumber);
    }
}
exports.default = crandom;
// default difficulty of the power scale
crandom.defaultDifficulty = 3;
