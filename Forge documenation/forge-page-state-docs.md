# Page State

The page-state component is a layout component that ensures consistent spacing, alignment, and structure for pages or containers that need to display a state such as empty, error, 404... etc.

These states will typically be the only content on the page or container, and they provide a clear description, with optional actions to take when the user reaches the state.

This component uses @container queries to adapt to the width of its parent container.

```html
<forge-page-state>
  <img
    src="https://cdn.forge.tylertech.com/v1/images/spot-hero/404-error-spot-hero.svg"
    alt
    slot="graphic"
  />
  <div slot="title">Nothing but tumbleweeds here...</div>
  <p slot="message">
    Even our best explorer couldn't find the page you're looking for. It might
    have been removed or you may have mistyped the URL.
  </p>
  <forge-button variant="raised" slot="action">Go back</forge-button>
  <forge-button variant="outlined" slot="action">Refresh</forge-button>
</forge-page-state>
```

## API

### Slots

| Name | Description |
|------|-------------|
| actions | The slot where the actions will be rendered. |
| graphic | The slot where the graphic will be rendered. |
| message | The slot where the message will be rendered. |
| title | The slot where the title will be rendered. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-page-state-actions-spacing | The actions spacing of the page state. |
| --forge-page-state-graphic-height | The graphic height of the page state. |
| --forge-page-state-graphic-spacing | The graphic spacing of the page state. |
| --forge-page-state-height | The height of the page state. |
| --forge-page-state-message-color | The message color of the page state. |
| --forge-page-state-message-spacing | The message spacing of the page state. |
| --forge-page-state-mobile-graphic-height | The mobile graphic height of the page state. |
| --forge-page-state-mobile-width | The mobile width of the page state. |
| --forge-page-state-spacing | The spacing of the page state. |
| --forge-page-state-title-color | The title color of the page state. |
| --forge-page-state-title-spacing | The title spacing of the page state. |
| --forge-page-state-width | The width of the page state. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| actions-container | The actions container element. |
| graphic-container | The graphic container element. |
| message-container | The message container element. |
| root | The root container element. |
| title-container | The title container element. |

## Accessibility

- If the graphic is important to the communication of the page state, ensure it has an alt attribute which describes the graphic, otherwise include an alt attribute with an empty value (`alt=""`)
- If any action buttons are included, verify that they have a role attribute set.

## CSS-Only

The page-state component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only page state component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/page-state/forge-page-state.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-page-state | The page state layout container. |
| forge-page-state__graphic | The graphic to display. |
| forge-page-state__title | The title to display. |
| forge-page-state__message | The message to display. |
| forge-page-state__actions | The container element for optional actions. |
