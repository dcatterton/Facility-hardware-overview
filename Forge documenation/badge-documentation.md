# Badge

Badges are used to highlight an item's status for quick recognition. They are non-interactive and are typically used to convey information such as a count, status, or category.

If you need an interactive badge-like element, consider using Chips.

```html
<forge-badge>Status</forge-badge>
```

## Themed

default Primary Secondary Tertiary Success Error Warning Info Info (secondary)

```html
<div style="display: flex; gap: 8px;">
  <forge-badge theme="default">default</forge-badge>
  <forge-badge theme="primary">Primary</forge-badge>
  <forge-badge theme="secondary">Secondary</forge-badge>
  <forge-badge theme="tertiary">Tertiary</forge-badge>
  <forge-badge theme="success">Success</forge-badge>
  <forge-badge theme="error">Error</forge-badge>
  <forge-badge theme="warning">Warning</forge-badge>
  <forge-badge theme="info">Info</forge-badge>
  <forge-badge theme="info-secondary">Info (secondary)</forge-badge>
</div>
```

## Strong

Badges can be styled with a strong variant to emphasize their importance.

default Primary Secondary Tertiary Success Error Warning Info Info (secondary)

```html
<div style="display: flex; gap: 8px;">
  <forge-badge strong theme="default">default</forge-badge>
  <forge-badge strong theme="primary">Primary</forge-badge>
  <forge-badge strong theme="secondary">Secondary</forge-badge>
  <forge-badge strong theme="tertiary">Tertiary</forge-badge>
  <forge-badge strong theme="success">Success</forge-badge>
  <forge-badge strong theme="error">Error</forge-badge>
  <forge-badge strong theme="warning">Warning</forge-badge>
  <forge-badge strong theme="info">Info</forge-badge>
  <forge-badge strong theme="info-secondary">Info (secondary)</forge-badge>
</div>
```

## With Icon Button

Badges are commonly composed together with the icon button component via the badge slot.

```html
<forge-icon-button>
  <forge-icon name="notifications"></forge-icon>
  <forge-badge slot="badge">1</forge-badge>
</forge-icon-button>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dot | boolean | false | Controls whether the badge will be a small dot without any content visible. |
| hide | boolean | false | Controls whether the badge is visible. |
| strong | boolean | false | Controls whether the badge will have a stronger visual appearance. |
| theme | BadgeTheme | 'default' | The theme of the badge. |

### Slots

| Name | Description |
|------|-------------|
| (default) | Default content placed inside the badge. |
| end | Content placed after the default content. |
| start | Content placed before the default content. |

### States

| Name | Description |
|------|-------------|
| dot | The badge is rendered as a dot. |
| strong | The badge has a stronger visual appearance. |
| hide | The badge is hidden. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-badge-background | The background color. |
| --forge-badge-border-color | The border color. |
| --forge-badge-border-style | The border style. |
| --forge-badge-border-width | The border width. |
| --forge-badge-color | The text color. |
| --forge-badge-gap | The spacing between the content within the badge. |
| --forge-badge-padding-block | The block padding. |
| --forge-badge-padding-inline | The inline padding. |
| --forge-badge-shape | The shape radius. |

## Accessibility

- Verify that there is sufficient contrast between the foreground text and background to meet WCAG 2.2 requirements.
- If color conveys important information, provide additional cues for users with color perception deficiencies such as an icon.

## CSS-Only

The badge component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only badge component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/badge/forge-badge.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-badge | The badge class (required). |
| forge-badge--dot | Renders the badge as a dot. |
| forge-badge__icon | Styles a child element as an icon. |
