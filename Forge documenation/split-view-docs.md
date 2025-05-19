# Split View

The split view component presents `<forge-split-view-panel>` elements side-by-side as resizable panels. This is useful in situations where a user may want to adjust how much screen space is devoted to part of the interface. For example, you could consider displaying a map or image viewer within a split view.

A split view configuration typically consists of one or more resizable panels as well as at least one non-resizable panel. Resizable panels are defined by the `resizable` attribute, which can be set to `'start'` or `'end'` to reflect which direction they expand into. Non-resizable panels are not interactive on their own, but automatically expand to fill in the space left by their sibling panels.

The split view panel component consists of two basic parts: its content, and a handle to resize it. Each handle is linked to its content by accessibility attributes, providing an accessible label and size information for assistive technology. The handle's position in relation to the content is determined by the `resizable` value. When it's `'start'` the handle appears before the content, or after the content when it's `'end'`.

```html
<forge-split-view auto-close-threshold="120">
  <forge-split-view-panel>
    <div>Panel 1</div>
  </forge-split-view-panel>
  <forge-split-view-panel size="200">
    <div>Panel 2</div>
  </forge-split-view-panel>
</forge-split-view>

<style>
  forge-split-view {
    height: 300px
  }
  forge-split-view forge-split-view-panel div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%
  }
  forge-split-view forge-split-view-panel:first-child {
    background-color: #e6e6fa
  }
  forge-split-view forge-split-view-panel:last-child {
    background-color: #fa8070
  }
</style>
```

## API

### Split View

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowClose | boolean | false | Whether child split view panels can be closed via keyboard interaction. |
| autoClose | boolean | false | Whether child split view panels automatically close when they reach a size of 0. |
| autoCloseThreshold | number | 0 | The size at which panels auto close. |
| disabled | boolean | false | Whether child split view panels have resize interactions disabled or enabled. |
| orientation | SplitViewOrientation | "horizontal" | Whether child split view panels are laid out and resize horizontally or vertically. |

#### Attributes 

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow-close | boolean | false | Whether child split view panels can be closed via keyboard interaction. |
| auto-close | boolean | false | Whether child split view panels automatically close when they reach a size of 0. |
| auto-close-threshold | number | 0 | The size at which panels auto close. |
| disabled | boolean | false | Whether child split view panels have resize interactions disabled or enabled. |
| orientation | SplitViewOrientation | "horizontal" | Whether child split view panels are laid out and resize horizontally or vertically. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| layerSlottedPanels() | Arranges split view panels to avoid overlapping during animations. | target: ISplitViewPanelComponent | void |
| refit() | Resizes panels within the split view to avoid overflow. | - | void |
| unlayerSlottedPanels() | Removes presentation data set during an animation. | - | void |
| update() | Updates the provided characteristics of each slotted panel. | config: ISplitViewUpdateConfig | void |

### Split View Panel

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessibleLabel | string | - | The ARIA label given to the resize handle. |
| allowClose | boolean | false | Whether the panel can be closed via keyboard interaction. |
| autoClose | boolean | false | Whether the panel automatically closes when it reaches a size of 0. |
| autoCloseThreshold | number | 0 | The size at which the panel auto closes. |
| disabled | boolean | false | Whether resize interactions are disabled or enabled. |
| max | number \| string \| undefined | - | The largest size the panel can take along its axis of orientation. |
| min | number \| string | 0 | The smallest size the panel can take along its axis of orientation. |
| open | boolean | true | Controls the open state of the panel. |
| resizable | SplitViewPanelResizable | "off" | Controls which side of the panel the resize handle appears on. |
| size | number \| string | 200 | The initial size along the axis of orientation. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accessible-label | string | - | The ARIA label given to the resize handle. |
| allow-close | boolean | false | Whether the panel can be closed via keyboard interaction. |
| auto-close | boolean | false | Whether the panel automatically closes when it reaches a size of 0. |
| auto-close-threshold | number | 0 | The size at which the panel auto closes. |
| disabled | boolean | false | Whether resize interactions are disabled or enabled. |
| max | number \| string \| undefined | - | The largest size the panel can take along its axis of orientation. |
| min | number \| string | 0 | The smallest size the panel can take along its axis of orientation. |
| open | boolean | true | Controls the open state of the panel. |
| resizable | SplitViewPanelResizable | "off" | Controls which side of the panel the resize handle appears on. |
| size | number \| string | 200 | The initial size along the axis of orientation. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-split-view-panel-did-close | Emitted after the panel closes. | CustomEvent<ISplitViewPanelOpenEvent> |
| forge-split-view-panel-did-open | Emitted after the panel opens. | CustomEvent<ISplitViewPanelOpenEvent> |
| forge-split-view-panel-resize | Emitted when the panel resizes. | CustomEvent<number> |
| forge-split-view-panel-resize-end | Emitted when the panel stops resizing. | CustomEvent<number> |
| forge-split-view-panel-resize-start | Emitted when the panel starts resizing. | CustomEvent<number> |
| forge-split-view-panel-will-close | Emitted before the panel closes. | CustomEvent<ISplitViewPanelOpenEvent> |
| forge-split-view-panel-will-open | Emitted before the panel opens. | CustomEvent<ISplitViewPanelOpenEvent> |
| forge-split-view-panel-will-resize | Emitted before the panel resizes. | CustomEvent<ISplitViewPanelWillResizeEvent> |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| getCollapsibleSize() | Gets the amount that the content can shrink along the axis of orientation before reaching its min size. | - | - |
| getContentSize() | Gets the size of content along the axis of orientation. | - | - |
| setContentSize() | Sets the size of content along the axis of orientation. | size: number | void |
| update() | Updates the provided characteristics. | config: ISplitViewUpdateConfig | void |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-split-view-panel-cursor | The cursor to display when hovering over the panel. |
| --forge-split-view-panel-size | The size of the panel along the axis of orientation. |

## Dependencies

This component will automatically include the following components:
- `<forge-focus-indicator>`
- `<forge-icon>`
- `<forge-state-layer>`

## Accessibility

- Verify that all content slotted into a panel is responsive and can resize fluidly.
- If a panel's content is inaccessible under or over a certain size, be sure to set the `min` and `max` properties accordingly.
- Be sure to include a unique `accessibleLabel` property value for each panel that describes its content.
- If the user can close a panel, provide an easy way for them to reopen it.
- Set `aria-controls` and `aria-expanded` on the element that controls the open state.
