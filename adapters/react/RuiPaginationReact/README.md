# Pagination
Pagination is used to allow the user to navigate between paginated content pages easily. 

## Basic usage
The pagination links are configured via the `items` prop. The current pages is indicated via the `currentPage` prop. In addition to this, the next and previous page button links are configured via the `nextLink` and `prevLink` props.

### Items config
```jsx
<RuiPagination
    items={{
        1: { href: '#1' },
        2: { href: '#2' },
        3: { href: '#3' },
        4: { href: '#4' },
        5: { href: '#5' }
    }}
    nextLink='#'
    prevLink='#'
    currentPage={3}>
</RuiPagination>
```

### Custom labels
If you wish to use custom labels, not the default 1, 2, 3..., page numbers, then you can specify it within the `items` prop via the 
`label` key. 
```jsx
<RuiPagination
    items={{
        1: { label: '01', href: '#1' },
        2: { label: '02', href: '#2' },
        3: { label: '03', href: '#3' },
        4: { label: '04', href: '#4' },
        5: { label: '0', href: '#5' }
    }}
    nextLink='#'
    prevLink='#'
    currentPage={3}>
</RuiPagination>
```

### Using onclick handlers
If you need to implement some custom onclick/navigation behaviour, you can simply not use the `href` key in your `items` prop and omit the 
`prevLink` and `nextLink` props as needed. 
In this case you should provide the `numPages` attribute to let the component know how many page items to render. 

`onNextClick` will be fired when no `nextLink` is provided.
`onPrevClick` will be fired when no `prevLink` is provided.
`onItemClick` will be fired when one of the pagination items is clicked, with the page number available as the first argument

```jsx
<RuiPagination
    id="onclick-example"
    currentPage={3}
    numPages={5}
    onNextClick={() => { console.log('Next Clicked!'); }}
    onPrevClick={() => { console.log('Prev Clicked!'); }}
    onItemClick={(item) => { console.log(`Item ${item} Clicked!`); }}>
</RuiPagination>
```

## Truncation
If you have a lot of pages, you can specify how many to show before truncation via the `pagesShown` prop. Note that the first and last pages are always accessible.

```jsx
<RuiPagination
    currentPage={10}
    pagesShown={5}
    numPages={20}>
</RuiPagination>
```

## Custom elements

### Custom previous/next elements
You can specify what content appears in the next/previous links with the
`RuiPagination.Previous` and `RuiPagination.Next` subcomponents. 

```jsx
<RuiPagination
    currentPage={3}
    numPages={5}>
    <RuiPagination.Previous styles={{padding: '0 5px'}}>Previous</RuiPagination.Previous>
    <RuiPagination.Next styles={{padding: '0 5px'}}>Next</RuiPagination.Next>
</RuiPagination>
```


### Custom ellipses elements
You can specify what the ellipses looks like via the `RuiPagination.Ellipses` subcomponent

```jsx
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
<RuiPagination
    currentPage={10}
    pagesShown={5}
    numPages={20}>
    <RuiPagination.Ellipses className="custom-ellipses">
        <div className="ellipses-item"></div>
        <div className="ellipses-item"></div>
        <div className="ellipses-item"></div>
    </RuiPagination.Ellipses>
</RuiPagination>
```