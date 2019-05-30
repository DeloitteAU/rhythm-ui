---
package: "@rhythm-ui"
title: "rui-news-listing-item"
---

# News listing item
News listing items provide an simple way to surface some content to a user with an optional cta if you need.

## Display
News listing items take up the width of their containers, they are best displayed in a `rui-grid`. 

<rui-grid>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
            title="Title"
            domain="Domain"
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content</p>
            </div>
            <a class="news-listing-link" href="http://localhost:8000" slot="cta">
                CTA Element <span class="plus-icon"></span>
            </a>
            </rui-news-listing-item>
        </div>
        <div class="s-12 m-6 l-8 xl-8 xxl-8"></div>
    </rui-grid>

## Content Variations
News items look their best when given an image, title and some content. However you can still play around with these as needed.

<rui-grid>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
            title="Title"
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content
                </p>
            </div>
            <a class="news-listing-link" href="http://localhost:8000" slot="cta">CTA element<span class="plus-icon"></span></a>
        </rui-news-listing-item>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content
                </p>
            </div>
            <a class="news-listing-link" href="http://localhost:8000" slot="cta">CTA element<span class="plus-icon"></span></a>
        </rui-news-listing-item>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
            domain="Domain"
            title="Title"
        >
            <div slot="img" class="example-image-el">Image Element</div>
            <div slot="content" class="cm cm-rich-text">
                <p>Your custom content
                </p>
            </div>
        </rui-news-listing-item>
    </div>
</rui-grid>


## Example
Below is a fully populated row of news listing items, along with some externally styled content/images.

<rui-grid>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
            title="Technology, media & telecommunications"
            domain="Perspectives"
        >
            <img slot="img" class="news-listing-item-img" src="https://www2.deloitte.com/content/dam/Deloitte/in/Images/header_images/in-tax-budget-publications-2018-banner-noexp.png/_jcr_content/renditions/cq5dam.web.1400.350.desktop.jpeg" />
            <div slot="content" class="cm cm-rich-text">
                <p>At Deloitte we help our clients navigate complex challenges brought about by technological innovation and changes in consumer behaviour.
                </p>
            </div>
            <a class="news-listing-link" href="http://localhost:8000" slot="cta">Explore our latest research <span class="plus-icon"></span></a>
        </rui-news-listing-item>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
            title="Go from linear to accelerated growth."
            domain="Ready. Set. Emerge!"
        >
            <img slot="img" class="news-listing-item-img" src="https://www2.deloitte.com/content/dam/Deloitte/global/Images/promo_images/gx-ngin-solution3.jpg" />
            <div slot="content" class="cm cm-rich-text">
                <p>Emerging technoligies are significantly transforming our lives and organisations. How do we manage this growth, and harness it?
                </p>
            </div>
            <a class="news-listing-link" href="http://localhost:8000" slot="cta">Connect with tech <span class="plus-icon"></span></a>
        </rui-news-listing-item>
    </div>
    <div class="s-12 m-6 l-4 xl-4 xxl-4">
        <rui-news-listing-item
            title="A future focused Australia"
            domain="Energy Accelerated"
        >
            <img slot="img" class="news-listing-item-img" src="https://www2.deloitte.com/content/dam/Deloitte/ch/Images/header_images/services/risk/ch-risk-GDPR-pseudonymisation-banner.jpg/_jcr_content/renditions/cq5dam.web.1400.350.desktop.jpeg" />
            <div slot="content" class="cm cm-rich-text">
                <p>We are in the middle of an energy transition. What will you do today to embrace the enery transition and shape the future of energy?
                </p>
            </div>
            <a class="news-listing-link" href="http://localhost:8000" slot="cta">Four future energy scenarios <span class="plus-icon"></span></a>
        </rui-news-listing-item>
    </div>
</rui-grid>


 ## Variables

| CSS Variable | Default Value | Description |
| --- | --- | --- |
| --img-bg | #000 | The default image background colour  | 
| --min-content-height | 348px | The minimum height for the content of the news item  | 
| --padding-sides | 24px | The padding for the sides of the content  | 
| --bottom-border-color | #000 | The colour of the bottom border strip  | 
