import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';
import {
	arrChunk,
	arrIntersect,
	groupIntersect,
	intersect,
	splitLine,
	stringIntersect,
	toCharCode,
} from '../src/main.ts';

Deno.test('splitLine', () => {
	const parts = splitLine('vJrwpWtwJgWrhcsFMMfFFhFp');
	assertEquals(parts[0], 'vJrwpWtwJgWr');
	assertEquals(parts[1], 'hcsFMMfFFhFp');
});

Deno.test('intersect', () => {
	const intersection = intersect(
		'vJrwpWtwJgWr'.split(''),
		'hcsFMMfFFhFp'.split(''),
	);
	assertEquals(intersection, ['p']);
});

Deno.test('stringIntersect', () => {
	const intersection = stringIntersect('vJrwpWtwJgWr', 'hcsFMMfFFhFp');
	assertEquals(intersection, 'p');
	const safe = stringIntersect();
	assertEquals(safe, '');
});

Deno.test('arrIntersect', () => {
	const intersection = arrIntersect(['vJrwpWtwJgWr', 'hcsFMMfFFhFp']);
	assertEquals(intersection, 'p');
	const safe = arrIntersect([]);
	assertEquals(safe, '');
	const safe2 = arrIntersect(['']);
	assertEquals(safe2, '');
});

Deno.test('toCharCode', () => {
	assertEquals(toCharCode('a'), 1);
	assertEquals(toCharCode('z'), 26);
	assertEquals(toCharCode('A'), 27);
	assertEquals(toCharCode('Z'), 52);
	assertEquals(toCharCode(''), 0);
});

Deno.test('chunk', () => {
	const chunks = arrChunk([1, 2, 3, 4], 2);
	assertEquals(chunks, [[1, 2], [3, 4]]);
});

Deno.test('groupIntersect', () => {
	const intersection = groupIntersect([
		'vJrwpWtwJgWrhcsFMMfFFhFp',
		'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
		'PmmdzqPrVvPwwTWBwg',
	]);
	assertEquals(intersection, 'r');
	const safe = groupIntersect([]);
	assertEquals(safe, '');
	const safe2 = groupIntersect(['']);
	assertEquals(safe2, '');
	const safe3 = groupIntersect(['', '']);
	assertEquals(safe3, '');
});
