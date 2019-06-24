import findIndexOf from './findIndexOf';

describe('findIndexOf.spec', () => {

  const testString = 'testing some test';

  const indexOfString: Function = findIndexOf(testString);

  const testArray: string[] = ['this', 'is', 'a', 'test'];

  const indexOfArray: Function = findIndexOf(testArray);

  it('should find the index of a character in a string', () => {

    const expected = 8;

    const actual: number = indexOfString('some');

    expect(actual).toBe(expected)

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
