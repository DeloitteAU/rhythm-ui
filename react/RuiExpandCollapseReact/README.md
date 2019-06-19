# Expand Collapse

## Internally controlled
If you do not need to implement any custom logic, then you just need to provide the component an element for the summary content and the details content that is revealed on expand/collapse. Clicking the summary content will trigger an expand/collapse.

```html preview
<RuiExpandCollapse>
    <RuiExpandCollapse.Summary>Expander summary</RuiExpandCollapse.Summary>
    <RuiExpandCollapse.Details>Expanded content</RuiExpandCollapse.Details>
</RuiExpandCollapse>
```

If you wish for the expand collapse to default to open, use the below:
```html preview
<RuiExpandCollapse open>
    <RuiExpandCollapse.Summary>Expander summary</RuiExpandCollapse.Summary>
    <RuiExpandCollapse.Details>Expanded content</RuiExpandCollapse.Details>
</RuiExpandCollapse>
```

## Externally controlled
If you wish to externally control the open/close state of the expand collapse make use of the onChange and open props

```js
import React from 'react'

export class ExpandCollapseController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleExpandCollapse = () => {
        this.setState(prevState => ({
            open: !prevState.open,
        }))
    }

    render() {
        return (
            <RuiExpandCollapse
                open={this.state.open}
                onChange={this.handleExpandCollapse}
            >
                <RuiExpandCollapse.Summary>Expander summary</RuiExpandCollapse.Summary>
                <RuiExpandCollapse.Details>Expanded content</RuiExpandCollapse.Details>
            </RuiExpandCollapse>
        )
    }
}
```