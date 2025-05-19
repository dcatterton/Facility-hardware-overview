# Popover

Popovers are used to display content on top of other content. They are used to show additional information related to the content that is currently displayed on the screen, and is typically anchored to a specific element or area on the screen that triggered it to open.

## Show Popover

```html
<forge-button id="popover-trigger" variant="raised">Show Popover</forge-button>
<forge-popover
  anchor="popover-trigger"
  placement="bottom"
  position-strategy="fixed"
  shift="false"
>
  <forge-scaffold>
    <forge-toolbar no-border slot="header">
      <h2 class="forge-typography--heading4" slot="start">Popover Title</h2>
    </forge-toolbar>
    <div
      slot="body"
      style="width: 300px; padding: var(--forge-spacing-medium);"
    >
      Popover content
    </div>
    <forge-toolbar no-border slot="footer">
      <forge-button slot="end" variant="filled">Close</forge-button>
    </forge-toolbar>
  </forge-scaffold>
</forge-popover>
```

## Semantics

Popovers do not have any semantic meaning by default. This means that it's up to the developer to ensure that the content inside the popover is accessible if it needs to be. This can be done by adding the appropriate ARIA attributes to the popover itself, or the content within it.

## Popovers vs Dialogs

There is a lot of overlap between popovers and dialogs, and it can be difficult to know when to use one over the other. Here are some guidelines to help you decide:

- **Popovers** are used to display additional information related to the content that is currently displayed on the screen. They are typically anchored to a specific element or area on the screen. Popovers are transient and non-modal, meaning that they do not block the user from interacting with the rest of the page.

- **Dialogs** are used to display content that requires the user's immediate attention. They are typically modal (but can be non-modal), meaning that they block the user from interacting with the rest of the page until they are dismissed. Dialogs are typically used for things like confirmation messages, alerts, and forms.

There are some cases where you may need to blur these lines a bit (and you can use either component), especially if the design of your application calls for it. Just be sure to consider the user experience and accessibility implications.

## Non-modal Popover/Dialog

If you need to create a popover that behaves like a dialog (i.e. it is non-modal and does not block the user from interacting with the rest of the page), you can use the `<forge-popover>` and add the proper ARIA attributes to make it behave like a dialog.

### Show Non-modal Popover

```html
<forge-button id="popover-trigger-nonmodal" variant="raised">
  Show Non-modal Popover
</forge-button>
<forge-popover
  anchor="popover-trigger-nonmodal"
  placement="bottom-start"
  arrow
  role="dialog"
  aria-modal="false"
  aria-labelledby="nonmodal-title"
>
  <forge-scaffold>
    <forge-toolbar no-border slot="header">
      <h2 class="forge-typography--heading4" slot="start" id="nonmodal-title">
        Enter Your Name
      </h2>
    </forge-toolbar>
    <div
      slot="body"
      id="nonmodal-description"
      style="width: 300px; padding: var(--forge-spacing-medium);"
    >
      <form autocomplete="off">
        <forge-text-field>
          <input
            autofocus
            type="text"
            name="your-name"
            value
            required
            aria-label="Enter your name"
          />
        </forge-text-field>
      </form>
    </div>
    <forge-toolbar no-border slot="footer">
      <forge-button
        slot="end"
        style="margin-right: var(--forge-spacing-medium);"
      >
        Cancel
      </forge-button>
      <forge-button slot="end" variant="filled" disabled aria-disabled="true">
        Save
      </forge-button>
    </forge-toolbar>
  </forge-scaffold>
</forge-popover>
```

In this example, the popover is presented with the `role="dialog"` and `aria-modal="false"` attributes. This tells screen readers that the popover is a dialog, but it is not modal. This specific example will gracefully handle user entry into a form, by ensuring that the user does not lose valuable data by accidentally closing the popover.

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|---------------|
| anchor | string \| null | - | The IDREF of the anchor element to position the overlay relative to. | |
| anchorElement | HTMLElement \| VirtualElement \| null | - | The anchor element to position the overlay relative to. | |
| animationType | PopoverAnimationType | "zoom" | The animation type to use for the popover. Valid values are 'none', 'fade', 'slide', and 'zoom' (default). | ✅ |
| arrow | boolean | false | Whether or not the popover should render an arrow. | ✅ |
| boundary | string \| null | - | An IDREF to boundary element to constrain the overlay within. | |
| boundaryElement | HTMLElement \| null | - | The boundary element instance to constrain the overlay within. | ✅ |
| fallbackPlacements | PositionPlacement[] \| null | - | The fallback placements of the overlay. | ✅ |
| flip | OverlayFlipState | "auto" | Whether the overlay should flip placements to another side fit within the viewport. | ✅ |
| hide | OverlayHideState | "anchor-hidden" | The hide state of the overlay. | ✅ |
| hoverDelay | number | 0 | The delay in milliseconds before the popover is shown. | |
| hoverDismissDelay | number | 500 | The delay in milliseconds before the popover is dismissed when the user hovers outside of the popover. | |
| inline | boolean | false | Whether the overlay is inline (not in the top-layer). | |
| longpressDelay | number | 500 | The delay in milliseconds before a longpress event is detected. | |
| noAnchor | boolean | false | Whether the overlay should not be anchored to an element. This allows for custom positioning. | |
| offset | IOverlayOffset | {} | The offset of the overlay. | |
| open | boolean | false | Whether the overlay is open. | |
| overlay | IOverlayComponent | - | A readonly reference to the internal `<forge-overlay>` element instance. | |
| persistent | boolean | false | Whether the overlay should persist when the anchor is removed. | ✅ |
| persistentHover | boolean | false | Whether or not the popover should remain open when the user hovers outside the popover. | |
| placement | OverlayPlacement | "bottom" | The placement of the overlay. | ✅ |
| positionStrategy | OverlayPositionStrategy | "fixed" | The position strategy of the overlay. | ✅ |
| preset | PopoverPreset | "popover" | The preset to use for the popover. | |
| shift | OverlayShiftState | "auto" | Whether the overlay should shift to fit within the viewport. | ✅ |
| triggerType | PopoverTriggerType \| PopoverTriggerType[] | "click" | The trigger type(s) to use for the popover. Valid values are 'click' (default), 'hover', 'focus', and 'longpress'. Multiple can be specified. | |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| anchor | string \| null | - | The IDREF of the anchor element to position the overlay relative to. |
| animation-type | string | "zoom" | The animation type to use for the popover. Valid values are 'none', 'fade', 'slide', and 'zoom' (default). |
| arrow | string | false | Whether or not the popover should render an arrow. |
| boundary | string \| null | - | An IDREF to boundary element to constrain the overlay within. |
| flip | OverlayFlipState | "auto" | Whether the overlay should flip placements to another side fit within the viewport. |
| hide | OverlayHideState | "anchor-hidden" | The hide state of the overlay. |
| hover-delay | number | 0 | The delay in milliseconds before the popover is shown. |
| hover-dismiss-delay | string | 500 | The delay in milliseconds before the popover is dismissed when the user hovers outside of the popover. |
| inline | boolean | false | Whether the overlay is inline. |
| longpress-delay | string | 500 | The delay in milliseconds before a longpress event is detected. |
| no-anchor | boolean | false | Whether the overlay should not be anchored to an element. This allows for custom positioning. |
| offset | IOverlayOffset | - | The offset of the overlay. |
| open | boolean | false | Whether the overlay is open. |
| persistent | boolean | false | Whether the overlay should persist when the anchor is removed. |
| persistent-hover | string | false | Whether or not the popover should remain open when the user hovers outside the popover. |
| placement | OverlayPlacement | "bottom" | The placement of the overlay. |
| position-strategy | OverlayPositionStrategy | "fixed" | The position strategy of the overlay. |
| preset | string | "popover" | The preset to use for the popover. |
| shift | OverlayShiftState | "auto" | Whether the overlay should shift to fit within the viewport. |
| trigger-type | string | "click" | The trigger type(s) to use for the popover. Valid values are 'click' (default), 'hover', 'focus', and 'longpress'. Multiple can be specified. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-popover-beforetoggle | Dispatches before the popover is toggled, and is cancelable. | CustomEvent<IPopoverToggleEventData> |
| forge-popover-toggle | Dispatches after the popover is toggled. | CustomEvent<IPopoverToggleEventData> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The content to render inside the popover. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| hideAsync() | Hides the popover, and returns a Promise that resolves when the hide animation is complete. | - | Promise<void> |
| position() | Forces the overlay to reposition itself. | - | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-popover-animation-timing | The animation timing function to use for the popover animation. |
| --forge-popover-arrow-background-color | The background color of the arrow. Defaults to the background color of the popover surface. |
| --forge-popover-arrow-border-width | The border width of the popover surface and arrow when an arrow is applied. |
| --forge-popover-arrow-bottom-rotation | The rotation of the arrow when the popover is placed on the bottom. |
| --forge-popover-arrow-clip-path | The clip path to use for the arrow element. |
| --forge-popover-arrow-height | The height of the arrow. |
| --forge-popover-arrow-left-rotation | The rotation of the arrow when the popover is placed on the left. |
| --forge-popover-arrow-right-rotation | The rotation of the arrow when the popover is placed on the right. |
| --forge-popover-arrow-size | The size of the arrow. |
| --forge-popover-arrow-top-rotation | The rotation of the arrow when the popover is placed on the top. |
| --forge-popover-arrow-width | The width of the arrow. |
| --forge-popover-background | The background color of the popover surface. |
| --forge-popover-border-color | The border color of the popover surface. |
| --forge-popover-border-radius | The border radius of the popover surface. |
| --forge-popover-border-style | The border style of the popover surface. |
| --forge-popover-border-width | The border width of the popover surface. |
| --forge-popover-box-shadow | The box shadow of the popover surface. |
| --forge-popover-fade-duration | The duration of the fade animation. |
| --forge-popover-fade-timing | The timing function to use for the fade animation. |
| --forge-popover-height | The height of the popover surface. Defaults to `auto`. |
| --forge-popover-max-height | The maximum height of the popover surface. Defaults to `none`. |
| --forge-popover-max-width | The maximum width of the popover surface. Defaults to `none`. |
| --forge-popover-min-height | The minimum height of the popover surface. Defaults to `none`. |
| --forge-popover-min-width | The minimum width of the popover surface. Defaults to `none`. |
| --forge-popover-position-block-end | The block-end position of the popover. |
| --forge-popover-position-block-start | The block-start position of the popover. |
| --forge-popover-position-inline-end | The inline-end position of the popover. |
| --forge-popover-position-inline-start | The inline-start position of the popover. |
| --forge-popover-preset-dropdown-max-height | The maximum height of the popover when using `preset="dropdown"`. Defaults to `256px`. |
| --forge-popover-preset-dropdown-overflow | The overflow behavior of the popover when using `preset="dropdown"`. Defaults to `auto visible` (vertical scrolling only). |
| --forge-popover-slide-duration | The duration of the slide animation. |
| --forge-popover-slide-offset | The start offset to use for the slide animation. |
| --forge-popover-slide-timing | The timing function to use for the slide animation. |
| --forge-popover-width | The width of the popover surface. Defaults to `auto`. |
| --forge-popover-zoom-duration | The duration of the zoom animation. |
| --forge-popover-zoom-timing | The timing function to use for the zoom animation. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| overlay | The overlay root element. |
| surface | The surface container element for the slotted content. |

## Dependencies

This component will automatically include the following components:
- `<forge-overlay>`
