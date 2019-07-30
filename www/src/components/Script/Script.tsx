import React from 'react';

export const Script = ({script}) => {
	if (script) {
		setTimeout(script, 0);
	}
	return null;
};

export default Script;
