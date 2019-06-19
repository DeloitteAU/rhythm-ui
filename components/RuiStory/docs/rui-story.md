---
package: "@rhythm-ui"
title: "rui-story"
---

# Story
Stories provide an simple way to surface some content to a user with an optional cta if you need.

## Display
Stories take up the width and height of their containers. They take a title and domain as attributes and allow for injection of a hero image, content and cta slotted elements.

```html preview
<rui-story
    title="Title"
    domain="Domain"
>
    <div slot="img" class="example-image-el">Image Element</div>
    <div slot="content" class="cm cm-rich-text">
        <p>Your custom content</p>
    </div>
    <a class="story-cta" href="http://localhost:8000" slot="cta">
        CTA Element
    </a>
</rui-story>
```

## Content Variations
News items look their best when given an image, title and some content. However you can still play around with these as needed.

```html preview
<rui-grid>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-story
            title="Title"
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content
                </p>
            </div>
            <a class="story-cta" href="http://localhost:8000" slot="cta">CTA element<span class="plus-icon"></span></a>
        </rui-story>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-story
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content
                </p>
            </div>
            <a class="story-cta" href="http://localhost:8000" slot="cta">CTA element<span class="plus-icon"></span></a>
        </rui-story>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-story
            domain="Domain"
            title="Title"
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content
                </p>
            </div>
        </rui-story>
    </div>
</rui-grid>
```

## Example
Below is a fully populated row of stories, along with some externally styled content/images.

```html preview
<rui-grid>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-story
            title="Technology, media & telecommunications"
            domain="Perspectives"
        >
            <img slot="img" class="story-img" src="https://bit.ly/313MP5R" />
            <div slot="content" class="cm cm-rich-text">
                <p>At Deloitte we help our clients navigate complex challenges 
                    brought about by technological innovation and changes in consumer behaviour.
                </p>
            </div>
            <a class="story-cta" href="http://localhost:8000" slot="cta">
                Explore our latest research <span class="plus-icon"></span>
            </a>
        </rui-story>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-story
            title="Go from linear to accelerated growth."
            domain="Ready. Set. Emerge!"
        >
            <img slot="img" class="story-img" src="https://bit.ly/2QIxoeD" />
            <div slot="content" class="cm cm-rich-text">
                <p>Emerging technoligies are significantly transforming our
                    lives and organisations. How do we manage this growth, and harness it?
                </p>
            </div>
            <a class="story-cta" href="http://localhost:8000" slot="cta">
                Connect with tech <span class="plus-icon"></span>
            </a>
        </rui-story>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-story
            title="A future focused Australia"
            domain="Energy Accelerated"
        >
            <img slot="img" class="story-img" src="https://bit.ly/2Xio7ws" />
            <div slot="content" class="cm cm-rich-text">
                <p>We are in the middle of an energy transition. What will you 
                    do today to embrace the enery transition and shape the future of energy?
                </p>
            </div>
            <a class="story-cta" href="http://localhost:8000" slot="cta">
                Four future energy scenarios <span class="plus-icon"></span>
            </a>
        </rui-story>
    </div>
</rui-grid>
```

 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --color | #000 | The base text colour of the story  | 
| --background-color | #F2F2F2 | The base background colour of the story  | 
| --border-bottom-color | #000 | The colour of the bottom border stripe  | 
| --border-bottom-width | 4px | The width of the bottom border stripe  | 
| --border-bottom | var(--border-bottom-width) solid var(--border-bottom-color) | The styling for the bottom border stripe  | 
| --domain-font-size | 11px | Font size of the domain text  | 
| --dynamic-content-color | #5F5F5F | Content text colour  | 
| --dynamic-content-font-size | 16px | Content font-size  | 
| --cta-color | #000 | cta text colour  | 
| --cta-font-size | 14px | cta font size  | 
| --cta-line-height | 1.43 | cta text line height  | 
| --cta-letter-spacing | -0.1px | cta text letter spacing  | 
| --cta-color-hover | #5F5F5F | Hover colour of the cta  | 
| --img-container-background-color | #000 | The default image background colour  | 
| --img-container-height | 216px | The height of the story image  | 
| --content-container-min-height | 348px | The minimum height for the content of the story  | 
| --content-container-padding-sides | 24px | The padding for the sides of the content  | 
| --content-container-padding-top-bottom | 34px | The padding for the top and bottom of the content  | 
| --content-container-padding | var(--content-container-padding-top-bottom) var(--content-container-padding-sides) | The padding for the content  | 
| --title-colour | #000 | Title text colour  | 
| --title-font-size | 22px | The font size of the title  | 
| --title-line-height | 26px | The line height of the title  | 
| --title-letter-spacing | -0.5px | Letter spacing of title  | 
| --title-margin | 6px 0 10px 0 | Margin of title  | 
