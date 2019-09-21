---
package: "@rhythm-ui/icon"
title: "rui-icon"
---

# Icon

Icon provides a convenient way to style your icon set. Icon can take an svg, png or data object as image source.

## Default

```html preview
<rui-icon src="https://www.svgrepo.com/show/24594/add-a-contact-on-phone-interface-symbol-of-a-user-with-a-plus-sign.svg"></rui-icon>
<rui-icon src="https://image.flaticon.com/icons/png/128/25/25634.png"></rui-icon>
<rui-icon src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MjkgODk2cS0xNjIgNS0yNjUgMTI4aC0xMzRxLTgyIDAtMTM4LTQwLjV0LTU2LTExOC41cTAtMzUzIDEyNC0zNTMgNiAwIDQzLjUgMjF0OTcuNSA0Mi41IDExOSAyMS41cTY3IDAgMTMzLTIzLTUgMzctNSA2NiAwIDEzOSA4MSAyNTZ6bTEwNzEgNjM3cTAgMTIwLTczIDE4OS41dC0xOTQgNjkuNWgtODc0cS0xMjEgMC0xOTQtNjkuNXQtNzMtMTg5LjVxMC01MyAzLjUtMTAzLjV0MTQtMTA5IDI2LjUtMTA4LjUgNDMtOTcuNSA2Mi04MSA4NS41LTUzLjUgMTExLjUtMjBxMTAgMCA0MyAyMS41dDczIDQ4IDEwNyA0OCAxMzUgMjEuNSAxMzUtMjEuNSAxMDctNDggNzMtNDggNDMtMjEuNXE2MSAwIDExMS41IDIwdDg1LjUgNTMuNSA2MiA4MSA0MyA5Ny41IDI2LjUgMTA4LjUgMTQgMTA5IDMuNSAxMDMuNXptLTEwMjQtMTI3N3EwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptNzA0IDM4NHEwIDE1OS0xMTIuNSAyNzEuNXQtMjcxLjUgMTEyLjUtMjcxLjUtMTEyLjUtMTEyLjUtMjcxLjUgMTEyLjUtMjcxLjUgMjcxLjUtMTEyLjUgMjcxLjUgMTEyLjUgMTEyLjUgMjcxLjV6bTU3NiAyMjVxMCA3OC01NiAxMTguNXQtMTM4IDQwLjVoLTEzNHEtMTAzLTEyMy0yNjUtMTI4IDgxLTExNyA4MS0yNTYgMC0yOS01LTY2IDY2IDIzIDEzMyAyMyA1OSAwIDExOS0yMS41dDk3LjUtNDIuNSA0My41LTIxcTEyNCAwIDEyNCAzNTN6bS0xMjgtNjA5cTAgMTA2LTc1IDE4MXQtMTgxIDc1LTE4MS03NS03NS0xODEgNzUtMTgxIDE4MS03NSAxODEgNzUgNzUgMTgxeiIvPjwvc3ZnPg=="></rui-icon>
```
```css
rui-icon {
--rui-icon__width: 60px;
--rui-icon__height: 60px;
--rui-icon__color: var(--global-gray-color-3, #673AB7);
}
```


## A11Y support

In cases where the icon isn't purely decorative provide an alt text for A11Y support.

```html preview
<rui-icon src="https://www.svgrepo.com/show/24594/add-a-contact-on-phone-interface-symbol-of-a-user-with-a-plus-sign.svg"></rui-icon>
<rui-icon src="https://image.flaticon.com/icons/png/128/25/25634.png" alt="World"></rui-icon>
<rui-icon src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc5MiIgaGVpZ2h0PSIxNzkyIiB2aWV3Qm94PSIwIDAgMTc5MiAxNzkyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MjkgODk2cS0xNjIgNS0yNjUgMTI4aC0xMzRxLTgyIDAtMTM4LTQwLjV0LTU2LTExOC41cTAtMzUzIDEyNC0zNTMgNiAwIDQzLjUgMjF0OTcuNSA0Mi41IDExOSAyMS41cTY3IDAgMTMzLTIzLTUgMzctNSA2NiAwIDEzOSA4MSAyNTZ6bTEwNzEgNjM3cTAgMTIwLTczIDE4OS41dC0xOTQgNjkuNWgtODc0cS0xMjEgMC0xOTQtNjkuNXQtNzMtMTg5LjVxMC01MyAzLjUtMTAzLjV0MTQtMTA5IDI2LjUtMTA4LjUgNDMtOTcuNSA2Mi04MSA4NS41LTUzLjUgMTExLjUtMjBxMTAgMCA0MyAyMS41dDczIDQ4IDEwNyA0OCAxMzUgMjEuNSAxMzUtMjEuNSAxMDctNDggNzMtNDggNDMtMjEuNXE2MSAwIDExMS41IDIwdDg1LjUgNTMuNSA2MiA4MSA0MyA5Ny41IDI2LjUgMTA4LjUgMTQgMTA5IDMuNSAxMDMuNXptLTEwMjQtMTI3N3EwIDEwNi03NSAxODF0LTE4MSA3NS0xODEtNzUtNzUtMTgxIDc1LTE4MSAxODEtNzUgMTgxIDc1IDc1IDE4MXptNzA0IDM4NHEwIDE1OS0xMTIuNSAyNzEuNXQtMjcxLjUgMTEyLjUtMjcxLjUtMTEyLjUtMTEyLjUtMjcxLjUgMTEyLjUtMjcxLjUgMjcxLjUtMTEyLjUgMjcxLjUgMTEyLjUgMTEyLjUgMjcxLjV6bTU3NiAyMjVxMCA3OC01NiAxMTguNXQtMTM4IDQwLjVoLTEzNHEtMTAzLTEyMy0yNjUtMTI4IDgxLTExNyA4MS0yNTYgMC0yOS01LTY2IDY2IDIzIDEzMyAyMyA1OSAwIDExOS0yMS41dDk3LjUtNDIuNSA0My41LTIxcTEyNCAwIDEyNCAzNTN6bS0xMjgtNjA5cTAgMTA2LTc1IDE4MXQtMTgxIDc1LTE4MS03NS03NS0xODEgNzUtMTgxIDE4MS03NSAxODEgNzUgNzUgMTgxeiIvPjwvc3ZnPg==" alt="Person"></rui-icon>
```
```css
rui-icon {
--rui-icon__width: 60px;
--rui-icon__height: 60px;
--rui-icon__color: var(--global-gray-color-3, #673AB7);
}
```

## Customising

If you want customise the CSS beyond the variables use the `createShadowStyles` utility function. This function allows you to customise any CSS property and update the CSS for the shadow dom that otherwise would not be possible.
```js
import {css} from 'lit-element';
import {createShadowStyles} from '@rhythm-ui/styles';

createShadowStyles({
	RuiIcon: css`
		img {}
	`
})
```


## Extending

For more customisation of both the HTML and CSS you can extend the component.

```js
import RuiIcon from '@rhythm-ui/icon';

export class MyIcon extends RuiIcon {
	static tag() {
		return 'my-icon';
	}
}

customComponents.define(MyIcon, MyIcon.tag)
```
