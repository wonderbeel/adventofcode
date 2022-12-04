import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';
import {
	lineToPairs,
	pairIncluded,
	pairOverlap,
	pairsIncluded,
	pairsOverlap,
	parsePair,
} from '../src/main.ts';

Deno.test('parsePair', () => {
	assertEquals(parsePair('2-4'), [2, 4]);
});

Deno.test('lineToPairs', () => {
	assertEquals(lineToPairs('2-4,6-8'), [[2, 4], [6, 8]]);
});

Deno.test('pairIncluded', () => {
	assertEquals(pairIncluded([2, 4], [6, 8]), false);
	assertEquals(pairIncluded([2, 3], [4, 5]), false);
	assertEquals(pairIncluded([5, 7], [7, 9]), false);
	assertEquals(pairIncluded([2, 8], [3, 7]), false);
	assertEquals(pairIncluded([6, 6], [4, 6]), true);
	assertEquals(pairIncluded([2, 6], [4, 8]), false);
});

Deno.test('pairsIncluded', () => {
	assertEquals(pairsIncluded([[2, 4], [6, 8]]), false);
	assertEquals(pairsIncluded([[2, 3], [4, 5]]), false);
	assertEquals(pairsIncluded([[5, 7], [7, 9]]), false);
	assertEquals(pairsIncluded([[2, 8], [3, 7]]), true);
	assertEquals(pairsIncluded([[6, 6], [4, 6]]), true);
	assertEquals(pairsIncluded([[2, 6], [4, 8]]), false);
});

Deno.test('pairOverlap', () => {
	assertEquals(pairOverlap([2, 4], [6, 8]), false);
	assertEquals(pairOverlap([2, 3], [4, 5]), false);
	assertEquals(pairOverlap([5, 7], [7, 9]), true);
	assertEquals(pairOverlap([2, 8], [3, 7]), false);
	assertEquals(pairOverlap([6, 6], [4, 6]), true);
	assertEquals(pairOverlap([2, 6], [4, 8]), true);
});

Deno.test('pairsOverlap', () => {
	assertEquals(pairsOverlap([[2, 4], [6, 8]]), false);
	assertEquals(pairsOverlap([[2, 3], [4, 5]]), false);
	assertEquals(pairsOverlap([[5, 7], [7, 9]]), true);
	assertEquals(pairsOverlap([[2, 8], [3, 7]]), true);
	assertEquals(pairsOverlap([[6, 6], [4, 6]]), true);
	assertEquals(pairsOverlap([[2, 6], [4, 8]]), true);
});
