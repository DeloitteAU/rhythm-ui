---
title: Utils
permalink: docs/core/utils.html
---

## Clearfix

Clear floats by adding the `.cf` class to the parent element.

```html
<div class="cf">...</div>
```

## Screen readers

 with the `.visuallyhidden` or `.vh` classes.

```html
<div class="vh">...</div>
``` 

Alternatively,  with the `.hidden` class.

```html
<div class="hidden">...</div>
```

## Invisible

Hide the element without removing it from the document flow

|Class      | Description           |
|-----------|-----------------------|
|`.cf`      | Clear floats by adding this to the parent             |
|`.vh`      | Hide elements from the GUI but *not* screen readers   |
|`.hidden`  | Hide elements from both the GUI and screen readers    |