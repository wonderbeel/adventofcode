import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.166.0/testing/bdd.ts';
import {
	myMoveToResult,
	myMoveToShape,
	opponentMoveToShape,
	resultToScore,
	shapeResultPairs,
	shapesPairResults,
	shapesToScore,
} from '../src/main.ts';

describe('part 1', () => {
	it('opponent played ROCK, I played PAPER', () => {
		assertEquals(opponentMoveToShape.get('A'), 'ROCK');
		assertEquals(myMoveToShape.get('Y'), 'PAPER');
		assertEquals(shapesPairResults.get('PAPER,ROCK'), 'WIN');
		assertEquals(shapesToScore.get('PAPER'), 2);
		assertEquals(resultToScore.get('WIN'), 6);
	});
	it('opponent played PAPER, I played ROCK', () => {
		assertEquals(opponentMoveToShape.get('B'), 'PAPER');
		assertEquals(myMoveToShape.get('X'), 'ROCK');
		assertEquals(shapesPairResults.get('ROCK,PAPER'), 'LOSE');
		assertEquals(shapesToScore.get('ROCK'), 1);
		assertEquals(resultToScore.get('LOSE'), 0);
	});

	it('opponent played SCISSORS, I played SCISSORS', () => {
		assertEquals(opponentMoveToShape.get('C'), 'SCISSORS');
		assertEquals(myMoveToShape.get('Z'), 'SCISSORS');
		assertEquals(shapesPairResults.get('SCISSORS,SCISSORS'), 'DRAW');
		assertEquals(shapesToScore.get('SCISSORS'), 3);
		assertEquals(resultToScore.get('DRAW'), 3);
	});
});

describe('part 2', () => {
	it('opponent played ROCK, I DRAW', () => {
		assertEquals(opponentMoveToShape.get('A'), 'ROCK');
		assertEquals(myMoveToResult.get('Y'), 'DRAW');
		assertEquals(shapeResultPairs.get('ROCK,DRAW'), 'ROCK');
		assertEquals(shapesToScore.get('ROCK'), 1);
		assertEquals(resultToScore.get('DRAW'), 3);
	});
	it('opponent played PAPER, I LOSE', () => {
		assertEquals(opponentMoveToShape.get('B'), 'PAPER');
		assertEquals(myMoveToResult.get('X'), 'LOSE');
		assertEquals(shapeResultPairs.get('PAPER,LOSE'), 'ROCK');
		assertEquals(shapesToScore.get('ROCK'), 1);
		assertEquals(resultToScore.get('LOSE'), 0);
	});
	it('opponent played SCISSORS, I WIN', () => {
		assertEquals(opponentMoveToShape.get('C'), 'SCISSORS');
		assertEquals(myMoveToResult.get('Z'), 'WIN');
		assertEquals(shapeResultPairs.get('SCISSORS,WIN'), 'ROCK');
		assertEquals(shapesToScore.get('ROCK'), 1);
		assertEquals(resultToScore.get('WIN'), 6);
	});
});
