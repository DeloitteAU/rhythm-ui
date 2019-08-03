---
package: "@rhythm-ui/modal"
title: "rui-modal"
---

# Modal
Modals are used for situations where you need to interupt the user's workflow and bring their attention to something that may
or may not require their response. 

## Basic Usage
Modal content is provided via the `heading` and `detail` slots. This will render a modal with a top right close button by default.
The modal can also be exited via esc key press or clicking outside the modal

<rui-button onClick={() => {
    document.getElementById('modal-one').setAttribute('open', true);
}}>Basic Modal Example</rui-button>

```html preview
<rui-modal id="modal-one">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```

## Sizes 
You can configure the size of the modal via the `size` attribute (size is small by default)

<rui-button onClick={() => {
    document.getElementById('modal-small').setAttribute('open', true);
}}>Small (default) Modal</rui-button>
<rui-button onClick={() => {
    document.getElementById('modal-medium').setAttribute('open', true);
}}>Medium Modal</rui-button>
<rui-button onClick={() => {
    document.getElementById('modal-fullscreen').setAttribute('open', true);
}}>Fullscreen Modal</rui-button>

```html preview
<rui-modal id="modal-small" size="small">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
<rui-modal id="modal-medium" size="medium">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
<rui-modal id="modal-fullscreen" size="fullscreen">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```

## Custom close button
You can change the default close button via the `close` slot

<rui-button onClick={() => {
    document.getElementById('close-example').setAttribute('open', true);
}}>Custom close example</rui-button>

```html preview
<rui-modal id="close-example">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
    <rui-button size="small" slot="close">x</rui-button>
</rui-modal>
```

## Custom Actions
If you wish to provide some actions to the modal, it supports supplying cancel and confirm actions via the `confirm` and `cancel` slots.

<rui-button onClick={() => {
    document.getElementById('modal-two').setAttribute('open', true);
}}>Custom Actions Example</rui-button>

```html preview
<rui-modal id="modal-two" size="medium">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <a href="#">A focusable element</a></p>
        <p><a href="#">Test</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <p><a href="#">Test test</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
    <rui-button slot="confirm">Confirm</rui-button>
    <rui-button slot="cancel" variant="outline">Cancel</rui-button>
</rui-modal>
```

## Responding to Modal actions
The modal emits two types of events, `rui-modal-confirm` is emitted when the user click the 'confirm' slotted action, otherwise if the modal is closed for any other reason the `rui-modal-cancel` event will be emitted. 

```html
<script>
    const el = document.getElementByID('modal-action-example')
    if (el) {
        el.addEventListener('rui-modal-confirm', () => {
            alert('User confirmed')
        })

        el.addEventListener('rui-modal-cancel', () => {
            alert('User canceled')
        })
    }
</script>
<rui-modal id="modal-action-example" size="medium">
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

<rui-button onClick={() => {
    document.getElementById('modal-three').setAttribute('open', true);
}}>Click outside disabled</rui-button>

```html preview
<rui-modal no-click-outside-close id="modal-three">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```

<rui-button onClick={() => {
    document.getElementById('modal-four').setAttribute('open', true);
}}>Escape disabled example</rui-button>

```html preview
<rui-modal no-esc-btn-close id="modal-four">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```


## Customising First Focused Element
By default, the modal will focus the first focusable element found within it, if this is not wanted, you can specify what element to focus first via the `initially-focused` attribute, which expects a selector.

<rui-button onClick={() => {
    document.getElementById('initial-focus-example').setAttribute('open', true);
}}>Custom Initial Focus</rui-button>

```html preview
<rui-modal initially-focused="#focus-here" id="initial-focus-example">
    <h2 slot="heading">Modal Heading</h2>
    <div slot="detail">
        <p id="focus-here" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </div>
</rui-modal>
```
