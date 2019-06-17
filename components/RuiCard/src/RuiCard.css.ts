import { css } from 'lit-element';

export const layout = css`
	:host {
		display: block;
	}

	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		padding: 50px;
	}
`;
export default [ layout ];
