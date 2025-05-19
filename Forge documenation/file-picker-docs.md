# File Picker

The file picker component allows for a user to upload files of their own to the system. The component provides a slot for a button, as well as drag-and-drop functionality to launch the system file chooser dialog. There are visual queues to let the user know when files they are dragging can be dropped, as well as events that are relayed to the developer to handle files that are legal and/or illegal based on the parameters set on the component.

The expectation of this component is that it will be used as a familiar element on the page that will let users upload files, while providing that visual and functional consistency.

```html
<forge-file-picker>
  <span slot="primary">Drag files here or</span>
  <span slot="secondary">Secondary text here</span>
  <forge-button variant="outlined">Select files</forge-button>
  <span slot="helper-text">Helper text goes here</span>
</forge-file-picker>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accept | string \| null | null | Gets/sets the allowed file types. |
| borderless | boolean | false | Gets and sets whether the file picker is borderless. |
| capture | string \| null | null | Gets/sets the camera to use when capturing video or images. |
| compact | boolean | false | Gets/sets whether the file picker uses the compact variant. |
| disabled | boolean | false | Gets/sets whether the file picker is disabled. |
| maxSize | string \| null | null | Gets/sets the maximum allowed file size. |
| multiple | boolean | false | Gets/sets whether multiple files are allowed. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| accept | string \| null | null | Gets/sets the allowed file types. |
| borderless | boolean | false | Gets and sets whether the file picker is borderless. |
| capture | string \| null | null | Gets/sets the camera to use when capturing video or images. |
| compact | boolean | false | Gets/sets whether the file picker uses the compact variant. |
| disabled | boolean | false | Gets/sets whether the file picker is disabled. |
| maxSize | string \| null | null | Gets/sets the maximum allowed file size. |
| multiple | boolean | false | Gets/sets whether multiple files are allowed. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-file-picker-change | Dispatched when a file is chosen. | CustomEvent< IFilePickerChangeEventData > |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-file-picker-background | Controls the background color. |
| --forge-file-picker-border-color | Controls the border color. |
| --forge-file-picker-border-style | Controls the border style. |
| --forge-file-picker-border-width | Controls the border width. |
| --forge-file-picker-disabled-opacity | Controls the opacity value of the file picker when it's disabled. |
| --forge-file-picker-gap | Controls gap between each element. |
| --forge-file-picker-height | Controls the height. |
| --forge-file-picker-highlight-background | Controls the background color of the file picker when dragging files into the form. |
| --forge-file-picker-highlight-border-color | Controls the border color of the file picker when dragging files into the form. |
| --forge-file-picker-max-width | Controls the maximum width. |
| --forge-file-picker-padding | Controls the padding. |
| --forge-file-picker-padding-block | Controls the top and bottom padding. |
| --forge-file-picker-padding-inline | Controls the left and right padding. |
| --forge-file-picker-width | Controls the width. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| form | The `<form>` element at the root. |
| helper-text-container | The container around the helper-text slot. |
| input | The `<input type="file">` element. |
| primary | The container element around the primary slot. |
| secondary | The container element around the secondary slot. |

## Accessibility

- The file-picker button should have text or a label that accurately describes the action of the button.
- After the system file picker dialog closes, focus should remain on the element that triggered the action.
- Always use `type="button"` on the `<button>` element to ensure that any parent forms are not submitted when clicking the button.
