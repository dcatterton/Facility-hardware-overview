# List

Interactive Lists are used to display a collection of items in a vertical format. They can be used for navigation, selection, or just to display static data.

Lists are semantically equivalent to the HTML `<ul>` and `<li>` elements, can be used in the same way, and are static by default. If you want your list items to be interactive, see the examples below.

## List Item

### Properties

```html
<forge-list>
  <forge-list-item value="list-item-1">
    <span>List item 1</span>
  </forge-list-item>
  <forge-list-item value="list-item-2">
    <span>List item 2</span>
  </forge-list-item>
  <forge-list-item value="list-item-3">
    <span>List item 3</span>
  </forge-list-item>
  <forge-list-item value="list-item-4">
    <span>List item 4</span>
  </forge-list-item>
</forge-list>
<style>
  forge-list {
    max-width: 500px;
  }
</style>
```

## Interactive

Lists can be made interactive by providing a `<button>` element around your main list item content. This allows the list item to receive focus, and provides visual feedback when the item is hovered or pressed.

```html
<forge-list>
  <forge-list-item value="list-item-1">
    <button type="button">List item 1</button>
  </forge-list-item>
  <forge-list-item value="list-item-2">
    <button type="button">List item 2</button>
  </forge-list-item>
  <forge-list-item value="list-item-3">
    <button type="button">List item 3</button>
  </forge-list-item>
  <forge-list-item value="list-item-4">
    <button type="button">List item 4</button>
  </forge-list-item>
</forge-list>
<style>
  forge-list {
    max-width: 500px;
  }
</style>
```

## Using the forge-ignore attribute

It is common to place multiple interactive elements within a `<forge-list-item>`. However, you may want to prevent the list item from responding to pointer events on specific elements. To do this you can either listen for the click event yourself on the specific elements you care about and call stopPropagation() on the event, or you can use the `forge-ignore` attribute for convenience. This attribute is used to prevent the list item from handling the event when the element (or any children of the element) is clicked.

```html
<forge-list-item>
  <button type="button">List Item</button>
  <!-- 
    Using the forge-ignore attribute allows this element to be placed within the 
    list item without causing the list item to respond to pointer events when clicked.
  -->
  <forge-checkbox slot="start" tabindex="-1" forge-ignore aria-label="Checkbox"></forge-checkbox>
</forge-list-item>
```

## With Anchor

Lists can also be used for navigation by providing a `<a>` element around your main list item content instead. When your list item will navigate to a new page, it is recommended to use an `<a>` element to provide the correct semantics and expectations for users.

```html
<forge-list>
  <forge-list-item value="list-item-1">
    <a href="javascript:void(0);">List item 1</a>
  </forge-list-item>
  <forge-list-item value="list-item-2">
    <a href="javascript:void(0);">List item 2</a>
  </forge-list-item>
  <forge-list-item value="list-item-3">
    <a href="javascript:void(0);">List item 3</a>
  </forge-list-item>
  <forge-list-item value="list-item-4">
    <a href="javascript:void(0);">List item 4</a>
  </forge-list-item>
</forge-list>
<style>
  forge-list {
    max-width: 500px;
  }
</style>
```

## Navigation Menu

It is common to provide a list of navigation items in a drawer or other container component. This gives your application a consistent location for the central navigation of your site.

### Navlist

When lists are placed within a `<forge-drawer>` or are used for navigation menus, you should add the navlist attribute to your `<forge-list>` element so that the list items are styled appropriately.

```html
<forge-list navlist></forge-list>
```

```html
<forge-drawer>
  <aside>
    <forge-list navlist>
      <forge-list-item>
        <forge-icon slot="start" name="home"></forge-icon>
        <a href="javascript:void(0);">Home</a>
      </forge-list-item>
      <forge-list-item>
        <forge-icon slot="start" name="inbox"></forge-icon>
        <a href="javascript:void(0);">Inbox</a>
      </forge-list-item>
      <forge-list-item>
        <forge-icon slot="start" name="star"></forge-icon>
        <a href="javascript:void(0);">Starred</a>
      </forge-list-item>
      <forge-list-item>
        <forge-icon slot="start" name="settings"></forge-icon>
        <a href="javascript:void(0);">Settings</a>
      </forge-list-item>
    </forge-list>
  </aside>
</forge-drawer>
<style>
  forge-list {
    max-width: 500px;
  }
</style>
```

When using a list as a navigation menu, it is common to provide a visual indicator of the currently active item. This can be done by providing a `selected` attribute to the list item that is currently active, or by using the `selectedValue` attribute on the `<forge-list>` element to indicate the currently active item by its matching value.

Additionally, you should provide the `aria-current="page"` attribute to the currently active list item to indicate to screen readers that it is the current page.

## With Expandable Items

Lists can also contain expandable items via the expansion panel component, which can be used to show or hide additional content and/or sub-lists.

```html
<forge-list>
  <forge-expansion-panel>
    <forge-list-item slot="header">
      <forge-icon slot="start" name="code"></forge-icon>
      <button type="button">List Item One</button>
      <forge-open-icon slot="end"></forge-open-icon>
    </forge-list-item>
    <div role="listitem">
      <forge-list indented>
        <forge-list-item>
          <button type="button">List Item One</button>
        </forge-list-item>
        <forge-list-item>
          <button type="button">List Item Two</button>
        </forge-list-item>
        <forge-list-item>
          <button type="button">List Item Three</button>
        </forge-list-item>
      </forge-list>
    </div>
  </forge-expansion-panel>
  <forge-expansion-panel>
    <forge-list-item slot="header">
      <forge-icon slot="start" name="face"></forge-icon>
      <button type="button">List Item Two</button>
      <forge-open-icon slot="end"></forge-open-icon>
    </forge-list-item>
    <div role="listitem">
      <forge-list indented>
        <forge-list-item>
          <button type="button">List Item One</button>
        </forge-list-item>
        <forge-list-item>
          <button type="button">List Item Two</button>
        </forge-list-item>
        <forge-list-item>
          <button type="button">List Item Three</button>
        </forge-list-item>
      </forge-list>
    </div>
  </forge-expansion-panel>
  <forge-list-item>
    <forge-icon slot="start" name="favorite"></forge-icon>
    <button type="button">List Item Three</button>
  </forge-list-item>
</forge-list>
<style>
  forge-list {
    max-width: 500px;
  }
</style>
```

**Important**: make note of the adjacent wrapper `<div>` elements that have a `role="listitem"` attribute to ensure that the structure is accessible to screen readers.

## API

### List

#### Properties

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| dense | boolean | false | Whether the list has all dense items or not. |
| indented | boolean | false | Whether the list items within this list are indented. Default is false. |
| noninteractive | boolean | false | Controls whether the list items will automatically attach themselves to interactive slotted elements or not. |
| selectedValue | unknown \| unknown[] | - | The selected list item value(s). |
| threeLine | boolean | false | Whether the list has all three-line items or not. |
| twoLine | boolean | false | Whether the list has all two-line items or not. |
| wrap | boolean | false | Whether the list has all items that wrap their text or not. |

#### Attributes

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| dense | boolean | false | Whether the list has all dense items or not. |
| indented | boolean | false | Whether the list items within this list are indented. Default is false. |
| navlist | boolean | false | Controls whether the list is styled a navigation list or not. |
| noninteractive | boolean | false | Controls whether the list items will automatically attach themselves to interactive slotted elements or not. |
| selected-value | string | - | The selected list item value(s). |
| three-line | boolean | false | Whether the list has all three-line items or not. |
| two-line | boolean | false | Whether the list has all two-line items or not. |
| wrap | boolean | false | Whether the list has all items that wrap their text or not. |

#### Slots

| Name | Description |
| ---- | ----------- |
| (default) | The default/unnamed slot for child list items. |

#### CSS Custom Properties

| Name | Description |
| ---- | ----------- |
| --forge-list-container-color | The background color of the list surface. |
| --forge-list-spacing | The spacing between the list items. |

#### CSS Shadow Parts

| Name | Description |
| ---- | ----------- |
| root | The component's root container element. |

### List Item

#### Properties

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active | boolean | false | Applies the active state to the list item by emulating its focused state. |
| dense | boolean | false | Applies the dense state to the list item. |
| focusPropagation | boolean | "allow" | Controls whether the interactive element will receive focus if a non-interactive element is clicked within the list item. |
| indented | boolean | false | Applies the indented state by adding margin to the start of the list item. |
| noninteractive | boolean | false | Controls whether the list item will automatically attach itself to interactive slotted elements or not. |
| selected | boolean | false | Applies the selected state to the list item. |
| threeLine | boolean | false | Sets the list item height to support at least three lines of text. |
| twoLine | boolean | false | Sets the list item height to support at least two lines of text. |
| value | unknown | - | The unique value of the list item. |
| wrap | boolean | false | Sets the list item to wrap its text content. |

#### Attributes

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| active | boolean | false | Applies the active state to the list item by emulating its focused state. |
| dense | boolean | false | Applies the dense state to the list item. |
| focus-propagation | boolean | "allow" | Controls whether the interactive element will receive focus if a non-interactive element is clicked within the list item. |
| indented | boolean | false | Applies the indented state by adding margin to the start of the list item. |
| noninteractive | boolean | false | Controls whether the list item will automatically attach itself to interactive slotted elements or not. |
| selected | boolean | false | Applies the selected state to the list item. |
| three-line | boolean | false | Sets the list item height to support at least three lines of text. |
| two-line | boolean | false | Sets the list item height to support at least two lines of text. |
| value | unknown | - | The unique value of the list item. |
| wrap | boolean | false | Sets the list item to wrap its text content. |

#### Events

| Name | Description | Type |
| ---- | ----------- | ---- |
| forge-list-item-select | Fires when the list item is selected. | CustomEvent< IListItemSelectEventData > |

#### Slots

| Name | Description |
| ---- | ----------- |
| (default) | The primary text. |
| end | The end element. |
| secondary-text | The secondary text. |
| start | The start content. |
| tertiary-text | The tertiary text. |

#### CSS Custom Properties

| Name | Description |
| ---- | ----------- |
| --forge-list-item-background | The background color. |
| --forge-list-item-cursor | The cursor when interactive. |
| --forge-list-item-dense-font-size | The font size when in the dense state. |
| --forge-list-item-dense-gap | The gap between the slotted content when in the dense state. |
| --forge-list-item-dense-indent | The margin inline state when in the dense indented state. |
| --forge-list-item-dense-one-line-height | The line height when in the dense one/single line state. |
| --forge-list-item-dense-three-line-height | The line height when in the dense three line state. |
| --forge-list-item-dense-two-line-height | The line height when in the dense two line state. |
| --forge-list-item-disabled-cursor | The cursor when in the disabled state. |
| --forge-list-item-disabled-opacity | The opacity of the element when in the disabled state. |
| --forge-list-item-end-selected-color | The color of the end content when in the selected state. |
| --forge-list-item-gap | The gap between the slotted content. |
| --forge-list-item-height | The height of the container. |
| --forge-list-item-indent | The margin inline state when in the indented state. |
| --forge-list-item-margin | The margin around the host element. |
| --forge-list-item-one-line-height | The line height when in the one/single line state. |
| --forge-list-item-padding | The padding inside of the container element. |
| --forge-list-item-selected-background | The background color when in the selected state. |
| --forge-list-item-selected-color | The foreground color when in the selected state. |
| --forge-list-item-selected-opacity | The opacity of the background color when in the selected state. |
| --forge-list-item-selected-text-color | The color of the text when in the selected state. |
| --forge-list-item-shape | The shape of the list item. |
| --forge-list-item-start-selected-color | The color of the start content when in the selected state. |
| --forge-list-item-text-color | The text color of the text. |
| --forge-list-item-text-font-size | The font size of the text. |
| --forge-list-item-text-font-weight | The font weight of the text. |
| --forge-list-item-text-line-height | The line height of the text. |
| --forge-list-item-three-line-height | The line height when in the three line state. |
| --forge-list-item-two-line-height | The line height when in the two line state. |
| --forge-list-item-wrap-padding | The padding inside of the container element when wrap is enabled. |

#### CSS Shadow Parts

| Name | Description |
| ---- | ----------- |
| focus-indicator | The forwarded focus indicator's internal indicator element. |
| root | The root container element. |
| state-layer | The forwarded state layer's internal surface element. |
| text-container | The container for the text content. |

## Accessibility

- Verify that you can reach each active list item by keyboard navigation.
- Ensure a distinct visual style is applied which highlights the currently focused list item.
- Verify that pressing the space bar or enter key while focused on a list-item will activate the list-item in the same manner as if it had been clicked with a mouse.
- Be sure to include a role attribute to indicate to screen readers what the list-item is being used for.
- If the list item contains a checkbox or radio box, ensure that it can be focused and selected/toggled by keyboard.

## CSS-Only

The list component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only list component, include the following CSS file in your project:

```css
@use '@tylertech/forge/dist/list/forge-list.css';
```

### CSS Classes

| Name | Description |
| ---- | ----------- |
| forge-list | The list container element. |
| forge-list--dense | Applies a dense style to the list items. |
| forge-list--navlist | Applies a navigation style to the list items. Use this when placed in a drawer or other side-navigation. |
| forge-list--two-line | Applies a two-line style to the list items. |
| forge-list--three-line | Applies a three-line style to the list items. |
| forge-list--indented | Indents the list items. |
| forge-list--wrap | Wraps the text of the list items. |
| forge-list--disabled | Applies a disabled style to the list items. |
| forge-list-item | The list item element (required). |
| forge-list-item--disabled | The disabled state. |
| forge-list-item--dense | The dense state. |
| forge-list-item--interactive | Manually forces the list item to appear interactive with hover/focus states. This will happen automatically if there is a child `<button>` or `<a>` element. |
| forge-list-item--two-line | Uses the two-line style. |
| forge-list-item--three-line | Uses the three-line style. |
| forge-list-item--indented | Indents the list item. |
| forge-list-item--wrap | Wraps the text content. |
| forge-list-item--selected | The selected state. |
| forge-list-item__text | Styles the text content. Apply this to the primary, secondary, and tertiary text content. |
| forge-list-item__start | Styles the start content (typically an icon). |
| forge-list-item__end | Styles the end content (typically an icon). |
