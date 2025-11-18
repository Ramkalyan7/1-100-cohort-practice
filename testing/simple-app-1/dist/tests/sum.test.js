import { sum, multiply } from "../index.js";
describe("sum", () => {
    it("add 1+2 to equal 3 ", () => {
        expect(sum(1, 2)).toBe(3);
    });
    it("add -1+1 to equal 0 ", () => {
        expect(sum(-1, 1)).toBe(0);
    });
});
describe("multiply", () => {
    it("multiply 2*3 to equal 6 ", () => {
        expect(multiply(2, 3)).toBe(6);
    });
    it("multiply -1*5 to equal -5 ", () => {
        expect(multiply(-1, 5)).toBe(-5);
    });
});
//# sourceMappingURL=sum.test.js.map