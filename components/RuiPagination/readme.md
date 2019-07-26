---
package: "@rhythm-ui/pagination"
title: "rui-pagination"
---

# Pagination
Pagination is used to allow the user to navigate between paginated content pages easily. 

## Basic usage
The pagination links are configured via the `items` attribute. The current pages is indicated via the `current-page` attribute. In addition to this, the next and previous page button links are configured via the `next-link` and `prev-link` attributes.

### Items config
```html preview
<rui-pagination
    items='{
        "1": {"href": "#1"},
        "2": {"href": "#2"},
        "3": {"href": "#3"},
        "4": {"href": "#4"},
        "5": {"href": "#5"},
        "6": {"href": "#6"}
    }'
    next-link="#"
    prev-link="#"
    current-page="1">
</rui-pagination>
```

### Custom labels
If you wish to use custom labels, not the default 1, 2, 3..., page numbers, then you can specify it within the `items` object via the 
`label` key. 
```html preview
<rui-pagination
    items='{
        "1": {"label": "01", "href": "#1"},
        "2": {"label": "02", "href": "#2"},
        "3": {"label": "03", "href": "#3"},
        "4": {"label": "04", "href": "#4"},
        "5": {"label": "05", "href": "#5"},
        "6": {"label": "06", "href": "#6"}
    }'
    next-link="#"
    prev-link="#"
    current-page="1">
</rui-pagination>
```

### Using onclick events
If you need to implement some custom onclick/navigation behaviour, you can simply not use the `href` key in your `items` values and omit the 
`prev-link` and `next-link` attributes as needed. 
In this case you should provide the `num-pages` attribute to let the component know how many page items to render. 

`rui-pagination-next-click` will be fired when no `next-link` is provided.
`rui-pagination-prev-click` will be fired when no `prev-link` is provided.
`rui-pagination-item-click` will be fired when on of the pagination items is clicked, with the page number available via `event.detail.pageNumber`

```html preview
<script>
    const el = document.getElementById('onclick-example');
    if (el) {
        el.addEventListener('rui-pagination-next-click', () => { console.log('Next button clicked!')})

        el.addEventListener('rui-pagination-prev-click', () => { console.log('Previous button clicked!')})

        el.addEventListener('rui-pagination-item-click', (e) => { console.log(`Page ${e.detail.pageNumber} clicked!`)})
    }
</script>
<rui-pagination
    id="onclick-example"
    current-page="3"
    num-pages="5">
</rui-pagination>
```

## Truncation
If you have a lot of pages, you can specify how many to show before truncation
via the `pages-shown` attribute. Note that the first and last pages are 
always accessible.

```html preview
<rui-pagination
    current-page="10"
    pages-shown="5"
    num-pages="20">
</rui-pagination>
```


## Custom elements


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