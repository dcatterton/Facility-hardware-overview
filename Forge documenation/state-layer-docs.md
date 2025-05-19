# State Layer

State layers are used to indicate interaction states for an element, such as hover and pressed. These states provide visual feedback to the user when they interact with an element, and are especially useful for interactive elements like buttons. They are typically used in conjunction with focus indicators to provide a complete set of visual feedback for interactive elements. These are building block components that are typically used internally within other components such as buttons.

Additionally, state layers provide a "ripple" effect that animates from the point of interaction to the bounds of the element. This effect is used to indicate that the user's interaction has been received and is being processed.

When using a state layer, it's important to note that they are absolutely positioned and should be used with a parent element that has `position: relative` set to ensure that the bounds of interaction state are contained within the parent element.

```html
<div style="position: relative; display: inline-flex;">
  <button id="target-btn" style="height: 100px; width: 100px;">Click me</button>
  <forge-state-layer target="target-btn"></forge-state-layer>
</div>
```

## With Cards

A common design pattern is an interactive card with a state layer and focus indicator that describes to the user that the card is interactive.

```html
<forge-card
  role="button"
  tabindex="0"
  aria-label="Click me"
  style="width: 300px; outline: none; position: relative;"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
    mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
  </p>
  <forge-focus-indicator></forge-focus-indicator>
  <forge-state-layer></forge-state-layer>
</forge-card>
```

Remember to always provide a focus indicator for interactive elements to ensure that users can navigate your site using a keyboard.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Controls whether the state layer is disabled. |
| target | string | - | The id of the element to attach the state layer to. |
| targetElement | HTMLElement | - | The element to attach the state layer to. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Controls whether the state layer is disabled. |
| target | string | - | The id of the element to attach the state layer to. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| playAnimation() | Triggers the animation to run. Note: If coordinates are not provided, the transition will originate from the center of the target element. | coords: StateLayerCoords | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-state-layer-animation-duration | The duration of the animation. |
| --forge-state-layer-color | The color of the state layer. Defaults to the on-surface theme. |
| --forge-state-layer-hover-color | The color of the state layer when hovered. |
| --forge-state-layer-hover-duration | The duration of the hover animation. |
| --forge-state-layer-hover-opacity | The opacity of the state layer when hovered. |
| --forge-state-layer-pressed-color | The color of the state layer when pressed. |
| --forge-state-layer-pressed-duration | The duration of the pressed animation. |
| --forge-state-layer-pressed-opacity | The opacity of the state layer when pressed. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| surface | The surface element. |

## CSS-Only

The state-layer component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only state layer component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/state-layer/forge-state-layer.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-state-layer | The element to render the state layer on. |
| forge-state-layer__target | The target element container to render the state layer within. |
