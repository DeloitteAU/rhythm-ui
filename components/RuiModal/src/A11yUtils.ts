export default class A11yUtils {
    private _hiddenEls: HTMLElement[] = [];

    public hideOthers(element: HTMLElement): void {
        if (document && document.body && document.body.hasChildNodes()) {
            const children = [...document.body.childNodes] as HTMLElement[];
            this._traverseAndHide(children, element)
        }
    }

    private _traverseAndHide(elements: HTMLElement[], baseElement: HTMLElement): void {
        elements.forEach((el): void => {
            if (el === baseElement) {
                // base case
            } else if (el.contains(baseElement) && el.hasChildNodes()) {
                const children = [...el.childNodes] as HTMLElement[];
                this._traverseAndHide(children, baseElement);
            } else if (
                el instanceof HTMLLinkElement ||
                el instanceof HTMLScriptElement) {
                // do nothing, no need to hide these
            } else {
                if (!el.hasAttribute('aria-hidden') || el.getAttribute('aria-hidden') === 'false') {
                    el.setAttribute('aria-hidden', 'true');
                    this._hiddenEls.push(el);
                }
            }
        })
    }

    public unhideOthers(): void {
        this._hiddenEls.forEach((el): void => {
            el.removeAttribute('aria-hidden');
        })

        this._hiddenEls = [];
    }

}