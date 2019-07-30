# Pagination
Pagination is used to allow the user to navigate between paginated content pages easily. 

## Basic usage
By default, pagination requires you to specify which page is the current page via the `currentPage` prop and how many pages are in the pagination in total via the `numPages` prop. The behaviour when a pagination item is selected, can be configured via the `onItemClick`, `onNextClick` and `onPrevClick` functions.
```jsx
<RuiPagination
    onItemClick={() => {alert('Next button clicked!');}}
    onNextClick={() => {alert('Prev button clicked!');}}
    onPrevClick={(pageNumber) => {alert(`Page ${pageNumber} clicked!`)}}
    currentPage={3}
    numPages={5}>
</RuiPagination>
```

## Using hrefs
If you do not wish to implement onclick behaviours, the items can be given hrefs by use of the `generateHref` prop. This is a function that takes the page number as an argument and expects you to return a href string. 

Hrefs for the next and previous links can be defined by the `nextLink`  and `prevLink` props.

```jsx
<RuiPagination
    generateHref={(pageNum) => `#${pageNum}`}
    currentPage={3}
    numPages={5}
    nextLink="#next"
    prevLink="#prev">
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

## Customising

### Custom page labels
Pagination item labels and aria labels can be overriden via the `generateLabel` and `generateAriaLabel` props

```jsx
<RuiPagination
    generateLabel={(pageNum) => (pageNum < 10) ? `0${pageNum}` : pageNum}
    generateAriaLabel={(pageNum) => `Visit page ${pageNum}`}
    currentPage={3}
    numPages={5}
>
</RuiPagination>
```

### Custom previous/next elements
You can specify what content appears in the next/previous links with the
`RuiPagination.Next` and `RuiPagination.Previous` subcomponents. 

```jsx
<RuiPagination
    currentPage={3}
    numPages={5}>
    <RuiPagination.Previous style={{padding: '0 5px'}}>Previous</RuiPagination.Previous>
    <RuiPagination.Next style={{padding: '0 5px'}}>Next</RuiPagination.Next>
</RuiPagination>
```

### Custom ellipses elements
You can specify what the ellipses looks like via the `RuiPagination.Ellipses` subcomponent

```jsx
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