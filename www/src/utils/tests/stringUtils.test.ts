import {
	findIndexOf,
	replaceStringWith,
} from '../stringUtils';

describe('replaceStringWith.spec', () => {

	const testString = 'www.thisisatest.com/testing/some/stuff';

	it('should replace the string with the arguement given', () => {
		const expected = 'www.thisisatest.com';
		const actual: string = replaceStringWith(testString, '/testing/some/stuff', '');
		expect(actual).toBe(expected);
	});

	it('should return same string if search term not found', () => {
		const expected: string = testString;
		const actual: string = replaceStringWith(testString, 'booop', '');
		expect(actual).toBe(expected);
	});

});

describe('findIndexOf.spec', () => {
	const testString = 'testing some test';
	const indexOfString: Function = findIndexOf(testString);
	const testArray: string[] = ['this', 'is', 'a', 'test'];
	const indexOfArray: Function = findIndexOf(testArray);

	it('should find the index of a character in a string', () => {
		const expected = 8;
		const actual: number = indexOfString('some');
		expect(actual).toBe(expected);
	});

	it('should find the index of an item in an array', () => {
		const expected = 2;
		const actual: number = indexOfArray('a');
		expect(actual).toBe(expected);
	});

	it('should return -1 if item cannot be found', () => {
		const expected = -1;
		const actual: number = indexOfArray('find me');
		expect(actual).toBe(expected);
	});

});
