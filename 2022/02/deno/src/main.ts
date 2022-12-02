type Shape = 'ROCK' | 'PAPER' | 'SCISSORS';
type Result = 'LOSE' | 'DRAW' | 'WIN';
type OpponentMove = 'A' | 'B' | 'C';
type MyMove = 'X' | 'Y' | 'Z';

type Concat<S1 extends string, S2 extends string> = `${S1},${S2}`;
type ShapeShape = Concat<Shape, Shape>;
type ShapeResult = Concat<Shape, Result>;

const opponentMoveToShape = new Map<OpponentMove, Shape>([
	['A', 'ROCK'],
	['B', 'PAPER'],
	['C', 'SCISSORS'],
]);

const myMoveToShape = new Map<MyMove, Shape>([
	['X', 'ROCK'],
	['Y', 'PAPER'],
	['Z', 'SCISSORS'],
]);

const myMoveToResult = new Map<MyMove, Result>([
	['X', 'LOSE'],
	['Y', 'DRAW'],
	['Z', 'WIN'],
]);

const shapesToScore = new Map<Shape, number>([
	['ROCK', 1],
	['PAPER', 2],
	['SCISSORS', 3],
]);

const resultToScore = new Map<Result, number>([
	['LOSE', 0],
	['DRAW', 3],
	['WIN', 6],
]);

const shapesPairResults = new Map<ShapeShape, Result>([
	['ROCK,ROCK', 'DRAW'],
	['ROCK,PAPER', 'LOSE'],
	['ROCK,SCISSORS', 'WIN'],
	['PAPER,PAPER', 'DRAW'],
	['PAPER,SCISSORS', 'LOSE'],
	['PAPER,ROCK', 'WIN'],
	['SCISSORS,SCISSORS', 'DRAW'],
	['SCISSORS,ROCK', 'LOSE'],
	['SCISSORS,PAPER', 'WIN'],
]);

const shapeResultPairs = new Map<ShapeResult, Shape>([
	['ROCK,DRAW', 'ROCK'],
	['ROCK,LOSE', 'SCISSORS'],
	['ROCK,WIN', 'PAPER'],
	['PAPER,DRAW', 'PAPER'],
	['PAPER,LOSE', 'ROCK'],
	['PAPER,WIN', 'SCISSORS'],
	['SCISSORS,DRAW', 'SCISSORS'],
	['SCISSORS,LOSE', 'PAPER'],
	['SCISSORS,WIN', 'ROCK'],
]);

const safeSum = (a?: number, b?: number) => (a || 0) + (b || 0);

const roundScore = (result?: Result, shape?: Shape) =>
	(result && shape)
		? safeSum(shapesToScore.get(shape), resultToScore.get(result))
		: 0;

if (import.meta.main) {
	const input = await Deno.readTextFile('./src/input.txt');
	const lines = input.split('\n');

	let scorePart1 = 0;
	let scorePart2 = 0;

	lines.forEach((line) => {
		const [opponentMove, myMove] = line.split(' ') as [OpponentMove, MyMove];
		const opponentShape = opponentMoveToShape.get(opponentMove);

		if (opponentShape) {
			const myShape = myMoveToShape.get(myMove);
			const myResult = myMoveToResult.get(myMove);

			scorePart1 = safeSum(
				scorePart1,
				myShape &&
					roundScore(
						shapesPairResults.get(`${myShape},${opponentShape}`),
						myShape,
					),
			);

			scorePart2 = safeSum(
				scorePart2,
				myResult &&
					roundScore(
						myResult,
						shapeResultPairs.get(`${opponentShape},${myResult}`),
					),
			);
		}
	});

	console.log(`part1: ${scorePart1}; part2: ${scorePart2}`);
}

export {
	myMoveToResult,
	myMoveToShape,
	opponentMoveToShape,
	resultToScore,
	shapeResultPairs,
	shapesPairResults,
	shapesToScore,
};
