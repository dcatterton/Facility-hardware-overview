# Tab Component Documentation

## Overview

Tabs are used to quickly navigate between different views and group related content at any level of hierarchy. They may be used as primary or secondary navigation within a page.

## Components

The tab system consists of two main components:

1. **Tab** (`<forge-tab>`) - Individual tab elements
2. **Tab Bar** (`<forge-tab-bar>`) - Container for multiple tabs

## Variants

Tabs can be displayed in a number of different ways, including:

### Default (Horizontal)

By default, tabs are displayed in a horizontal layout. This is the most common use case:

```html
<forge-tab-bar data-aria-label="Demo tabs" active-tab="0">
  <forge-tab>Tab 1</forge-tab>
  <forge-tab>Tab 2</forge-tab>
  <forge-tab>Tab 3</forge-tab>
</forge-tab-bar>
```

### Clustered

Clustered tabs are displayed in a horizontal orientation, but instead of spanning the full width of their container, they are grouped together and can be aligned to the left, center, or right of the container:

```html
<forge-tab-bar data-aria-label="Demo tabs" active-tab="0" clustered>
  <forge-tab>Tab 1</forge-tab>
  <forge-tab>Tab 2</forge-tab>
  <forge-tab>Tab 3</forge-tab>
</forge-tab-bar>
```

### Vertical

Vertical tabs are displayed in a vertical orientation. This is useful when you have a large number of tabs, or when you want to save horizontal space:

```html
<forge-tab-bar 
  data-aria-label="Demo tabs" 
  active-tab="0" 
  vertical 
  style="max-width:200px;"
>
  <forge-tab>Tab 1</forge-tab>
  <forge-tab>Tab 2</forge-tab>
  <forge-tab>Tab 3</forge-tab>
</forge-tab-bar>
```

### With Icons

Tabs can also include icons to help users quickly identify the content of each tab. Icons can be displayed to the left (start) or right (end) of the tab label:

```html
<forge-tab-bar data-aria-label="Demo tabs" active-tab="0">
  <forge-tab>
    <forge-icon slot="start" name="favorite"></forge-icon>
    Tab 1
  </forge-tab>
  <forge-tab>
    <forge-icon slot="start" name="favorite"></forge-icon>
    Tab 2
  </forge-tab>
  <forge-tab>
    <forge-icon slot="start" name="favorite"></forge-icon>
    Tab 3
  </forge-tab>
</forge-tab-bar>
```

### Scrolling

The `<forge-tab-bar>` element supports scrolling when the tabs overflow the container. This is useful when you have a large number of tabs and want to ensure that all tabs are accessible to the user. The tabs will automatically scroll when the user switches tabs or when the user clicks on the scroll buttons:

```html
<forge-tab-bar
  data-aria-label="Demo tabs"
  active-tab="0"
  scroll-buttons="true"
  style="max-width:500px;"
>
  <forge-tab>Tab 1</forge-tab>
  <forge-tab>Tab 2</forge-tab>
  <!-- More tabs... -->
  <forge-tab>Tab 20</forge-tab>
</forge-tab-bar>
```

## Tab Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | boolean | `false` | The disabled state of the tab. Should not be set if using the disabled property on `forge-tab-bar`. |
| `inverted` | boolean | `false` | Controls whether the tab indicator is rendered on the opposite side of the tab. |
| `secondary` | boolean | `false` | Controls whether the tab is styled as secondary tab navigation. (Deprecated) |
| `selected` | boolean | `false` | The selected state of the tab. |
| `stacked` | boolean | `false` | Controls whether the tab is taller to allow for slotted leading/trailing elements. |
| `vertical` | boolean | `false` | Controls whether the tab is vertical or horizontal. |

## Tab Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | - | `false` | The disabled state of the tab. |
| `inverted` | - | `false` | Controls whether the tab indicator is rendered on the opposite side of the tab. |
| `secondary` | - | `false` | Deprecated. Controls whether the tab is styled as secondary tab navigation. |
| `selected` | - | `false` | The selected state of the tab. |
| `stacked` | - | `false` | Controls whether the tab is taller to allow for slotted leading/trailing elements. |
| `vertical` | - | `false` | Controls whether the tab is vertical or horizontal. |

## Tab Bar Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `activeTab` | number | `null` | The index of the active tab. |
| `autoActivate` | boolean | `false` | Controls whether the tabs are automatically activated when receiving focus. |
| `clustered` | boolean | `false` | Controls whether the tabs stretch the full width of their container or cluster together at their minimum width. |
| `disabled` | boolean | `false` | Sets the disabled state of all child tabs. If true, any new tabs added to the DOM will be disabled by default. This can be used instead of setting individual tab disabled properties; mixing the two methods of disabling is not supported. |
| `inverted` | boolean | `false` | Controls whether the tabs are rendered inverted (tab indicator at top instead of bottom). |
| `scrollButtons` | boolean | `false` | Controls whether scroll buttons are displayed when the tabs overflow their container. |
| `secondary` | boolean | `false` | Deprecated. Controls whether the tabs are styled as secondary tab navigation. |
| `stacked` | boolean | `false` | Controls whether the tabs are taller to allow for slotted leading/trailing elements. |
| `vertical` | boolean | `false` | Controls whether the tab bar is vertical or horizontal. |

## Tab Bar Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `active-tab` | number | `null` | The index of the active tab. |
| `auto-activate` | boolean | `false` | Controls whether the tabs are automatically activated when receiving focus. |
| `clustered` | boolean | `false` | Controls whether the tabs stretch the full width of their container or cluster together at their minimum width. |
| `disabled` | boolean | `false` | The disabled state of the tab bar. |
| `scroll-buttons` | boolean | `false` | Controls whether scroll buttons are displayed when the tabs overflow their container. |
| `secondary` | boolean | `false` | Deprecated. Controls whether the tabs are styled as secondary tab navigation. |
| `stacked` | boolean | `false` | Controls whether the tabs are taller to allow for slotted leading/trailing elements. |
| `vertical` | boolean | `false` | Controls whether the tab bar is vertical or horizontal. |

## Slots

| Name | Description |
|------|-------------|
| (default) | The tab label. |
| `end` | Content after the label. |
| `start` | Content before the label. |

## Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| `focus()` | Focuses the tab. | `options`: `ExperimentalFocusOptions` | `void` |

## Events

### Tab Events

| Name | Description | Type |
|------|-------------|------|
| `forge-tab-select` | Dispatched when the tab is selected. This event bubbles and it can be useful to capture it on the `<forge-tab-bar>` element. | `CustomEvent<void>` |

### Tab Bar Events

| Name | Description | Type |
|------|-------------|------|
| `forge-tab-bar-change` | Dispatches when the active tab changes. | `CustomEvent<TabBarChangeEventData>` |

## CSS Shadow Parts

### Tab Shadow Parts

| Name | Description |
|------|-------------|
| `container` | The tab container. |
| `content` | The tab content container. |
| `indicator` | The tab active indicator. |
| `label` | The tab label container. |

### Tab Bar Shadow Parts

| Name | Description |
|------|-------------|
| `container` | The container element. |
| `scroll-container` | The scroll container element. |

## CSS Custom Properties

### Tab Custom Properties

| Name | Description |
|------|-------------|
| `--forge-tab-focus-icon-color` | The color of the icon when the tab is focused. |
| `--forge-tab-focus-label-text-color` | The color of the label text when the tab is focused. |
| `--forge-tab-height` | The height of the tab. |
| `--forge-tab-hover-icon-color` | The color of the icon when the tab is hovered. |
| `--forge-tab-hover-label-text-color` | The color of the label text when the tab is hovered. |
| `--forge-tab-icon-color` | The color of the icon. |
| `--forge-tab-icon-size` | The size of the icon. |
| `--forge-tab-inactive-color` | The primary color of the contents when inactive. |
| `--forge-tab-indicator-color` | The color of the active tab indicator. |
| `--forge-tab-indicator-height` | The height of the active tab indicator. |
| `--forge-tab-indicator-shape` | The shape of the active tab indicator. |
| `--forge-tab-inverted-indicator-shape` | The shape of the active tab indicator when inverted. |
| `--forge-tab-label-text-color` | The color of the label text. |
| `--forge-tab-padding-block` | The block space between the tab contents and the bounds of the tab. |
| `--forge-tab-padding-inline` | The inline space between the tab contents and the bounds of the tab. |
| `--forge-tab-pressed-icon-color` | The color of the icon when the tab is pressed. |
| `--forge-tab-pressed-label-text-color` | The color of the label text when the tab is pressed. |
| `--forge-tab-stacked-height` | The height of the tab when stacked. |
| `--forge-tab-vertical-indicator-shape` | The shape of the active tab indicator when vertical. |
| `--forge-tab-vertical-inverted-indicator-shape` | The shape of the active tab indicator when vertical and inverted. |

### Tab Active Custom Properties

| Name | Description |
|------|-------------|
| `--forge-tab-active-color` | The primary color of the contents when active. |
| `--forge-tab-active-focus-icon-color` | The color of the icon when the tab is active and focused. |
| `--forge-tab-active-focus-label-text-color` | The color of the label text when the tab is active and focused. |
| `--forge-tab-active-hover-icon-color` | The color of the icon when the tab is active and hovered. |
| `--forge-tab-active-hover-label-text-color` | The color of the label text when the tab is active and hovered. |
| `--forge-tab-active-icon-color` | The color of the icon when the tab is active. |
| `--forge-tab-active-label-text-color` | The color of the label text when the tab is active. |
| `--forge-tab-active-pressed-icon-color` | The color of the icon when the tab is active and pressed. |
| `--forge-tab-active-pressed-label-text-color` | The color of the label text when the tab is active and pressed. |

### Tab Container Custom Properties

| Name | Description |
|------|-------------|
| `--forge-tab-container-color` | The color of the tab container. |
| `--forge-tab-container-height` | The height of the tab container. |
| `--forge-tab-container-shape` | The shape of the tab container. |
| `--forge-tab-content-height` | The height of the tab content. |
| `--forge-tab-content-padding` | The padding value for both block and inline of the tab content. |
| `--forge-tab-content-padding-block` | The block padding of the tab content. |
| `--forge-tab-content-padding-inline` | The inline padding of the tab content. |
| `--forge-tab-content-spacing` | The spacing between tab contents. |
| `--forge-tab-disabled-opacity` | The opacity of the tab when disabled. |

### Tab Bar Custom Properties

| Name | Description |
|------|-------------|
| `--forge-tab-bar-divider-color` | The color of the divider. |
| `--forge-tab-bar-divider-thickness` | The thickness of the divider. |
| `--forge-tab-bar-justify` | The `justify-content` value for the tab bar flex container. |
| `--forge-tab-bar-stretch` | The `flex` value for the child `<forge-tab>` elements. |

## Dependencies

### Tab Dependencies

This component will automatically include the following components:

* `<forge-focus-indicator>`
* `<forge-state-layer>`

### Tab Bar Dependencies

This component will automatically include the following components:

* `<forge-icon>`
* `<forge-icon-button>`
* `<forge-tab>`

## Disabled State

When disabling tabs you should either choose to disable all tabs together through the `<forge-tab-bar>` element, or disable individual tabs for each `<forge-tab>` element. Do not mix the two approaches. This is recommended because if you attempt to use both at the same time, the two disabled states can conflict with each other leading to unexpected behavior.

## Best Practices

1. Use tabs to organize related content within the same context.
2. Use clear, concise labels for tab text.
3. Keep the number of tabs reasonable for the available space.
4. Consider using vertical tabs for large numbers of tabs or to save horizontal space.
5. Use icons to improve recognition and scannability.
6. Enable scrolling for tab bars with many tabs.
7. Avoid mixing disabled states between individual tabs and the tab bar container.
8. Ensure proper ARIA attributes for accessibility.
9. Use the default horizontal layout for most use cases.
10. Consider clustered tabs when you don't want tabs to fill the entire width.
