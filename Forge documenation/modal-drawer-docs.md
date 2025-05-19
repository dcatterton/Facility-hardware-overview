# Modal Drawer

Modal drawers are used to display secondary content, such as navigation menus, and are typically used for mobile devices or smaller screens.

Modal drawers also have a backdrop that covers the entire screen when open, and can be dismissed by the user by clicking outside the drawer on the backdrop.

**Important**: modal drawers are being phased out in favor of dialogs with a preset. See the dialog component for more information.

```html
<forge-scaffold style="--forge-scaffold-height: 300px;">
  <forge-app-bar slot="header" title-text="Modal Drawer Demo">
    <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
  </forge-app-bar>
  <forge-modal-drawer slot="left">
    <aside>
      <forge-list navlist>
        <forge-list-item selected>
          <forge-icon slot="start" name="inbox"></forge-icon>
          <a href="javascript: void(0)">Inbox</a>
        </forge-list-item>
        <forge-list-item>
          <forge-icon slot="start" name="send"></forge-icon>
          <a href="javascript: void(0)">Outgoing</a>
        </forge-list-item>
        <forge-list-item indented>
          <a href="javascript: void(0)">Pending</a>
        </forge-list-item>
        <forge-list-item>
          <forge-icon slot="start" name="drafts"></forge-icon>
          <a href="javascript: void(0)">Drafts</a>
        </forge-list-item>
        <forge-list-item>
          <forge-icon slot="start" name="send"></forge-icon>
          <a href="javascript: void(0)">Sent</a>
        </forge-list-item>
      </forge-list>
    </aside>
  </forge-modal-drawer>
  <main slot="body">
    <forge-card>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </forge-card>
  </main>
</forge-scaffold>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| direction | DrawerDirection | "left" | Controls the layout and animation direction of the drawer for positioning on the left vs. right side of the screen when toggling the open attribute. |
| open | boolean | false | Toggles whether the drawer is visible or not. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| direction | DrawerDirection | "left" | Controls the layout and animation direction of the drawer for positioning on the left vs. right side of the screen when toggling the open attribute. |
| open | boolean | false | Toggles whether the drawer is visible or not. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-drawer-after-close | Dispatched after the drawer has closed. | CustomEvent<void> |
| forge-drawer-after-open | Dispatched after the drawer has opened. | CustomEvent<void> |
| forge-modal-drawer-close | Dispatched when the modal drawer is closed by clicking the backdrop. | CustomEvent<void> |

### Slots

| Name | Description |
|------|-------------|
| (default) | The content to display in the scrollable content container. |
| footer | The footer content below the main content. |
| header | The header content above the main content. |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-drawer-background | The background color of the drawer. |
| --forge-drawer-border-color | The border of the drawer. |
| --forge-drawer-border-width | The border width of the drawer. |
| --forge-drawer-duration-close | The duration of the drawer closing animation. |
| --forge-drawer-transition-duration | The transition duration of the drawer. |
| --forge-drawer-transition-easing | The transition timing function of the drawer. |
| --forge-drawer-width | The width of the drawer. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| backdrop | The backdrop root element. |
| content | The content container element. |
| root | The component's root element. |

### Dependencies

This component will automatically include the following components:
- `<forge-backdrop>`

### Accessibility

The drawer component does not provide any semantics by default. Developers should provide their own `<aside>` for navigation, or various ARIA roles in other scenarios.
