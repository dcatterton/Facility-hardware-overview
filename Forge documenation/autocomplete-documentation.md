# Autocomplete

The autocomplete is a "decorator" style component in that allows you to wrap a `<forge-autocomplete>` element around any HTML that contains an `<input>` element as a child. This allows the autocomplete to bind itself to that `<input>` and show suggestions in a popover as the user is typing.

It is expected that the consuming application/library provides a filter callback that the component can call when it needs to update the list of available options or suggestions. There are many variations of using an autocomplete and it is highly configurable, and while it's most commonly used together with a backend service to provide suggestions asynchronously, it's up to the developer to choose how to fetch and return the options based on the current text the user has typed into the `<input>` element.

## Basic Usage

```html
<forge-autocomplete>
  <forge-text-field show-clear popover-icon>
    <input type="text" id="state" />
    <label for="state" aria-label="choose state">Choose state</label>
  </forge-text-field>
</forge-autocomplete>

<style>
  forge-autocomplete {
    width: 256px;
  }
</style>
```

The only requirement in the HTML is to provide a child `<input>` element. While a `<forge-text-field>` component will typically be used, you can attach autocomplete functionality to any `<input>` element. This allows for flexibility in the styling of the input, while allowing the autocomplete to provide suggestions in the form of a floating popover anchored to that input.

The only requirement for integration via JavaScript is that you provide a callback function to the `filter` property to provide options based on the current filter text.

## Modes

The autocomplete component has two modes:

- **default**: This is the stateful mode where the component will manage the selection state for you as a form control. This is the most common mode.
- **stateless**: This is the stateless mode where the component will not manage the selection state. This mode is useful when you want to just use the autocomplete to allow for the user to type in a value and then you can handle the selection state yourself.

## Initial Value

The autocomplete component can be initialized with a selected value. This is useful when you want to pre-populate the input with a value from a previous selection on page load. This comes with the caveat that you must also provide the option(s) that the autocomplete can use to filter and select from to show the display text in the input for the bound value.

This can be done in two ways:

1. By providing the `value` property with the full `IOption` object that contains both the `value` and `label` properties.
2. Using the `filter` callback to return the full `IOption` object that matches the value by using the second parameter of the callback. This parameter is provided by the autocomplete only when the it cannot locate a matching option in the current list of options. It allow for you to fetch the option from a backend service or other source.

## Filtering

The autocomplete component will filter the options based on the text entered into the input by the user. When the filter callback is executed, it will pass the current text in the input as the first parameter. This allows you to use whatever means necessary to fetch and filter the options to display in the dropdown. The autocomplete will then display the options in a popover anchored to the input to allow the user to make a selection.

The filter callback can return a promise or a synchronous array of options. If the filter callback returns a promise, the autocomplete will show a loading spinner in the dropdown until the promise is resolved. This is useful when you need to fetch options asynchronously from a backend service.

As noted above in regards to initial value, the filter callback also has a second parameter that is provided by the autocomplete when it cannot locate a matching option in the current list of options. This parameter is the current selected value bound to the component, and allows you to fetch the full option from a backend service or other source to display in the input.

## Infinite Scrolling

The autocomplete component supports infinite scrolling for scenarios when there are too many potential options to display in the dropdown in a performant manner. This is useful when you want to provide a seamless experience for the user when they are searching for an option in a large list, but they don't necessarily know what they are looking for and need to see more options.

This can be enabled by using the `observe-scroll` attribute. When this attribute is present, the autocomplete will emit the `forge-autocomplete-scrolled-bottom` event when the user scrolls to the bottom of the dropdown. You can listen for this event and then call the `appendOptions()` method on the autocomplete to add more options to the dropdown.

```html
<forge-autocomplete observe-scroll>
  <forge-text-field popover-icon>
    <input type="text" id="state" />
    <label for="state" aria-label="choose state">Choose state</label>
  </forge-text-field>
</forge-autocomplete>

<style>
  forge-autocomplete {
    width: 256px;
  }
</style>
```

Note: You will need a reference to the `<forge-autocomplete>` element to call the `appendOptions()` method.

## Custom Option Templates

The autocomplete component allows you to customize the appearance of the options in the dropdown by providing a custom template for the options. This is useful when you want to display more information about the options than just the label. You can provide a custom template by using the `optionBuilder` callback. This callback will be called for each option in the dropdown as it is being created and should return an HTML element that will be rendered within the list item.

Note: The content you return will be rendered within a `<forge-list-item>` element, so you should only return the content of the list item, not a replacement for the list item itself.

## Configuration

The autocomplete is one of the most volatile and highly configurable components in the Forge library. It has many properties that allow you to customize the behavior and appearance of the component to suit your needs. The autocomplete can be used in a variety of ways, from simple text input with suggestions to complex forms with multiple selections and chips. See the API reference below for a full list of properties and their descriptions.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowUnmatched | boolean | false | Controls whether unmatched text entered by the user will stay visible an option in the dropdown is not found. |
| beforeValueChange | (value: any) => boolean \| Promise<boolean> | - | Sets the callback to be executed when the user selects an option, before the UI is updated to allow for validation. |
| constrainPopupWidth | boolean | true | Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: 100vw). |
| debounce | number | 500 | Gets/sets the debounce delay (milliseconds) for keyboard events. |
| filter | AutocompleteFilterCallback \| null \| undefined | - | Sets the filter callback that will be executed when fetching options for the autocomplete dropdown. |
| filterFocusFirst | boolean | true | Gets/sets whether the first option in the dropdown will be focused automatically when opened or not. |
| filterOnFocus | boolean | true | Gets/sets filter on focus settings which controls whether the dropdown displays automatically when focused. |
| filterText | string | - | Gets/sets the filter text. Setting the filter text only applies when allowUnmatched is enabled. |
| isInitialized | boolean | - | Returns whether the component has been initialized or not yet. |
| matchKey | string \| null \| undefined | - | Gets/sets the property key to match the value to an option. |
| mode | `${ AutocompleteMode }` | 'default' | Gets/sets the interaction mode. |
| multiple | boolean | false | Gets/sets the multi-select state. |
| observeScroll | boolean | false | Controls the observation of scroll events on the dropdown. |
| observeScrollThreshold | number | 0 | The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if observeScroll is true. |
| open | boolean | false | Controls the open state of the dropdown. |
| optionBuilder | AutocompleteOptionBuilder \| null \| undefined | - | Sets the option builder callback that will be executed when building the option list in the dropdown. |
| optionLimit | number | 0 | Gets/sets the maximum number of options to display in the dropdown. |
| popoverFallbackPlacements | PositionPlacement[] \| null | - | Gets/sets the fallback placements of the popover. |
| popoverFlip | OverlayFlipState | 'auto' | Gets/sets the flip state of the popover. |
| popoverOffset | IOverlayOffset | - | Gets/sets the offset of the popover. |
| popoverPlacement | OverlayPlacement | 'bottom' | Gets/sets the placement of the popover. |
| popoverShift | OverlayShiftState | 'auto' | Gets/sets whether the popover should shift to fit within the viewport. |
| popupClasses | string \| string[] | - | Gets/sets the list of classes to apply to the popup element. |
| popupElement | HTMLElement \| null | - | Gets the currently active popup element when the dropdown is open. |
| popupFooterBuilder | ListDropdownFooterBuilder | - | Gets/sets the callback function for generating footer content within the popup. |
| popupHeaderBuilder | ListDropdownHeaderBuilder | - | Gets/sets the callback function for generating header content within the popup. |
| popupTarget | string | - | Gets/sets the selector that will be used to find an element to attach the popup to. Defaults to the input element. |
| selectedTextBuilder | AutocompleteSelectedTextBuilder | - | Sets the selected text builder callback that will be executed when getting the selected text. |
| syncPopupWidth | boolean | false | Gets/sets whether the popup width is synchronized with the popup target width. |
| value | any | - | Gets/sets the value. |
| wrapOptionText | boolean | false | Gets/sets whether the options will wrap their text or not. This only applies if constrainPopupWidth is true, if there is an explicit width set via CSS. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow-unmatched | boolean | false | Controls whether unmatched text entered by the user will stay visible an option in the dropdown is not found. |
| constrain-popup-width | boolean | true | Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: 100vw). |
| debounce | number | 500 | Gets/sets the debounce delay (milliseconds) for keyboard events. |
| filter-focus-first | boolean | true | Gets/sets whether the first option in the dropdown will be focused automatically when opened or not. |
| filter-on-focus | boolean | true | Gets/sets filter on focus settings which controls whether the dropdown displays automatically when focused. |
| match-key | string \| null \| undefined | - | Gets/sets the property key to match the value to an option. |
| mode | `${ AutocompleteMode }` | 'default' | Gets/sets the interaction mode. |
| multiple | boolean | false | Gets/sets the multi-select state. |
| observe-scroll | boolean | false | Controls the observation of scroll events on the dropdown. |
| observe-scroll-threshold | number | 0 | The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if observeScroll is true. |
| open | boolean | false | Controls the open state of the dropdown. |
| option-limit | number | 0 | Gets/sets the maximum number of options to display in the dropdown. |
| popover-fallback-placements | PositionPlacement[] \| null | - | Gets/sets the fallback placements of the popover. |
| popover-flip | OverlayFlipState | 'auto' | Gets/sets the flip state of the popover. |
| popover-offset | IOverlayOffset | - | Gets/sets the offset of the popover. |
| popover-placement | OverlayPlacement | 'bottom' | Gets/sets the placement of the popover. |
| popover-shift | OverlayShiftState | 'auto' | Gets/sets whether the popover should shift to fit within the viewport. |
| popup-classes | string \| string[] | - | Gets/sets the list of classes to apply to the popup element. |
| popup-target | string | - | Gets/sets the selector that will be used to find an element to attach the popup to. Defaults to the input element. |
| sync-popup-width | boolean | false | Gets/sets whether the popup width is synchronized with the popup target width. |
| wrap-option-text | boolean | false | Gets/sets whether the options will wrap their text or not. This only applies if constrainPopupWidth is true, if there is an explicit width set via CSS. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-autocomplete-change | Fired when the value changes. | CustomEvent<any> |
| forge-autocomplete-scrolled-bottom | Fired when the dropdown is scrolled to the bottom. Only applies when observe-scroll is enabled. | CustomEvent<void> |
| forge-autocomplete-select | Fired when an option is selected. Only applies when in "stateless" mode. | CustomEvent<IAutocompleteSelectEventData> |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| appendOptions() | Adds options to the dropdown while it is open. Has no effect if the dropdown is closed. | options: IAutocompleteOption[] \| IAutocompleteOptionGroup[] | void |
| closeDropdown() | Closes the dropdown. | - | void |
| forceFilter() | Forces the filter callback to be executed to update the current selection state with new options. | opts: IAutocompleteForceFilterOptions | void |
| openDropdown() | Opens the dropdown. | - | void |

### Keyboard Shortcuts

| Name | Description |
|------|-------------|
| **Select Opened** | |
| down / arrow down | Opens the dropdown and activates the first option |
| **Dropdown opened** | |
| tab | Single select: Select the active option |
| escape | Close the dropdown when the dropdown is open |
| down / arrow down | List keyboard shortcuts |
| up / arrow up | List keyboard shortcuts |
| enter / home / end | List keyboard shortcuts |
| **Dropdown opened or closed** | |
| backspace | Two or more input.value.length: Removes the end character in the input.value |
| backspace | One input.value.length and Single select and not a chip field: Clears the input.value |
| delete | Two or more input.value.length: Removes the start character in the input.value |
| delete | One input.value.length and Single select and not a chip field: Clears the input.value |

## Accessibility

- Verify that you can tab into the autocomplete component.
- Verify that you can access the options within the autocomplete component using only the keyboard.
- The input element will receive the proper ARIA attributes such as `role="combobox"`, `aria-live`, `aria-owns`, ... etc.
- You should ensure that you either use a `<label>` element, or add an `aria-label` or `aria-labelledby` attribute to provide a meaningful label.
