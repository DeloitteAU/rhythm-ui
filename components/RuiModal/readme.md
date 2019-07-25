---
package: "@rhythm-ui/modal"
title: "rui-modal"
---

<button onClick={() => {
    document.getElementById('modal-one').setAttribute('open', true);
}}>Click to open example modal</button>

```html preview
<rui-modal id="modal-one">
    <a href="#">A</a><a href="#">B</a>
</rui-modal>
```

<button onClick={() => {
    document.getElementById('modal-two').setAttribute('open', true);
}}>Click outside disabled</button>

```html preview
<rui-modal no-click-outside-close id="modal-two">
    <a href="#">A</a><a href="#">B</a>
</rui-modal>
```

<button onClick={() => {
    document.getElementById('modal-three').setAttribute('open', true);
}}>Escape disabled example</button>

```html preview
<rui-modal no-esc-btn-close id="modal-three">
    <a href="#">A</a><a href="#">B</a>
</rui-modal>
```
