---
package: "@rhythm-ui/modal"
title: "rui-modal"
---


# Modal
The modal...

## Basic Usage
Modal content is provided via the `heading` and `detail` slots. This will render a modal with a top right close button by default.
The modal can also be exited via esc key press or clicking outside the modal

<button onClick={() => {
    document.getElementById('modal-one').setAttribute('open', true);
}}>Basic Modal Example</button>

```html preview
<rui-modal id="modal-one">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```

## Custom Actions
If you wish to provide some actions to the modal, it supports supplying cancel and confirm actions via the `confirm` and `cancel` slots.


<button onClick={() => {
    document.getElementById('modal-two').setAttribute('open', true);
}}>Custom Actions Example</button>

```html preview
<rui-modal id="modal-two">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>

    </div>
    <rui-button slot="confirm">Confirm</rui-button>
    <rui-button slot="cancel" variant="outline">Cancel</rui-button>
</rui-modal>
```

## Changing Close Conditions
By default the user can close a modal by esc key press or by clicking outside the modal. If you wish to disable either of these you can
via the `no-click-outside-close` and `no-esc-btn-close` attributes

<button onClick={() => {
    document.getElementById('modal-three').setAttribute('open', true);
}}>Click outside disabled</button>

```html preview
<rui-modal no-click-outside-close id="modal-three">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```

<button onClick={() => {
    document.getElementById('modal-four').setAttribute('open', true);
}}>Escape disabled example</button>

```html preview
<rui-modal no-esc-btn-close id="modal-four">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```
