# Slider

Sliders are used to allow users to select a value from a range of values.

```html
<forge-slider data-aria-label="Value"></forge-slider>
```

## Range

The range property allows for a start and end value to be set.

```html
<forge-slider
  range
  data-aria-label-start="Start"
  data-aria-label-end="End"
></forge-slider>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Controls if the slider is disabled. |
| label | string | - | The label text for the slider handle. |
| labelBuilder | SliderLabelBuilder | - | A function that returns a label for the slider handle. |
| labeled | boolean | true | Controls if labels are visible. |
| labelEnd | string | - | The label text for the end slider handle. |
| labelStart | string | - | The label text for the start slider handle. |
| max | number | 100 | The maximum value of the slider. |
| min | number | 0 | The minimum value of the slider. |
| name | string | - | The form control name. |
| nameEnd | string | - | The form control name for the end handle in range mode. |
| nameStart | string | - | The form control name for the start handle in range mode. |
| range | boolean | false | Controls range mode. |
| readonly | boolean | false | Controls if the slider is readonly. |
| step | number | 1 | The step value of the slider. |
| tickmarks | boolean | false | Controls if tickmarks are visible. |
| value | number | 50 | The current value of the slider. |
| valueEnd | number | 67 | The current end value of the slider. |
| valueStart | number | 33 | The current start value of the slider. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| data-aria-label | string | - | Sets the aria-label attribute on the slider handle. |
| data-aria-label-end | string | - | Sets the aria-label attribute on the end handle in range mode. |
| data-aria-label-start | string | - | Sets the aria-label attribute on the start handle in range mode. |
| disabled | boolean | false | Controls if the slider is disabled. |
| label | string | - | Sets the label text for the slider handle. |
| label-end | string | - | Sets the label text for the end slider handle in range mode. |
| label-start | string | - | Sets the label text for the start slider handle in range mode. |
| labeled | boolean | true | Controls if labels are visible. |
| max | number | 100 | Sets the maximum value of the slider. |
| min | number | 0 | Sets the minimum value of the slider. |
| name | string | - | Controls the form control name. |
| name-end | string | - | Controls the form control name for the end handle in range mode. |
| name-start | string | - | Controls the form control name for the start handle in range mode. |
| range | boolean | false | Controls range mode. |
| readonly | boolean | false | Controls if the slider is readonly. |
| step | number | 1 | Sets the step value of the slider. |
| tickmarks | boolean | false | Controls if tickmarks are visible. |
| value | number | 50 | Sets the current value of the slider. |
| value-end | number | 67 | Sets the current end value of the slider in range mode. |
| value-start | number | 33 | Sets the current start value of the slider in range mode. |

Learn more about [Attributes](#).

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-slider-change | Dispatches when the slider value changes and the value has been committed. | CustomEvent<ISliderChangeEventData> |
| forge-slider-input | Dispatches when the slider value changes. | CustomEvent<ISliderChangeEventData> |
| forge-slider-range-change | Dispatches when the slider range values change and the values have been committed. | CustomEvent<ISliderRangeChangeEventData> |
| forge-slider-range-input | Dispatches when the slider range values change. | CustomEvent<ISliderRangeChangeEventData> |

Learn more about [Events](#).

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-slider-active-track-color | The color of the active track. |
| --forge-slider-active-track-height | The height of the active track. |
| --forge-slider-active-track-shape | The shape of the active track. |
| --forge-slider-disabled-active-track-color | The color of the active track when disabled. |
| --forge-slider-disabled-active-track-opacity | The opacity of the active track when disabled. |
| --forge-slider-disabled-handle-color | The color of the slider handle when disabled. |
| --forge-slider-disabled-inactive-track-color | The color of the inactive track when disabled. |
| --forge-slider-disabled-inactive-track-opacity | The opacity of the inactive track when disabled. |
| --forge-slider-focus-handle-color | The color of