# Card

Cards are used to group related content and actions together in a single container.

## Basic

```html
<forge-card>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quas sed
  aliquid cumque sunt iste ad, alias quod adipisci? Nulla, libero necessitatibus
  enim sint nesciunt provident excepturi dolorum pariatur illum?
</forge-card>

<style>
  .demo-card {
    max-width: 400px
  }
  .demo-card .forge-card-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  .demo-card .forge-card-header-container h3 {
    margin: 0
  }
  .demo-card .forge-card-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--forge-spacing-medium)
  }
  .scaffold-card {
    width: 400px;
    --forge-card-padding: 0;
    --forge-card-height: 300px
  }
  .card-content {
    padding: 16px;
    margin: 0
  }
</style>
```

By default the card component will apply a padding of 16px to the entire internal container element.
Use the `--forge-card-padding` CSS custom property to set a custom padding value.

```html
<div class="demo-card">
  <forge-card>
    <div class="forge-card-header-container">
      <h3 class="forge-typography--heading4">This is the card title</h3>
      <forge-icon-button aria-label="View more actions">
        <forge-icon name="more_vert"></forge-icon>
      </forge-icon-button>
    </div>
    <div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        exercitationem doloremque dolorem ullam, nesciunt quia velit
        necessitatibus numquam quasi voluptates impedit earum dolores
        repudiandae facilis totam non quo labore itaque?
      </p>
    </div>
    <div class="forge-card-footer">
      <forge-button variant="outlined">Cancel</forge-button>
      <forge-button variant="raised">OK</forge-button>
    </div>
  </forge-card>
</div>

<style>
  .demo-card {
    max-width: 400px
  }
  .demo-card .forge-card-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  .demo-card .forge-card-header-container h3 {
    margin: 0
  }
  .demo-card .forge-card-footer {
    display: flex;
    justify-content: flex-end;
    gap: var(--forge-spacing-medium)
  }
  .scaffold-card {
    width: 400px;
    --forge-card-padding: 0;
    --forge-card-height: 300px
  }
  .card-content {
    padding: 16px;
    margin: 0
  }
</style>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| raised | boolean | false | Whether the card has elevation or not. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| no-padding | boolean | false | Removes the default padding from the card. |

### States

| Name | Description |
|------|-------------|
| raised | The state of the card when raised. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-card-background | The background color of the card. |
| --forge-card-elevation | The elevation/shadow of the card. |
| --forge-card-height | The height of the card. |
| --forge-card-outline-color | The outline color of the card. |
| --forge-card-outline-style | The outline style of the card. |
| --forge-card-outline-width | The outline width of the card. |
| --forge-card-overflow | The overflow of the card. |
| --forge-card-padding | The padding of the card. |
| --forge-card-raised-elevation | The elevation/shadow of the card when raised. |
| --forge-card-raised-outline-width | The outline width of the card when raised. |
| --forge-card-shape | The shape (border-radius) of the card. |
| --forge-card-width | The width of the card. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root container element. |

## Accessibility

- The card component should not interfere with tab flow.
- Add a role attribute if this card has any applicable role that should be known to screen readers.
- Consider using the "group" role on the `<forge-card>` element if the content is related and separate from other surrounding items.

## CSS-Only

The card component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only card component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/card/forge-card.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-card | The card container element (required). |
| forge-card--raised | The card container element when raised (required). |
