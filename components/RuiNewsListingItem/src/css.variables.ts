import {css} from 'lit-element';
import {bp} from './css.layout';

/**
 * RuiButton CSS Variables
 */
export default css`
	:host {
		/**
		 * @variable The default image background colour
		 */
		--img-bg: #000;

		/**
		 * @variable The height of the news item image
		 */
		--img-height: 216px;

		/**
		 * @variable The minimum height for the content of the news item
		 */
		--min-content-height: 348px;

		/**
		 * @variable The padding for the top and bottom of the content
		 */
		--padding-top-bottom: 34px;

		/**
		 * @variable The padding for the sides of the content
		 */
		--padding-sides: 24px;

		/**
		 * @variable The base bg of the news item
		 */
		--bg: #F2F2F2;

		/**
		 * @variable The colour of the bottom border strip
		 */
		--bottom-border-color: #000;
	}

	/* BP variable overrides */
	${bp('m', css`
		:host {
			--img-height: 260px;
		}
	`)}

	${bp('l', css`
		:host {
			--img-height: 228px;
		}
	`)}

	${bp('xl', css`
		:host {
			--img-height: 288px;
			--min-content-height: 352px; 
			--padding-sides: 40px;
		}
	`)}

	${bp('xxl', css`
		:host {
			--img-height: 392px;
		}
	`)}
`;