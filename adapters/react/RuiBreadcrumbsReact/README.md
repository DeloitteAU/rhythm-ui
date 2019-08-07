# Breadcrumbs

Breadcrumbs indicate location of the current page with links back to the pages navigated through to get there. 

## Basic Usage
The `RuiBreadcrumbs` component expects you to pass child elements for each of the crumbs you wish to display. 
Each child should use the `RuiBreadcrumbs.Crumb` subcomponent. The last element passed in should be the `active` crumb, which should not have any `href` or `onclick` behaviour. 

```jsx
<RuiBreadcrumbs>
	<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb as="span">Breadcrumb 3</RuiBreadcrumbs.Crumb>
</RuiBreadcrumbs> 
```

## Breadcrumb Truncation
By default, all crumbs given will display. If you wish to modify this value, you can set a max amount of crumbs to display before truncation via the `maxCrumbs` prop. 

```jsx
<RuiBreadcrumbs
	maxCrumbs={3}
>
    <RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
</RuiBreadcrumbs>
```

### Titles When Truncated
Rendering of option titles within a truncated select
uses the text content of the provided element. If this is
not wanted, you can provide an override to the 
rendered label via the `truncatedLabel` prop

```jsx
<RuiBreadcrumbs maxCrumbs={2}>
	<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb truncatedLabel="Link 2 custom label" href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
</RuiBreadcrumbs>
```

### Custom behaviour when truncated
Clicking a truncated breadcrumb option will navigate to the elements href by default, if no href is provided the `onItemSelect` function will be fired, with the index of the selected crumb available as the first argument.

```jsx
<RuiBreadcrumbs maxCrumbs={2} onCrumbSelect={(i) => {
    console.log(`Crumb ${i} selected!`);
}}>
	<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
</RuiBreadcrumbs>
```

## Custom Seperators
If you require a custom seperator you can use the ```RuiBreadcrumbs.Seperator``` subcomponent
```jsx
<RuiBreadcrumbs>
	<RuiBreadcrumbs.Crumb href="#home">Home</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb href="#b1">Breadcrumb 1</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b2">Breadcrumb 2</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b3">Breadcrumb 3</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#b4">Breadcrumb 4</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Crumb as="span">Breadcrumb 5</RuiBreadcrumbs.Crumb>
	<RuiBreadcrumbs.Seperator className="chevron-right" aria-hidden="true" as="span"></RuiBreadcrumbs.Seperator>
</RuiBreadcrumbs> 
```

Keep in mind that if you provide a custom seperator, you are in charge of its accessibility, remember to add appropriate aria attributes as needed.