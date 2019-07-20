# Breadcrumbs

Breadcrumbs indicate location of the current page with links back to the pages navigated through to get there. 

## Basic Usage
If you do not need custom label elements, you can configure the breadcrumbs by passing in an array containing the titles and links of the breadcrumbs via the `crumbs` prop. The last link given will always be the active link.

```html
<RuiBreadcrumbs
	crumbs={[
    	{title: "Home", url: "#home"},
    	{title: "Breadcrumb 1", url: "#b1"},
		{title: "Breadcrumb 2", url: "#b2" },
		{title: "Breadcrumb 3", url: "#b3" }
	]}
/>
```

## Breadcrumb Truncation
If you have space limitations, you can set a max amount of crumbs to display before truncation via the `maxCrumbs` prop.

```html
<RuiBreadcrumbs
	maxCrumbs={3}
	crumbs={[
    	{title: 'Home', url: '#home'},
    	{title: 'Breadcrumb 1', url: '#b1' },
		{title: 'Breadcrumb 2', url: '#b2' },
		{title: 'Breadcrumb 3', url: '#b3' },
        {title: 'Breadcrumb 4', url: '#b3' },
        {title: 'Breadcrumb 5', url: '#b3' }
	]}
/>
```

## Custom Seperators
If you require a custom seperator you can use the `RuiBreadcrumbs.Seperator` subcomponent
```html
<RuiBreadcrumbs
	crumbs={[
    	{title: 'Home', url: '#home'},
    	{title: 'Breadcrumb 1', url: '#b1' },
		{title: 'Breadcrumb 2', url: '#b2' },
		{title: 'Breadcrumb 3', url: '#b3' },
        {title: 'Breadcrumb 4', url: '#b3' },
        {title: 'Breadcrumb 5', url: '#b3' }
	]}
>
    <RuiBreadcrumbs.Seperator aria-hidden="true">/</RuiBreadcrumbs.Seperator>
</RuiBreadcrumbs> 
```

Keep in mind that if you provide a custom seperator, you are in charge of its accessibility, remember to add appropriate aria attributes as needed.

## Custom Crumbs
If you require more control over the individual breadcrumbs, you can use the `RuiBreadcrumbs.Crumb` subcomponent. Please keep in mind that when using this pattern, the order of crumbs is the same as the order the children appear in the component.

```html
<RuiBreadcrumbs> 
    <RuiBreadcrumbs.Crumb href="#l1">Link 1 <span>custom richtext</span></RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#l2">Link 2</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb as="span">Active Link</RuiBreadcrumbs.Crumb>
</RuiBreadcrumbs>
```

*Note: You cannot mix usage of `crumbs` prop and ```RuiBreadcrumbs.Crumb```

### Custom Crumb Titles When Truncated
Rendering of option titles within a truncated select
uses the text content of the provided element. If this is
not wanted, you can provide an override to the 
rendered label via the `truncatedLabel` prop

```html
<RuiBreadcrumbs maxCrumbs={3}>
    <RuiBreadcrumbs.Crumb href="#l1">Link 1</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb truncatedLabel="Link 2 Custom Label" href="#l2">Link 2</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#l3">Link 3</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb href="#l4">Link 4</RuiBreadcrumbs.Crumb>
    <RuiBreadcrumbs.Crumb as="span">Active Link</RuiBreadcrumbs.Crumb>
</RuiBreadcrumbs>
```

## Custom navigation behaviour
If you require custom navigation behavour, you have a few avenues available to you.

### Click/Select events when using `crumbs` attribute
If using the `crumbs` prop, if you do not provide a url, you can react to breadcrumb clicks
via the `onCrumbClick` prop which expects a function with the index of the clicked crumb as 
its only argument.
```html
<RuiBreadcrumbs
    onCrumbClick={(i) => { console.log(`Crumb ${i} clicked!`);}}
	crumbs={[
    	{title: "Home", url: "#home"},
    	{title: "Breadcrumb 1", url: "#b1"},
		{title: "Breadcrumb 2", url: "#b2" },
		{title: "Breadcrumb 3", url: "#b3" }
	]}
>
</RuiBreadcrumbs> 
```

If using the `maxCrumbs` prop, a `onCrumbSelected` prop will fire when a crumb is selected from the select input.

```html
<RuiBreadcrumbs
    maxCrumbs={2}
    onCrumbSelect={(i) => { console.log(`Crumb ${i} selected!`);}}
	crumbs={[
    	{title: "Home", url: "#home"},
    	{title: "Breadcrumb 1", url: "#b1"},
		{title: "Breadcrumb 2", url: "#b2" },
		{title: "Breadcrumb 3", url: "#b3" }
	]}
>
</RuiBreadcrumbs> 
```

### When using custom crumbs
If using custom crumbs via the `crumb` prop, note that the onCrumbClick function will not
be called, instead - you should provide your own onclick functions to the elements you pass in

```js
import React from 'react'

export class ExpandCollapseController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleClick = (i) => {
        console.log(`Custom crumb ${i} clicked!`);
    }

    render() {
        return (
            <RuiBreadcrumbs> 
            <RuiBreadcrumbs.Crumb onClick={this.handleClick.bind(null, 0)}>Link 1 <span>custom richtext</span></RuiBreadcrumbs.Crumb>
            <RuiBreadcrumbs.Crumb onClick={this.handleClick.bind(null, 1)}>Link 2</RuiBreadcrumbs.Crumb>
            <RuiBreadcrumbs.Crumb as="span">Active Link</RuiBreadcrumbs.Crumb>
        </RuiBreadcrumbs>
        )
    }
}
```

However, if no href is passed to your custom crumbs, the `onCrumbSelect` function will still
be fired from the truncated menu