# Tooltip

Tooltips display informative text when users hover over an element.

## Type

You can set the `type` property/attribute to one of the following values to control its association to the anchor element:

- **presentation** (default): A tooltip that is purely presentational and has no accessible meaning to its anchor.
- **label**: The tooltip will be interpreted as the accessible label for the anchor element via `aria-labelledby`.
- **description**: The tooltip will be interpreted as the accessible description for the anchor element via `aria-describedby`.

## Usage within slots

When the `<forge-tooltip>` element is placed in the DOM as a sibling of its anchor element, if the anchor element is using a slot attribute (or is within a slotted DOM tree not containing the tooltip) the tooltip should also use the same slot attribute.

If not, the tooltip may not render properly (or at all). A common example of this is when using a tooltip with icon buttons in the app bar:

```html
<forge-app-bar>
  <!-- Icon button placed within the end slot -->
  <forge-icon-button slot="end" id="my-button">
    <forge-icon name="forge_logo"></forge-icon>
  </forge-icon-button>
  <!-- The tooltip needs the same `slot` attribute as the icon button or it won't render -->
  <forge-tooltip slot="end" type="label" anchor="my-button">This is a tooltip</forge-tooltip>
</forge-app-bar>
```

## Style inheritance

It's important to understand that even though the tooltip you see on screen is rendered above all content within the top layer of the DOM, the tooltip element itself is still an inline element in the DOM. This means that the tooltip can inherit styles from its ancestor elements. Most of the time this is fine, because the tooltip handles setting its own styles, but in some cases you may find that CSS variables can cascade down to the tooltip and affect its appearance inadvertently.

If you run into this scenario, move the tooltip outside of the parent element that is setting the CSS variable. The `anchor` attribute or `anchorElement` property can be used to attach the tooltip to the desired element in the DOM.

## Anchor Heuristic

The tooltip uses the following heuristic to locate the anchor element that it should attach to when added to the DOM:

1. If the `anchor` property is set, it will find and attach to the element with the corresponding `id`.
2. If the `anchorElement` property is set, it will take precedence and use that element instance directly.
3. If neither `anchor` nor `anchorElement` are set, it will attempt to locate a previous element sibling in the DOM.
4. If no previous sibling element is found, it will fall back to its parent element.

This is important to understand when using the tooltip in a dynamic context, such as a list of items, where tooltips may be rendered multiple times or when a tooltip is rendered asynchronously. This can lead to unexpected results. In these cases, it's recommended to use the `anchor` or `anchorElement` properties to explicitly set the element that the tooltip should be anchored to for more predictable behavior.

## Anchor

Tooltips are intended to be "anchored" to another element. This is typically done by setting the `anchor` property/attribute to the id of the element that the tooltip should be anchored to.

```html
<forge-button id="my-button">Hover over me</forge-button>
<forge-tooltip anchor="my-button">This is a tooltip</forge-tooltip>
```

## Anchor Element

You can also explicitly set the `anchorElement` property to an element instance directly. This is useful when you need more control over the timing of when the tooltip and its anchor element are rendered in the DOM.

This is very common in frameworks like Angular, where the tooltip and its anchor element may be rendered asynchronously via incremental rendering, or if you have a conditional expression on your anchor element and you want to ensure that the tooltip is rendered and attached at the same time.

## Angular Example

In Angular, it's common to use `<ng-container>` to conditionally render a "group" of elements. In this case, you can use the `anchorElement` property to ensure that the tooltip is rendered at the same time as the anchor element, and attached via a template reference variable.

```html
<ng-container *ngIf="showTooltip">
  <!-- Set a template reference variable on the button element -->
  <forge-icon-button #myButton>
    <forge-icon name="forge_logo"></forge-icon>
  </forge-icon-button>
  <!-- Make sure to use the `nativeElement` property to pass the actual DOM element -->
  <forge-tooltip type="label" [anchorElement]="myButton.nativeElement">This is a tooltip</forge-tooltip>
</ng-container>
```

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| anchor | string | - | The id of the element that the tooltip is anchored to. | |
| anchorElement | HTMLElement \| null | - | | |
| boundary | string \| null | - | The id of the element that the tooltip should be constrained to. | |
| boundaryElement | HTMLElement \| null | - | The element that the tooltip should be constrained to. | ✅ |
| delay | number | 500 | The delay in milliseconds before the tooltip is shown. | ✅ |
| fallbackPlacements | PositionPlacement [] \| null | - | The fallback placements of the tooltip relative to the anchor element. | ✅ |
| flip | OverlayFlipState | "auto" | How the tooltip should place itself if there is not enough space at the desired placement. | ✅ |
| offset | number | 4 | The offset in pixels between the tooltip and the anchor element. | ✅ |
| open | boolean | false | Whether or not the tooltip is open. | |
| placement | TooltipPlacement | "right" | The placement of the tooltip relative to the anchor element. | ✅ |
| position | `${ TooltipPlacement }` | - | | |
| target | string | - | | |
| triggerType | TooltipTriggerType \| TooltipTriggerType [] | "hover" | The trigger type(s) that will open the tooltip. Valid values are `hover` (default), `longpress`, and `focus`. | ✅ |
| type | TooltipType | "presentation" | The type of tooltip. Valid values are `presentation` (default), `label`, and `description`. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| anchor | string | - | The id of the element that the tooltip is anchored to. |
| boundary | string \| null | - | The id of the element that the tooltip should be constrained to. |
| delay | number | 500 | The delay in milliseconds before the tooltip is shown. |
| fallback-placements | PositionPlacement [] | - | The fallback placements of the tooltip relative to the anchor element. |
| flip | OverlayFlipState | "auto" | How the tooltip should place itself if there is not enough space at the desired placement. |
| offset | number | 4 | The offset in pixels between the tooltip and the anchor element. |
| open | boolean | false | Whether or not the tooltip is open. |
| placement | TooltipPlacement | "right" | The placement of the tooltip relative to the anchor element. |
| trigger-type | TooltipTriggerType \| TooltipTriggerType [] | "hover" | The trigger type(s) that will open the tooltip. Valid values are `hover` (default), `longpress`, and `focus`. |
| type | TooltipType | "presentation" | The type of tooltip. Valid values are `presentation` (default), `label`, and `description`. |

### Slots

| Name | Description |
|------|-------------|
| (default) | The content to display in the tooltip. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-tooltip-animation-duration | The animation duration of the tooltip surface. |
| --forge-tooltip-animation-offset | The animation offset of the tooltip surface. |
| --forge-tooltip-animation-timing | The animation timing function of the tooltip surface. |
| --forge-tooltip-arrow-bottom-rotation | The rotation of the tooltip arrow when the tooltip is placed on the bottom. |
| --forge-tooltip-arrow-clip-path | The clip path of the tooltip arrow. |
| --forge-tooltip-arrow-height | The height of the tooltip arrow. |
| --forge-tooltip-arrow-left-rotation | The rotation of the tooltip arrow when the tooltip is placed on the left. |
| --forge-tooltip-arrow-right-rotation | The rotation of the tooltip arrow when the tooltip is placed on the right. |
| --forge-tooltip-arrow-rotation | The rotation of the tooltip arrow. |
| --forge-tooltip-arrow-shape | The shape of the tooltip arrow. |
| --forge-tooltip-arrow-size | The size of the tooltip arrow. |
| --forge-tooltip-arrow-top-rotation | The rotation of the tooltip arrow when the tooltip is placed on top. |
| --forge-tooltip-arrow-width | The width of the tooltip arrow. |
| --forge-tooltip-background | The background color of the tooltip surface. |
| --forge-tooltip-border-color | The border color of the tooltip surface. |
| --forge-tooltip-border-style | The border style of the tooltip surface. |
| --forge-tooltip-border-width | The border width of the tooltip surface. |
| --forge-tooltip-color | The text color of the tooltip surface. |
| --forge-tooltip-elevation | The elevation of the tooltip surface. |
| --forge-tooltip-max-width | The maximum width of the tooltip surface. |
| --forge-tooltip-padding | The padding of the tooltip surface. |
| --forge-tooltip-padding-block | The block padding of the tooltip surface. |
| --forge-tooltip-padding-inline | The inline padding of the tooltip surface. |
| --forge-tooltip-shape | The shape of the tooltip surface. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| arrow | The tooltip arrow. |
| overlay | The overlay surface. |
| surface | The tooltip surface. |

### Dependencies

This component will automatically include the following components:
- `<forge-overlay>`

### Accessibility

- Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements.
- The target element receives the proper ARIA attributes such as `aria-labelledby` or `aria-describedby` where necessary.
- Should not contain interactive content.
