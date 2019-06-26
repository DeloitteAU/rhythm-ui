---
package: "@rhythm-ui"
title: "animation-pack"
---

# Animations Pack

The rhythm-ui animation pack contains default animations for many of its dynamic components such as the 
`rui-expand-collapse` component.


## Usage
Add `@rhythm-ui/animation-pack` to your project's dependencies then you can import it along with your other components

```js
import '@rhythm-ui/rui-button'
import '@rhythm-ui/rui-expand-collapse'

// will include all animations by default
import '@rhythm-ui/animation-pack' 
```

Or if you wish to only use some animations, you can import animations only for the specific components you want like so:

```js
import '@rhythm-ui/rui-button'
import '@rhythm-ui/rui-expand-collapse'

// only expand collapse animations are included
import '@rhythm-ui/animation-pack/lib/expand-collapse' 
```