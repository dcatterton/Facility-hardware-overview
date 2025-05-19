# Menu

Menus are used to provide a list of options/actions to a user, and are typically anchored dynamically to a button or other similar trigger element.

The `<forge-menu>` component is a "decorator" style component which means it wraps around a trigger element and will attach itself to automatically open and close when the trigger element is interacted with.

Menus can be used in a variety of ways, such as a simple list of options, a list of actions, or a hierarchical/cascading list of options. Menus do not hold selection state.

```html
<forge-menu>
  <forge-button type="button" variant="raised">Menu</forge-button>
</forge-menu>
```

## JavaScript

The `<forge-menu>` currently requires the use of JavaScript to set the options to display in the menu dropdown. The `options` property is an array of objects where each object represents a menu item, and each object can have various configuration supplied for things like the label, icon, custom templates, and more.

Below is an example of a basic array of menu options:

```javascript
const options: IMenuOption[] = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
  { label: 'Option 3', value: 'option-3' }
];
```

This options array can then be set (or bound via framework) to the `options` property of the `<forge-menu>` component.

Note: If you need to render icons in the menu, you can use the `icon`/`leadingIcon` and/or `trailingIcon` properties on the menu option object. There are also corresponding `leadingIconType` and `trailingIconType` properties to specify the element type that will be rendered. Set these to 'component' to render a `<forge-icon>` element.

## Cascading

Cascading menus are used to display a hierarchical list of options. When a menu item is hovered, a child menu will open next of the parent menu item.

```html
<forge-menu mode="cascade">
  <forge-button type="button" variant="raised">Menu</forge-button>
</forge-menu>
```

## Menu Groups

Grouping menu items can be useful to visually separate different types of options. The menu options use the `IMenuOptionGroup` interface to define the group and its options.

Below is an example of a basic array of menu options with groups:

```javascript
let optionGroup: IMenuOptionGroup[] = [
  {
    text: 'Group 1',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ]
  },
  {
    text: 'Group 2',
    options: [
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' }
    ]
  }
];
```

```html
<forge-menu>
  <forge-button type="button" variant="raised">Menu</forge-button>
</forge-menu>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| constrainPopupWidth | boolean | true | Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: 100vw). |
| dense | boolean | false | Gets/sets dense state of the list options used in the menu popup. |
| fallbackPlacements | `${ PositionPlacement }`[] | - | Gets/sets the fallback menu placement for overriding the default of any side. |
| iconClass | string | - | Gets/sets the class name to use for option icons. |
| mode | MenuMode | "click" | Gets/sets the mode that this menu is using. |
| observeScroll | boolean | false | Controls the observation of scroll events on the dropdown. |
| observeScrollThreshold | number | 0 | The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if observeScroll is true. |
| open | boolean | false | Gets/sets the open state. |
| optionBuilder | MenuOptionBuilder | - | Sets the callback that will be executed for each option in the dropdown for producing custom option templates. |
| optionLimit | number | 0 | Gets/sets the maximum number of options to display in the dropdown. |
| options | Array< IMenuOption \| IMenuOptionGroup > \| MenuOptionFactory | [] | Gets/sets the array of options to display in the menu. |
| persistSelection | boolean | - | Gets/sets whether selection of menu items is persisted. |
| placement | `${ PositionPlacement }` | "bottom-start" | Gets/sets the menu placement (default is bottom-left). |
| popoverFallbackPlacements | PositionPlacement [] \| null | - | Gets/sets the fallback placements of the popover. |
| popoverFlip | OverlayFlipState | 'auto' | Gets/sets the flip state of the popover. |
| popoverOffset | IOverlayOffset | - | Gets/sets the offset of the popover. |
| popoverPlacement | OverlayPlacement | 'bottom' | Gets/sets the placement of the popover. |
| popoverShift | OverlayShiftState | 'auto' | Gets/sets whether the popover should shift to fit within the viewport. |
| popupClasses | string \| string[] | - | Gets/sets the list of classes to apply to the popup element. |
| popupElement | HTMLElement \| undefined | - | Gets the currently active popup element when the dropdown is open. |
| popupFooterBuilder | ListDropdownFooterBuilder | - | Gets/sets the callback function for generating footer content within the popup. |
| popupHeaderBuilder | ListDropdownHeaderBuilder | - | Gets/sets the callback function for generating header content within the popup. |
| popupOffset | IOverlayOffset | - | Sets the position adjustment on the internal popup element. |
| selectedIndex | number | - | Gets/sets the selected option to the index. Does not support cascading menus. |
| selectedValue | any | - | Gets/sets the value of the option to select. |
| syncPopupWidth | boolean | false | Gets/sets whether the popup width is synchronized with the popup target width. |
| wrapOptionText | boolean | false | Gets/sets whether the options will wrap their text or not. This only applies if constrainPopupWidth is true, if there is an explicit width set via CSS. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| constrain-popup-width | boolean | true | Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: 100vw). |
| dense | boolean | false | Gets/sets dense state of the list options used in the menu popup. |
| fallback-placements | `${ PositionPlacement }`[] | - | Gets/sets the fallback menu placement for overriding the default of any side. |
| icon-class | string | - | Gets/sets the class name to use for option icons. |
| mode | MenuMode | "click" | Gets/sets the mode that this menu is using. |
| observe-scroll | boolean | false | Controls the observation of scroll events on the dropdown. |
| observe-scroll-threshold | number | 0 | The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if observeScroll is true. |
| open | boolean | false | Gets/sets the open state. |
| option-limit | number | 0 | Gets/sets the maximum number of options to display in the dropdown. |
| placement | `${ PositionPlacement }` | "bottom-start" | Gets/sets the menu placement (default is bottom-left). |
| popover-fallback-placements | PositionPlacement [] \| null | - | Gets/sets the fallback placements of the popover. |
| popover-flip | OverlayFlipState | 'auto' | Gets/sets the flip state of the popover. |
| popover-offset | IOverlayOffset | - | Gets/sets the offset of the popover. |
| popover-placement | OverlayPlacement | 'bottom' | Gets/sets the placement of the popover. |
| popover-shift | OverlayShiftState | 'auto' | Gets/sets whether the popover should shift to fit within the viewport. |
| popup-classes | string \| string[] | - | Gets/sets the list of classes to apply to the popup element. |
| selected-index | number | - | Gets/sets the selected option to the index. Does not support cascading menus. |
| selected-value | any | - | Gets/sets the value of the option to select. |
| sync-popup-width | boolean | false | Gets/sets whether the popup width is synchronized with the popup target width. |
| wrap-option-text | boolean | false | Gets/sets whether the options will wrap their text or not. This only applies if constrainPopupWidth is true, if there is an explicit width set via CSS. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| activateFirstOption() | Activates the first option in the menu when open. | - | void |
| propagateKeyEvent() | Force propagates the key event from another element to this component. | evt: KeyboardEvent | void |

### Dependencies

This component will automatically include the following components:
- `<forge-list>`
- `<forge-popover>`

### Keyboard shortcuts

#### Menu open

| Key | Description |
|-----|-------------|
| space / escape | Closes the menu. |
| enter / arrow right | Opens and closes child menu of the focused menu item. |
| arrow left | Mode is Cascade: Closes the menu. |

#### Menu closed

| Key | Description |
|-----|-------------|
| space | Opens the menu. |
| enter | Opens the menu and Opens and closes child menu of the focused menu item. |
| arrow down | Opens the menu and focuses the first menu item. |

## Accessibility

- Verify that the trigger element used to open and close the menu can be focused and activated by keyboard.
- Ensure that there is a visual cue that the trigger element is currently in focus.
- Verify that pressing the space bar or enter key while focused on the trigger element will activate the menu in the same manner as if it had been clicked with a mouse.
- Ensure each menu item can be selected by using arrow-up and arrow-down.
