---
package: "@rhythm-ui/modal"
title: "rui-modal"
---

<button onClick={() => {
    document.getElementById('modal-one').setAttribute('open', true);
}}>Click to open example modal</button>

<rui-modal id="modal-one">
    <a href="#">A</a><a href="#">B</a>
</rui-modal>
