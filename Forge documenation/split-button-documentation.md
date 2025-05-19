# Split Button

Split buttons provide a way to combine a primary action with one or more secondary actions. The secondary actions can also be displayed in a dropdown menu.

```html
<forge-split-button variant="raised" theme="primary">
  <forge-button style="min-width: 100px;" variant="raised">Send</forge-button>
  <forge-menu>
    <forge-button
      aria-label="Show menu"
      popover-icon
      variant="raised"
    ></forge-button>
  </forge-menu>
</forge-split-button>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether or not the buttons are dense. |
| disabled | boolean | false | Whether or not the buttons are disabled. |
| pill | boolean | false | Whether or not the buttons are pill-shaped. |
| theme | ButtonTheme | "primary" | The theme of the buttons. Valid values are `primary`, `secondary`, `tertiary`, `success`, `error`, `warning`, `info`. |
| variant | SplitButtonVariant | "text" | The variant of the buttons. Valid values are `text`, `outlined`, `tonal`, `filled`, and `raised`. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether or not the buttons are dense. |
| disabled | boolean | false | Whether or not the buttons are disabled. |
| pill | boolean | false | Whether or not the buttons are pill-shaped. |
| theme | ButtonTheme | "primary" | The theme of the buttons. Valid values are `primary`, `secondary`, `tertiary`, `success`, `error`, `warning`, `info`. |
| variant | SplitButtonVariant | "text" | The variant of the buttons. Valid values are `text`, `outlined`, `tonal`, `filled`, and `raised`. |

Learn more about [Attributes](#).

### Slots

| Name | Description |
|------|-------------|
| (default) | This is a default/unnamed slot. |

Learn more about [Slots](#).

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-split-button-focus-indicator-divider-offset | The offset of the focus indicator divider when using outlined buttons. |
| --forge-split-button-focus-indicator-offset | The offset of the focus indicator around the buttons. |
| --forge-split-button-gap | The gap between the slotted buttons. |
| --forge-split-button-min-width | The minimum width of the slotted buttons. |

Learn more about [CSS Custom Properties](#).

## Dependencies

This component will automatically include the following components:
- `<forge-button>`
