# App Bar

App bars are a common component used in web applications to provide a consistent location for branding, navigation, and other common elements.

The `<forge-app-bar>` is nothing more than a container for other add-on components, but it provides named slots and a common location for branding logo, title, and other actions.

## Default

A basic app bar just contains a title with no other elements.

```html
<forge-app-bar title-text="Tyler Forge" theme-mode="scoped">
  <forge-icon slot="logo" name="forge_logo"></forge-icon>
</forge-app-bar>
```

## Full

The following example shows the usage of all of the common app bar elements placed in their corresponding slots.

```html
<forge-app-bar title-text="Tyler Forge™" theme-mode="scoped">
  <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
  <forge-icon slot="logo" name="forge_logo"></forge-icon>
  <forge-app-bar-search slot="center">
    <input type="text" placeholder="Search" />
  </forge-app-bar-search>
  <forge-app-bar-help-button slot="end"></forge-app-bar-help-button>
  <forge-app-bar-notification-button
    slot="end"
  ></forge-app-bar-notification-button>
  <forge-app-bar-app-launcher-button
    slot="end"
    allow-more="true"
  ></forge-app-bar-app-launcher-button>
  <forge-app-bar-profile-button
    slot="end"
    avatar-text="First Last"
    full-name="First Last"
    email="first.last@tylertech.com"
  ></forge-app-bar-profile-button>
</forge-app-bar>
```

## Theming

The app bar will automatically use the "brand" theme by default, and inherit global theme tokens to ensure child elements are styled accordingly. This handles the most common use cases, but you can also customize the app bar to use a different theme or adjust how its theme tokens are applied.

The important aspect of theming the app bar is to correctly style the sub-components that are placed within it. By default the app bar will set the color style that it expects, which will be inherited automatically by most child elements. This comes with the caveat that some child elements may inherit color styles incorrectly. This issue is most commonly seen with popovers and dialogs that placed as children within the app bar, and the global theme tokens may cascade to those elements causing problems with the colors.

### Theme Mode

The app bar has two theme modes:

- **"inherit" (default)**: The app bar will inherit the global theme tokens and apply them to the app bar and its child elements.
- **"scoped"**: The app bar will set its own theme tokens and scope them to the app bar only. No global theme tokens will be applied to the app bar or its child elements.

To handle the problem where the global theme is cascading to child elements that you don't want to inherit the theme, you can set the `theme-mode` attribute on the app bar to "scoped". This will ensure that the app bar's theme tokens are scoped to only the app bar, and switches the app bar to instead set scoped theme tokens for the child elements to optionally inherit.

This fixes the problem of cascading global theme tokens to child elements, but you may potentially see another issue when doing this where certain elements placed directly in the app bar may no longer be inheriting the correct theme colors because this inheritance has been disabled. To fix this problem, Forge provides a `theme="app-bar"` attribute that can be set on the following child elements to allow for them to inherit the "scoped" theme tokens from the app bar:

- `<forge-button>`
- `<forge-icon-button>`
- `<forge-tab-bar>`

Example usage with `theme-mode="scoped"`:

```html
<forge-app-bar theme-mode="scoped">
  <!-- Themed icon button -->
  <forge-icon-button slot="end" theme="app-bar">
    <forge-icon name="settings"></forge-icon>
  </forge-icon-button>
  <!-- Themed button -->
  <forge-button slot="end" theme="app-bar">Profile</forge-button>
  <!-- Theme tab bar -->
  <forge-tab-bar slot="bottom" theme="app-bar">
    <forge-tab selected>Tab 1</forge-tab>
    <forge-tab>Tab 2</forge-tab>
    <forge-tab>Tab 3</forge-tab>
  </forge-tab-bar>
</forge-app-bar>
```

Using the `theme="app-bar"` attribute will automatically set the correct colors for usage within a scoped app bar. Keep in mind that the following convenience components automatically set this attribute for you, so you do not need to set it manually:

- `<forge-app-bar-menu-button>`
- `<forge-app-bar-help-button>`
- `<forge-app-bar-profile-button>`
- `<forge-app-bar-notification-button>`

Note: The `theme="app-bar"` attribute is only supported on a small subset of Forge components as noted above.

If you are using a component that does not support this attribute, but would like it to inherit the scoped theme tokens, you will need to manually reference the app bar's scoped theme tokens:

Available scoped tokens:
- `--forge-app-bar-theme-foreground`: The foreground color of the app bar theme.
- `--forge-app-bar-theme-background-muted`: A muted foreground color using the medium color emphasis.

```css
forge-app-bar forge-avatar {
  --forge-avatar-background: var(--forge-app-bar-theme-foreground);
  --forge-avatar-color: var(--forge-theme-text-high);
}
```

This will ensure that this component uses the correct colors for the app bar theme.

### White Theme

The app bar provides a built-in "white" theme that can be applied by setting the `theme="white"` attribute. This will change the background color to white and the contrast/text color to black.

```html
<forge-app-bar title-text="Tyler Forge" theme="white" theme-mode="scoped">
  <forge-icon slot="logo" name="forge_logo"></forge-icon>
</forge-app-bar>
```

Note: The sub-components will properly inherit the correct theme colors if using the `theme="app-bar"` attribute, and this can be used in conjunction with the `theme-mode="scoped"` attribute.

### Custom Theme

The app bar can also be themed using a custom theme by using the design tokens as CSS variables. This allows you to set the background color, text color, and other styles using to match your desired brand.

In addition to the above, if you want to disable inheritance of global theme tokens you can set `theme-mode="scoped"`.

```html
<forge-app-bar
  class="custom-app-bar"
  title-text="Tyler Forge™"
  theme-mode="scoped"
>
  <forge-icon slot="logo" name="forge_logo"></forge-icon>
  <forge-button slot="end" theme="app-bar">Sign In</forge-button>
</forge-app-bar>
<style>
  .custom-app-bar {
    --forge-app-bar-background: salmon;
    --forge-app-bar-foreground: black;
  }
  .custom-app-bar forge-button {
    margin-inline-end: var(--forge-spacing-xsmall);
  }
</style>
```

Note: To ensure that sub-components properly inherit your custom theme, you may either need to manually override their own component-specific design tokens, or you can update the app bar theme design tokens as well to ensure they are inherited by all sub-components that use the `theme="app-bar"` attribute.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elevation | AppBarElevation | "raised" | The elevation of the app bar. |
| href | string | - | The href that will be used to make the logo and title area a clickable link. |
| target | string | - | The `<a>` target of the logo + title area link when href is set. |
| theme | AppBarTheme | - | The theme of the app bar. |
| themeMode | AppBarThemeMode | "inherit" | Controls how the theme is applied. `inherit` will apply the global theme to the app bar and all child components. `scoped` will only apply the theme to the app bar and not set any global tokens. |
| titleText | string | - | The text to display in the title. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| elevation | string | "raised" | The elevation of the app bar. |
| href | string | - | The href that will be used to make the logo and title area a clickable link |
| target | string | - | The `<a>` target of the logo + title area link when href is set. |
| theme | string | - | The theme of the app bar. |
| theme-mode | string | "inherit" | Controls how the theme is applied. `inherit` will apply the global theme to the app bar and all child components. `scoped` will only apply the theme to the app bar and not set any global tokens. |
| title-text | string | - | The text to display in the title. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-app-bar-navigate | Fires when the app bar is clicked. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| center | Places content in the center of the app bar. |
| end | Places content at the end of the app bar. |
| logo | Reserved for the brand logo. |
| start | Places content at the beginning of the app bar. |
| title | Reserved for the application title. This will overwrite the titleText property/attribute. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-app-bar-background | The background color of the app bar. |
| --forge-app-bar-columns | The grid column track sizes. |
| --forge-app-bar-elevation | The elevation of the app bar. |
| --forge-app-bar-foreground | The text color of the app bar. |
| --forge-app-bar-height | The height of the app bar. |
| --forge-app-bar-logo-gap | The space between the logo and title. |
| --forge-app-bar-row-padding | The inline padding of the app bar. |
| --forge-app-bar-theme-foreground | The text color of the app bar when using the scoped theme mode. |
| --forge-app-bar-theme-foreground-muted | The muted text color of the app bar when using the scoped theme mode. |
| --forge-app-bar-title-padding | The padding around the title element. |
| --forge-app-bar-transition-duration | The transition duration for animations. |
| --forge-app-bar-transition-timing | The transition timing function for animations. |
| --forge-app-bar-z-index | The z-index of the app bar. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root container element. |
| title | The title element. |

## Accessibility

- Ensure that the user can interact with each sub-component of the app bar using only the keyboard.
- The app bar component will use an `<h1>` for the title by default. If you override the title slot content, be sure to use the proper heading element.
- Only one `<h1>` should be on a page at any given time (unless a new heading hierarchy is created as a sibling).
- A `<header>` element is built-in to the app bar component.

## CSS-Only

The app-bar component is also available as a CSS-only component without the need for JavaScript.

You may need to customize the layout and styles to fit your specific needs. While there are built-in "section" classes for you to use, these are very specific to the default app bar layout and may not work for all use cases. In these scenarios, you can always create your own layout within the app bar element, and use your own HTML/CSS to style the content within while still using the standard app bar design for the overall container.

```html
<header class="forge-app-bar">
  <div class="my-custom-layout">
    <!-- Custom layout content -->
  </div>
</header>
```

To use the CSS-only app bar component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/app-bar/forge-app-bar.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-app-bar | The app bar container element (required). |
| forge-app-bar--scoped | Sets the theme mode to scoped. |
| forge-app-bar-theme | Applies the scoped theme from the app bar to the element. |
| forge-app-bar--raised | The app bar container element when raised. |
| forge-app-bar__logo | The logo container element. |
| forge-app-bar__title | The title container element. |
| forge-app-bar__logo-title-container | The container for the logo and title. |
| forge-app-bar__section | A section of the app bar. |
| forge-app-bar__section-start | The start section of the app bar. |
| forge-app-bar__section-center | The center section of the app bar. |
| forge-app-bar__section-end | The end section of the app bar. |
