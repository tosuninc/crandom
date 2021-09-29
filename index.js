/**
 * CRandom
 * Author: Alper Berber <berber@sabanciuniv.edu>
 * Version: 1.0.0
 */
class CRandom {
    constructor(){
        this.defaultDifficulty = 3; // to the power
    }

    /**
     * Generates a random number in the given range (inclusive)
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator, default is 0, increment for harder, decrement for easier (max dec: -2)
     * @returns {Number} number generated in the given range
     */
    rand(min, max, difficulty = this.defaultDifficulty){
        let possibilityMap = this.mapPossibilites(min, max, difficulty);
        let generatedRandom = this.generateRandom(min, max, difficulty);
        return this.finder(generatedRandom, possibilityMap);
    }

    /**
     * Sets the default difficulty
     * @param {Number} diff Difficulty value
     */
    setDifficulty(diff){
        this.defaultDifficulty = diff;
    }

    /**
     * Finds the given number inside map and returns the value
     * @param {Number} value Value to find
     * @param {Map} map Map that contains rarity ranges
     * @returns {Number} Random number in the desired range
     */
    finder(value, map){
        for(const key of map.keys()){
            if(value >= key[0] && value <= key[1]) return map.get(key);
        }
    }

    /**
     * 
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator
     * @returns {Map} Map of the possibilities
     */
    mapPossibilites(min, max, difficulty){
        let map = new Map();

        let lastStartPoint = Math.pow(min, difficulty);
        for(let i = 0; i <= (max-min); i++){
            // determine range
            let valueRange = [lastStartPoint, lastStartPoint + ( Math.pow(max-i, difficulty) - Math.pow(max-i-1, difficulty) ) - 1]

            // assign max value for the next iteration
            lastStartPoint = valueRange[1] + 1;

            // check for max^difficulty value
            valueRange[1] = valueRange[1] > Math.pow(max, difficulty) ? Math.pow(max, difficulty) : valueRange[1];

            map.set(valueRange, min+i);

        }
        return map;
    }

    /**
     * Generates a random in the possibility range
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator
     * @param {Number} bias Bias of the randomizer (not working)
     * @returns {Number} Randomly generated number in possibility range
     */
    generateRandom(min, max, difficulty, bias = 0){
        let randomNumber = (Math.random() * (Math.pow(max, difficulty) - Math.pow(min, difficulty))) + Math.pow(min, difficulty) + 1;
        return Math.floor(randomNumber)
    }
}
module.exports = CRandom;
