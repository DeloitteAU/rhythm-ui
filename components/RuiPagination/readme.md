---
package: "@rhythm-ui/pagination"
title: "rui-pagination"
---

# Pagination
Pagination is used to allow the user to navigate between paginated content pages easily. 

## Basic usage
By default, pagination requires you to specify which page is the current page via the `current-page` attribute and how many pages are in the pagination in total via the `num-pages` attribute. When a pagination item is selected, the following 
events will be fired: 

`rui-pagination-next-click` when the next item is clicked
`rui-pagination-prev-click` will be fired when the previous item is clicked
`rui-pagination-item-click` will be fired when on of the pagination items is clicked, with the page number available via `event.detail.pageNumber`

<Script script={
    () => {
        const el = document.getElementById('onclick-example');
        if (el) {
            el.addEventListener('rui-pagination-next-click', () => { alert('Next button clicked!')});

            el.addEventListener('rui-pagination-prev-click', () => { alert('Previous button clicked!')});

            el.addEventListener('rui-pagination-item-click', (e) => { alert(`Page ${e.detail.pageNumber} clicked!`)});
        }
    }
}></Script>
```html preview
<script>
    const el = document.getElementById('onclick-example');
    if (el) {
        el.addEventListener('rui-pagination-next-click', () => { alert('Next button clicked!')});

        el.addEventListener('rui-pagination-prev-click', () => { alert('Previous button clicked!')});

        el.addEventListener('rui-pagination-item-click', (e) => { alert(`Page ${e.detail.pageNumber} clicked!`)});
    }
</script>
<rui-pagination
    id="onclick-example"
    current-page="3"
    num-pages="5">
</rui-pagination>
```


## Using hrefs
If you do not wish to implement onclick behaviours, the items can be given hrefs by use of the `generateHref` method of the element. This is a function that takes the page number as an argument and expects you to return a href string. 

Hrefs for the next and previous links can be defined by the `next-link`  and `prev-link` attributes.


<Script script={
    () => {
        const el = document.getElementById('href-example');
        if (el) {
            el.generateHref = (pageNum) => `#${pageNum}`;
            el.requestUpdate();
        }
    }
}></Script>
```html preview
<script>
    const el = document.getElementById('href-example');
    if (el) {
        el.generateHref = (pageNum) => `#${pageNum}`;
        el.requestUpdate();
    }
</script>
<rui-pagination
    id="href-example"
    current-page="3"
    num-pages="5"
    next-link="#next"
    prev-link="#prev">
</rui-pagination>
```

## Truncation
If you have a lot of pages, you can specify how many to show before truncation via the `pages-shown` attribute. Note that the first and last pages are always accessible.

```html preview
<rui-pagination
    current-page="10"
    pages-shown="5"
    num-pages="20">
</rui-pagination>
```

## Customising

### Custom page labels
Pagination item labels and aria labels can be overriden via the `generateLabel` and `generateAriaLabel` functions

<Script script={
    () => {
        const el = document.getElementById('custom-label-example');
        if (el) {
            el.generateLabel = (pageNum) => (pageNum < 10) ? `0${pageNum}` : pageNum;
            el.generateAriaLabel = (pageNum) => `Visit page ${pageNum}`;
            el.requestUpdate();
        }
    }
}></Script>
```html preview
<script>
    const el = document.getElementById('custom-label-example');
    if (el) {
        el.generateLabel = (pageNum) => (pageNum < 10) ? `0${pageNum}` : pageNum;
        el.generateAriaLabel = (pageNum) => `Visit page ${pageNum}`;
        el.requestUpdate();
    }
</script>
<rui-pagination
    id="custom-label-example"
    current-page="3"
    num-pages="5"
    next-link="#next"
    prev-link="#prev">
</rui-pagination>
```

### Custom previous/next aria-labels
You can specify the aria labels that appears in the next/previous links with the `next-aria-label` and `prev-aria-label` attributes. 

```html preview
<rui-pagination
    current-page="3"
    num-pages="5"
    next-aria-label="custom next label"
    prev-aria-label="custom prev label">
</rui-pagination>
```

### Custom previous/next elements
You can specify what content appears in the next/previous links with the
`next-content` and `prev-content` slots. 

```html preview
<rui-pagination
    current-page="3"
    num-pages="5">
    <span slot="prev-content" style="padding: 0 5px;">Previous</span>
    <span slot="next-content" style="padding: 0 5px;">Next</span>
</rui-pagination>
```


### Custom ellipses elements
You can specify what the ellipses looks like via the `ellipses` slot

```html preview
<style>
    .custom-ellipses {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ellipses-item {
        width: 3px;
        height: 3px;
        margin: 0 1px;
        background: #333;
    }
</style>
<rui-pagination
    current-page="10"
    pages-shown="5"
    num-pages="20">
    <div slot="ellipses" class="custom-ellipses">
        <div class="ellipses-item"></div>
        <div class="ellipses-item"></div>
        <div class="ellipses-item"></div>
    </div>
</rui-pagination>
```