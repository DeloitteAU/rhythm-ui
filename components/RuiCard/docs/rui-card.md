---
package: "@rhythm-ui"
title: "rui-card"
---

# Card
Cards provide a way to display contained content to a user. They are surfaces that display content and actions on a single topic.

## Display
Cards take up the width and height of their containers. Currently
they are not responsible for arranging content, and this responsibility should fall to the parent component. 

## Example
Below is a basic example of the card. You can see that the content is held within a div that will be responsible for layout.
 
```html preview
<rui-card>Some Card Content</rui-card>
```

## Variables
| CSS Variable | Default Value | Description |
| --- | --- | --- |
|--box-shadow |  0 4px 8px 0 rgba(0, 0, 0, 0.2) | The default box shadow of the card |
| --border-radius | 5px | The default border radius of the card |
| --padding | 50px | The default padding of the card