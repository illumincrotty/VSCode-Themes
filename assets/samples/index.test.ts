import { example } from '../src/example';
import test from 'ava';

// Check for my sanity
test('passing test', (t) => {
	t.pass('I sure hope it does');
});

test('should know truth values', (t) => {
	t.true(true);
});

test('a number should be itself', (t) => {
	t.is(Math.SQRT2, Math.SQRT2);
	t.is(Number.parseInt('1', 10), 1);
});

test('can achieve full coverage', (t) => {
	t.is(example.fiveFunction(), 5);
});

test('can dynamically import fs', async (t) => {
	const fs = (await import('node:fs')).promises;
	const text = await fs.readFile('./test/example.txt');
	t.is(text.BYTES_PER_ELEMENT, 1);
});
