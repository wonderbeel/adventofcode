const sum = (a: number, b: string | number) => a + Number(b);
const sumLine = (line: string) => line.split('\n').reduce(sum, 0);
const sortDesc = (a: number, b: number) => b - a;
const solve = (lines: string[]) => lines.map(sumLine).sort(sortDesc);

if (import.meta.main) {
	const input = await Deno.readTextFile('./src/input.txt');
	const caloriesPerElf = solve(input.split('\n\n'));
	const sol1 = caloriesPerElf.at(0);
	const sol2 = caloriesPerElf.slice(0, 3).reduce(sum, 0);
	console.log(`part 1 solution: ${sol1}; part 2 solution: ${sol2}`);
}

export { solve, sortDesc, sum, sumLine };
