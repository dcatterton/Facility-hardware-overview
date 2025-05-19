# Dialog

Dialogs are used to display content in a layer above the rest of the page. They are typically used for confirmations, alerts, or to display additional information. Dialogs can be modal or non-modal.

```html
<div>
  <forge-button variant="raised">Open dialog</forge-button>
  <forge-dialog>
    <forge-scaffold>
      <forge-toolbar slot="header" no-divider>
        <h1 class="forge-typography--heading4" id="dialog-title" slot="start">
          Title text
        </h1>
        <forge-icon-button slot="end" aria-label="Close dialog">
          <forge-icon name="close"></forge-icon>
        </forge-icon-button>
      </forge-toolbar>
      <p slot="body" id="dialog-message">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed
        pariatur error repellendus eos! Quas, optio esse ad illum quis
        blanditiis rerum quia. Corrupti, ad hic velit praesentium voluptatum
        dolores?
      </p>
      <forge-toolbar slot="footer" no-divider>
        <forge-button slot="end" variant="raised">Close</forge-button>
      </forge-toolbar>
    </forge-scaffold>
  </forge-dialog>
</div>
<style>
  forge-dialog:not([fullscreen]) forge-scaffold {
    --forge-scaffold-width: 500px;
  }
  forge-dialog forge-scaffold {
    height: auto;
  }
  forge-dialog forge-scaffold h1 {
    margin: 0;
  }
  forge-dialog forge-scaffold > [slot=body] {
    padding: var(--forge-spacing-medium);
  }
</style>
```

The `<forge-dialog>` uses the native `<dialog>` element under the hood, which is now supported in all modern browsers.

## Usage

When creating a dialog it is important to consider the following:

- **Content**: The content of the dialog should be clear and concise. Use semantic elements to structure the content.
- **Actions**: Provide clear actions for the user to take. Use buttons to provide actions such as "Cancel" or "Save".
- **Accessibility**: Ensure that the dialog is accessible to all users. Use the label and description attributes to provide context to screen readers.

You can not use the standard `aria-labelledby` and `aria-describedby` attributes on the `<forge-dialog>` element as they cannot be set on the internal native `<dialog>` element due to browser limitations. Instead, use the `label` and `description` attributes to provide the same functionality and we'll add the necessary ARIA attributes for you.

When the browsers support ARIA attributes across shadow boundaries in the future, we will update the component to use the standard attributes and make an announcement.

The `<forge-dialog>` will size itself based on the content that it contains. You should always use a single root element within the dialog to ensure proper sizing. It is common to compose the `<forge-dialog>` together with the `<forge-scaffold>` to provide a consistent layout.

```html
<forge-dialog label="My dialog title" description="My dialog description">
  <forge-scaffold>
    <forge-toolbar slot="header">
      <h2 slot="start">Dialog Title</h2>
    </forge-toolbar>
    <p>Dialog Description</p>
    <forge-toolbar slot="footer">
      <forge-button slot="end">Close</forge-button>
    </forge-toolbar>
  </forge-scaffold>
</forge-dialog>
```

To ensure that your scaffold can flex with the dialog surface on smaller screens, make sure to apply the `height: auto` style to the `<forge-scaffold>` element. This is because the scaffold uses a `height: 100%` by default which can cause the dialog to overflow on smaller screens.

Additionally, you can set a width or min-width on the `<forge-scaffold>` element to ensure that the dialog is not too narrow and/or wide in various screens sizes.

```css
forge-scaffold {
  height: auto;
  width: 100%;
  min-width: 500px;
}
```

## Prevent Close

You can prevent the dialog from closing by listening for the `forge-dialog-before-close` event and calling `event.preventDefault()`. This can be useful when you need to validate user input before closing the dialog, or show a progress indicator while an async operation completes before closing the dialog.

Note: The `forge-dialog-before-close` event is only dispatched in response to light dismiss actions, such as clicking the backdrop or pressing the Escape key.

## Fullscreen

Dialogs can be displayed in fullscreen mode by setting the `fullscreen` property or attribute. This will cause the dialog to fit the viewport height and width, and is typically used on smaller viewports and mobile devices.

Additionally, the dialog will automatically adjust itself to be fullscreen when the viewport width is less than 600px. This is to ensure that the dialog is always usable on smaller screens, and to alleviate the burden for developers to manage this manually since it is a common desired behavior.

If you need to adjust the breakpoint at which the dialog switches to fullscreen mode, you can use the `fullscreenThreshold` property to set a custom breakpoint in pixels. Or if you'd like to disable the automatic fullscreen functionality entirely, you can set the `fullscreenThreshold` property to 0 and the dialog will never automatically switch to fullscreen unless you explicitly set the `fullscreen` attribute.

## Focus Trap

The `<forge-dialog>` uses the native `<dialog>` element under the hood, which automatically traps focus within the dialog when it is open by making the rest of the page `inert`. This means that users cannot interact with elements outside of the dialog content while it is open.

Previous implementations of Forge did not use the native `<dialog>` element, and adding focus traps required additional JavaScript to implement. This is no longer the case, and you should be able to safely remove any focus trap logic or libraries now!

Note: the focus is not "cycled" within the dialog content. The user can tab out of it to the browser itself. This is expected and it's an important accessibility feature.

## Modes

Dialogs modes are used to determine how the dialog is displayed on the page. The following modes are available:

- **modal**: Renders the modal in the top layer above all other content with a backdrop, and the rest of the page is `inert`.
- **nonmodal**: Renders the dialog in the normal flow of the page, but still above other content within its containing block.
- **inline-modal**: Renders the dialog in the normal flow of the page, but still above other content within its containing block, and with a backdrop. The rest of the page is not inert with this mode.

## Presets

The dialog component supports a number of presets to help you style your dialog. The following presets are available:

- **dialog**: The default dialog style centered in the viewport.
- **left-sheet**: A dialog that slides in from the left side of the viewport.
- **right-sheet**: A dialog that slides in from the right side of the viewport.
- **bottom-sheet**: A dialog that slides in from the bottom of the viewport.
- **top-sheet**: A dialog that slides in from the top of the viewport.

You can use the sidesheet presets in place of modal drawers or sidebars to display additional information or actions.

## Inline Usage

While dialogs are typically created dynamically and appended to the document, you can also use them inline in your HTML declaratively without any JavaScript via the `trigger` attribute:

```html
<button id="open-dialog">Open dialog</button>
<forge-dialog trigger="open-dialog" label="My dialog title" description="My dialog description">
  <h2>Dialog Title</h2>
  <p>Dialog Description</p>
</forge-dialog>
```

## Angular Adapter

In Angular it is common to show dialogs dynamically with Angular components rendered inside the dialog via services. The `@tylertech/forge-angular` adapter library provides the `DialogService` to make this easy.

```typescript
import { Component, Inject } from '@angular/core';
import { DialogService } from '@tylertech/forge-angular';
import { DIALOG_DATA, DialogRef } from '@tylertech/forge-angular';

@Component({
  selector: 'app-my-component',
  template: `<button (click)="openDialog()">Open Dialog</button>`
})
export class MyComponent {
  constructor(private dialogService: DialogService) {}

  openDialog() {
    // Configuration to pass to the `<forge-dialog>` element
    const options: IDialogOptions = {
      preset: 'right-sheet',
      label: 'My dialog title',
      description: 'My dialog description',
    };

    // Data to inject into your Angular component via the `@Inject(DIALOG_DATA)` provider
    const data = {
      title: 'Dialog Title',
      description: 'Dialog Description'
    };

    // Show the dialog with your Angular component
    const dialogRef = this.dialogService.open(MyDialogComponent, { options, data });

    // Listen to dialog lifecycle events
    // This observable will emit when the forge-dialog-before-close event is dispatched
    dialogRef.beforeClose.pipe(takeUntil(dialogRef.afterClosed)).subscribe(evt => {
      evt.preventDefault(); // Prevent the dialog from closing, if needed
      console.log('Dialog closing');
    });

    // This observable will emit when the forge-dialog-close event is dispatched
    dialogRef.afterClosed.subscribe(() => {
      console.log('Dialog closed');
    });
  }
}

export interface IConfirmDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-my-dialog',
  styles: [`
    .container {
      width: 500px;
    }
  `],
  template: `
    <div class="container">
      <h2>{{ data.title }}</h2>
      <p>{{ data.description }}</p>
      <button (click)="onClose()">Close</button>
    </div>
  `
})
export class MyDialogComponent {
  constructor(
    @Inject(DIALOG_DATA) public data: IConfirmDialogData,
    private _dialogRef: DialogRef
  ) {}

  public onClose(): void {
    this._dialogRef.close();
  }
}
```

## API

### Properties

| Name | Type | Default | Description | Global Config |
|------|------|---------|-------------|--------------|
| animationType | DialogAnimationType | 'zoom' | The animation type of the dialog. | ✅ |
| description | string | '' | The accessible description of the dialog. | |
| fullscreen | boolean | false | Indicates whether the dialog is fullscreen or not. | |
| fullscreenThreshold | number | 599 | The screen width at which the dialog will switch to fullscreen. | ✅ |
| label | string | '' | The accessible label of the dialog. | |
| mode | DialogMode | 'modal' | The mode of the dialog. | ✅ |
| moveable | boolean | false | Indicates whether the dialog is moveable or not. | ✅ |
| open | boolean | false | Indicates whether the dialog is open. | |
| persistent | boolean | false | Indicates whether the dialog is dismissible via escape and backdrop click or not. | ✅ |
| placement | DialogPlacement | 'center' | The placement of the dialog. | |
| positionStrategy | DialogPositionStrategy | 'viewport' | Controls whether the dialog is rendered relative to the viewport or its nearest containing block. | ✅ |
| preset | DialogPreset | 'dialog' | The preset design that the dialog will apply. | |
| sizeStrategy | DialogSizeStrategy | 'content' | Controls the block and/or inline size of the dialog. Defaults to the size of the content it contains. | ✅ |
| trigger | string | '' | The selector of the element that triggers the dialog. | |
| triggerElement | HTMLElement \| null | null | The element that triggers the dialog. | |
| type | DialogType | 'dialog' | The type of the dialog. | |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| animation-type | DialogAnimationType | 'zoom' | The animation type of the dialog. |
| description | string | '' | The accessible description of the dialog. |
| fullscreen | boolean | false | Indicates whether the dialog is fullscreen or not. |
| fullscreen-threshold | number | 599 | The screen width at which the dialog will switch to fullscreen. |
| label | string | '' | The accessible label of the dialog. |
| mode | DialogMode | 'modal' | The mode of the dialog. |
| moveable | boolean | false | Indicates whether the dialog is moveable or not. |
| open | boolean | false | Indicates whether the dialog is open. |
| persistent | boolean | false | Indicates whether the dialog is dismissible via escape and backdrop click or not. |
| placement | DialogPlacement | 'center' | The placement of the dialog. |
| position-strategy | DialogPositionStrategy | 'viewport' | Controls whether the dialog is rendered relative to the viewport or its nearest containing block. |
| preset | DialogPreset | 'dialog' | The preset design that the dialog will apply. |
| size-strategy | DialogSizeStrategy | 'content' | Controls the block and/or inline size of the dialog. Defaults to the size of the content it contains. |
| trigger | string | '' | The selector of the element that triggers the dialog. |
| type | DialogType | 'dialog' | The type of the dialog. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-dialog-before-close | Dispatched before the dialog is closed. This event is cancelable. | CustomEvent< IDialogBeforeCloseEventData > |
| forge-dialog-close | Dispatched when the dialog is closed. | CustomEvent<void> |
| forge-dialog-fullscreen-change | Dispatched when the dialog's fullscreen state changes. | CustomEvent<boolean> |
| forge-dialog-move | Dispatched when the dialog is being moved. | CustomEvent< IDialogMoveEventData > |
| forge-dialog-move-end | Dispatched when the dialog is done being moved. | CustomEvent<void> |
| forge-dialog-move-start | Dispatched when the dialog is first moved. | CustomEvent< IDialogMoveStartEventData > |
| forge-dialog-open | Dispatched when the dialog is opened. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The content of the dialog. |
| move-handle | The move handle content. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| hide() | Hides the dialog. | - | void |
| show() | Shows the dialog. | - | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-dialog-backdrop-opacity | The opacity of the dialog backdrop. |
| --forge-dialog-background | The background color of the dialog. |
| --forge-dialog-block-end-spacing | The spacing at the end of the dialog block. |
| --forge-dialog-block-start-spacing | The spacing at the start of the dialog block. |
| --forge-dialog-elevation | The elevation of the dialog. |
| --forge-dialog-enter-animation-duration | The duration of the enter animation. |
| --forge-dialog-enter-animation-easing | The easing function of the enter animation. |
| --forge-dialog-exit-animation-duration | The duration of the exit animation. |
| --forge-dialog-exit-animation-easing | The easing function of the exit animation. |
| --forge-dialog-fade-opacity | The opacity of the dialog during fade animation. |
| --forge-dialog-fullscreen-enter-animation-duration | The duration of the enter animation for fullscreen dialogs. |
| --forge-dialog-fullscreen-exit-animation-duration | The duration of the exit animation for fullscreen dialogs. |
| --forge-dialog-height | The height of the dialog. |
| --forge-dialog-inline-end-spacing | The spacing at the end of the dialog inline. |
| --forge-dialog-inline-start-spacing | The spacing at the start of the dialog inline. |
| --forge-dialog-max-height | The maximum height of the dialog. |
| --forge-dialog-max-width | The maximum width of the dialog. |
| --forge-dialog-min-height | The minimum height of the dialog. |
| --forge-dialog-min-width | The minimum width of the dialog. |
| --forge-dialog-move-handle-active-cursor | The cursor style when the move handle is active. |

### Dependencies

This component will automatically include the following components:

- `<forge-focus-indicator>`

### Accessibility

- When using a screen reader, ensure keyboard navigation in the dialog is announced.
- Be sure that you add the proper label and description to the `<forge-dialog>` element.
- The dialog component will add the following ARIA attributes for you:
  - `aria-label`
  - `aria-describedby`

### CSS-Only

The dialog component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only dialog component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/dialog/forge-dialog.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-dialog | The dialog container element (required). |
| forge-dialog__backdrop | The dialog backdrop element. |
| forge-dialog__content | The dialog content element. |
| forge-dialog--fullscreen | Makes the dialog fullscreen. |
| forge-dialog--moveable | Makes the dialog moveable. |
| forge-dialog--modal | Makes the dialog modal. |
| forge-dialog--nonmodal | Makes the dialog non-modal. |
| forge-dialog--persistent | Makes the dialog persistent. |
