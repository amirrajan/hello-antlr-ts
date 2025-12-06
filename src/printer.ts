import { CommonTokenStream, CharStream, ATN, ATNDeserializer, DecisionState, DFA, Lexer, LexerATNSimulator, RuleContext, PredictionContextCache, Token  } from "antlr4";
import ExprLexer from "./grammar/ExprLexer";
import ExprParser from "./grammar/ExprParser";

export function printParseTree(input: string): string {
    const chars = new CharStream(input);
    const lexer = new ExprLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new ExprParser(tokens);
    const tree = parser.expr();
    return tree.toStringTree(parser.ruleNames, parser);
}
