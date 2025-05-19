# Circular Progress

Circular progress indicators display progress by animating an indicator along a circular track in a clockwise direction. 
They can be used to indicate loading, progress, or waiting, and support both determinate and indeterminate states.

```html
<forge-circular-progress aria-label="Circular Progress"></forge-circular-progress>
```

Always include an accessible label for the circular progress indicator.

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| determinate | boolean | false | Controls the determinate state. | |
| progress | number | 0 | Controls the progress while in a determinate state. Accepts values from 0 to 1. | |
| theme | CircularProgressTheme | "primary" | Controls the theme of the progress indicator. | |
| track | boolean | false | Controls the visibility of the track background. | ✅ |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| determinate | boolean | false | Controls the determinate state. |
| progress | number | 0 | Controls the progress while in a determinate state. Accepts values from 0 to 1. |
| theme | CircularProgressTheme | "primary" | Controls the theme of the progress indicator. |
| track | boolean | false | Controls the visibility of the track background. |

### Slots

| Name | Description |
|------|-------------|
| (default) | The default/unnamed slot. Renders content at the center of the progress indicator. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-circular-progress-arc-duration | The duration of the arc animation. |
| --forge-circular-progress-indicator-color | The track indicator color. |
| --forge-circular-progress-padding | The padding inside the bounding box of the container. |
| --forge-circular-progress-size | The height and width of the indicator container. |
| --forge-circular-progress-theme-transition-duration | The duration of the theme transition. |
| --forge-circular-progress-theme-transition-timing | The easing function to use for the theme transition. |
| --forge-circular-progress-track-color | The track background color. |
| --forge-circular-progress-track-width | The track indicator width. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| progressbar | Styles the progress bar container element |

## Accessibility

Ensure that the circular progress bar is accessible to screen readers by providing a meaningful label to the aria-label attribute.
