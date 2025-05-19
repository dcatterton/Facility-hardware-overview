# Button

Buttons are used to trigger actions or events in an application. Forge provides a set of button styles that can be used to create a consistent user experience.

```html
<forge-button>Button</forge-button>
```

## Variants

Forge buttons come in several variants to match the style of your application, and can be used in a variety of contexts based on emphasis and hierarchy.

- **Text**: A button with no background or border, and only text content.
- **Outlined**: A button with a transparent background and a border.
- **Filled**: A button with a solid background color.
- **Raised**: A button with a raised appearance.
- **Link**: A button with no background or border, and only text content that appears as a link.

Text Outlined Tonal Filled Raised Link

```html
<forge-button>Text</forge-button>
<forge-button variant="outlined">Outlined</forge-button>
<forge-button variant="tonal">Tonal</forge-button>
<forge-button variant="filled">Filled</forge-button>
<forge-button variant="raised">Raised</forge-button>
<forge-button variant="link">Link</forge-button>
```

## Themed

Forge buttons can be themed using the built-in theme attribute, which will apply the appropriate color scheme based on the current theme.

Primary Secondary Tertiary Success Warning Error Info

```html
<forge-button variant="raised">Primary</forge-button>
<forge-button theme="secondary" variant="raised">Secondary</forge-button>
<forge-button theme="tertiary" variant="raised">Tertiary</forge-button>
<forge-button theme="success" variant="raised">Success</forge-button>
<forge-button theme="warning" variant="raised">Warning</forge-button>
<forge-button theme="error" variant="raised">Error</forge-button>
<forge-button theme="info" variant="raised">Info</forge-button>
```

Additionally, you can always provide your own theme via the CSS custom properties noted below.

## Anchor

Forge buttons support providing a slotted `<a>` element that allows for you to visually style an anchor tag as a button.

```html
<forge-button variant="raised">
  <a href="javascript: void(0);">
    Anchor button
    <forge-icon slot="end" name="open_in_new"></forge-icon>
  </a>
</forge-button>
```

Note: you should not use slots with anchor buttons because the `<a>` element itself becomes the full content of the button.

## With Icon

Forge buttons can include an icon to provide additional context or visual interest.

```html
<forge-button variant="raised">
  <forge-icon name="forge_logo" slot="start"></forge-icon>
  Button
</forge-button>
```

## With Circular Progress

Forge buttons can include a circular progress indicator to provide feedback to the user when an action is in progress.

```html
<forge-button variant="raised">
  Loading...
  <forge-circular-progress
    slot="end"
    aria-label="Loading something important"
  ></forge-circular-progress>
</forge-button>
```

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| dense | boolean | false | Whether or not the button is dense. | ✅ |
| disabled | boolean | false | Whether or not the button is disabled. | |
| fullWidth | boolean | false | Whether or not the button is full-width. | |
| name | string | "" | The name of the button. | |
| pill | boolean | false | Whether or not the button is pill-shaped. | |
| popoverIcon | boolean | false | Whether or not the button shows a built-in popover icon. | |
| theme | ButtonTheme | "primary" | The theme of the button. Defaults to primary. | |
| type | ButtonType | "button" | The type of button. Valid values are button, submit, and reset. | |
| value | string | "" | The form value of the button. | |
| variant | ButtonVariant | "text" | The variant of the button. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether or not the button is dense. |
| disabled | boolean | false | Whether or not the button is disabled. |
| full-width | boolean | false | Whether or not the button is full-width. |
| name | string | "" | The name of the button. |
| pill | boolean | false | Whether or not the button is pill-shaped. |
| popover-icon | boolean | false | Whether or not the button shows a built-in popover icon. |
| theme | ButtonTheme | "primary" | The theme of the button. Defaults to primary. |
| type | ButtonType | "button" | The type of button. Valid values are button, submit, and reset. |
| value | string | "" | The form value of the button. |
| variant | ButtonVariant | "text" | The variant of the button. |

### Events

| Name | Description | Type |
|------|-------------|------|
| click | Fires when the button is clicked. | PointerEvent |

### Slots

| Name | Description |
|------|-------------|
| (default) | This is a default/unnamed slot for the label text. |
| end | Elements to logically render after the label text. |
| start | Elements to logically render before the label text. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | Clicks the button. | - | void |
| focus() | Focuses the button. | options: ExperimentalFocusOptions | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-button-active-background | The background color of the button on active state. |
| --forge-button-active-shadow | The shadow of the button on active state. |
| --forge-button-background | The background color of the button. |
| --forge-button-border-color | The border color of the button. |
| --forge-button-border-style | The border style of the button. |
| --forge-button-border-width | The border-width of the button. |
| --forge-button-color | The text color of the button. |
| --forge-button-cursor | The cursor type of the button. |
| --forge-button-dense-height | The height of the dense button. |
| --forge-button-disabled-background | The background color of the disabled button. |
| --forge-button-disabled-border-color | The border color of the disabled button. |
| --forge-button-disabled-color | The disabled color of the button. |
| --forge-button-disabled-cursor | The cursor type of the disabled button. |
| --forge-button-disabled-shadow | The shadow of the disabled button. |
| --forge-button-disabled-text-color | The text color of the disabled button. |
| --forge-button-display | The display of the button. |
| --forge-button-filled-background | The background color of the filled button. |
| --forge-button-filled-color | The text color of the filled button. |
| --forge-button-filled-disabled-background | The background color of the disabled filled button. |
| --forge-button-filled-disabled-color | The text color of the disabled filled button. |
| --forge-button-flat-background | The background color of the flat button. |
| --forge-button-flat-color | The text color of the flat button. |
| --forge-button-flat-disabled-background | The background color of the disabled flat button. |
| --forge-button-flat-disabled-color | The text color of the disabled flat button. |
| --forge-button-height | The height of the button. |
| --forge-button-hover-background | The background color of the button on hover. |
| --forge-button-hover-shadow | The shadow of the button on hover. |
| --forge-button-icon-size | The size of the icon in the button. |
| --forge-button-justify | The flex justify of the button. |
| --forge-button-link-active-opacity | The opacity of the link button on active state. |
| --forge-button-link-color | The text color of the link button. |
| --forge-button-link-height | The height of the link button. |
| --forge-button-link-hover-text-decoration | The text decoration of the link button on hover. |
| --forge-button-link-line-height | The line height of the link button. |
| --forge-button-link-padding | The padding of the link button. |
| --forge-button-link-text-decoration | The text decoration of the link button. |
| --forge-button-link-transition-duration | The transition duration of the link button. |
| --forge-button-link-transition-timing | The transition timing of the link button. |
| --forge-button-link-width | The width of the link button. |
| --forge-button-min-width | The min-width of the button. |
| --forge-button-outlined-background | The background color of the outlined button. |
| --forge-button-outlined-border-color | The border color of the outlined button. |
| --forge-button-outlined-border-style | The border style of the outlined button. |
| --forge-button-outlined-border-width | The border width of the outlined button. |
| --forge-button-outlined-color | The text color of the outlined button. |
| --forge-button-padding | The padding of the button. |
| --forge-button-padding-block | The padding block of the button. |
| --forge-button-padding-inline | The padding inline of the button. |
| --forge-button-pill-padding-inline | The inline padding of the pill button. |
| --forge-button-pill-shape | The shape of the pill button. |
| --forge-button-primary-color | The primary color of the button. |
| --forge-button-raised-active-shadow | The shadow of the raised button on active state. |
| --forge-button-raised-background | The background color of the raised button. |
| --forge-button-raised-color | The text color of the raised button. |
| --forge-button-raised-disabled-background | The background color of the disabled raised button. |
| --forge-button-raised-disabled-color | The text color of the disabled raised button. |
| --forge-button-raised-disabled-shadow | The shadow of the disabled raised button. |
| --forge-button-raised-hover-shadow | The shadow of the raised button on hover. |
| --forge-button-raised-shadow | The shadow of the raised button. |
| --forge-button-shadow | The shadow of the button. |
| --forge-button-shape | The shape of the button. |
| --forge-button-shape-end-end-radius | The shape end end radius of the button. |
| --forge-button-shape-end-start-radius | The shape end start radius of the button. |
| --forge-button-shape-start-end-radius | The shape start end radius of the button. |
| --forge-button-shape-start-start-radius | The shape start start radius of the button. |
| --forge-button-spacing | The spacing of the button. |
| --forge-button-text-color | The text color of the button. Inherits from primary color. |
| --forge-button-text-padding-inline | The inline padding of the button when using the text variant. |
| --forge-button-transition-duration | The transition duration of the button. |
| --forge-button-transition-timing | The transition timing of the button. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | The focus-indicator indicator element. |
| root | The root container element. |
| state-layer | The state-layer surface element. |

## Dependencies

This component will automatically include the following components:
- `<forge-focus-indicator>`
- `<forge-icon>`
- `<forge-state-layer>`

## Accessibility

- Verify that you can reach every button by keyboard navigation.
- Ensure that there is a visual cue that the button is currently in focus.
- Verify that the button has a visible label that describes the action that will be taken when the button is clicked.
- Alternatively, use an aria-label attribute to provide a descriptive label for the button.
- Verify that pressing the space bar or enter key while focused on a button will activate the button in the same manner as if it had been clicked with a mouse.
- Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements.

## CSS-Only

The button component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only button component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/button/forge-button.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-button | Base button class (required). |
| forge-button--text | Text button variant. |
| forge-button--outlined | Outlined button variant. |
| forge-button--tonal | Tonal button variant. |
| forge-button--filled | Filled button variant. |
| forge-button--raised | Raised button variant. |
| forge-button--link | Link button variant. |
| forge-button--dense | Dense height. |
| forge-button--pill | Pill shape. |
