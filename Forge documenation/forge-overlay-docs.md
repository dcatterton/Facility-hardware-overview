# Overlay

Overlays are used to render content above all other content on the page and positioned around a specified anchor element.

An overlay is a low-level building block component that does not provide any visual styles. Its only purpose is to render slotted content above all other content on the page. The element is positioned around an anchor element with various positioning options.

The following components are examples of components that use a `<forge-overlay>` internally:

- Tooltip
- Popover
- Toast

These components expose similar APIs that are passed down to the `<forge-overlay>` component.

## Toggle Overlay

```html
<div id="clipping-container" class="clipping-container">
  <div class="scroll-container">
    <forge-button id="overlay-trigger" variant="raised">
      Toggle Overlay
    </forge-button>
    <forge-overlay anchor="overlay-trigger" position-strategy shift="never">
      <div class="overlay-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
        auctor, ultricies nunc nec, ultricies nunc. Nullam in dui auctor,
        ultricies nunc nec, ultricies nunc.
      </div>
    </forge-overlay>
  </div>
</div>

<style>
  .clipping-container {
    height: 500px;
    border: 1px solid var(--forge-theme-outline);
    overflow: auto
  }
  .clipping-container.force-containment {
    transform: translateZ(0);
    border: 2px dashed var(--forge-theme-error)
  }
  .clipping-container.use-small-container {
    height: 150px
  }
  .overlay-content {
    width: 300px;
    padding: 8px;
    border: 1px dashed var(--forge-theme-primary);
    background-color: var(--forge-theme-surface)
  }
  .scroll-container {
    height: 250%;
    width: 250%;
    display: flex;
    align-items: center;
    justify-content: center
  }
</style>
```

## Context Menu

You can use an overlay to create a context menu that appears when the user right-clicks on the page.

```html
<p>Right-click anywhere to open the context menu.</p>
<forge-overlay id="context-overlay">
  <div class="context-menu">Context menu</div>
</forge-overlay>

<style>
  .context-menu {
    background-color: var(--forge-theme-surface-container);
    border: var(--forge-border-thin) solid var(--forge-theme-outline);
    border-radius: var(--forge-shape-medium);
    padding: var(--forge-spacing-medium);
  }
</style>
```

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| anchor | string \| null | - | The id of the element to anchor the overlay to. | |
| anchorElement | HTMLElement \| VirtualElement \| null | - | The element to anchor the overlay to. | |
| arrowElement | HTMLElement | - | The element to use as the arrow for the overlay. | |
| arrowElementOffset | number | - | The offset to apply to the arrow element. | |
| boundary | string \| null | - | The id of the element to use as the boundary for the overlay. | |
| boundaryElement | HTMLElement \| null | - | The element to use as the boundary for the overlay. | ✅ |
| fallbackPlacements | PositionPlacement [] \| null | - | The fallback placements to use when the overlay cannot be placed in the desired placement. | ✅ |
| flip | OverlayFlipState | "auto" | Whether or not the overlay should flip to the opposite placement when not enough room. | ✅ |
| hide | OverlayHideState | "anchor-hidden" | Whether or not the overlay should hide itself when the anchor element is out of view. | ✅ |
| inline | boolean | false | Whether or not the overlay should be rendered inline (not in the :top-layer). | |
| noAnchor | boolean | - | Whether or not the overlay should be rendered without an anchor (centered on page by default). | |
| offset | IOverlayOffset | - | The offset to apply to the overlay position relative to the anchor element. | |
| open | boolean | false | Whether or not the overlay is open. | |
| persistent | boolean | - | Whether or not the overlay handles light dismiss itself or not. | ✅ |
| placement | OverlayPlacement | "bottom" | The placement of the overlay relative to the anchor element. | ✅ |
| positionStrategy | OverlayPositionStrategy | "fixed" | The positioning strategy to use for the overlay. Valid values are 'fixed' and 'absolute'. | ✅ |
| shift | OverlayShiftState | "auto" | Whether or not the anchor element should shift along the side of the overlay when scrolling. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| anchor | string | - | The id of the element to anchor the overlay to. |
| boundary | string | - | The id of the element to use as the boundary for the overlay. |
| fallback-placements | string | - | The fallback placements to use when the overlay cannot be placed in the desired placement. Should be a comma separated list of placements. |
| flip | OverlayFlipState | "auto" | Tells the overlay not to flip to the opposite placement when not enough room. |
| hide | string | "anchor-hidden" | Whether or not the overlay should hide itself when the anchor element is out of view. |
| inline | string | false | Whether or not the overlay should be rendered inline (not in the :top-layer). |
| no-anchor | string | - | Whether or not the overlay should be rendered without an anchor (centered on page by default). |
| open | string | false | Whether or not the overlay is open. |
| persistent | string | - | Whether or not the overlay handles light dismiss itself or not. |
| placement | string | "bottom" | The placement of the overlay relative to the anchor element. |
| position-placement | string | - | The placement of the overlay around the anchor element after dynamic positioning. This is a read-only attribute that is only available when open. |
| position-strategy | string | "fixed" | The positioning strategy to use for the overlay. Valid values are 'fixed' and 'absolute'. |
| shift | OverlayShiftState | "auto" | Whether or not the anchor element should shift along the side of the overlay when scrolling. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-overlay-light-dismiss | Dispatches when the overlay is light dismissed via the escape key or clicking outside the overlay. | CustomEvent<OverlayToggleEventData> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The content to render inside the positioned overlay container. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| position() | - | - | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-overlay-height | The height of the overlay. Defaults to min-content. |
| --forge-overlay-position | The position of the overlay. |
| --forge-overlay-position-block-end | The block-end position of the overlay. |
| --forge-overlay-position-block-start | The block-start position of the overlay. |
| --forge-overlay-position-inline-end | The inline-end position of the overlay. |
| --forge-overlay-position-inline-start | The inline-start position of the overlay. |
| --forge-overlay-width | The width of the overlay. Defaults to min-content. |
| --forge-overlay-z-index | The z-index of the overlay. Defaults to the popup range. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The component's root element. |

## Accessibility

Overlays do not provide any semantics by default. It is up to the developer to provide the necessary semantics for the content.
