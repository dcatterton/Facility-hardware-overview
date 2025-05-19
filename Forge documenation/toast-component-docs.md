# Toast

Toasts are non-modal notifications that appear in response to user interactions. They can optionally provide a dismissible button, but automatically dismiss after a set duration.

```html
<forge-button variant="raised">Show Toast</forge-button>
<forge-toast>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</forge-toast>
```

## Dismissible

Toasts can be dismissed by the user when setting `dismissible` to `true`.

```html
<forge-button variant="raised">Show Toast</forge-button>
<forge-toast dismissible>This toast is dismissible!</forge-toast>
```

## Dynamic Usage

Toasts are typically created dynamically in response to user interactions. The following example demonstrates how to create a toast from JavaScript.

```javascript
ToastComponent.present({ message: 'Save successful' });
```

Toasts will automatically dismiss after the duration elapses and remove themselves from the DOM.

## Declarative Usage

Toasts can also be used inline declaratively in your HTML and toggled via the `open` property/attribute.

```html
<forge-toast open>Save successful</forge-toast>
```

Inline toasts do not automatically remove themselves from the DOM. You must toggle the `open` attribute to hide the toast.

## Angular Usage

The Angular adapter provides a `ToastService` that can be used to show toasts from your Angular components.

```typescript
import { ToastService } from '@tylertech/forge-angular';

@Component({
  selector: 'app-my-component',
  template: `<button (click)="showToast()">Show Toast</button>`
})
export class MyComponent {
  constructor(private toastService: ToastService) { }
  
  showToast() {
    this.toastService.show({ message: 'Save successful' });
  }
}
```

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| actionText | string | - | The text for the action button. This controls the visibility of the action button. | |
| dismissible | boolean | false | Whether the toast is dismissible (displays a close button). | ✅ |
| dismissLabel | string | - | The accessible label for the dismiss button. | |
| duration | number | 2750 | The duration in milliseconds that the toast is displayed. | ✅ |
| open | boolean | false | The open state. | |
| placement | ToastPlacement | "bottom" | The placement of the toast. | ✅ |
| theme | ToastTheme | "default" | The theme of the toast. | |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| action-text | string | - | The text for the action button. This controls the visibility of the action button. |
| dismiss-label | string | - | The accessible label for the dismiss button. |
| dismissible | boolean | false | Whether the toast is dismissible (displays a close button). |
| duration | number | 2750 | The duration in milliseconds that the toast is displayed. |
| open | boolean | false | The open state. |
| placement | ToastPlacement | - | The placement of the toast. |
| theme | ToastTheme | "default" | The theme of the toast. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-toast-action | Dispatched when the action button is clicked. | CustomEvent<void> |
| forge-toast-close | Dispatched when the toast is closed. | CustomEvent<void> |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| hide() | Hides the toast. | - | - |
| show() | Shows the toast. | - | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-toast-action-color | The text color of the action button. |
| --forge-toast-background | The background color of the toast. |
| --forge-toast-color | The text color of the toast. |
| --forge-toast-elevation | The elevation of the toast. |
| --forge-toast-enter-duration | The duration of the enter animation. |
| --forge-toast-enter-timing | The timing function of the enter animation. |
| --forge-toast-exit-duration | The duration of the exit animation. |
| --forge-toast-exit-timing | The timing function of the exit animation. |
| --forge-toast-inline-padding | The padding of the toast when inline. |
| --forge-toast-max-width | The maximum width of the toast. |
| --forge-toast-message-padding | The padding of the toast message. |
| --forge-toast-min-height | The minimum height of the toast. |
| --forge-toast-min-width | The minimum width of the toast. |
| --forge-toast-offset | The offset of the toast from the edge of the viewport. |
| --forge-toast-shape | The shape of the toast. |
| --forge-toast-slide-origin | The origin of the slide animation. |
| --forge-toast-spacing | The spacing between toasts. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| action-button | The action button. |
| close-button | The close button. |
| message | The message container. |
| overlay | The `<forge-overlay>` element. |
| surface | The surface container. |

## Dependencies

This component will automatically include the following components:
- `<forge-button>`
- `<forge-icon>`
- `<forge-icon-button>`
- `<forge-overlay>`

## Accessibility

- Ensure that the dismiss button is accessible by keyboard.
- If color conveys important information, provide additional cues for users with color perception deficiencies.
