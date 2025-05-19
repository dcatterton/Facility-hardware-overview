# Select Component

The Select component in Tyler Forge is used to present a list of options to the user. The component provides a familiar dropdown interface with various configuration options.

## Basic Usage

```html
<forge-select aria-label="Label" label="Label">
  <forge-option value="1">Option 1</forge-option>
  <forge-option value="2">Option 2</forge-option>
  <forge-option value="3">Option 3</forge-option>
</forge-select>

<style>
  forge-select {
    max-width: 256px;
  }
</style>
```

## Label Position

The select supports a `labelPosition` property/attribute to control the position of the label. The default value is "inset" where the label is positioned inside the select, but it can also be set to "block-start" or "inline-start" to position the label above or to the left of the select respectively.

### Block Start

This variant positions the label above the select.

```html
<forge-select aria-label="Label" label="Label" label-position="block-start">
  <forge-option value="1">Option 1</forge-option>
  <forge-option value="2">Option 2</forge-option>
  <forge-option value="3">Option 3</forge-option>
</forge-select>

<style>
  forge-select {
    max-width: 256px;
  }
</style>
```

### Inline Start

This variant positions the label to the left of the select.

```html
<forge-select aria-label="Label" label="Label" label-position="inline-start">
  <forge-option value="1">Option 1</forge-option>
  <forge-option value="2">Option 2</forge-option>
  <forge-option value="3">Option 3</forge-option>
</forge-select>

<style>
  forge-select {
    max-width: 256px;
  }
</style>
```

> **Note**: The `labelPosition` property is available via global configuration if you want to set adjust the default value for all select components in your application.

## Multiple

The select supports a `multiple` property/attribute to allow multiple options to be selected.

```html
<forge-select aria-label="Label" label="Label" multiple>
  <forge-option value="1">Option 1</forge-option>
  <forge-option value="2">Option 2</forge-option>
  <forge-option value="3">Option 3</forge-option>
</forge-select>

<style>
  forge-select {
    max-width: 256px;
  }
</style>
```

When the select is in multiple mode, the `value` property/attribute should be an array of selected values.

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| beforeValueChange | SelectBeforeValueChangeCallback<any> | - | Gets/sets the before value change callback. | |
| constrainPopupWidth | boolean | true | Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: 100vw). | |
| dense | boolean | false | Whether the field is dense. | |
| density | FieldDensity | "default" | The density of the field. | |
| disabled | boolean | false | Whether the field is disabled. | |
| floatLabel | boolean | false | Whether the label floats above the field. | |
| invalid | boolean | false | Whether the field is invalid. | |
| label | string | - | Controls the label text. | |
| labelAlignment | FieldLabelAlignment | "default" | The alignment of the label. | |
| labelPosition | FieldLabelPosition | "inset" | The position of the label. | ✅ |
| multiple | boolean | - | Gets/sets the multiple select state. | |
| observeScroll | boolean | false | Controls the observation of scroll events on the dropdown. | |
| observeScrollThreshold | number | 0 | The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if observeScroll is true. | |
| open | boolean | - | Gets/sets the open state. | |
| optional | boolean | false | Whether the field is optional. | |
| optionBuilder | SelectOptionBuilder | - | Gets/sets the option builder function. | |
| optionLimit | number | - | Gets/sets the maximum number of options to display in the dropdown. | |
| options | ISelectOption[] \| ISelectOptionGroup[] | - | Gets/sets the available options. | |
| placeholder | string | - | Controls the placeholder text. | |
| popoverFallbackPlacements | PositionPlacement \| null | - | Gets/sets the fallback placements of the popover. | |
| popoverFlip | OverlayFlipState | "auto" | Gets/sets the flip state of the popover. | |
| popoverIcon | boolean | false | Whether the popover icon is displayed. | |
| popoverOffset | IOverlayOffset | - | Gets/sets the offset of the popover. | |
| popoverPlacement | OverlayPlacement | "bottom" | Gets/sets the placement of the popover. | |
| popoverShift | OverlayShiftState | "auto" | Gets/sets whether the popover should shift to fit within the viewport. | |
| popupClasses | string \| string[] | - | Gets/sets the list of classes to apply to the popup element. | |
| popupFooterBuilder | ListDropdownFooterBuilder | - | Gets/sets the callback function for generating header content within the popup. | |
| popupHeaderBuilder | ListDropdownHeaderBuilder | - | Gets/sets the callback function for generating header content within the popup. | |
| readonly | boolean | - | Readonly state | |
| required | boolean | false | Whether the field is required. | |
| selectedIndex | number \| number[] | - | Gets/sets the selected index. | |
| selectedTextBuilder | SelectSelectedTextBuilder | - | Gets/sets the selected text builder function. | |
| shape | FieldShape | "default" | The shape of the field. | |
| supportTextInset | FieldSupportTextInset | "none" | The inset of the support text. | |
| syncPopupWidth | boolean | false | Gets/sets whether the popup width is synchronized with the popup target width. | |
| theme | FieldTheme | "default" | The theme of the field. | |
| value | any | - | Gets/sets the value. | |
| variant | FieldVariant | "outlined" | The variant of the field. | ✅ |
| wrapOptionText | boolean | false | Gets/sets whether the options will wrap their text or not. This only applies if constrainPopupWidth is true, if there is an explicit width set via CSS. | |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether the field is dense. |
| density | FieldDensity | "default" | The density of the field. |
| disabled | boolean | false | Whether the field is disabled. |
| float-label | boolean | false | Whether the label floats above the field. |
| invalid | boolean | false | Whether the field is invalid. |
| label | string | - | Controls the label text. |
| label-alignment | FieldLabelAlignment | "default" | The alignment of the label. |
| label-position | FieldLabelPosition | "inset" | The position of the label. |
| multiple | boolean | - | Gets/sets the multiple select state. |
| observe-scroll | boolean | false | Controls the observation of scroll events on the dropdown. |
| observe-scroll-threshold | number | 0 | The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if observeScroll is true. |
| open | boolean | - | Gets/sets the open state. |
| option-limit | number | - | Gets/sets the maximum number of options to display in the dropdown. |
| optional | boolean | false | Whether the field is optional. |
| placeholder | string | - | Controls the placeholder text. |
| popover-flip | OverlayFlipState | "auto" | Gets/sets the flip state of the popover. |
| popover-icon | boolean | false | Whether the popover icon is displayed. |
| popover-offset | IOverlayOffset | - | Gets/sets the offset of the popover. |
| popover-placement | OverlayPlacement | "bottom" | Gets/sets the placement of the popover. |
| popover-shift | OverlayShiftState | "auto" | Gets/sets whether the popover should shift to fit within the viewport. |
| popup-classes | string | - | Gets/sets the list of classes to apply to the popup element. |
| required | boolean | false | Whether the field is required. |
| selected-index | number \| number[] | - | Gets/sets the selected index. |
| shape | FieldShape | "default" | The shape of the field. |
| support-text-inset | FieldSupportTextInset | "none" | The inset of the support text. |
| sync-popup-width | boolean | false | Gets/sets whether the popup width is synchronized with the popup target width. |
| theme | FieldTheme | "default" | The theme of the field. |
| value | any | - | Gets/sets the value. |
| variant | FieldVariant | "outlined" | The variant of the field. |
| wrap-option-text | boolean | false | Gets/sets whether the options will wrap their text or not. This only applies if constrainPopupWidth is true, if there is an explicit width set via CSS. |

### Events

| Name | Description | Type |
|------|-------------|------|
| change | Dispatched when the user selects a value. | CustomEvent<any> |
| forge-select-scrolled-bottom | Dispatched when the dropdown list has scrolled to the bottom. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| accessory | Used for content such as a button that is logically connected to the field but should appear distinct from the input. |
| end | Typically reserved content/icons that render logically after the default slot content. |
| start | Typically reserved for content/icons that render logically before the default slot content. |
| support-text | Used for content that provides additional information about the field. Aligns to the inline start of the field. |
| support-text-end | Used for content that provides additional information about the field. Aligns to the inline end of the field. |
| value | The selected text to display |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| floatLabelWithoutAnimation() | Floats the label without an animation. Only applies when the label is inset. | value: boolean | void |

### CSS Custom Properties

The Select component inherits most of its styling properties from the Field component. Some of the key properties include:

| Name | Description |
|------|-------------|
| --forge-field-background | The background of the field surface. |
| --forge-field-height | The height of the field in its default density. |
| --forge-field-shape | The border radius of the field's corners. |
| --forge-field-padding-inline | The inline padding of the field. |
| --forge-select-placeholder-color | The color of the placeholder text. |

### Dependencies

This component will automatically include the following components:
- `<forge-circular-progress>`
- `<forge-field>`
- `<forge-icon>`
- `<forge-icon-button>`
- `<forge-list>`
- `<forge-list-item>`
- `<forge-option>`
- `<forge-option-group>`
- `<forge-popover>`
- `<forge-scaffold>`
- `<forge-toolbar>`

### Keyboard Shortcuts

#### Select Opened
- **escape / space**: Closes the select.
- **tab / enter**: Selects the focused option and closes the select.
- **arrow down**: Highlights the next option if an option is selected, otherwise highlights the first option.
- **arrow up**: Highlights the previous option if an option is selected, otherwise highlights the first option.
- **home**: Highlights the first option that is not disabled.
- **end**: Highlights the last option that is not disabled.

#### Select Closed
- **space / enter**: Opens the select.
- **arrow down**: Selects the next option if an option is selected, otherwise selects the first option.
- **arrow up**: Selects the previous option if an option is selected, otherwise selects the first option.

#### Select Closed and Multiple
- **arrow down / arrow up**: Opens the select and selects the first option

### Accessibility

- Ensure that all of the controls that are accessible by mouse are also accessible by keyboard.
- Ensure the controls are reachable by the tab key.
- Ensure each control can be updated or activated by the keyboard.
- Verify that the select list can be toggled open or closed by pressing the space or enter key.
- Verify that each active item in the select list can be reached by the up-arrow and down-arrow keys.
- Verify that in multiple-select mode, the Enter key can toggle an item as selected or un-selected.

### CSS-Only

The select component is also available as a CSS-only component. This is a variant of the "field" component.

```html
<div class="forge-field">
  <select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
</div>
```

For more information on how to create a CSS-only select, see the field documentation.