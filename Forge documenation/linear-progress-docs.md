# Linear Progress

Linear progress indicators display progress by animating an indicator along a fixed path.

There are two types of linear progress indicators:

- **Determinate**: Indicates how long an operation will take when the percentage complete is known.
- **Indeterminate**: Indicates that an operation is ongoing with an unknown percentage complete. This is the default.

```html
<forge-linear-progress
  aria-label="Linear progress demo"
></forge-linear-progress>
```

## Determinate

Determinate linear progress indicators fill from 0% to 100%, representing the percentage complete.

```html
<forge-linear-progress
  determinate
  progress="0.5"
  aria-label="Linear progress demo"
  aria-valuenow="0.5"
></forge-linear-progress>
```

## Buffer

Buffer linear progress indicators are sub-variant of determinate indicators, and fill from 0% to 100% while a secondary indicator fills from 0% to 100% as well to represent the buffer.

```html
<forge-linear-progress
  determinate
  progress="0.33"
  buffer="0.66"
  aria-label="Linear progress buffer demo"
  aria-valuenow="0.33"
></forge-linear-progress>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| buffer | number | 1 | Controls the buffer progress while in a determinate state. Accepts values from `0` to `1`. |
| determinate | boolean | false | Controls the determinate state. |
| progress | number | 0 | Controls the progress while in a determinate state. Accepts values from `0` to `1`. |
| theme | string | primary | Sets the theme. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| buffer | number | 1 | Controls the buffer progress while in a determinate state. Accepts values from `0` to `1`. |
| determinate | boolean | false | Controls the determinate state. |
| progress | number | 0 | Controls the progress while in a determinate state. Accepts values from `0` to `1`. |
| theme | string | primary | Sets the theme. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-linear-progress-determinate-duration | The duration of the determinate animation. |
| --forge-linear-progress-determinate-easing | The easing function to use for the determinate animation. |
| --forge-linear-progress-height | The height of the element. |
| --forge-linear-progress-indeterminate-duration | The duration of the indeterminate animation. |
| --forge-linear-progress-indicator-color | The color of the indicator. |
| --forge-linear-progress-indicator-height | The height of the indicator only. |
| --forge-linear-progress-theme-transition-duration | The duration of the theme transition. |
| --forge-linear-progress-theme-transition-timing | The easing function to use for the theme transition. |
| --forge-linear-progress-track-color | The background color of the indicator. |
| --forge-linear-progress-track-shape | The shape of the indicator. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| progressbar | Styles the progress bar container element |
