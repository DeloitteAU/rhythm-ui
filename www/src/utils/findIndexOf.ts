	// curried function which will find the indexOf character in a string.
	export default function findIndexOf(str: string | string[]): Function {
		return (searchTerm: string): number => str.indexOf(searchTerm);
	};


	
  