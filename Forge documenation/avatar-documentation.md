# Avatar

Avatars allow you to provide text or images to display that represent an entity. By default, the avatar will display text content as single characters (character count is configurable), or display an icon or image based on the URL provided to it.

```html
<forge-avatar text="Tyler Forge"></forge-avatar>
```

## With Icon

You can compose avatars together with icons using the `<forge-icon>` component. The avatar will automatically apply the proper dimensions to the icon.

```html
<forge-avatar>
  <forge-icon name="person"></forge-icon>
</forge-avatar>
```

## With Image

When using with an image, the avatar will apply your image as the background of the avatar (replacing the background color). The image will be sized to fit the avatar dimensions.

```html
<forge-avatar image-url="./ruby.jpg"></forge-avatar>
```

## With Icon Button

Avatars can be composed within other components, such as icon buttons.

```html
<forge-icon-button aria-label="Icon button with avatar">
  <forge-avatar></forge-avatar>
</forge-icon-button>
```

**Important**: Be sure to provide an accessible label for the icon button.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| imageUrl | string | '' | The background image URL to use. |
| letterCount | number | 2 | Controls the number of letters to display from the text. By default the text is split on spaces and the first character of each word is used. |
| text | string | '' | The text to display in the avatar. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| image-url | string | '' | The background image URL to use. |
| letter-count | number | 2 | Controls the number of letters to display from the text. By default the text is split on spaces and the first character of each word is used. |
| text | string | '' | The text to display in the avatar. |

### Slots

| Name | Description |
|------|-------------|
| (default) | The default slot for avatar content if not provided via text/imageUrl. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-avatar-background | The background color of the avatar. |
| --forge-avatar-color | The text color of the avatar. |
| --forge-avatar-shape | The border radius of the avatar, defaults to 50%. |
| --forge-avatar-size | The height and width of the avatar. |
| --forge-avatar-transition-duration | The transition duration for animations. |
| --forge-avatar-transition-timing | The transition timing function for animations. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root container element. |

## Accessibility

- Note that the avatar component may not be visible to screen readers.
- Use `aria-hidden` to ensure that the avatar content is ignored by a screen reader.
- Avoid using the avatar component for any essential navigation.
- If color conveys important information, provide additional cues for users with color perception deficiencies.
- Verify that there is sufficient contrast between the foreground text and background to meet WCAG 2.2 requirements.

## CSS-Only

The avatar component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only avatar component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/avatar/forge-avatar.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-avatar | The avatar class (required). |