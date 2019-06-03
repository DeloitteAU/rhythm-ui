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
| --img-bg | #000 | The default image background colour  | 
| --img-height | 216px | The height of the story image  | 
| --min-content-height | 348px | The minimum height for the content of the story  | 
| --padding-top-bottom | 34px | The padding for the top and bottom of the content  | 
| --padding-sides | 24px | The padding for the sides of the content  | 
| --bg | #F2F2F2 | The base bg of the news item  | 
| --bottom-border-color | #000 | The colour of the bottom border strip  | 
| --title-font-size | 22px | The font size of the title  | 
| --title-letter-spacing | 26px | The letter spacing of the title  | 
| --title-colour | #000 | The default colour for cta  | 
| --cta-colour-hover | #5F5F5F | The default hover colour of the cta  | 
| --content-colour | #5F5F5F | The default colour of the story content  | 
