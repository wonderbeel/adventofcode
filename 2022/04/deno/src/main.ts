type StringPair = `${number}-${number}`;
type Line = `${StringPair},${StringPair}`;
type Pair = [number, number];
const parsePair = (p: StringPair) => p.trim().split('-').map(Number) as Pair;
const lineToPairs = (l: Line) => (l.split(',') as StringPair[]).map(parsePair);
const pairIncluded = (a: Pair, b: Pair) => (a[0] >= b[0] && a[1] <= b[1]);
const pairOverlap = (a: Pair, b: Pair) =>
	(a[0] >= b[0] && a[0] <= b[1]) || (a[1] >= b[0] && a[1] <= b[1]);

const pairsIncluded = (pairs: Pair[]) =>
	pairIncluded(pairs[0], pairs[1]) || pairIncluded(pairs[1], pairs[0]);
const pairsOverlap = (pairs: Pair[]) =>
	pairOverlap(pairs[0], pairs[1]) || pairOverlap(pairs[1], pairs[0]);

const readLines = async () =>
	(await Deno.readTextFile('./src/input.txt')).split('\n').filter((l) =>
		l.match(/\d+-\d+,\d+-\d+/)
	) as Line[];

if (import.meta.main) {
	const lines = await readLines();
	const pairs = lines.map(lineToPairs);
	const sol1 = pairs.map(pairsIncluded).filter(Boolean).length;
	const sol2 = pairs.map(pairsOverlap).filter(Boolean).length;
	console.log(`part 1 solution: ${sol1}; part 2 solution: ${sol2}`);
}

export {
	lineToPairs,
	pairIncluded,
	pairOverlap,
	pairsIncluded,
	pairsOverlap,
	parsePair,
};
