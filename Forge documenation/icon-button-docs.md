# Icon Button

Icon buttons communicate actions that users can take.

```html
<forge-icon-button aria-label="Icon button demo">
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
```

## Variants

Icon buttons can be styled in different ways to indicate their purpose and emphasis level.

```html
<forge-icon-button aria-label="Default icon button">
  <forge-icon name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button variant="outlined" aria-label="Outlined icon button">
  <forge-icon name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button variant="tonal" aria-label="Tonal icon button">
  <forge-icon name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button variant="filled" aria-label="Filled icon button">
  <forge-icon name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button variant="raised" aria-label="Raised icon button">
  <forge-icon name="favorite"></forge-icon>
</forge-icon-button>
```

## Toggle

Icon buttons can be toggled on and off to indicate a state change.

When using a toggle icon button, ensure that you have provided an "off" icon in the default slot, and a "on" icon placed in the on slot. The "on" icon should be visually distinct from the "off" icon to indicate the current state of the button. Typically an outlined-style icon is used for the "off" state and a filled-style icon is used for the "on" state, but any icons can be used.

```html
<forge-icon-button
  toggle
  aria-label="Default toggle icon button"
  aria-pressed="false"
>
  <forge-icon name="favorite_border"></forge-icon>
  <forge-icon slot="on" name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button
  toggle
  variant="outlined"
  aria-label="Outlined toggle icon button"
  aria-pressed="false"
>
  <forge-icon name="favorite_border"></forge-icon>
  <forge-icon slot="on" name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button
  toggle
  variant="tonal"
  aria-label="Tonal toggle icon button"
  aria-pressed="false"
>
  <forge-icon name="favorite_border"></forge-icon>
  <forge-icon slot="on" name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button
  toggle
  variant="filled"
  aria-label="Filled toggle icon button"
  aria-pressed="false"
>
  <forge-icon name="favorite_border"></forge-icon>
  <forge-icon slot="on" name="favorite"></forge-icon>
</forge-icon-button>
<forge-icon-button
  toggle
  variant="raised"
  aria-label="Raised toggle icon button"
  aria-pressed="false"
>
  <forge-icon name="favorite_border"></forge-icon>
  <forge-icon slot="on" name="favorite"></forge-icon>
</forge-icon-button>
```

## Themed

Icon buttons can be themed to match the color scheme of the application. The following example shows a themed icon button using the `theme` attribute:

```html
<forge-icon-button aria-label="Default theme icon button" variant="icon">
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="primary"
  aria-label="Primary theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="secondary"
  aria-label="Secondary theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="tertiary"
  aria-label="Tertiary theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="success"
  aria-label="Success theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="warning"
  aria-label="Warning theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="error"
  aria-label="Error theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
<forge-icon-button
  theme="info"
  aria-label="Info theme icon button"
  variant="icon"
>
  <forge-icon name="forge_logo"></forge-icon>
</forge-icon-button>
```

## With Anchor

Icon buttons can accept a slotted `<a>` element to create a link.

```html
<forge-icon-button>
  <a
    href="javascript: alert('Icon button with anchor works!');"
    aria-label="Anchor link icon button"
  >
    <forge-icon name="open_in_new"></forge-icon>
  </a>
</forge-icon-button>
```

## With Badge

Icon buttons can display a badge to indicate the number of items in a list or the number of notifications.

```html
<forge-icon-button aria-label="Icon button with badge">
  <forge-icon name="notifications"></forge-icon>
  <forge-badge slot="badge">3</forge-badge>
</forge-icon-button>
```

## With Circular Progress

It is common to place a circular progress indicator inside an icon button to indicate that an action is in progress.

```html
<forge-icon-button aria-label="Loading">
  <forge-circular-progress
    aria-label="Progress label"
  ></forge-circular-progress>
</forge-icon-button>
```

## With Label

Icons buttons can be composed with the `<forge-label>` element to provide an accessible label for the button, as well as the correct label typography.

```html
<forge-label
  style="display: flex; flex-direction: column; width: min-content; align-items: center;"
>
  <forge-icon-button>
    <forge-icon name="settings"></forge-icon>
  </forge-icon-button>
  <span>Settings</span>
</forge-label>
```

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| dense | boolean | false | Sets the density of the button. | |
| density | IconButtonDensity | "large" | The density of the button. Valid values are `small`, `medium`, and `large`. | ✅ |
| disabled | boolean | false | Disables the button. | |
| name | string | "" | The name of the button. | |
| on | boolean | false | Alias for pressed (deprecated). Whether or not the toggle button is pressed. Only applies when toggle is true. | |
| popoverIcon | boolean | false | Shows a popover icon on the button. | |
| pressed | boolean | false | Whether or not the toggle button is pressed. Only applies when toggle is true. | |
| shape | IconButtonShape | "circular" | The shape of the button. Valid values are `circular` and `squared`. | ✅ |
| theme | IconButtonTheme | "default" | The variant of the button. Valid values are `text`, `outlined`, `filled`, and `raised`. | |
| toggle | boolean | false | Whether or not the icon button can be toggled. | |
| type | ButtonType | "button" | Sets the type of the button. Possible values are `button`, `submit`, and `reset`. | |
| value | string | "" | The value of the button. | |
| variant | IconButtonVariant | "icon" | The variant of the button. Valid values are `text`, `outlined`, `filled`, and `raised`. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Sets the density of the button. |
| disabled | boolean | false | Disables the button. |
| name | string | "" | The name of the button. |
| popover-icon | boolean | false | Shows a popover icon on the button. |
| type | ButtonType | "button" | Sets the type of the button. Possible values are `button`, `submit`, and `reset`. |
| value | string | "" | The value of the button. |

### Events

| Name | Description | Type |
|------|-------------|------|
| click | Fires when the button is clicked. | PointerEvent |
| forge-icon-button-toggle | Fires when the icon button is toggled. Only applies in toggle mode. | CustomEvent<boolean> |

### Slots

| Name | Description |
|------|-------------|
| (default) | This is a default/unnamed slot for the icon. |
| badge | Absolutely positions the element in the top-end corner of the button (typically reserved for badge-like content). |
| end | Elements to logically render after the icon. |
| on | The icon to show when in toggle mode when toggled "on". |
| start | Elements to logically render before the icon. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | Clicks the button. | - | void |
| focus() | Focuses the button. | options: ExperimentalFocusOptions | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-icon-button-background-color | The background color of the button. |
| --forge-icon-button-border | The border of the button. |
| --forge-icon-button-cursor | The cursor of the button. |
| --forge-icon-button-density-large-size | The size of the button when in the large density. |
| --forge-icon-button-density-medium-padding | The padding of the button when in the medium density. |
| --forge-icon-button-density-medium-size | The size of the button when in the medium density. |
| --forge-icon-button-density-small-icon-size | The size of the icon when in the small density. |
| --forge-icon-button-density-small-padding | The padding of the button when in the small density. |
| --forge-icon-button-density-small-size | The size of the button when in the small density. |
| --forge-icon-button-disabled-cursor | The cursor when the button is disabled. |
| --forge-icon-button-disabled-opacity | The opacity when the button is disabled. |
| --forge-icon-button-display | The display property of the button. |
| --forge-icon-button-filled-background-color | The background color when in the filled variant. |
| --forge-icon-button-filled-icon-color | The icon color when in the filled variant. |
| --forge-icon-button-filled-toggle-background-color | The background color when in the filled variant and toggled. |
| --forge-icon-button-filled-toggle-icon-color | The icon color when in the filled variant and toggled. |
| --forge-icon-button-filled-toggle-on-background-color | The background color when in the filled variant and toggled on. |
| --forge-icon-button-filled-toggle-on-icon-color | The icon color when in the filled variant and toggled on. |
| --forge-icon-button-focus-indicator-color | The color of the focus indicator. |
| --forge-icon-button-gap | The gap between the icon content. |
| --forge-icon-button-icon-color | The color of the icon. |
| --forge-icon-button-icon-size | The size of the icon. |
| --forge-icon-button-outlined-border-color | The border color when in the outlined variant. |
| --forge-icon-button-outlined-border-style | The border style when in the outlined variant. |
| --forge-icon-button-outlined-border-width | The border width when in the outlined variant. |
| --forge-icon-button-outlined-toggle-on-background-color | The background color when in the outlined variant and toggled on. |
| --forge-icon-button-outlined-toggle-on-icon-color | The icon color when in the outlined variant and toggled on. |
| --forge-icon-button-padding | The inline padding of the button. |
| --forge-icon-button-popover-icon-padding | The padding of the popover icon. |
| --forge-icon-button-raised-active-shadow | The shadow when in the raised variant and active. |
| --forge-icon-button-raised-disabled-shadow | The shadow when in the raised variant and disabled. |
| --forge-icon-button-raised-hover-shadow | The shadow when in the raised variant and hovered. |
| --forge-icon-button-raised-shadow | The shadow when in the raised variant. |
| --forge-icon-button-shadow | The shadow of the button. |
| --forge-icon-button-shape | The shape of the button. |
| --forge-icon-button-shape-end-end | The end-end border-radius of the button. |
| --forge-icon-button-shape-end-start | The end-start border-radius of the button. |
| --forge-icon-button-shape-squared | The squared border-radius of the button. |
| --forge-icon-button-shape-start-end | The start-end border-radius of the button. |
| --forge-icon-button-shape-start-start | The start-start border-radius of the button. |
| --forge-icon-button-size | The height and min-width of the button. |
| --forge-icon-button-toggle-on-background-color | The background color of the when in toggle mode and toggled on. |
| --forge-icon-button-toggle-on-icon-color | The color of the icon when in toggle mode and toggled on. |
| --forge-icon-button-tonal-background-color | The background color when in the tonal variant. |
| --forge-icon-button-tonal-icon-color | The icon color when in the tonal variant. |
| --forge-icon-button-tonal-toggle-background-color | The background color when in the tonal variant and toggled. |
| --forge-icon-button-tonal-toggle-on-background-color | The background color when in the tonal variant and toggled on. |
| --forge-icon-button-tonal-toggle-on-icon-color | The icon color when in the tonal variant and toggled on. |
| --forge-icon-button-transition-duration | The transition duration of the button. |
| --forge-icon-button-transition-timing | The transition timing of the button. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | The focus-indicator indicator element. |
| root | The root container element. |
| state-layer | The state-layer surface element. |

## Accessibility

- Verify that you can reach every button by keyboard navigation.
- Ensure that there is a visual cue that the button is currently in focus.
- Ensure that there is an aria-label or aria-labelledby attribute indicating the purpose of the button.
- Verify that pressing the space bar or enter key while focused on a button will activate the button in the same manner as if it had been clicked with a mouse.
- If color conveys important information, provide additional cues for users with color perception deficiencies.

## CSS-Only

The icon-button component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only icon button component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/icon-button/forge-icon-button.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-icon-button | Apply to the interactive button element. |
| forge-icon-button--outlined | The outlined variant. |
| forge-icon-button--tonal | The tonal variant. |
| forge-icon-button--filled | The filled variant. |
| forge-icon-button--raised | The raised variant. |
| forge-icon-button--small | The small density. |
| forge-icon-button--medium | The medium density. |
| forge-icon-button--squared | The squared shape. |
