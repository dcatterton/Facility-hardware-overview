# Button Area

The button area is a container element for an interactive "area" of the page. It's common to make larger sections of the page (such as individual cards) interactive and respond to user pointer events. The button area provides an accessible way to do this.

It works by wrapping the content you want to visually appear interactive, and then provide a slotted button element that will be used to control the interactive behavior while the state layer fills the parent container size. The `<button>` is visually hidden from the page, but it can still receive focus which the button area will handle and make it appear as if the full content is interactive to the user. When clicking anywhere in the button area, the component will dispatch a `click` event to the slotted `<button>` itself, allowing you to listen for the event and respond accordingly.

```html
<forge-card>
  <forge-button-area>
    <button slot="button" aria-labelledby="button-heading"></button>
    <div class="content">
      <div>
        <div id="button-heading">Heading</div>
        <div>Content</div>
      </div>
      <forge-icon-button forge-ignore>
        <forge-icon
          role="img"
          name="favorite"
          aria-label="A heart graphic"
        ></forge-icon>
      </forge-icon-button>
      <forge-tooltip>Favorite</forge-tooltip>
      <forge-icon name="chevron_right"></forge-icon>
    </div>
  </forge-button-area>
</forge-card>

<style>
  forge-card {
    --forge-card-padding: 0;
    width: 320px;
    max-width: 100%
  }
  .content {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px
  }
  .content>:first-child {
    margin-inline-end: auto
  }
</style>
```

## Using the forge-ignore attribute

It is common to place multiple interactive elements within a `<forge-button-area>`. In these cases you will likely want to prevent the button area from responding when clicking those elements (or any elements within). To do this you can either listen for the click event yourself on the specific elements you care about and call stopPropagation() on the event, or you can use the forge-ignore attribute for convenience.

```html
<forge-button-area id="button-area">
  <button slot="button" aria-labelledby="button-area-heading"></button>
  <div style="display: flex; justify-content: space-between;">
    <div>
      <div class="forge-typography--heading4" id="button-area-heading">Heading</div>
      <div>Content</div>
    </div>
    <!-- 
    Using the forge-ignore attribute allows this element to be placed within the 
    button area content without interfering or triggering the main button interaction.
    -->
    <forge-icon-button forge-ignore>
      <forge-icon name="favorite"></forge-icon>
    </forge-icon-button>
  </div>
</forge-button-area>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Sets whether the button area and slotted button are disabled. Setting this on one will also set it on the other. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Sets whether the button area and slotted button are disabled. Setting this on one will also set it on the other. |

### Events

| Name | Description | Type |
|------|-------------|------|
| click | The button area emits a native HTML click event whenever it or the slotted button is clicked. Add the listener to the `<forge-button-area>` element to receive all events. Note: Set data-forge-ignore on any nested buttons or other interactive elements to prevent them from activating the button area. | PointerEvent |

### Slots

| Name | Description |
|------|-------------|
| (default) | Places content within the default (unnamed) slot (main body of the component). |
| button | Places content within a visually hidden slot. Always place a `<button>` element in this slot. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-button-area-cursor | The cursor. |
| --forge-button-area-disabled-cursor | The cursor when in the disabled state. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| button | The visually hidden slot for the `<button>` element. |
| focus-indicator | The focus-indicator indicator element. |
| root | The root container element. |
| state-layer | The state-layer surface element. |

## Accessibility

- Always include a slotted `<button>` element.
- Add a concise, descriptive description of the button area's action as the text content of the slotted button.
- The button's text content should preferably be the same as the visible text within the button area to reduce confusion. This can a portion of the content if long.
- Set any accessible attributes on the slotted button.
- Set aria-controls if the button controls another element on the page.
- Set aria-expanded to reflect the state of the controlled element if appropriate.
- Verify that you can reach every nested button by keyboard navigation.
- Ensure that there is a visual cue that the nested button is currently in focus.
- Verify that pressing the space bar or enter key while focused on a button will activate the button area in the same manner as if it had been clicked with a mouse.
- Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements.
