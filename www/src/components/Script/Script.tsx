import React from 'react';

/**
 * A dummy component used for executing javascript on
 * MDX pages
 */
export const Script = ({script}) => {
	if (script) {
		setTimeout(script, 0);
	}
	return null;
};

export default Script;
