# Meter

Meters are used to represent scalar values within a known range.

```html
<forge-meter id="meter">
  <label for="meter">Label</label>
</forge-meter>
```

## Tickmarks

Meters can be configured to display tickmarks at regular intervals along the track. The `tickmarks` property toggles whether or not tickmarks are present and the number of tickmarks is set via the `--forge-meter-tickmarks` token.

```html
<forge-meter id="meter" tickmarks style="--forge-meter-tickmarks: 9;">
  <label for="meter">Label</label>
</forge-meter>
```

## Segmented

Setting a meter's `low` or `high` value turns it into a segmented meter. A segmented meter is divided into three regions — below the low value, above the high value, and between the two. Its color changes based on the value of the meter in relation to its `optimum` property. When the value is in the same region as the optimum, the value is optimal and colored green. When it's in an adjacent region it's suboptimal and colored yellow. Otherwise, it's least optimal and colored red.

When set, `low` must be greater than or equal to `min` and less than `high`. Likewise, `high` must be less than or equal to `max` and greater than `low`.

```html
<forge-meter id="meter" low="0.33" high="0.67" optimum="1">
  <label for="meter">Label</label>
</forge-meter>
```

## Grouped

Multiple related meters representing parts of a whole can be grouped together to display on the same track. Each meter in the group must have the same min and max values, which are managed by the `<forge-meter-group>` element, and can't be segmented.

Grouped meters are typically accompanied by keys that label each meter with its color and optionally its value. Each key can be semantically associated with its meter by using a `<label>` element with a `for` attribute that matches the meter's `id`.

```html
<forge-meter-group id="meter-group">
  <label slot="label" for="meter-group">Label</label>
  <forge-meter
    id="meter-1"
    value="0.25"
    style="--forge-meter-color: #1E88E5;"
  ></forge-meter>
  <forge-meter
    id="meter-2"
    value="0.15"
    style="--forge-meter-color: #FDD835;"
  ></forge-meter>
  <forge-meter
    id="meter-3"
    value="0.35"
    style="--forge-meter-color: #43A047;"
  ></forge-meter>
</forge-meter-group>

<forge-key style="margin-block-start: 8px;">
  <forge-key-item style="--forge-key-item-icon-color: #1E88E5;">
    <label for="meter-1">First</label>
    <span slot="value">25%</span>
  </forge-key-item>
  <forge-key-item style="--forge-key-item-icon-color: #FDD835;">
    <label for="meter-2">Second</label>
    <span slot="value">15%</span>
  </forge-key-item>
  <forge-key-item style="--forge-key-item-icon-color: #43A047;">
    <label for="meter-3">Third</label>
    <span slot="value">35%</span>
  </forge-key-item>
</forge-key>
```

## API

### Meter

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| density | MeterDensity | 'medium' | The density of the meter. |
| direction | MeterDirection | 'horizontal' | Whether the meter is oriented horizontally or vertically. |
| high | number \| null \| undefined | 1 | The high value threshold. |
| innerShape | MeterInnerShape | 'default' | The shape of the bar. |
| low | number \| null \| undefined | 0 | The low value threshold. |
| max | number | 1 | The maximum value of the meter. |
| min | number | 0 | The minimum value of the meter. |
| muted | boolean | false | Whether the theme is muted. |
| optimum | number \| null \| undefined | 1 | Indicates the region of the optimum value. |
| percentage | number | - | Gets the percentage of the meter that's filled. |
| shape | MeterShape | 'default' | The shape of the meter. |
| theme | MeterTheme | 'default' | The theme of the meter. |
| tickmarks | boolean | false | Whether to display tickmarks. |
| value | number | 0 | The current value of the meter. |
| valueMode | MeterValueMode | 'manual' | Whether the current value is displayed as a percentage or raw value. When set to 'manual' the value text is not shown automatically but can still be set manually via the value slot. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| aria-valuetext | string | - | Defines a text alternative for the current value. Set this if it would be inaccurate to read the value as a percentage. |
| density | MeterDensity | 'medium' | The density of the meter. |
| direction | MeterDirection | 'horizontal' | Whether the meter is oriented horizontally or vertically. |
| high | number \| null \| undefined | 1 | The high value threshold. |
| inner-shape | MeterInnerShape | 'default' | The shape of the bar. |
| low | number \| null \| undefined | 0 | The low value threshold. |
| max | number | 1 | The maximum value of the meter. |
| min | number | 0 | The minimum value of the meter. |
| muted | boolean | false | Whether the theme is muted. |
| optimum | number \| null \| undefined | 1 | Indicates the region of the optimum value. |
| shape | MeterShape | 'default' | The shape of the meter. |
| theme | MeterTheme | 'default' | The theme of the meter. |
| tickmarks | boolean | false | Whether to display tickmarks. |
| value | number | 0 | The current value of the meter. |
| value-mode | MeterValueMode | 'manual' | Whether the current value is displayed as a percentage or raw value. When set to 'manual' the value text is not shown automatically but can still be set manually via the value slot. |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The default slot for the meter's label. |
| value | A textual representation of the meter's value. |

#### States

| Name | Description |
|------|-------------|
| vertical | Applied when the meter is oriented vertically. |
| optimum-value | Applied when the value is within the optimum range. |
| suboptimum-value | Applied when the value is within the suboptimum range. |
| least-optimum-value | Applied when the value is within the least optimum range. |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-meter-background | The background color of the meter. |
| --forge-meter-bar-inner-shape | The border radius of the meter's bar. |
| --forge-meter-color | The color of the meter's bar. |
| --forge-meter-height | The block size of the meter. |
| --forge-meter-shape | The border radius of the meter. |
| --forge-meter-tickmark-opacity | The opacity of the tickmarks. |
| --forge-meter-tickmarks | The number of tickmarks to display. |
| --forge-meter-transition-duration | The duration of transitions. |
| --forge-meter-transition-timing | The timing function of transitions. |
| --forge-theme-error | The color of the bar when the value is least optimal. |
| --forge-theme-error-container-low | The color of the track when the value is least optimal. |
| --forge-theme-success | The color of the bar when the value is optimal. |
| --forge-theme-success-container-low | The color of the track when the value is optimal. |
| --forge-theme-warning | The color of the bar when the value is suboptimal. |
| --forge-theme-warning-container-low | The color of the track when the value is suboptimal. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| bar | The bar representing the value. |
| root | The root container element. |
| track | The element comprising the meter's background. |

### Meter Group

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| density | MeterDensity | 'default' | The density of the meter group. |
| direction | MeterDirection | 'horizontal' | Whether the meter is oriented horizontally or vertically. |
| innerShape | MeterInnerShape | 'default' | The shape of each meter in the group. |
| max | number | 1 | The maximum value of each meter in the group. |
| min | number | 0 | The minimum value of each meter in the group. |
| shape | MeterShape | 'default' | The shape of the meter group. |
| tickmarks | boolean | false | Whether to display tickmarks. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| density | MeterDensity | 'default' | The density of the meter group. |
| direction | MeterDirection | 'horizontal' | Whether the meter is oriented horizontally or vertically. |
| inner-shape | MeterInnerShape | 'default' | The shape of each meter in the group. |
| max | number | 1 | The maximum value of each meter in the group. |
| min | number | 0 | The minimum value of each meter in the group. |
| shape | MeterShape | 'default' | The shape of the meter group. |
| tickmarks | boolean | false | Whether to display tickmarks. |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The default slot for grouped `<forge-meter>` elements. |
| label | Positions a label above the meter group. |
| value | A textual representation of the meter's value. |

#### States

| Name | Description |
|------|-------------|
| vertical | Applied when the meter group is oriented vertically. |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-meter-group-background | The background color of the meter group. |
| --forge-meter-group-height | The block size of the meter group. |
| --forge-meter-group-shape | The border radius of the meter group. |
| --forge-meter-group-tickmark-color | The color of the tickmarks. |
| --forge-meter-group-tickmark-opacity | The opacity of the tickmarks. |
| --forge-meter-group-tickmarks | The number of tickmarks to display. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The root container element. |
| track | The element comprising the meter group's background. |

## Accessibility

Meters must always be labeled. This can be achieved through association with a `<label>` element or by setting the `aria-label` or `aria-labelledby` attribute. Text within the label slot is not accessible on its own and must be explicitly linked to the meter if used as the label.

When using grouped meters make sure to also include a key that includes the name, color, and optionally value of each meter.

The meter automatically applies ARIA attributes reflecting its value, min, and max values. If the value shouldn't be expressed as a percentage (for example, if you are measuring discrete values or textual quantifiers like "low", "medium", and "high"), the `aria-valuetext` attribute should be set to a string representing how the meter should be read.

## Meter vs. Linear Progress

Though superficially similar, meters and linear progress indicators have different use cases. The linear progress component is used to indicate the state of an application — whether or not it is currently busy with a task — and its design reinforces this association. Meters, on the other hand, represent a relatively static data point within a known range. They may be used to represent the progress of a longer term task in certain situations, but usually not something that a user would expect to change while using your app. It may make sense to add `role="progressbar"` to a meter if that helps clarify its purpose for users of assistive technology.
