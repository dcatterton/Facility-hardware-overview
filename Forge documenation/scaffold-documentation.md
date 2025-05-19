# Scaffold

The scaffold component is intended to be used as a layout tool. You can use it for your full application layout, or even nest scaffolds within other scaffolds. Think of this component as a structural tool (it uses CSS grid under the hood) with named locations that allow you render any element you want in those named locations.

> **Note**: The scaffold handles common page layouts, but it's simply a wrapper around native CSS grid styles to aid in common application layouts. We recommend that you become familiar with flexbox and grid for scenarios where you cannot use the scaffold. Suggested learning resources:
> - CSS Tricks: A complete guide to CSS Grid
> - Layout Land: CSS grid basics  
> - CSS Tricks: Flexbox basics
> - MDN: Basics of Flexbox

Using a scaffold will help you place elements in pre-defined locations within a layout. This makes it very easy to spin up common layouts without having to write any CSS at all. For instance, by placing content within the built-in slots the component will handle overflowing content for you.

> **Note**: It is recommended that you use a single container element for each slot within the scaffold. This is because the scaffold applies specific CSS grid styles to the slotted elements, and this can cause unwanted side-effects to your elements if you place things like multiple buttons directly into the root of the slots themselves.

If you encounter rendering issues where content is stacked on the z-index, ensure that each named slot is used only once.

```
header
body-header
left body-left body body-right right
body-footer
footer
```

```html
<forge-scaffold class="scaffold-example">
  <div slot="left">left</div>
  <div slot="header">header</div>
  <div slot="body-header">body-header</div>
  <div slot="body-left">body-left</div>
  <div slot="body">body</div>
  <div slot="body-right">body-right</div>
  <div slot="body-footer">body-footer</div>
  <div slot="footer">footer</div>
  <div slot="right">right</div>
</forge-scaffold>
<style>
  .scaffold-example {
    --forge-scaffold-height: 500px;
    --forge-scaffold-width: 100%
  }
  .scaffold-example div[slot],.forge-scaffold>div[class^=forge-scaffold__] {
    border: 2px dashed var(--forge-theme-outline-low);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--forge-spacing-xsmall);
    margin: var(--forge-spacing-xsmall);
    box-sizing: border-box
  }
</style>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewport | boolean | false | Whether the scaffold should be full viewport height. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| viewport | boolean | false | Whether the scaffold should be full viewport height. |

Learn more about [Attributes](#).

### Slots

| Name | Description |
|------|-------------|
| body | Places content in the body. |
| body-footer | Places content in the footer of the body. |
| body-header | Places content in the header of the body. |
| body-left | Places content to the left of the body content. |
| body-right | Places content to the right of the body content. |
| footer | Places content in the footer. |
| header | Places content in the header. |
| left | Places content to the left of all content. |
| right | Places content to the right of all content. |

Learn more about [Slots](#).

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-scaffold-body-position | The position of the scaffold body. |
| --forge-scaffold-height | The height of the scaffold. |
| --forge-scaffold-overflow | The overflow of the scaffold. |
| --forge-scaffold-width | The width of the scaffold. |

Learn more about [CSS Custom Properties](#).

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| body | The body of the scaffold. |
| header | The header of the scaffold. |
| root | The root container element. |

Learn more about [CSS Shadow Parts](#).

## Accessibility

- Ensure that all of the content in each of the slots is accessible by tabbing with the keyboard.
- Use the proper semantic elements for content (if applicable) such as `<header>`, `<main>`, `<aside>`... etc.
- The scaffold component itself has no semantic meaning.
- The scaffold component does not make any assumptions about the content you provide so it's up to you to provide the proper landmark elements.

## CSS-Only

The scaffold component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only scaffold component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/scaffold/forge-scaffold.css';
```

Learn more about [CSS-Only Components](#).

### CSS Classes

| Name | Description |
|------|-------------|
| forge-scaffold | The scaffold container (required). |
| forge-scaffold--viewport | Sizes the scaffold to match the viewport dimensions. |
| forge-scaffold__left | The content to display in the "left" area. |
| forge-scaffold__header | The content to display in the "header" area. |
| forge-scaffold__body | The content to display in the "body" area. |
| forge-scaffold__footer | The content to display in the "footer" area. |
