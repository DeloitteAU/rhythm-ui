/**
 * Copyright Deloitte Digital 2019
 *
 * This source code is licensed under the BSD-3-Clause license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const uuid = () => {
	return (`${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`)
		.replace(/[018]/g, (c: string): string => {
			const numC = parseInt(c, 10);
			return (numC ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> numC / 4).toString(); // eslint-disable-line no-bitwise
		});
};


export default {
	uuid
};
