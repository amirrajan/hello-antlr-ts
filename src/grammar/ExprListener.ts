// Generated from ./src/grammar/Expr.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./ExprParser";
import { ExprContext } from "./ExprParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExprParser`.
 */
export default class ExprListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `ExprParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

