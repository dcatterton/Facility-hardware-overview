# Radio

Radios are used when a user must select one option from a set of options. They are used when there are two or more options that are mutually exclusive and the user must select exactly one.

Option 1   Option 2   Option 3

```html
<forge-radio name="radios" value="1">Option 1</forge-radio>
<forge-radio name="radios" value="1">Option 2</forge-radio>
<forge-radio name="radios" value="1">Option 3</forge-radio>
```

## Grouping

Radio buttons should be part of a radio group and interpreted as such by assistive technologies such as screen readers. By default, radios will form an implicit group based on their name attribute. If you want to group radios explicitly you can either provide a `role="radiogroup"` attribute to an ancestor element, or use the `<forge-radio-group>` element.

### Name

This example shows how radios are grouped implicitly by their name attribute.

```html
<forge-radio name="default">Option 1</forge-radio>
<forge-radio name="default">Option 2</forge-radio>
<forge-radio name="default">Option 3</forge-radio>
```

### Role

This example shows how radios are grouped explicitly by their name and the ancestor element's `role="radiogroup"` attribute to provide a label for the group.

```html
<div role="radiogroup" aria-label="Choose a radio option">
  <forge-radio name="default">Option 1</forge-radio>
  <forge-radio name="default">Option 2</forge-radio>
  <forge-radio name="default">Option 3</forge-radio>
</div>
```

### Radio Group

This example shows how radios are grouped explicitly by the `<forge-radio-group>` element.

```html
<forge-radio-group>
  <forge-label legend>Choose an option</forge-label>
  <forge-radio value="option1">Option 1</forge-radio>
  <forge-radio value="option2">Option 2</forge-radio>
  <forge-radio value="option3">Option 3</forge-radio>
</forge-radio-group>
```

> **Note**: Take note of the `<forge-label>` element with the `legend` attribute. This is used to provide an accessible label for the radio group.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Gets/sets whether the radio is checked. |
| defaultChecked | boolean | false | Gets/sets whether the radio is checked by default. |
| dense | boolean | false | Controls whether the radio is dense. |
| disabled | boolean | false | Controls whether the radio is disabled. |
| labelPosition | RadioLabelPosition | 'end' | Controls whether the label appears before or after the radio. |
| readonly | boolean | false | Controls whether the radio is read-only. |
| required | boolean | false | Controls whether the radio is required. |
| value | string | 'on' | Gets/sets the value of the radio when submitted as part of a form. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Gets/sets whether the radio is checked. |
| default-checked | boolean | false | Gets/sets whether the radio is checked by default. |
| dense | boolean | false | Controls whether the radio is dense. |
| disabled | boolean | false | Controls whether the radio is disabled. |
| label-position | RadioLabelPosition | 'end' | Controls whether the label appears before or after the radio. |
| readonly | boolean | false | Controls whether the radio is read-only. |
| required | boolean | false | Controls whether the radio is required. |
| value | string | 'on' | Gets/sets the value of the radio when submitted as part of a form. |

Learn more about [Attributes](#).

### Slots

| Name | Description |
|------|-------------|
| (default) | This is a default/unnamed slot for the label text. |

Learn more about [Slots](#).

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-radio-align | The alignment of the radio button and its label in the block direction. |
| --forge-radio-animation-delay | The delay of the radio button's animations. |
| --forge-radio-animation-duration | The duration of the radio button's animations. |
| --forge-radio-animation-timing-function | The timing function of the radio button's animations. |
| --forge-radio-background | The background of the radio button. |
| --forge-radio-border-width | The width of the radio button's border. |
| --forge-radio-checked-border-color | The color of the radio button's border when checked. |
| --forge-radio-direction | The direction of the radio button and its label. |
| --forge-radio-disabled-opacity | The opacity of the radio button when disabled. |
| --forge-radio-gap | The gap between the radio button and its label. |
| --forge-radio-height | The height of the radio button. |
| --forge-radio-inactive-color | The color of the radio button when unchecked. |
| --forge-radio-justify | The alignment of the radio button and its label in the inline direction. |
| --forge-radio-mark-color | The color of the radio button's mark. |
| --forge-radio-mark-height | The height of the radio button's mark. |
| --forge-radio-mark-size | The size of the radio button's mark in the inline and block directions. |
| --forge-radio-mark-width | The width of the radio button's mark. |
| --forge-radio-primary-color | The primary color of the radio button when checked. |
| --forge-radio-shape | The shape of the radio button. |
| --forge-radio-size | The size of the radio button in the inline and block directions. |
| --forge-radio-state-layer-checked-color | The color of the radio button's state layer when checked. |
| --forge-radio-state-layer-dense-height | The height of the radio button's state layer when dense. |
| --forge-radio-state-layer-dense-size | The size of the radio button's state layer when dense. |
| --forge-radio-state-layer-dense-width | The width of the radio button's state layer when dense. |
| --forge-radio-state-layer-height | The height of the radio button's state layer. |
| --forge-radio-state-layer-shape | The shape of the radio button's state layer. |
| --forge-radio-state-layer-size | The size of the radio button's state layer in the inline and block directions. |
| --forge-radio-state-layer-unchecked-color | The color of the radio button's state layer when unchecked. |
| --forge-radio-state-layer-width | The width of the radio button's state layer. |
| --forge-radio-unchecked-border-color | The color of the radio button's border when unchecked. |
| --forge-radio-width | The width of the radio button. |

Learn more about [CSS Custom Properties](#).

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| background | Styles the border and background of the radio. |
| focus-indicator | Styles the focus indicator of the radio. |
| root | Styles the radio's root element. |
| state-layer | Styles the state layer of the radio. |

Learn more about [CSS Shadow Parts](#).

## Accessibility

- Ensure that all of the controls that are accessible by a mouse are also accessible by keyboard.
- Ensure the controls are reachable by the tab key.
- Ensure each control can be updated or activated by the keyboard.
- Radio buttons should be part of a radio group and interpreted as such by assistive technologies such as screen readers.
- Ensure that your radio group also has an `aria-label` attribute describing its purpose.

## CSS-Only

The radio component is also available as a CSS-only component without the need for JavaScript.

Option 1  
Option 2  
Option 3

To use the CSS-only radio component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/radio/forge-radio.css';
```

Learn more about [CSS-Only Components](#).

### CSS Classes

| Name | Description |
|------|-------------|
| forge-radio | Apply to the root element (required). |
| forge-radio--dense | Makes the radio dense. |
