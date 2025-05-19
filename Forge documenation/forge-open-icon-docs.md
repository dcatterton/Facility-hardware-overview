# Open Icon

This is a very simple component, and its only responsibility is to provide automatic rotation of the built-in chevron icon.

It works very well with other components (such as the expansion-panel) that need to display a rotating icon to denote the "open" or "closed" state of the component. The open-icon will listen for specific events to be dispatched and update its state automatically.

## Vertical

```html
<forge-open-icon></forge-open-icon>
```

## Horizontal

```html
<forge-open-icon orientation="horizontal"></forge-open-icon>
```

## With expansion-panel

```html
<forge-expansion-panel>
  <div
    role="button"
    tabindex="0"
    slot="header"
    style="display: flex; justify-content: space-between; align-items: center;"
  >
    <div>Expansion panel</div>
    <forge-open-icon></forge-open-icon>
  </div>
  <div>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum error
    officia iure corporis veritatis ut quod quo libero ea repellendus,
    consequuntur porro explicabo exercitationem minus pariatur debitis nihil at
    labore!
  </div>
</forge-expansion-panel>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | false | Whether the icon is open or closed. |
| orientation | OpenIconOrientation | "vertical" | The orientation of the rotation. |
| rotation | OpenIconRotation | "full" | The rotation amount. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| open | boolean | false | Whether the icon is open or closed. |
| orientation | OpenIconOrientation | "vertical" | The orientation of the rotation. |
| rotation | OpenIconRotation | "full" | The rotation amount. |

### Slots

| Name | Description |
|------|-------------|
| (default) | The icon to display when open. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-open-icon-animation-duration | The duration of the open animation. |
| --forge-open-icon-animation-timing | The timing function of the open animation. |
| --forge-open-icon-color | The color of the icon. |
| --forge-open-icon-half-animation-duration | The duration of the open animation when in a half orientation. |
| --forge-open-icon-height | The height of the icon. Defaults to size. |
| --forge-open-icon-initial-rotation | The initial rotation of the icon. |
| --forge-open-icon-open-rotation | The rotation of the icon when open. |
| --forge-open-icon-size | The size of the icon. |
| --forge-open-icon-width | The width of the icon. Defaults to size. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| icon | The icon element. |
| root | The root element of the icon. |

## Accessibility

- Ensure that the user can focus on the trigger element which activates and deactivates the open icon.
- Ensure that the trigger element can be activated by keyboard.
- Ensure that the aria-expanded attribute is updated to reflect the state of the open icon, especially when toggling its state programmatically.
