# Text Field

Text fields allow users to input and edit text values. They can be single-line or multi-line, and can include support text.

```html
<forge-text-field>
  <label>Label</label>
  <input type="text" />
</forge-text-field>

<style>
forge-text-field {
  max-width: 500px
}
</style>
```

## Textarea

Text fields allow for providing a `<textarea>` element in place of an `<input>` element for multi-line text input.

```html
<forge-text-field>
  <label>Label</label>
  <textarea></textarea>
</forge-text-field>

<style>
forge-text-field {
  max-width: 500px
}
</style>
```

## Label Position

The text field supports a `labelPosition` property/attribute to control the position of the label. The default value is "inset" where the label is positioned inside the text field, but it can also be set to "block-start" or "inline-start" to position the label above or to the left of the text field respectively.

### Block Start

This variant positions the label above the text field.

```html
<forge-text-field label-position="block-start">
  <label>Label</label>
  <input type="text" />
</forge-text-field>

<style>
forge-text-field {
  max-width: 500px
}
</style>
```

### Inline Start

This variant positions the label to the left of the text field.

```html
<forge-text-field label-position="inline-start">
  <label>Label</label>
  <input type="text" />
</forge-text-field>

<style>
forge-text-field {
  max-width: 500px
}
</style>
```

> **Note**: The `labelPosition` property is available via global configuration if you want to adjust the default value for all text fields in your application.

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| dense | boolean | false | Whether the field is dense. | |
| density | FieldDensity | "default" | The density of the field. | |
| disabled | boolean | false | Whether the field is disabled. | |
| floatLabel | boolean | false | Whether the label should float above the field. Only applies when the label is inset. | |
| invalid | boolean | false | Whether the field is in an invalid state. | |
| labelAlignment | FieldLabelAlignment | "start" | The alignment of the label relative to the field. | |
| labelPosition | FieldLabelPosition | "inset" | The position of the label relative to the field. | ✅ |
| optional | boolean | false | Whether the field is optional. | |
| popoverExpanded | boolean | false | Whether the field's popover is expanded. | |
| popoverIcon | boolean | false | Whether the field has a popover icon. | |
| popoverTargetElement | HTMLElement | - | Gets a reference to the element that the popover should target for best alignment. | |
| required | boolean | false | Whether the field is required. | |
| shape | FieldShape | "default" | The shape of the field. | |
| showClear | boolean | false | Whether the clear button appears when text has been entered. | |
| supportTextInset | FieldSupportTextInset | "none" | The inset of the support text. | |
| theme | FieldTheme | "default" | The theme of the field. | |
| variant | FieldVariant | "outlined" | The variant of the field. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether the field is dense. |
| density | FieldDensity | "default" | The density of the field. |
| disabled | boolean | false | Whether the field is disabled. |
| float-label | boolean | false | Whether the label should float above the field. Only applies when the label is inset. |
| invalid | boolean | false | Whether the field is in an invalid state. |
| label-alignment | FieldLabelAlignment | "start" | The alignment of the label relative to the field. |
| label-position | FieldLabelPosition | "inset" | The position of the label relative to the field. |
| optional | boolean | false | Whether the field is optional. |
| popover-expanded | boolean | false | Whether the field's popover is expanded. |
| popover-icon | boolean | false | Whether the field has a popover icon. |
| required | boolean | false | Whether the field is required. |
| shape | FieldShape | "default" | The shape of the field. |
| show-clear | boolean | false | Whether the clear button appears when text has been entered. |
| support-text-inset | FieldSupportTextInset | "none" | The inset of the support text. |
| theme | FieldTheme | "default" | The theme of the field. |
| variant | FieldVariant | "outlined" | The variant of the field. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-field-popover-icon-click | Dispatches when the user clicks the popover icon. | CustomEvent<void> |
| forge-text-field-clear | Dispatched when the clear button is clicked. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The default/unnamed slot for the field's input. |
| accessory | Used for content such as a button that is logically connected to the field but should appear distinct from the input. |
| clear-button | Content slotted here replaces the default clear button. |
| clear-button-tooltip | Sets the text content of the clear button's tooltip and accessible label. |
| end | Typically reserved content/icons that render logically after the default slot content. |
| label | Renders its content as a positioned label. |
| start | Typically reserved for content/icons that render logically before the default slot content. |
| support-text | Used for content that provides additional information about the field. Aligns to the inline start of the field. |
| support-text-end | Used for content that provides additional information about the field. Aligns to the inline end of the field. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| floatLabelWithoutAnimation() | Floats the label immediately. Only applies when the label is inset. | value: boolean | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-field-background | The background of the field surface. |
| --forge-field-disabled-background | The background of the field when disabled. |
| --forge-field-disabled-opacity | The opacity of the field when disabled. |
| --forge-field-filled-background | The background of the field surface in the filled and raised variants. |
| --forge-field-focus-indicator-width | The width of the focus indicator. |
| --forge-field-height | The height of the field in its default density. |
| --forge-field-inner-padding-inline | The padding between elements slotted into the field. |
| --forge-field-inset-height | The height of the field in its default density when the label is inset. |
| --forge-field-label-margin-block | The margin between the label and the field when the label is in the block start position. |
| --forge-field-label-margin-inline | The margin between the label and the field when the label is in an inline position. |
| --forge-field-multiline-max-block-size | The maximum block size the field can be resized to when multiline. |
| --forge-field-multiline-max-inline-size | The maximum inline size the field can be resized to when multiline. |
| --forge-field-multiline-min-block-size | The minimum block size the field can be resized to when multiline. |
| --forge-field-multiline-min-inline-size | The minimum inline size the field can be resized to when multiline. |
| --forge-field-multiline-resize | The direction the field can be resized when multiline. |
| --forge-field-optional-content | The content of the optional indicator. |
| --forge-field-optional-padding | The padding between the optional indicator and the label. |
| --forge-field-outline-style | The style of the field outline. |
| --forge-field-outline-width | The width of the field outline. |
| --forge-field-padding-inline | The inline padding of the field. |
| --forge-field-padding-inline-end | The inline end padding of the field. |
| --forge-field-padding-inline-start | The inline start padding of the field. |
| --forge-field-popover-icon-open-rotation | The rotation of the popover icon when open. |
| --forge-field-popover-icon-transition-duration | The duration of the popover icon animation. |
| --forge-field-popover-icon-transition-timing | The timing function of the popover icon animation. |
| --forge-field-required-content | The content of the required indicator. |
| --forge-field-required-padding | The padding between the required indicator and the label. |
| --forge-field-shape | The border radius of the field's corners. |
| --forge-field-support-text-gap | The minimum gap between the support text and the support text end. |
| --forge-field-support-text-margin-block | The margin between the support text and the field. |
| --forge-field-support-text-padding-inline | The inline padding of the support text. |
| --forge-field-support-text-padding-inline-end | The inline end padding of the support text. |
| --forge-field-support-text-padding-inline-start | The inline start padding of the support text. |
| --forge-field-surface-animation-duration | The duration of background and outline animations. |
| --forge-field-surface-animation-timing | The timing function of background and outline animations. |
| --forge-field-surface-floating-animation-duration | The duration of the floating label animation. |
| --forge-field-surface-floating-animation-timing | The timing function of the floating label animation. |
| --forge-field-tonal-background | The background of the field surface in the tonal variant. |
| --forge-field-tonal-background-hover | The background of the field surface in the tonal variant on hover. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| accessory | The element containing the accessory slot. |
| container | The container element surrounding the input. |
| end | The element containing the end slot. |
| focus-indicator | The focus indicator element. |
| input | The element containing the input slot. |
| label | The label element. |
| outline | The element containing the forge-focus-indicator element. |
| popover-icon | The popover icon element. |
| root | The root container element. |
| start | The element containing the start slot. |
| support-text | The support text element. |
| support-text-end | The element containing the support text end slot. |

## Dependencies

This component will automatically include the following components:
- `<forge-field>`
- `<forge-icon-button>`
- `<forge-tooltip>`

## Accessibility

Ensure that if you are not using a `<label>` element, you provide an `aria-label` or `aria-labelledby` attribute to the `<input>` element.

## CSS-Only

The text-field component is also available as a CSS-only component. This is a variant of the "field" component.

See the field documentation for more information on how to create a CSS-only text-field.
