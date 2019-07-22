class TestUtils {
	/**
	 * Renders a given element with provided attributes
	 * and returns a promise which resolves as soon as
	 * rendered element becomes available.
	 * @param {string} tag
	 * @param {object} attributes
	 * @param {string} children
	 * @returns {Promise<HTMLElement>}
	 */
	public static render(tag, attributes = {}, children = ''): Promise<HTMLElement> {
		TestUtils._renderToDocument(tag, attributes, children);
		return TestUtils._waitForComponentToRender(tag);
	}

	/**
	 * Replaces document's body with provided element
	 * including given attributes.
	 * @param {string} tag
	 * @param {object} attributes
	 * @param {string} children
	 */
	private static _renderToDocument(tag, attributes, children): void {
		const htmlAttributes = TestUtils._mapObjectToHTMLAttributes(attributes);
		document.body.innerHTML = `<${tag} ${htmlAttributes}>${children}</${tag}>`;
	}

	/**
	 * Converts an object to HTML string representation of attributes.
	 *
	 * For example: `{ foo: "bar", baz: "foo" }`
	 * becomes `foo="bar" baz="foo"`
	 *
	 * @param {object} attributes
	 * @returns {string}
	 */
	private static _mapObjectToHTMLAttributes(attributes): string {
		return Object.entries(attributes).reduce((previous, current) => {
			return `${previous} ${current[0]}='${current[1]}'`;
		}, "");
	}

	/**
	 * Returns a promise which resolves as soon as
	 * requested element becomes available.
	 * @param {string} tag
	 * @returns {Promise<HTMLElement>}
	 */
	private static _waitForComponentToRender(tag): Promise<HTMLElement> {
		return new Promise(resolve => {
			customElements.whenDefined(tag).then(() => {
				resolve(document.querySelector(tag));
			});
		});
	}
}

export default TestUtils;

