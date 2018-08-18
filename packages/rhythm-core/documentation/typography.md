---
title: Typography
permalink: docs/core/typography.html
---

All typography use `rems` out of the box so font-sizes and spacial relationships can be responsively sized.
The base is set at 16px by default and can be configured by setting the `$font-size-base` and `$line-height-base` variables.


## Size variations

Text size variations can be set by using the `.txt-xs`, `.txt-s` and `.txt-l` classes.

```html example
<p class="txt-xs">Extra small text</p>
<p class="txt-s">Small text</p>
<p>Base text</p>
<p class="txt-l">Large text</p>
```

## Intro paragraph

Emphasize intro paragraphs with the `.intro` class on `<p>` tags.

By default, the intro component inherits the `$font-size-l` and `$line-height-l` variables.

```html example
<p class="intro">This is an intro paragraph.</p>
<p>This is a regular paragraph.</p>
```

## Headings

Headings can be defined by using either semantic heading tags `<h1>` or classes `.h1`, `.h2`, `.h3` *etc*.

You can also inverse heading colours by adding the `.h-inverse` class.

```html example
<h1>H1 Heading</h1>
<h2>H2 Heading</h2>
<h3>H3 Heading</h3>
<h4>H4 Heading</h4>
<h5>H5 Heading</h5>
<h6>H6 Heading</h6>
```

## Hero Heading

Use hero styling for high impact banners by adding the `.h-hero` class. 

```html example
<h1 class="h-hero">Hero Heading</h1>
```

## Block quotes

With citation

```html example
<blockquote>
    &ldquo;Lorem ipsum Ea aliqua consectetur laboris adipisicing voluptate.&rdquo;
    <footer>John Pullquote from <cite>Publication</cite></footer>
</blockquote>
```

Without citation

```html example
<blockquote>
    &ldquo;Lorem ipsum Ea aliqua consectetur laboris adipisicing voluptate.&rdquo;
</blockquote>
```

## SASS API

### Base variables

| Variable              | Default   | Description                                           |
|-----------------------|-----------|-------------------------------------------------------|
|`$font-family-base`    | -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto","Helvetica Neue", Arial, sans-serif | Global base font family |
|`$font-size-base`      | 16px      | Global base font size (REMS are calculated from this) |
|`$line-height-base`    | 1.875     | Global base line height                               |
|`$font-weight-base`    | normal    | Global base font weight                               |
|`$text-color-base`     | `$black`  | Base text colour                                      |
|`$text-color-inverse`  | `$white`  | Inverse text colour for inverse backgrounds           |
|`$text-margins-text-s` | 15px      | Small margins for text blocks                         |
|`$text-margins-text-l` | 45px      | Large margins for text blocks                         |

### Size variations

| Variable          | Default   | Description                       |
|-------------------|-----------| ----------------------------------|
|`$font-size-xs`    | 0.75rem   | Extra small font size             |
|`$line-height-xs`  | 1.45      | Extra small font size line height |
|`$font-size-s`     | 0.875rem  | Small font size                   |
|`$line-height-s`   | 1.675     | Small font size line height       |
|`$font-size-l`     | 1.125rem  | Large font size                   |
|`$line-height-l`   | 1.825     | Large font size line height       |


### Intro paragraph

Customise

| Mixin                            | Description                |
|----------------------------------|----------------------------|
|`@mixin extend-intro(){}`         | Extend the default intro   |


### Headings

#### Type face

| Variable                  | Default                       | Description                       |
|---------------------------|-------------------------------|-----------------------------------|
|`$font-family-feature`     | 'Source Sans Pro', sans-serif | Headings/feature text font family |
|`$font-weight-feature`     | 400                           | Headings/feature text font weight |
|`$heading-color`           | `$black`                      | Headings colour                   |
|`$heading-color-inverse`   | `$white`                      | Inverse heading colour            |

#### Sizes

| Variable                      | Default                       | Description               |
|-------------------------------|-------------------------------|---------------------------|
|`$heading-hero-font-size`      | 3rem                          | Base Hero font size       |
|`$heading-hero-font-size-s`    | `$heading-hero-font-size`     | Mobile Hero font size     |
|`$heading-hero-line-height`    | 1.1                           | Base Hero line height     |
|`$heading-hero-line-height-s`  | `$heading-hero-line-height`   | Mobile Hero line height   |
|`$h1-font-size`                | 2.625rem                      | Base H1 font size         |
|`$h1-font-size-s`              | `$h1-font-size`               | Mobile H1 font size       |
|`$h1-line-height`              | 1.2                           | Base H1 line height       |
|`$h1-line-height-s`            | `$h1-line-height`             | Mobile H1 line height     |
|`$h2-font-size`                | 2rem                          | Base H2 font size         |
|`$h2-font-size-s`              | `$h2-font-size`               | Mobile H2 font size       |
|`$h2-line-height`              | 1.1667                        | Base H2 line height       |
|`$h2-line-height-s`            | `$h2-line-height`             | Mobile H2 line height     |
|`$h3-font-size`                | 1.5rem                        | Base H3 font size         |
|`$h3-font-size-s`              | `$h3-font-size`               | Mobile H3 font size       |
|`$h3-line-height`              | 1.125                         | Base H3 line height       |
|`$h3-line-height-s`            | `$h3-line-height`             | Mobile H3 line height     |
|`$h4-font-size`                | 1.4rem                        | Base H4 font size         |
|`$h4-font-size-s`              | `$h4-font-size`               | Mobile H4 font size       |
|`$h4-line-height`              | 1.1538                        | Base H4 line height       |
|`$h4-line-height-s`            | `$h4-line-height`             | Mobile H4 line height     |
|`$h5-font-size`                | `$font-size-base`             | Base H5 font size         |
|`$h5-font-size-s`              | `$h5-font-size`               | Mobile H5 font size       |
|`$h5-line-height`              | 1.1818                        | Base H5 line height       |
|`$h5-line-height-s`            | `$h5-line-height`             | Mobile H5 line height     |
|`$h6-font-size`                | `$font-size-base`             | Base H6 font size         |
|`$h6-font-size-s`              | `$h6-font-size`               | Mobile H6 font size       |
|`$h6-line-height`              | 1.2                           | Base H6 line height       |
|`$h6-line-height-s`            | `$h6-line-height`             | Mobile H6 line height     |

#### Customise mixins

| Mixin                         | Description               |
|-------------------------------|---------------------------|
|`@mixin extend-headings(){}`   | Extend ALL headings       |
|`@mixin extend-h-hero(){}`     | Extend the hero heading   |
|`@mixin extend-h1(){}`         | Extend the H1 heading     |
|`@mixin extend-h2(){}`         | Extend the H2 heading     |
|`@mixin extend-h3(){}`         | Extend the H3 heading     |
|`@mixin extend-h4(){}`         | Extend the H4 heading     |
|`@mixin extend-h5(){}`         | Extend the H5 heading     |
|`@mixin extend-h6(){}`         | Extend the H6 heading     |


### Blockquotes

#### Variables

| Variable                   | Default                      | Description                   |
|----------------------------|------------------------------|-------------------------------|
|`$blockquote-font-family`   | `$font-family-feature`       | Blockquote font family        |
|`$blockquote-font-size`     | 2rem                         | Base blockquote font size     |
|`$blockquote-font-size-s`   | `$blockquote-font-size`      | Mobile blockquote font size   |
|`$blockquote-line-height`   | 1.1667                       | Base blockquote line height   |
|`$blockquote-line-height-s` | `$blockquote-line-height`    | Mobile blockquote line height |
|`$blockquote-font-weight`   | 400                          | Blockquote font weight        |  

#### Customise mixins

| Mixin                                 | Description                                       |
|---------------------------------------|---------------------------------------------------|
|`@mixin extend-blockquote(){}`         | Extend the default blockquote                     |
|`@mixin extend-blockquote-footer(){}`  | Extend the default blockquote footer/citation     |

## Mixins

### font-feature

Includes the *feature font* and *line-height*.

```scss
@include font-feature();
```

#### Customise mixins

| Mixin                                     | Description                       |
|-------------------------------------------|-----------------------------------|
| `@mixin override-mixin-font-feature(){}`  | Override the default mixin rules  |
| `@mixin extend-mixin-font-feature(){}`    | Extend the mixin rules            |

### heading-font-size

Includes the *heading* font rules.

```scss
@include heading-font-size(id);
```

|Parameter  | Options                                   | Description   |
|-----------|-------------------------------------------|---------------|
|**id**     |`h1`,`h2`,`h3`,`h4`,`h5`,`h6` or `hero`    | Heading size  |

#### Customise mixins

| Mixin                                             | Description                       |
|---------------------------------------------------|-----------------------------------|
| `@mixin override-mixin-heading-font-size($id){}`  | Override the default mixin rules  |
| `@mixin extend-mixin-heading-font-size($id){}`    | Extend the mixin rules            |
