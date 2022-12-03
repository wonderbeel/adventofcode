// primitives
const sum = (a: number, b: number) => a + b;
const safeString = (a?: string) => a ?? '';
const uniqString = (a: string) => [...new Set(a.split(''))].join('');
const intersect = (a: string[], b: string[]) =>
	a.filter(Set.prototype.has, new Set(b));
const splitLine = (
	l: string,
) => [l.slice(0, l.length / 2), l.slice(l.length / 2)];
function* chunk<T>(arr: T[], n: number): Generator<T[], void> {
	for (let i = 0; i < arr.length; i += n) {
		yield arr.slice(i, i + n);
	}
}

// composed functions
const stringIntersect = (a?: string, b?: string) =>
	uniqString(
		intersect(safeString(a).split(''), safeString(b).split('')).join(''),
	);
const arrIntersect = (arr: string[]) => stringIntersect(arr[0], arr[1]);
const groupIntersect = (arr: string[]) =>
	stringIntersect(stringIntersect(arr[0], arr[1]), arr[2]);
function arrChunk<T>(arr: T[], n: number) {
	return [...chunk(arr, n)];
}

// read input + sanitization
const readFile = async () =>
	(await Deno.readTextFile('./src/input.txt')).replace(/[^a-zA-Z\n]/g, '')
		.split('\n');

// Problem solution
const toCharCode = (a: string) => {
	const code = a.charCodeAt(0);
	return (code > 96 ? code - 96 : code - 38) || 0;
};
const solvePart1 = (lines: string[]) =>
	lines.map(splitLine).map(arrIntersect).map(toCharCode).reduce(sum, 0);
const solvePart2 = (lines: string[]) =>
	arrChunk(lines, 3).map(groupIntersect).map(toCharCode).reduce(sum, 0);

// main
if (import.meta.main) {
	const lines = await readFile();
	console.log(
		`part1 solution is ${solvePart1(lines)}; part2 solution is ${
			solvePart2(lines)
		}`,
	);
}

export {
	arrChunk,
	arrIntersect,
	groupIntersect,
	intersect,
	splitLine,
	stringIntersect,
	toCharCode,
};
