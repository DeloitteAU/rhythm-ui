import replaceStringWith from '../replaceStringWith';

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
