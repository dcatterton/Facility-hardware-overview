# Chip Field

Chip fields are a specialized variant of text field that allows users to input multiple values in a single field and represent them as chips.

## Deprecation Notice

The `<forge-chip-field>` component is deprecated and will be removed in a future release. Existing components such as `<forge-text-field>` and `<forge-select>` will be able to be used to create similar functionality which removes the current need for this specialized component.

```html
<forge-chip-field variant theme shape>
  <label slot="label" for="tag-input">Tags</label>
  <input type="text" id="tag-input" />
  <div slot="support-text">Press enter to create a tag</div>
</forge-chip-field>
```

## With Autocomplete

It is common to use an autocomplete component with a chip field to provide suggestions to the user as they type.

```html
<forge-autocomplete mode="stateless">
  <forge-chip-field popover-icon show-clear>
    <label slot="label" for="tag-input">Tags</label>
    <input type="text" id="tag-input" />
  </forge-chip-field>
</forge-autocomplete>
```

## API

### Chip Field

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| addOnBlur | boolean | false | Whether or not to add chip when blur event |
| dense | boolean | false | Whether the field is dense. |
| density | FieldDensity | "default" | The density of the field. |
| disabled | boolean | false | Whether the field is disabled. |
| floatLabel | boolean | false | Whether the label should float above the field. Only applies when the label is inset. |
| invalid | boolean | false | Whether the field is in an invalid state. |
| labelAlignment | FieldLabelAlignment | "start" | The alignment of the label relative to the field. |
| labelPosition | FieldLabelPosition | "inset" | The position of the label relative to the field. |
| optional | boolean | false | Whether the field is optional. |
| popoverExpanded | boolean | false | Whether the field's popover is expanded. |
| popoverIcon | boolean | false | Whether the field has a popover icon. |
| popoverTargetElement | boolean | - | The target element for the popover. |
| required | boolean | false | Whether the field is required. |
| shape | FieldShape | "default" | The shape of the field. |
| supportTextInset | FieldSupportTextInset | "none" | The inset of the support text. |
| theme | FieldTheme | "default" | The theme of the field. |
| variant | FieldVariant | "outlined" | The variant of the field. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| add-on-blur | boolean | false | Whether or not to add chip when blur event |
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
| support-text-inset | FieldSupportTextInset | "none" | The inset of the support text. |
| theme | FieldTheme | "default" | The theme of the field. |
| variant | FieldVariant | "outlined" | The variant of the field. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-button-toggle-select | Dispatches when the user toggles the button. | CustomEvent< IButtonToggleSelectEventData > |
| forge-field-popover-icon-click | Dispatches when the user clicks the popover icon. | CustomEvent<void> |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The default/unnamed slot for the field's input. |
| accessory | Used for content such as a button that is logically connected to the field but should appear distinct from the input |
| end | Typically reserved content/icons that render logically after the default slot content. |
| label | Renders its content as a positioned label. |
| start | Typically reserved for content/icons that render logically before the default slot content. |
| support-text | Used for content that provides additional information about the field. Aligns to the inline start of the field. |
| support-text-end | Used for content that provides additional information about the field. Aligns to the inline end of the field. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | - | - | void |
| floatLabelWithoutAnimation() | Floats the label immediately. Only applies when the label is inset. | value: boolean | void |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-chip-field-content-spacing | The spacing around chips group. |
| --forge-chip-field-member-spacing | The spacing between chip members. |
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

#### CSS Shadow Parts

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
| support-text | The support text element. |
| support-text-end | The element containing the support text end slot. |

### Chip

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | - | Whether the chip is dense. |
| disabled | boolean | - | Whether the chip is disabled. |
| download | string | - | The download of the chip. |
| href | string | - | The href of the chip. |
| invalid | boolean | - | Whether the chip is invalid. |
| rel | string | - | The rel of the chip. |
| selected | boolean | - | Whether the chip is selected. |
| target | string | - | The target of the chip. |
| theme | ChipTheme | - | The theme of the chip. |
| type | ChipType | - | The type of chip. |
| value | unknown | - | The value of the chip. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | - | Whether the chip is dense. |
| disabled | boolean | - | Whether the chip is disabled. |
| download | string | - | The download of the chip. |
| href | string | - | The href of the chip. |
| invalid | boolean | - | Whether the chip is invalid. |
| rel | string | - | The rel of the chip. |
| selected | boolean | - | Whether the chip is selected. |
| target | string | - | The target of the chip. |
| theme | ChipTheme | - | The theme of the chip. |
| type | ChipType | - | The type of chip. |
| value | unknown | - | The value of the chip. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-chip-delete | Event fired when the chip is deleted. | CustomEvent< IChipDeleteEventData > |
| forge-chip-select | Event fired when the chip is selected. | CustomEvent< IChipSelectEventData > |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The content of the chip. |
| end | The end content of the chip. |
| start | The start content of the chip. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | - | - | void |
| focus() | - | options: FocusOptions | void |
| focusRemoveButton() | - | - | void |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-chip-avatar-font-size | The font size of the avatar in chips. |
| --forge-chip-avatar-font-size-dense | The font size of the avatar in dense chips. |
| --forge-chip-avatar-size | The size of the avatar in chips. |
| --forge-chip-avatar-size-dense | The size of the avatar in dense chips. |
| --forge-chip-avatar-spacing | The spacing of the avatar in chips. |
| --forge-chip-avatar-spacing-dense | The spacing of the avatar in dense chips. |
| --forge-chip-background | The background color of the chip. |
| --forge-chip-border-color | The color of the chip border. |
| --forge-chip-border-style | The style of the chip border. |
| --forge-chip-border-width | The width of the chip border. |
| --forge-chip-checkmark-color | The color of the checkmark in chips. |
| --forge-chip-checkmark-size | The size of the checkmark in chips. |
| --forge-chip-checkmark-spacing | The spacing of the checkmark in chips. |
| --forge-chip-checkmark-transition-delay | The delay of the checkmark transition in chips. |
| --forge-chip-color | The background color of the chip. |
| --forge-chip-cursor | The cursor style of the chip. |
| --forge-chip-dense-focus-indicator-offset | The offset of the focus indicator for dense chips. |
| --forge-chip-dense-font-size | The font size of the dense chip. |
| --forge-chip-dense-font-weight | The font weight of the dense chip. |
| --forge-chip-dense-height | The height of the dense chip. |
| --forge-chip-dense-icon-font-size | The font size of the icon in dense chips. |
| --forge-chip-dense-padding-inline | The inline padding of the dense chip. |
| --forge-chip-dense-spacing | The spacing between dense chips. |
| --forge-chip-disabled-cursor | The cursor style of the disabled chip. |
| --forge-chip-disabled-opacity | The opacity of the disabled chip. |
| --forge-chip-field-background | The background color of the chip field. |
| --forge-chip-field-border-color | The color of the chip field border. |
| --forge-chip-field-color | The text color of the chip field. |
| --forge-chip-field-cursor | The cursor style of the chip field. |
| --forge-chip-field-shape | The shape of the chip field. |
| --forge-chip-focus-indicator-color | The color of the focus indicator. |
| --forge-chip-height | The height of the chip. |
| --forge-chip-icon-font-size | The font size of the chip icon. |
| --forge-chip-invalid-color | The text color of the invalid chip. |
| --forge-chip-invalid-selected-background | The background color of the invalid selected chip. |
| --forge-chip-invalid-selected-color | The text color of the invalid selected chip. |
| --forge-chip-padding-block | The block padding of the chip. |
| --forge-chip-padding-inline | The inline padding of the chip. |
| --forge-chip-remove-button-height-dense | The height of the remove button in dense chips. |
| --forge-chip-remove-button-icon-size-dense | The icon size of the remove button in dense chips. |
| --forge-chip-remove-button-spacing | The spacing of the remove button in chips. |
| --forge-chip-remove-button-spacing-dense | The spacing of the remove button in dense chips. |
| --forge-chip-selected-background | The background color of the selected chip. |
| --forge-chip-selected-color | The text color of the selected chip. |
| --forge-chip-shape | The shape of the chip. |
| --forge-chip-spacing | The spacing between chips. |
| --forge-chip-transition-duration | The duration of the chip transition. |
| --forge-chip-transition-easing | The easing function of the chip transition. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | The focus indicator of the chip. |
| root | The component's root element. |
| state-layer | The state layer surface. |
| trigger | The trigger element of the chip. |

## Accessibility

- Add an id to your `<input>` element and bind it to your `<label>` element using the for attribute on the `<label>`.
- Ensure that the chips that are added to the field have descriptive aria-label or aria-labelledby attributes.
- Make sure that the member chips that are added can be accessed via the keyboard left and right arrows.
  - There should be a distinct visual cue that indicates which chip is focused
- Similarly, make sure that when a chip is focused using the arrow keys, that the backspace and delete keys do remove them.
- Ensure that when disabled, the entire field as well as the member chips all appear visually and interactively disabled.
