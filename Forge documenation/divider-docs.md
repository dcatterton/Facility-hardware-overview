# Divider

Use the divider component when you need to separate groups of content within a section.

## Example

Using this component is very simple, use in place of the `<hr>` element like the following:

```html
<div style><forge-divider></forge-divider></div>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| vertical | boolean | false | Controls if the divider is displayed vertically or horizontally. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| vertical | boolean | false | Controls if the divider is displayed vertically or horizontally. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-divider-border-style | The border-style (dashed, solid) of the divider. |
| --forge-divider-color | The color of the divider. |
| --forge-divider-margin | The margin of divider. |
| --forge-divider-width | The width of the divider. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root container element. |

## Accessibility

The `<forge-divider>` component automatically provides a `role="separator"` attribute.

If you would like to remove the divider from the accessibility tree, add `aria-hidden="true"` to the element.

## CSS-Only

The divider component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only divider component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/divider/forge-divider.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-divider | The divider class. |
