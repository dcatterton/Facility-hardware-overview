# Checkbox

Checkboxes are used when a user can select one or more options from a list. They are commonly used in forms and settings pages, but can be used in many other contexts to allow users to toggle between a checked and unchecked state.

Checkboxes can also have an indeterminate state, which is useful when the state of the checkbox is dependent on the state of its children or is not yet known.

```html
<forge-checkbox>Label</forge-checkbox>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Gets/sets whether the checkbox is checked. |
| defaultChecked | boolean | false | Gets/sets whether the checkbox is checked by default. |
| dense | boolean | false | Controls whether the checkbox is dense. |
| disabled | boolean | false | Controls whether the checkbox is disabled. |
| indeterminate | boolean | false | Gets/sets the indeterminate state. |
| labelPosition | CheckboxLabelPosition | 'end' | Controls whether the label appears before or after the checkbox. |
| readonly | boolean | false | Controls whether the checkbox is readonly. |
| required | boolean | false | Controls whether the checkbox is required. |
| value | string | 'on' | Controls the value submitted with a form when checked. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Gets/sets whether the checkbox is checked. |
| default-checked | boolean | false | Gets/sets whether the checkbox is checked by default. |
| dense | boolean | false | Controls whether the checkbox is dense. |
| disabled | boolean | false | Controls whether the checkbox is disabled. |
| indeterminate | boolean | false | Gets/sets the indeterminate state. |
| label-position | CheckboxLabelPosition | 'end' | Controls whether the label appears before or after the checkbox. |
| readonly | boolean | false | Controls whether the checkbox is readonly. |
| required | boolean | false | Controls whether the checkbox is required. |
| value | string | 'on' | Controls the value submitted with a form when checked. |

### Events

| Name | Description | Type |
|------|-------------|------|
| change | Dispatches when the checkbox is checked or unchecked. | Event |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| toggle() | Toggles the checkbox checked or unchecked. | force: boolean | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-checkbox-align | How the checkbox and label are distributed along their cross axis. |
| --forge-checkbox-animation-duration | The duration of animations. |
| --forge-checkbox-background | The color of the checkbox background when unchecked and not indeterminate. |
| --forge-checkbox-background-animation-timing | The timing function of the background animations. |
| --forge-checkbox-checked-background | The color of the checkbox background when checked or indeterminate. |
| --forge-checkbox-checked-border-color | The color of the checkbox border when checked or indeterminate. |
| --forge-checkbox-checked-border-width | The width of the checkbox border when checked or indeterminate. |
| --forge-checkbox-direction | Whether the checkbox and label are arranged along the inline or block axis. |
| --forge-checkbox-disabled-opacity | The opacity when disabled. |
| --forge-checkbox-elevation | The shadow of the checkbox. |
| --forge-checkbox-gap | The space between the checkbox and label. |
| --forge-checkbox-height | The block size of the checkbox. |
| --forge-checkbox-icon-animation-timing | The timing function of the checked and indeterminate icons animations. |
| --forge-checkbox-icon-checked-color | The color of the checkmark mark. |
| --forge-checkbox-icon-indeterminate-color | The color of the indeterminate mark. |
| --forge-checkbox-icon-stroke-width | The stroke width of the checkmark and indeterminate marks. |
| --forge-checkbox-justify | How the checkbox and label are distributed along their main axis. |
| --forge-checkbox-shape | The shape of the checkbox. |
| --forge-checkbox-state-layer-checked-color | The color of the state layer when checked. |
| --forge-checkbox-state-layer-dense-height | The block size of the state layer when dense. |
| --forge-checkbox-state-layer-dense-width | The inline size of the state layer when dense. |
| --forge-checkbox-state-layer-height | The block size of the state layer. |
| --forge-checkbox-state-layer-shape | The shape of the state layer. |
| --forge-checkbox-state-layer-unchecked-color | The color of the state layer when unchecked. |
| --forge-checkbox-state-layer-width | The inline size of the state layer. |
| --forge-checkbox-unchecked-border-color | The color of the checkbox border when unchecked and not indeterminate. |
| --forge-checkbox-unchecked-border-width | The width of the checkbox border when unchecked and not indeterminate. |
| --forge-checkbox-width | The inline size of the checkbox. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| background | Styles the checkbox background element. |
| checkmark | Styles the checkmark element. |
| focus-indicator | Styles the focus indicator element. |
| label | Styles the label element. |
| mixedmark | Styles the indeterminate mark element. |
| root | Styles the root element. |
| state-layer | Styles the state layer element. |

## Accessibility

- Verify that you can tab to each checkbox.
- Ensure there is a distinct visual cue that a checkbox is checked or unchecked.
- Ensure that there is a distinct visual cue that a checkbox is focused.
- Ensure that there is a distinct visual cue when a checkbox is disabled.
- Verify that pressing the space bar key, while focused on a checkbox, will toggle it checked and unchecked in the same manner as it would be with a mouse click.

## CSS-Only

The checkbox component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only checkbox component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/checkbox/forge-checkbox.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-checkbox | Apply to the root element (required). |
| forge-checkbox--dense | Makes the checkbox dense. |
| forge-checkbox__icon | Apply to a child of the root element to render the check and indeterminate icons (required). |
