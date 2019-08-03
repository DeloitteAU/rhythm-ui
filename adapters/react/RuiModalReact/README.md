# Modal
Modals are used for situations where you need to interupt the user's workflow and bring their attention to something that may
or may not require their response. 

## Basic Usage
Modal content is provided via the `RuiModal.Heading` and `RuiModal.Detail` slots. This will render a modal with a top right close button by default.
The modal can also be exited via esc key press or clicking outside the modal

```jsx
<RuiModal>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
```

## Sizes 
You can configure the size of the modal via the `size` prop (size is small by default)

```jsx
<RuiModal size={RuiModal.SIZE.SMALL}>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
<RuiModal size={RuiModal.SIZE.MEDIUM}>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
<RuiModal size={RuiModal.SIZE.FULLSCREEN}>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
```

## Custom close button
You can change the default close button via the `customClose` prop

```jsx
<RuiModal customClose={<button>x</button>}>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
```

## Custom Actions
If you wish to provide some actions to the modal, it supports supplying cancel and confirm actions via the `confirmTrigger` and `cancelTrigger` props.

```jsx
<RuiModal
    size={RuiModal.SIZE.MEDIUM}
    confirmTrigger={<button>Confirm</button>}
    cancelTrigger={<button>Cancel</button>}
>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail as="div">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. <a href="#">A focusable element</a></p>
        <p><a href="#">Test</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
        <p><a href="#">Test test</a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </RuiModal.Detail>
</RuiModal>
```

## Responding to Modal actions
The `onCancel` and `onConfirm` props should be used to respond to modal actions. `onConfirm` is called if the user clicks the `confirmTrigger` and `onCancel` is called if the modal closes for any other reason.

```jsx
<RuiModal
    size={RuiModal.SIZE.MEDIUM}
    confirmTrigger={<button>Confirm</button>}
    cancelTrigger={<button>Cancel</button>}
    onConfirm={() => { alert('User confirmed'); }}
    onCancel={() => { alert('User canceled'); }}
>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
```

## Changing Close Conditions
By default the user can close a modal by esc key press or by clicking outside the modal. If you wish to disable either of these you can
via the `noClickOutsideClose` and `noEscBtnClose` props

```jsx
<RuiModal noClickOutsideClose>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
```

```jsx
<RuiModal noEscBtnClose>
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </RuiModal.Detail>
</RuiModal>
```

## Customising First Focused Element
By default, the modal will focus the first focusable element found within it, if this is not wanted, you can specify what element to focus first via the `initiallyFocused` prop, which expects a selector.

```jsx
<RuiModal initiallyFocused="#focus-here">
    <RuiModal.Heading>Modal Heading</RuiModal.Heading>
    <RuiModal.Detail as="div">
        <p id="focus-here" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
    </RuiModal.Detail>
</RuiModal>
```
