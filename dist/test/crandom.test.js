"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const crandom_1 = __importDefault(require("../crandom"));
describe("crandom", () => {
    describe("functionality tests", () => {
        context("WHEN valid values are given", () => {
            it("SHOULD return a number in between 10-15", () => {
                (0, chai_1.expect)(crandom_1.default.rand(10, 15)).to.be.within(10, 15);
            });
            it("SHOULD return a number in between 1-2", () => {
                (0, chai_1.expect)(crandom_1.default.rand(1, 2)).to.be.within(1, 2);
            });
            it("SHOULD return 1", () => {
                (0, chai_1.expect)(crandom_1.default.rand(1, 1)).to.be.equals(1);
            });
        });
        context("WHEN invalid values are given", () => {
            it("SHOULD throw a range error", () => {
                (0, chai_1.expect)(() => crandom_1.default.rand(2, 1)).to.throw('[RANGE_ERROR] Min value cannot be greater than max value.');
            });
        });
    });
});
