export default class crandom {
    static defaultDifficulty: number;
    /**
     * Generates a random number in the given range (inclusive)
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator, default is 0, increment for harder, decrement for easier (max dec: -2)
     * @returns {Number} number generated in the given range
     */
    static rand(min: number, max: number, difficulty?: number): number;
    /**
     * Sets the default difficulty
     * @param {Number} diff Difficulty value
     */
    private static setDifficulty;
    /**
     * Finds the given number inside map and returns the value
     * @param {Number} value Value to find
     * @param {Map} map Map that contains rarity ranges
     * @returns {Number} Random number in the desired range
     */
    private static finder;
    /**
     *
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator
     * @returns {Map} Map of the possibilities
     */
    private static mapPossibilites;
    /**
     * Generates a random in the possibility range
     * @param {Number} min Minimum number
     * @param {Number} max Maximum number
     * @param {Number} difficulty Difficulty of the random generator
     * @param {Number} bias Bias of the randomizer (feature)
     * @returns {Number} Randomly generated number in possibility range
     */
    private static generateRandom;
}
