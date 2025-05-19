# Floating Action Button

Use floating action buttons to represent the primary action on a screen within an application. It's recommended to only use one floating action button per screen.

```html
<forge-fab aria-label="Favorite">
  <forge-icon name="favorite"></forge-icon>
</forge-fab>
```

## Positioning

Typically you will position floating action buttons manually on the screen, for example to apply a fixed position in the bottom-right you could use this CSS:

```css
.bottom-right {
  position: fixed;
  bottom: var(--forge-spacing-medium);
  right: var(--forge-spacing-medium);
}
```

## Extended

Extended floating action buttons are larger and have a text label.

```html
<forge-fab>
  <forge-icon name="add"></forge-icon>
  <span slot="label">Create</span>
</forge-fab>
```

## With Anchor

You can nest an `<a>` element inside the floating action button to create a link.

```html
<forge-fab>
  <a href="javascript: void(0);" aria-label="FAB with anchor">
    <forge-icon name="open_in_new"></forge-icon>
  </a>
</forge-fab>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Sets the density of the button. |
| density | FloatingActionButtonDensity | "medium" | Sets the density of the button. |
| disabled | boolean | false | Disables the button. |
| elevation | FloatingActionButtonElevation | "raised" | Sets the elevation of the button. |
| name | string | "" | The name of the button. |
| popoverIcon | boolean | false | Shows a popover icon on the button. |
| theme | ButtonTheme | "secondary" | Sets the theme of the button. |
| type | ButtonType | "button" | Sets the type of the button. Possible values are `button`, `submit`, and `reset`. |
| value | string | "" | The value of the button. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Sets the density of the button. |
| density | string | "medium" | Sets the density of the button. |
| disabled | boolean | false | Disables the button. |
| elevation | string | "raised" | Sets the elevation of the button. |
| name | string | "" | The name of the button. |
| popover-icon | boolean | false | Shows a popover icon on the button. |
| theme | string | "secondary" | Sets the theme of the button. |
| type | ButtonType | "button" | Sets the type of the button. Possible values are `button`, `submit`, and `reset`. |
| value | string | "" | The value of the button. |

### Events

| Name | Description | Type |
|------|-------------|------|
| click | Fires when the button is clicked. | PointerEvent |

### Slots

| Name | Description |
|------|-------------|
| (default) | This is a default/unnamed slot. Typically used for icon-only or label-only FABs. If the content forces the width to be large than the (default) height, then the FAB will be in extended mode. |
| end | An element to logically render at the end of the button content. |
| label | Reserved specifically for label text. This forces the button into extended mode. |
| start | An element to logically render at the start of the button content. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | Clicks the button. | - | void |
| focus() | Focuses the button. | options: ExperimentalFocusOptions | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-fab-active-shadow | The box shadow of the button when active. |
| --forge-fab-background | The background color. |
| --forge-fab-background-display | The display property. |
| --forge-fab-color | The text color. |
| --forge-fab-density-large-size | The height and min-width of the large density button. |
| --forge-fab-density-medium-size | The height and min-width of the medium density (default) button. |
| --forge-fab-density-small-size | The height and min-width of the small density button. |
| --forge-fab-disabled-background | The background color when disabled. |
| --forge-fab-disabled-color | The text color when disabled. |
| --forge-fab-disabled-cursor | The cursor when disabled. |
| --forge-fab-disabled-opacity | The opacity when disabled. |
| --forge-fab-extended-min-width | The min-width of the extended button. |
| --forge-fab-extended-padding | The inline padding of the extended button. |
| --forge-fab-gap | The gap between the icon and the label. |
| --forge-fab-hover-shadow | The box shadow of the button when hovered. |
| --forge-fab-lowered-active-shadow | The box shadow of the button when lowered and active. |
| --forge-fab-lowered-hover-shadow | The box shadow of the button when lowered and hovered. |
| --forge-fab-lowered-shadow | The box shadow of the button when lowered. |
| --forge-fab-padding | The inline padding of the button. |
| --forge-fab-shadow | The box shadow of the button. |
| --forge-fab-shape | The border radius of the button. |
| --forge-fab-shape-end-end | The end-end border radius. |
| --forge-fab-shape-end-start | The end-start border radius. |
| --forge-fab-shape-start-end | The start-end border radius. |
| --forge-fab-shape-start-start | The start-start border radius. |
| --forge-fab-size | The height and min-width of the button. |
| --forge-fab-transition-duration | The transition duration. |
| --forge-fab-transition-timing | The transition timing function. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | The focus-indicator indicator element. |
| root | The root container element. |
| state-layer | The state-layer surface element. |

### Dependencies

This component will automatically include the following components:
- `<forge-focus-indicator>`
- `<forge-icon>`
- `<forge-state-layer>`

## Accessibility

- Buttons containing only icons should be given a meaningful label via `aria-label` or `aria-labelledby`.
- Avoid using capitalized text because screen readers will read the text character-by-character. Instead use `text-transform: uppercase`.
- Ensure the FAB can be reached by keyboard navigation.
- Ensure that there is a distinct visual cue when the FAB is in focus.
- Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements.
- Ensure that buttons placed above other content on the page have proper contrast ratio.

## CSS-Only

The floating action button component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only fab component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/fab/forge-fab.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-fab | Apply to the interactive button element. |
| forge-fab--extended | Modifies the button to match the extended variant. |
| forge-fab--small | Renders a more dense/small variant. |
| forge-fab--large | Renders a larger variant. |
| forge-fab--flat | Removes the raised shadow. |
