# Label Value

Label values are used to display data in a structured format. They are typically used to display key-value pairs, where the key is a label and the value is the data associated with that label.

Label values are a simple layout component that provides consistency through structure, spacing, typography, and alignment. It is not intended to be used for complex data structures, user interaction, or layouts, but rather for simply displaying readonly information.

```html
<forge-label-value>
  <label slot="label">Label</label>
  <span slot="value">A simple value</span>
</forge-label-value>
```

## Icon

Label values can also include an icon to the left of the label. This is useful for providing additional context or visual cues to the user.

```html
<forge-label-value>
  <forge-icon name="person" slot="icon"></forge-icon>
  <label slot="label">Name</label>
  <span slot="value">John Doe</span>
</forge-label-value>
```

## Inline

Label values can also be displayed inline.

```html
<forge-label-value inline>
  <label slot="label">Label</label>
  <span slot="value">A simple value</span>
</forge-label-value>
```

Note: When using multiple inline label values, it's common practice to set a fixed width on the label to ensure that the values are aligned.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Deprecated. Use inline instead. |
| ellipsis | boolean | false | If true, the value will be truncated with an ellipsis if it overflows its container. |
| empty | boolean | false | If true, the value will be displayed in an alternative emphasized style. |
| inline | boolean | false | If true, the label and value will be displayed on the same line. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| ellipsis | boolean | false | If present, the value will be truncated with an ellipsis if it overflows its container. |
| empty | boolean | false | If present, the value will be displayed in an alternative emphasized style. |
| inline | boolean | false | If present, the label and value will be displayed on the same line. |

### Slots

| Name | Description |
|------|-------------|
| icon | An icon to display next to the label. |
| label | The label to display. |
| value | The value to display. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-label-value-align | Aligns the label and value. Possible values: `start` (default), `center`, `end`. |
| --forge-label-value-empty-color | The color to apply to the value when empty. |
| --forge-label-value-empty-style | The font-style to apply to the value when empty. |
| --forge-label-value-icon-spacing | The spacing between the icon and the label. |
| --forge-label-value-inline-label-spacing | The spacing between the label and value when displayed inline. |
| --forge-label-value-label-block-end-spacing | The block end spacing for the label. |
| --forge-label-value-label-block-start-spacing | The block start spacing for the label. |
| --forge-label-value-label-color | The color to apply to the label. |
| --forge-label-value-label-spacing | The spacing between the label and value. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| icon | The icon container element. |
| label | The label container element. |
| root | The root layout container element. |
| value | The value container element. |

## Accessibility

The label value component is a simple layout component and does not have any specific accessibility requirements.

## CSS-Only

The label-value component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only label value component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/label-value/forge-label-value.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-label-value | The container element for the label and value elements. |
| forge-label-value--inline | Applied to the container element when the label and value are displayed inline next to each other. |
| forge-label-value--empty | Applied to the container element when the value is empty. |
| forge-label-value--ellipsis | Applied to the container element when the value is truncated with an ellipsis if overflowing |
| forge-label-value__label | The label element. |
| forge-label-value__value | The value element. |
| forge-label-value__icon | The icon element. |
