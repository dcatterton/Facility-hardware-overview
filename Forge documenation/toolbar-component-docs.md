# Toolbar

Toolbars are layout components that allow for placing content in named regions of its template.

This component is useful for headers and footers within pages, dialogs, sections... etc. to ensure consistent spacing and positioning.

```html
<forge-toolbar>
  <div slot="before-start">Before start</div>
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
  <div slot="after-end">After end</div>
</forge-toolbar>
```

> **Tip**: If you need the toolbar to expand vertically when its contents wrap, set either the `auto-height` attribute or the `--forge-toolbar-height: auto` CSS custom property to override the static/fixed height.

## Inverted

You can use the `inverted` attribute for footers to move the border to the top.

```html
<forge-toolbar inverted>
  <div slot="before-start">Before start</div>
  <div slot="start">Start</div>
  <div slot="center">Center</div>
  <div slot="end">End</div>
  <div slot="after-end">After end</div>
</forge-toolbar>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| inverted | boolean | false | Controls whether a bottom divider (default) or top divider (true) is used. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| auto-height | boolean | - | Forces the internal container to use height: auto for dynamic content that doesn't fit the static height. |
| inverted | boolean | false | Controls whether a bottom divider (default) or top divider (true) is used. |
| no-border | boolean | - | Deprecated. Use no-divider instead. |
| no-divider | boolean | - | Hides the internal divider. |
| no-padding | boolean | - | Sets the internal padding style to 0. |

### Slots

| Name | Description |
|------|-------------|
| after-end | The content to place after the end slot. |
| before-start | The content to place before the start slot. |
| center | The content to place in the center of the toolbar. |
| end | The content to place at the end of the toolbar. |
| start | The content to place at the start of the toolbar. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-theme-surface | Controls the background-color of the toolbar. |
| --forge-toolbar-columns | The grid column track sizes. |
| --forge-toolbar-divider-color | Controls the divider color. |
| --forge-toolbar-divider-style | Controls the divider style. |
| --forge-toolbar-divider-width | Controls the divider width. |
| --forge-toolbar-end-end-shape | Controls the border radius of the bottom right corner. |
| --forge-toolbar-end-start-shape | Controls the border radius of the bottom left corner. |
| --forge-toolbar-height | Controls the height. |
| --forge-toolbar-min-height | Controls the minimum height. Defaults to the toolbar height. |
| --forge-toolbar-padding | Controls the left and right padding using the padding-inline style. |
| --forge-toolbar-padding-block | Controls the top and bottom padding using the padding-block style. |
| --forge-toolbar-padding-inline | Controls the left and right padding using the padding-block style. |
| --forge-toolbar-shape | Controls the border radius of the toolbar. |
| --forge-toolbar-start-end-shape | Controls the border radius of the top right corner. |
| --forge-toolbar-start-start-shape | Controls the border radius of the top left corner. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| after-section-end | The container element for the after-end slot. |
| before-section-start | The container element for the before-start slot. |
| inner | The internal container element for the start, center, and end slots. |
| root | The root container element wrapping all slots and content. |
| section-center | The container element for the center slot. |
| section-end | The container element for the end slot. |
| section-start | The container element for the start slot. |

## Accessibility

- Ensure that all of the controls that are accessible by a mouse are also accessible by keyboard.
- Ensure the controls are reachable by the tab key.
- Ensure each control can be updated or activated by the keyboard.

## CSS-Only

This toolbar is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only toolbar component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/toolbar/forge-toolbar.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-toolbar | Apply to the root element (required). |
| forge-toolbar--inverted | Inverts the toolbar so the divider is at the top. |
| forge-toolbar--no-divider | Hides the internal divider. |
| forge-toolbar--auto-height | Forces the internal container to use height: auto for dynamic content that doesn't fit the static/default height. |
| forge-toolbar__start | Renders content in the start area within the toolbar. |
| forge-toolbar__center | Renders content in the center area within the toolbar. |
| forge-toolbar__end | Renders content in the end area within the toolbar. |
