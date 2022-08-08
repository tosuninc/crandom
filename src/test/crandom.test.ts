import "mocha";
import { expect } from "chai";
import crandom from '../crandom';

describe("crandom", () => {
    describe("functionality tests", () => {
        context("WHEN valid values are given", () => {
            it("SHOULD return a number in between 10-15", () =>{
                expect(crandom.rand(10, 15)).to.be.within(10, 15);
            });

            it("SHOULD return a number in between 1-2", () =>{
                expect(crandom.rand(1, 2)).to.be.within(1, 2);
            });

            it("SHOULD return 1", () =>{
                expect(crandom.rand(1, 1)).to.be.equals(1);
            });
        });

        context("WHEN invalid values are given", () => {
            it("SHOULD throw a range error", () =>{
                expect(() => crandom.rand(2, 1)).to.throw('[RANGE_ERROR] Min value cannot be greater than max value.');
            });
        });
    });
});