import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';
import { solve, sortDesc, sum, sumLine } from '../src/main.ts';

Deno.test('sum', () => {
	assertEquals(sum(1, '2'), 3);
});

Deno.test('sumLine', () => {
	assertEquals(sumLine('1\n2\n3'), 6);
});

Deno.test('sortDesc', () => {
	assertEquals([4, 1, 8].sort(sortDesc), [8, 4, 1]);
});

Deno.test('solve', () => {
	assertEquals(solve(['4\n1', '1\n2\n3', '4\n2\n5\n1']), [12, 6, 5]);
});
