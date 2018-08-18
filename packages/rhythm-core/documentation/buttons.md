---
title: Buttons
permalink: docs/core/buttons.html
---

To use this component, add the `.btn` class to an element with a style modifier.

```html example
<button class="btn btn--primary">Primary button</button>
<button class="btn btn--secondary">Secondary button</button>
```


## Compatible elements

We recommend you use `<button>` tags, however you can additionally use this class on `<input>` and `<a>` tags.

```html example
<button class="btn btn--primary">Button button</button>
<a class="btn btn--primary">Anchor button</a>
<input type="button" class="btn btn--primary" value="Input Button" />
<input type="submit" class="btn btn--primary" value="Submit Button" />
```

## Disabling buttons

Add the `disabled` attribute to inputs or alternatively add the `btn--disabled` modifier.

```html example
<button class="btn btn--primary" disabled="disabled">Disabled button</button>
<a class="btn btn--primary btn--disabled">Disabled anchor button</a>
```

## Changing button sizes

Add `.btn--small` to reduce the button size.

```html example
<button class="btn btn--primary btn--small">Small primary button</button>
<button class="btn btn--secondary btn--small">Small secondary button</button>
```

## API

### Base variables

| Variable                  | Default               | Description                       |
|---------------------------|-----------------------|-----------------------------------|
|`$btn-base-padding`        | 12px 40px             | Extra small font size             |
|`$btn-base-font-size`      | `$font-size-base`     | Extra small font size line height |
|`$btn-base-line-height`    | `$line-height-base`   | Small font size                   |

Customise

| Mixin                    | Description               |
|--------------------------|---------------------------|
|`@mixin extend-btn(){}`   | Extend ALL buttons        |


### Small buttons

| Variable                  | Default               | Description                       |
|---------------------------|-----------------------|-----------------------------------|
|`$btn-small-padding`       | 3px 15px              | Extra small font size             |
|`$btn-small-font-size`     | `$font-size-s`        | Extra small font size line height |
|`$btn-small-line-height`   | `$line-height-s`      | Small font size                   |

### Primary button

| Variable                          | Default                       | Description                       |
|-----------------------------------|-------------------------------|-----------------------------------|
|`$btn-primary-color`               | `$white`                      | Primary button text colour        |
|`$btn-primary-background`          | `$brand-primary`              | Primary button background         |
|`$btn-primary-hover-color`         | `null`                        | Primary button hover text colour  |
|`$btn-primary-hover-background`    | `darken($brand-primary, 12%)` | Primary button hover background   |
|`$btn-primary-active-color`        | `null`                        | Primary button active text colour |
|`$btn-primary-active-background`   | `darken($brand-primary, 6%)`  | Primary button active background  |

Customise

| Mixin                             | Description               |
|-----------------------------------|---------------------------|
|`@mixin extend-btn--primary(){}`   | Extend primary button     |

### Secondary button

| Variable                            | Default                         | Description                         |
|-------------------------------------|---------------------------------|-------------------------------------|
|`$btn-secondary-color`               | `$white`                        | Secondary button text colour        |
|`$btn-secondary-background`          | `$brand-secondary`              | Secondary button background         |
|`$btn-secondary-hover-color`         | `null`                          | Secondary button hover text colour  |
|`$btn-secondary-hover-background`    | `darken($brand-secondary, 12%)` | Secondary button hover background   |
|`$btn-secondary-active-color`        | `null`                          | Secondary button active text colour |
|`$btn-secondary-active-background`   | `darken($brand-secondary, 6%)`  | Secondary button active background  |

Customise

| Mixin                             | Description               |
|-----------------------------------|---------------------------|
|`@mixin extend-btn--secondary(){}` | Extend secondary button   |

### Disabled button

| Variable                  | Default               | Description                       |
|---------------------------|-----------------------|-----------------------------------|
|`$btn-disabled-color`      | `$grey`               | Disabled button text colour       |
|`$btn-disabled-background` | `$grey-lighter`       | Disabled button background        |
|`$btn-disabled-cursor`     | `$cursor-disabled`    | Disabled button hover text colour |

#### Mixin hooks

| Mixin hook                        | Description                    |
|-----------------------------------|--------------------------------|
|`@mixin extend-btn--disabled(){}`  | Extend disabled button rules   |

## Mixins

### btn-size

Includes button sizing rules.

```scss
@include btn-size($font-size, $line-height, $padding);
```

|Parameter          | Options                                                   | Description   |
|-------------------|-----------------------------------------------------------|---------------|
|**font-size**      | number (with or without CSS unit)                         | Font size     |
|**line-height**    | number (with or without CSS unit)                         | Line height   |
|**padding**        | number list (space separated, with or without CSS unit)   | Padding       |

#### Mixin hooks

| Mixin hook name                                                                | Description               |
|-----------------------------------------------------------------------|---------------------------|
|`@mixin override-mixin-btn-size($font-size, $line-height, $padding){}` | Override mixin            |
|`@mixin extend-mixin-btn-size($font-size, $line-height, $padding){}`   | Extend mixin              |

### btn-variation

Includes button sizing rules.

```scss
@include btn-variation($default, $hover, $active);
```

|Parameter  | Options                                             | Description     |
|-----------|-----------------------------------------------------|-----------------|
|**default**| list(comma separated) text-color, background-color  | Default state   |
|**hover**  | list(comma separated) text-color, background-color  | Hover state     |
|**active** | list(comma separated) text-color, background-color  | Active state    |

Usage example:

```scss
@include btn-variation(
    ($btn-primary-color, $btn-primary-background),					// Default
    ($btn-primary-hover-color, $btn-primary-hover-background),		// Hover/Focus
    ($btn-primary-active-color, $btn-primary-active-background)		// Activeactive
);
```

#### Customise this mixin

| Mixin                                                                 | Description               |
|-----------------------------------------------------------------------|---------------------------|
|`@mixin override-mixin-btn-size($font-size, $line-height, $padding){}` | Override mixin            |
|`@mixin extend-mixin-btn-size($font-size, $line-height, $padding){}`   | Extend mixin              |