---
package: "@rhythm-ui/icon"
title: "rui-icon"
---

# Icon

Icon provides a convenient way to style your icon set. Icon will use a 

## Default

```html preview
<rui-icon src="/icons/chat.svg"></rui-icon>
<rui-icon src="/icons/chat-colour.svg"></rui-icon>
<rui-icon src="/icons/world.svg"></rui-icon>
<rui-icon src="/icons/world-colour.svg"></rui-icon>

<rui-icon src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCI+PGcgY2xhc3M9Im5jLWljb24td3JhcHBlciIgZmlsbD0iIzQ0NDQ0NCI+PHBhdGggZmlsbD0iIzQ0NDQ0NCIgZD0iTTI0LDI1YzYuMDY1LDAsMTEtNC45MzUsMTEtMTF2LTJjMC02LjA2NS00LjkzNS0xMS0xMS0xMVMxMyw1LjkzNSwxMywxMnYyQzEzLDIwLjA2NSwxNy45MzUsMjUsMjQsMjV6Ij48L3BhdGg+IDxwYXRoIGRhdGEtY29sb3I9ImNvbG9yLTIiIGZpbGw9IiM0NDQ0NDQiIGQ9Ik0zOS4yNzgsMzEuMTg1QzM1LjkyNiwzMC4xODgsMzAuNTU0LDI5LDI0LDI5cy0xMS45MjYsMS4xODgtMTUuMjc4LDIuMTg1IEM1LjMsMzIuMjAzLDMsMzUuMjg2LDMsMzguODU2VjQ2YzAsMC41NTIsMC40NDgsMSwxLDFoNDBjMC41NTIsMCwxLTAuNDQ4LDEtMXYtNy4xNDRDNDUsMzUuMjg2LDQyLjcsMzIuMjAzLDM5LjI3OCwzMS4xODV6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="></rui-icon>
```

## A11Y support

In cases where the icon isn't purely decorative provide an alt text for A11Y support.

```html preview
<rui-icon src="/icons/chat.svg" alt="Chat bubble"></rui-icon>
<rui-icon src="/icons/chat-colour.svg" alt="Chat bubble"></rui-icon>
<rui-icon src="/icons/world.svg" alt="World"></rui-icon>
<rui-icon src="/icons/world-colour.svg" alt="World"></rui-icon>
```

## Icons with hover states

The icon component can be used in places where 

```html preview
<rui-icon src="/icons/chat.svg" hover={true}></rui-icon>
<rui-icon src="/icons/chat-colour.svg" hover={true}></rui-icon>
<rui-icon src="/icons/world.svg" hover={true}></rui-icon>
<rui-icon src="/icons/world-colour.svg" hover={true}></rui-icon>
```

## Customise icons

```html preview
<rui-icon src="/icons/chat.svg" class="icon-small"></rui-icon>
<rui-icon src="/icons/chat-colour.svg" class="icon-large"></rui-icon>
<rui-icon src="/icons/world.svg" class="icon-small"></rui-icon>
<rui-icon src="/icons/world-colour.svg" class="icon-large"></rui-icon>
```

Please note: Hover states are not supported by IE11
