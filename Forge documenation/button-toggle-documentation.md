# Button Toggle

The button toggle component can be used as simple buttons, or as an alternative to radio and checkbox elements to help provide users with a choice of options. They offer a group of interactive button-style elements that are related to each other.

```html
<forge-button-toggle-group aria-label="Choose communication type">
  <forge-button-toggle value="email">By email</forge-button-toggle>
  <forge-button-toggle value="mail">By mail</forge-button-toggle>
  <forge-button-toggle value="phone">By phone</forge-button-toggle>
</forge-button-toggle-group>
```

## API

### Button Toggle Group

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether or not the group should be dense. |
| disabled | boolean | false | Whether or not the group should be disabled. |
| mandatory | boolean | false | Whether or not the group should require a selection once a button has been toggled on. |
| multiple | boolean | false | Whether or not the group should allow multiple selections. |
| outlined | boolean | true | Whether or not the group should be outlined. |
| readonly | boolean | false | Whether or not the group should be readonly. |
| required | boolean | - | - |
| stretch | boolean | false | Whether or not the group should stretch to fill the available width. |
| theme | ButtonToggleGroupTheme | - | The theme to use for the group. |
| validationMessage | string | - | - |
| validity | ValidityState | - | - |
| value | any | - | The value of the selected button toggle(s). |
| vertical | boolean | false | Whether or not the group should be displayed vertically. |
| willValidate | boolean | - | - |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether or not the group should be dense. |
| disabled | boolean | false | Whether or not the group should be disabled. |
| mandatory | boolean | false | Whether or not the group should require a selection once a button has been toggled on. |
| multiple | boolean | false | Whether or not the group should allow multiple selections. |
| outlined | boolean | false | Whether or not the group should be outlined. |
| readonly | boolean | false | Whether or not the group should be readonly. |
| stretch | boolean | false | Whether or not the group should stretch to fill the available width. |
| theme | ButtonToggleGroupTheme | - | The theme to use for the group. |
| value | any | - | The value of the selected button toggle(s). |
| vertical | boolean | false | Whether or not the group should be displayed vertically. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-button-toggle-group-change | Dispatches when the value of the group changes. | CustomEvent< IButtonToggleGroupChangeEventData > |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The is a default/unnamed slot for child button toggle elements. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| checkValidity() | - | - | boolean |
| reportValidity() | - | - | boolean |
| setCustomValidity() | - | error: string | void |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-button-toggle-group-dense-height | The height of the group element when dense. |
| --forge-button-toggle-group-display | The display of the group container elements. |
| --forge-button-toggle-group-gap | The space between button toggle elements. |
| --forge-button-toggle-group-height | The height of the group element. |
| --forge-button-toggle-group-outline-color | The color of the outline around the group element. |
| --forge-button-toggle-group-outline-color-active | The color of the outline around the group element when hovered or focused. |
| --forge-button-toggle-group-outline-style | The style of the outline around the group element. |
| --forge-button-toggle-group-outline-width | The width of the outline around the group element. |
| --forge-button-toggle-group-padding | The padding around the button toggle elements when outlined. |
| --forge-button-toggle-group-padding-block | The block padding around the button toggle elements when outlined. |
| --forge-button-toggle-group-padding-inline | The inline padding around the button toggle elements when outlined. |
| --forge-button-toggle-group-shape | The shape radius of the group container element. |
| --forge-button-toggle-group-shape-end-end | The end-end shape radius. |
| --forge-button-toggle-group-shape-end-start | The end-start shape radius. |
| --forge-button-toggle-group-shape-start-end | The start-end shape radius. |
| --forge-button-toggle-group-shape-start-start | The start-start shape radius. |
| --forge-button-toggle-group-transition-duration | The transition duration for all animations on the group. |
| --forge-button-toggle-group-transition-timing | The transition timing for all animations on the group. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root container element for the group. |

### Button Toggle

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Whether or not the button is disabled. |
| readonly | boolean | false | Whether or not the button is readonly. |
| selected | boolean | false | Whether or not the button is selected. |
| value | unknown | - | The value of the button toggle. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Whether or not the button is disabled. |
| readonly | boolean | false | Whether or not the button is readonly. |
| selected | boolean | false | Whether or not the button is selected. |
| value | unknown | - | The value of the button toggle. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-button-toggle-select | Dispatches when the user toggles the button. | CustomEvent< IButtonToggleSelectEventData > |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The default/unnamed slot for the button toggle's content. |
| end | Typically reserved content/icons that render logically after the default slot content. |
| start | Typically reserved for content/icons that render logically before the default slot content. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | - | - | void |
| focus() | - | options: ExperimentalFocusOptions | void |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-button-toggle-background | The background of the button toggle. |
| --forge-button-toggle-border-color | The border-color of the button toggle. |
| --forge-button-toggle-border-style | The border-style of the button toggle. |
| --forge-button-toggle-border-width | The border-width of the button toggle. |
| --forge-button-toggle-color | The color of the button toggle content. |
| --forge-button-toggle-cursor | The cursor of the button toggle. |
| --forge-button-toggle-disabled-background | The background of the button toggle when disabled. |
| --forge-button-toggle-disabled-color | The color of the button toggle content when disabled. |
| --forge-button-toggle-disabled-cursor | The cursor of the button toggle when disabled. |
| --forge-button-toggle-disabled-opacity | The opacity of the button toggle when disabled. |
| --forge-button-toggle-display | The display style for the button toggle container element. |
| --forge-button-toggle-min-width | The minimum width. |
| --forge-button-toggle-padding-block | The padding on the block axis. |
| --forge-button-toggle-padding-inline | The padding on the inline axis. |
| --forge-button-toggle-selected-background | The background of the button toggle when selected. |
| --forge-button-toggle-selected-color | The color of the button toggle content when selected. |
| --forge-button-toggle-selected-disabled-background | The background of the button toggle when selected and disabled. |
| --forge-button-toggle-shape | The shape radius of the button toggle. |
| --forge-button-toggle-shape-end-end | The end-end shape radius of the button toggle. |
| --forge-button-toggle-shape-end-start | The end-start shape radius of the button toggle. |
| --forge-button-toggle-shape-start-end | The start-end shape radius of the button toggle. |
| --forge-button-toggle-shape-start-start | The start-start shape radius of the button toggle. |
| --forge-button-toggle-spacing | The spacing between the button toggle and its content. |
| --forge-button-toggle-transition-duration | The transition-duration of various properties. |
| --forge-button-toggle-transition-timing | The transition-timing of various properties. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | The focus indicator element. |
| root | The root container element. |
| state-layer | The state layer surface element. |
