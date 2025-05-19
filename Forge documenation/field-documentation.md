# Field

The field component is a low-level building block component that provides a consistent way to render form fields. It handles the visual design of the field, but makes no assumptions about the type of field being rendered. This allows the field component to be used for a wide variety of form fields that need to inherit from the same base-level styles and functionality.

The field component does not require that there be a focusable element inside of it. This allows the field component to be used for fields that do not require user input, or for fields that are part of a larger component that handles user input. This makes the field component a flexible building block that can be used in a wide variety of situations.

The following components use the `<forge-field>` internally:

- Text Field
- Select

These components expose similar APIs that are passed down to the `<forge-field>` component.

## Basic Example

```html
<forge-field>
  <label for="my-input">Label</label>
  <input id="my-input" type="text" />
</forge-field>
<style>
forge-field {
  max-width: 320px;
}
</style>
```

## Static

While fields are typically building blocks as part of larger components, the following example shows that fields do not require a focusable element to operate properly. This example is just some static HTML that is not focusable, but still uses the field component to provide consistent styling.

```html
<forge-field label-position="block-start">
  <span slot="label">Static label</span>
  <span data-forge-field-input>Static value text</span>
</forge-field>
<style>
forge-field {
  max-width: 320px;
  [data-forge-field-input] {
    display: flex;
    align-items: center;
  }
}
</style>
```

When not using an `<input>` or `<textarea>` element, you will need to provide an `data-forge-field-input` attribute on the element that is intended to be the "input" element.

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| dense | boolean | false | Whether the field is at the "extra-small" density level. | |
| density | FieldDensity | "default" | The density of the field. | |
| disabled | boolean | false | Whether the field is disabled. | |
| floatLabel | boolean | false | Whether an inset positioned label is floated to the top of the container. | |
| focusIndicatorAllowFocus | boolean | false | Whether the focus indicator should render when the target element matches `:focus` instead of `:focus-visible`. | |
| focusIndicatorFocusMode | FocusIndicatorFocusMode | "focusin" | The focus mode to use on the focus indicator. | |
| focusIndicatorTargetElement | HTMLElement \| null | - | The element to attach the focus indicator to. | |
| invalid | boolean | false | Whether the field is in an invalid state. | |
| labelAlignment | FieldLabelAlignment | "start" | The alignment of the label relative to the input area. | |
| labelPosition | FieldLabelPosition | "inset" | The position of the label relative to the input area. | ✅ |
| multiline | boolean | false | Whether the field contains a multiline input. | |
| optional | boolean | false | Whether the field is optional. | |
| popoverExpanded | boolean | false | Whether the field's popover icon is in the expanded orientation. | |
| popoverIcon | boolean | false | Whether the field has a popover icon. | |
| required | boolean | false | Whether the field is required. | |
| shape | FieldShape | "default" | The border radius of the field's corners. | |
| supportTextInset | FieldSupportTextInset | "none" | Whether the field's support text is inset from either side. | |
| theme | FieldTheme | "default" | The theme of the field. | |
| variant | FieldVariant | "outlined" | The variant of the field. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether the field is at the "extra-small" density level. |
| density | Density | "default" | The density of the field. |
| disabled | boolean | false | Whether the field is disabled. |
| float-label | boolean | false | Whether an inset positioned label is floated to the top of the container. |
| focus-indicator-allow-focus | boolean | false | Whether the focus indicator should render when the target element matches `:focus` instead of `:focus-visible`. |
| focus-indicator-focus-mode | FocusIndicatorFocusMode | "focusin" | The focus mode to use on the focus indicator. |
| focus-indicator-target | string | - | The id of the element to attach the focus indicator to. |
| invalid | boolean | false | Whether the field is in an invalid state. |
| label-alignment | FieldLabelAlignment | "start" | The alignment of the label relative to the input area. |
| label-position | FieldLabelPosition | "inset" | The position of the label relative to the input area. |
| multiline | boolean | false | Whether the field contains a multiline input. |
| optional | boolean | false | Whether the field is optional. |
| popover-expanded | boolean | false | Whether the field's popover icon is in the expanded orientation. |
| popover-icon | boolean | false | Whether the field has a popover icon. |
| required | boolean | false | Whether the field is required. |
| shape | FieldShape | "default" | The border radius of the field's corners. |
| support-text-inset | FieldSupportTextInset | "none" | Whether the field's support text is inset from either side. |
| theme | FieldTheme | "default" | The theme of the field. |
| variant | FieldVariant | "outlined" | The variant of the field. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-field-popover-icon-click | Dispatches when the user clicks the popover icon. | CustomEvent<void> |
| forge-field-popover-icon-mousedown | Dispatches when the user presses the mouse button over the popover icon. Cancelable to prevent focus loss. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The default/unnamed slot for the field's input. |
| accessory | Used for content such as a button that is logically connected to the field but should appear distinct from the input. |
| end | Typically reserved content/icons that render logically after the default slot content. |
| label | Renders its content as a positioned label. |
| start | Typically reserved for content/icons that render logically before the default slot content. |
| support-text | Used for content that provides additional information about the field. Aligns to the inline start of the field. |
| support-text-end | Used for content that provides additional information about the field. Aligns to the inline end of the field. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| floatLabelWithoutAnimation() | Sets the floating label without animating the transition. | value: boolean | void |

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
| end | The element containing the end slot. |
| focus-indicator | The focus indicator element. |
| input | The element containing the input slot. |
| label | The label element. |
| outline | The element containing the forge-focus-indicator element. |
| popover-icon | The popover icon element. |
| root | The root container element. |
| start | The element containing the start slot. |
| support-text | The element containing the support text slot. |
| support-text-end | The element containing the support text end slot. |

## Accessibility

The field does not provide any semantics for assistive technologies. If you are using the field component for a form field that requires user input, you should ensure that the field has the appropriate ARIA attributes to provide context to screen readers and other assistive technologies.

## CSS-Only

The field component is also available as a CSS-only component without the need for JavaScript.

### Inset Label

If you're using the "inset" variant of the field (nesting a `<label>` within), you will need to use JavaScript to control when the label floats and if you want it to animate, there are a few classes that you can toggle to achieve this effect properly.

```javascript
const field = document.querySelector('.forge-field');

// Respond to user input to control the floating label state
field.addEventListener('input', () => floatLabel());

// When the page first loads, float the label if the input has a value (without animation)
floatLabel({ animate: false });

function floatLabel({ animate = true } = {}) {
  const input = field.querySelector('input');
  const hasValue = !!input.value.length;
  
  field.classList.toggle('forge-field--float-label', hasValue);
  
  if (animate) {
    field.classList.toggle('forge-field--float-label-in', hasValue);
    field.classList.toggle('forge-field--float-label-out', !hasValue);
  }
}
```

To use the CSS-only field component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/field/forge-field.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-field | The field container that wraps an `<input>` or `<textarea>`. |
| forge-field--plain | The plain variant doesn't have a border or background. |
| forge-field--tonal | The tonal variant has a shaded background color and no border. |
| forge-field--filled | The filled variant has a solid background color using the surface theme by default. |
| forge-field--raised | The raised variant has a solid background color using the surface theme by default and a shadow, but no outline. |
| forge-field--rounded | Uses a pill-shaped/round shape. |
| forge-field--float-label | Floats the label to the top of the field. |
| forge-field--float-label-in | Starts the floating label animation from its resting state to its floating state. |
| forge-field--float-label-out | Starts the floating label animation from its floating state to its resting state. |
| forge-field--invalid | Uses the error theme on the field. |
| forge-field--dense | Uses the extra-small density on the field. |
| forge-field--extra-small | Uses the extra-small density on the field. |
| forge-field--small | Uses the small density on the field. |
| forge-field--large | Uses the large density on the field. |
| forge-field--extra-large | Uses the extra-large density on the field. |
