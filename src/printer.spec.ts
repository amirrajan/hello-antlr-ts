import { printParseTree } from "./printer";

describe("printer", () => {
    it("should print parse tree for simple expression", () => {
        const input = "1+2";
        const expectedOutput = "(expr (expr 1) + (expr 2))";
        const output = printParseTree(input);
        expect(output).toBe(expectedOutput);
    });
});
