---
package: "@rhythm-ui/story"
title: "Story"
category: "elements"
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
    <div slot="content">
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
            <div slot="content">
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
            <div slot="content">
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
            <div slot="content">
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
            <div slot="content">
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
            <div slot="content">
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
            <div slot="content">
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