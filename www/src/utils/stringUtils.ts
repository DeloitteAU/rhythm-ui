// curried function which will find the indexOf character in a string.
export const findIndexOf = (str: string | string[]): Function => (searchTerm: string): number => str.indexOf(searchTerm);

// function which will replace string with arguements given.
export const replaceStringWith = (str: string, replaceString: string, replaceWith: string): string => str.replace(replaceString, replaceWith);
