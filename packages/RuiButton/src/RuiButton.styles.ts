import {css} from 'lit-element';

export default css`
	:host {
		display: inline-block;
		width: auto;
	}

	:host[disabled] {
		pointer-events: none;
	}

	.btn {
		text-align: center;
		text-decoration: none;
		text-overflow: ellipsis;
		white-space: nowrap;
		user-select: none;
		vertical-align: top;
		pointer-events: auto;
		font-kerning: none;
		outline: none;
		background-color: transparent;

		display: flex;
		flex-direction: row;
		
		border: 1px solid #bbb;
		font-weight: 700;
		border-radius: 4px;
		padding: 15px 25px;
	}

	.btn:hover {
		text-decoration: none;
		transform: translateY(1px);
		cursor: pointer;
	}
`;
