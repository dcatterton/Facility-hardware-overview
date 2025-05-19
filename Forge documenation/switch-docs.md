# Switch

Switches toggle the state of a single setting on or off.

Use switches to:
- Toggle a single item on or off, on mobile and tablet
- Immediately activate or deactivate something

```html
<forge-switch>off/on</forge-switch>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Gets/sets whether the switch is checked or not. |
| defaultChecked | boolean | false | Gets/sets whether the switch is checked by default. |
| defaultOn | boolean | false | Alias for `defaultChecked` (deprecated). Gets/sets whether the switch is checked by default. |
| dense | boolean | false | Controls whether the switch is dense. |
| disabled | boolean | false | Controls whether the switch is disabled. |
| icon | SwitchIconVisibility | 'both' | Controls the presence of the off and on icons. |
| labelPosition | SwitchLabelPosition | 'end' | Controls whether the label appears before or after the switch. |
| on | boolean | false | Alias for `checked` (deprecated). Gets/sets whether the switch is checked or not. |
| readonly | boolean | false | Controls whether the switch is readonly. |
| required | boolean | false | Controls whether the switch is required. |
| selected | boolean | false | Alias for `checked` (deprecated). |
| value | string | 'on' | Gets/sets the value of the switch. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | false | Gets/sets whether the switch is checked or not. |
| default-checked | boolean | false | Gets/sets whether the switch is checked by default. |
| default-on | boolean | false | Alias for `defaultChecked` (deprecated). Gets/sets whether the switch is checked by default. |
| dense | boolean | false | Controls whether the switch is dense. |
| disabled | boolean | false | Controls whether the switch is disabled. |
| icon | SwitchIconVisibility | 'both' | Controls the presence of the off and on icons. |
| label-position | SwitchLabelPosition | 'end' | Controls whether the label appears before or after the switch. |
| on | boolean | false | Alias for `checked` (deprecated). Gets/sets whether the switch is checked or not. |
| readonly | boolean | false | Controls whether the switch is readonly. |
| required | boolean | false | Controls whether the switch is required. |
| selected | boolean | false | Alias for `checked` (deprecated). |
| value | string | 'on' | Gets/sets the value of the switch. |

### Events

| Name | Description | Type |
|------|-------------|------|
| change | Dispatches when the switch's value changes. | Event |
| forge-switch-change | Dispatches when the switch's value changes. | CustomEvent<boolean> |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| toggle() | Toggles the switch on or off. | force: boolean | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-switch-active-animation-timing | The timing function used in active state animations. |
| --forge-switch-align | How the switch and label are distributed along their cross axis. |
| --forge-switch-animation-duration | The duration of animations. |
| --forge-switch-animation-timing | The timing function used in most animations. |
| --forge-switch-direction | Whether the switch and label are arranged along the inline or block axis. |
| --forge-switch-disabled-opacity | The opacity of the switch when disabled. |
| --forge-switch-gap | The space between the switch and label. |
| --forge-switch-handle-active-elevation | The handle's shadow when the switch is active (pressed). |
| --forge-switch-handle-active-off-color | The color of the handle when the switch is active (pressed) in its off state. |
| --forge-switch-handle-active-off-elevation | The handle's shadow when the switch is active (pressed) in its off state. |
| --forge-switch-handle-active-off-scale | The scale transformation applied to the handle when the switch is active (pressed) in its off state. |
| --forge-switch-handle-active-on-color | The color of the handle when the switch is active (pressed) in its on state. |
| --forge-switch-handle-active-on-elevation | The handle's shadow when the switch is active (pressed) in its on state. |
| --forge-switch-handle-active-on-scale | The scale transformation applied to the handle when the switch is active (pressed) in its on state. |
| --forge-switch-handle-active-scale | The scale transformation applied to the handle when the switch is active (pressed). |
| --forge-switch-handle-elevation | The handle's shadow. |
| --forge-switch-handle-height | The block size of the handle. |
| --forge-switch-handle-off-color | The color of the handle in the switch's off state. |
| --forge-switch-handle-off-elevation | The handle's shadow in the switch's off state. |
| --forge-switch-handle-off-scale | The scale transformation applied to the handle in the switch's off state. |
| --forge-switch-handle-on-color | The color of the handle in the switch's on state. |
| --forge-switch-handle-on-elevation | The handle's shadow in the switch's on state. |
| --forge-switch-handle-on-scale | The scale transformation applied to the handle in the switch's on state. |
| --forge-switch-handle-scale | The scale transformation applied to the handle. |
| --forge-switch-handle-shape | The shape of the handle. |
| --forge-switch-handle-size | The inline and block size of the handle. |
| --forge-switch-handle-width | The inline size of the handle. |
| --forge-switch-icon-active-off-color | The color of the handle icon when the switch is active (pressed) in its off state. |
| --forge-switch-icon-active-off-scale | The scale transformation applied to the handle icons when the switch is active (pressed) in its off state. |
| --forge-switch-icon-active-on-color | The color of the handle icon when the switch is active (pressed) in its on state. |
| --forge-switch-icon-active-on-scale | The scale transformation applied to the handle icons when the switch is active (pressed) in its on state. |
| --forge-switch-icon-color | The color of the handle icons. |
| --forge-switch-icon-off-color | The color of the handle icon in the switch's off state. |
| --forge-switch-icon-off-scale | The scale transformation applied to the handle icons in the switch's off state. |
| --forge-switch-icon-off-size | The size of the handle icon in the switch's off state. |
| --forge-switch-icon-on-color | The color of the handle icon in the switch's on state. |
| --forge-switch-icon-on-scale | The scale transformation applied to the handle icons in the switch's on state. |
| --forge-switch-icon-on-size | The size of the handle icon in the switch's on state. |
| --forge-switch-icon-scale | The scale transformation applied to the handle icons. |
| --forge-switch-icon-size | The size of the handle icon. |
| --forge-switch-justify | How the switch and label are distributed along their main axis. |
| --forge-switch-state-layer-dense-height | The block size of the handle's state layer when the dense switch is used. |
| --forge-switch-state-layer-dense-size | The inline and block size of the handle's state layer when the dense switch is used. |
| --forge-switch-state-layer-dense-width | The inline size of the handle's state layer when the dense switch is used. |
| --forge-switch-state-layer-height | The block size of the handle's state layer. |
| --forge-switch-state-layer-off-color | The color of the handle's state layer when the switch is in its off state. |
| --forge-switch-state-layer-on-color | The color of the handle's state layer when the switch is in its on state. |
| --forge-switch-state-layer-size | The inline and block size of the handle's state layer. |
| --forge-switch-state-layer-width | The inline size of the handle's state layer. |
| --forge-switch-track-active-off-border-color | The color of the track border when the switch is active (pressed) in its off state. |
| --forge-switch-track-active-off-border-width | The width of the track border when the switch is active (pressed) in its off state. |
| --forge-switch-track-active-off-color | The color of the track when the switch is active (pressed) in its off state. |
| --forge-switch-track-active-on-border-color | The color of the track border when the switch is active (pressed) in its on state. |
| --forge-switch-track-active-on-border-width | The width of the track border when the switch is active (pressed) in its on state. |
| --forge-switch-track-active-on-color | The color of the track when the switch is active (pressed) in its on state. |
| --forge-switch-track-border-color | The color of the track border. |
| --forge-switch-track-border-width | The width of the track border. |
| --forge-switch-track-height | The block size of the track. |
| --forge-switch-track-off-border-color | The color of the track border in the switch's off state. |
| --forge-switch-track-off-border-width | The width of the track border in the switch's off state. |
| --forge-switch-track-off-color | The color of the track in the switch's off state. |
| --forge-switch-track-on-border-color | The color of the track border in the switch's on state. |
| --forge-switch-track-on-border-width | The width of the track border in the switch's on state. |
| --forge-switch-track-on-color | The color of the track in the switch's on state. |
| --forge-switch-track-shape | The shape of the track. |
| --forge-switch-track-width | The inline size of the track. |
| --forge-theme-on-primary | The color of elements placed on top of the primary color (the handle icons for example). |
| --forge-theme-primary | The primary color of the switch. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | Styles the focus indicator root element. |
| handle | Styles the handle element. |
| icon-off | Styles the off icon element. |
| icon-on | Styles the on icon element. |
| label | Styles the label element. |
| state-layer | Styles the state layer root element. |
| switch | Styles the switch container element. |
| track | Styles the track element. |

## Accessibility

- Ensure that all of the controls that are accessible by a mouse are also accessible by keyboard.
- Ensure the controls are reachable by the tab key.
- Ensure each control can be updated or activated by the keyboard.
- The input element will receive the proper ARIA attribute `aria-checked`.
- The input element will receive the proper role attribute `role="switch"`.

## CSS-Only

The switch component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only switch component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/switch/forge-switch.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-switch | Apply to the root element (required). |
| forge-switch--dense | Makes the switch dense. |
| forge-switch__thumb | Apply to a child of the root element to render the thumb (required). |
| forge-switch__icon | Apply to one or more children of the thumb element to style them as icons. |
| forge-switch__icon--on | Apply to the the icon representing the switch's "on" state. It will be hidden when the switch is off. |
| forge-switch__icon--off | Apply to the the icon representing the switch's "off" state. It will be hidden when the switch is on. |
