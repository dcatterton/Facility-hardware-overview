# Banner

The banner component is intended to be used as a way to deliver a short but important message to the user. It has a high degree of emphasis and should not be used for general messaging. If you need to show less important messages, or messages scoped to a more specific section of your page, you should consider using the inline message component instead.

This component supports built-in predefined themes. It can be configured to be either static or dismissible. It can contain a button to trigger whatever action you need.

## Default

```html
<forge-banner>Minim sunt eu laborum labore minim.</forge-banner>
```

## Themed

Error
Warning
Success
Info (default)
Info (secondary)

```html
<div style="display: flex; gap: 12px; flex-direction: column;">
  <forge-banner theme="error">Error</forge-banner>
  <forge-banner theme="warning">Warning</forge-banner>
  <forge-banner theme="success">Success</forge-banner>
  <forge-banner theme="info">Info (default)</forge-banner>
  <forge-banner theme="info-secondary">Info (secondary)</forge-banner>
</div>
```

## Combined

Here is an example usage combined with a forge-button component:

```html
<forge-banner>
  Minim sunt eu laborum labore minim iconium buttonium.
  <forge-icon slot="icon" name="notifications"></forge-icon>
  <forge-button slot="button" variant="outlined">Learn more...</forge-button>
</forge-banner>
```

Note: The design for the banner specifically requests that the button's background be white. Due to limitations in how deep a css selector can drill into a slotted element, you will need to add that background color yourself.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| canDismiss | boolean | - | - |
| dismissed | boolean | false | Controls the visibility of the banner. |
| persistent | boolean | false | Controls the visibility of the built-in dismiss button. |
| theme | BannerTheme | "info" | The theme of the banner. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dismissed | boolean | false | Controls the visibility of the banner. |
| persistent | boolean | false | Controls the visibility of the built-in dismiss button. |
| theme | BannerTheme | "info" | The theme of the banner. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-banner-before-dismiss | Dispatched before the banner is dismissed. Cancelable to prevent dismissal. | CustomEvent<void> |
| forge-banner-dismissed | Dispatched when the banner is dismissed. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The content of the banner. |
| button | The optional button to display. |
| icon | The icon to display. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-banner-background | The background color of the banner. |
| --forge-banner-color | The text color of the banner. |
| --forge-banner-gap | The gap between the contents. |
| --forge-banner-icon-color | The color of the icon. |
| --forge-banner-padding-block | The block padding. |
| --forge-banner-padding-inline | The inline padding. |
| --forge-banner-transition-duration | The transition duration. |
| --forge-banner-transition-easing | The transition easing function. |

## Accessibility

- If the banner is used to display an important notification to a user, use the `role="alert"` attribute on the `<forge-banner>` element. This is equivalent to using `aria-live="assertive"`.
- If the banner is less urgent, you can use `aria-live="polite"` to wait until the user is finished with their current task.

## CSS-Only

The banner component is also available as a CSS-only component without the need for JavaScript.

```scss
@use '@tylertech/forge/dist/banner/forge-banner.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-banner | The banner class (required). |
