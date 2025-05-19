# Skeleton

The skeleton component is a generic, low-level component that can be used to build loading placeholder pages/elements called "skeleton screens". These screens represent the block-level visual elements of a page, or section of a page, where content is intended to be loaded sometime in the future. Using skeleton screens gives the illusion of speed to the user, and can often reduce frustration for users during long running processes.

There are a few built-in variants that can be used by adding an attribute to the element. These built-in variants are specifically designed to mimic other components in the Forge library for ease of use.

## Default

```html
<forge-skeleton></forge-skeleton>
```

## Profile

```html
<div style="width: 200px">
  <forge-skeleton avatar></forge-skeleton>
  <forge-skeleton text></forge-skeleton>
  <forge-skeleton text></forge-skeleton>
  <forge-skeleton text style="width: 75%;"></forge-skeleton>
</div>
```

## List

```html
<div style="width: 200px">
  <forge-skeleton list-item></forge-skeleton>
  <forge-skeleton list-item></forge-skeleton>
  <forge-skeleton list-item></forge-skeleton>
</div>
```

## Chips

```html
<div style="width: 200px">
  <forge-skeleton chip></forge-skeleton>
  <forge-skeleton chip></forge-skeleton>
  <forge-skeleton chip></forge-skeleton>
</div>
```

## Buttons

```html
<div style="width: 200px">
  <forge-skeleton button></forge-skeleton>
  <forge-skeleton button></forge-skeleton>
  <forge-skeleton button></forge-skeleton>
</div>
```

## Form Field

```html
<div style="width: 200px">
  <forge-skeleton form-field></forge-skeleton>
  <forge-skeleton form-field></forge-skeleton>
  <forge-skeleton form-field></forge-skeleton>
</div>
```

## API

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| avatar | string | - | Apply avatar styles to the skeleton. |
| button | string | - | Apply button styles to the skeleton. |
| chip | string | - | Apply chip styles to the skeleton. |
| form-field | string | - | Apply form field styles to the skeleton. |
| list-item | string | - | Apply list item styles to the skeleton. |
| stretch | string | - | Apply stretch styles to the skeleton. |
| text | string | - | Apply text styles to the skeleton. |

Learn more about [Attributes](#).

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-skeleton-animation-duration | The duration of the skeleton animation. |
| --forge-skeleton-avatar-shape | The shape of the avatar skeleton. |
| --forge-skeleton-avatar-size | The size of the avatar skeleton. |
| --forge-skeleton-background | The background color of the skeleton. |
| --forge-skeleton-button-height | The height of the button skeleton. |
| --forge-skeleton-button-width | The width of the button skeleton. |
| --forge-skeleton-chip-height | The height of the chip skeleton. |
| --forge-skeleton-chip-shape | The shape of the chip skeleton. |
| --forge-skeleton-chip-width | The width of the chip skeleton. |
| --forge-skeleton-form-field-height | The height of the form field skeleton. |
| --forge-skeleton-form-field-width | The width of the form field skeleton. |
| --forge-skeleton-gradient-color | The color of the gradient skeleton. |
| --forge-skeleton-height | The height of the skeleton. |
| --forge-skeleton-list-item-height | The height of the list item skeleton. |
| --forge-skeleton-list-item-margin | The margin of the list item skeleton. |
| --forge-skeleton-margin | The margin of the skeleton. |
| --forge-skeleton-shape | The shape of the skeleton. |
| --forge-skeleton-text-height | The height of the text skeleton. |
| --forge-skeleton-width | The width of the skeleton. |

Learn more about [CSS Custom Properties](#).

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root element of the skeleton. |

Learn more about [CSS Shadow Parts](#).

## Accessibility

Ensure that the skeleton component does not interfere with screen readers by including the `aria-hidden="true"` attribute.

## CSS-Only

The skeleton component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only skeleton component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/skeleton/forge-skeleton.css';
```

Learn more about [CSS-Only Components](#).

### CSS Classes

| Name | Description |
|------|-------------|
| forge-skeleton | The skeleton element. |
| forge-skeleton--avatar | The avatar skeleton element. |
| forge-skeleton--text | The text skeleton element. |
| forge-skeleton--list-item | The list item skeleton element. |
| forge-skeleton--chip | The chip skeleton element. |
| forge-skeleton--button | The button skeleton element. |
| forge-skeleton--form-field | The form field skeleton element. |
