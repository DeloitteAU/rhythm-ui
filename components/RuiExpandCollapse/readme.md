---
package: "@rhythm-ui"
title: "rui-expand-collapse"
---

# Expand Collapse

## Internally controlled
If you do not need to implement any custom logic, then you just need to provide the component an element for the summary content and the details content that is revealed on expand/collapse. Clicking the summary content will trigger an expand/collapse.

```html preview
<rui-expand-collapse>
	<span slot="summary-content">
		Expander summary
		<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
			<g stroke="none" stroke-width="1" fill-rule="evenodd">
				<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
					<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
				</g>
			</g>
		</svg>
	</span>
	<p slot="details-content">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	</p>
</rui-expand-collapse>
```

If you wish for the expand collapse to default to open, use the below:
```html preview
<rui-expand-collapse open>
	<span slot="summary-content">
		Expander summary
		<svg width="8px" height="5px" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" slot="icon" class="icon">
			<g stroke="none" stroke-width="1" fill-rule="evenodd">
				<g transform="translate(-4.000000, -6.000000)" fill-rule="nonzero">
					<path d="M7.99975,10.74975 C7.80775,10.74975 7.61575,10.67675 7.46975,10.52975 L4.21975,7.27975 C3.92675,6.98675 3.92675,6.51275 4.21975,6.21975 C4.51275,5.92675 4.98675,5.92675 5.27975,6.21975 L7.99975,8.93875 L10.71975,6.21975 C11.01275,5.92675 11.48675,5.92675 11.77975,6.21975 C12.07275,6.51275 12.07275,6.98675 11.77975,7.27975 L8.52975,10.52975 C8.38375,10.67675 8.19175,10.74975 7.99975,10.74975" fill="currentColor"></path>
				</g>
			</g>
		</svg>
	</span>
	<p slot="details-content">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	</p>
</rui-expand-collapse>
```

## Externally controlled
If you wish to externally control the open/close state of the expand collapse
you can modify the open property through javascript and the component will listen to your changes. 

The component's onExpandCollapse function should be overriden in this case.

```html
<rui-expand-collapse id="expandExample">
    <p slot="summary-content">Expander summary</p>
    <p slot="details-content">Expanded content</p>
</rui-expand-collapse>

<script>
    window.onload = () => {
        window.expanderOpen = false;
        const expandCollapseEl = document.getElementById('expandExample');
        expandCollapseEl.onExpandCollapse = () => {
            window.expanderOpen = !window.expanderOpen;
            expandCollapseEl.open = window.expanderOpen;
        }
    }
</script>
```
