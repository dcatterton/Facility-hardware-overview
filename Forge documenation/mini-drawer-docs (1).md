# Mini Drawer

Mini drawers are used to display secondary content, and are typically used for navigation menu purposes.

There are two types of mini drawers:
- **dismissible**: can be hidden by the user via a button provided by the developer
- **permanent**: always visible

The mini drawer component is a variant of the standard Drawer component, but with a smaller width.

```html
<forge-scaffold style="--forge-scaffold-height: 300px;">
  <forge-app-bar slot="header" title-text="Drawer Demo">
    <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
  </forge-app-bar>
  <forge-mini-drawer slot="body-left">
    <aside>
      <forge-list navlist>
        <forge-list-item selected id="tooltip-host-1">
          <forge-tooltip anchor="tooltip-host-1">Inbox</forge-tooltip>
          <forge-icon slot="start" name="inbox"></forge-icon>
          <a href="javascript: void(0)">Inbox</a>
        </forge-list-item>
        <forge-list-item id="tooltip-host-2">
          <forge-tooltip anchor="tooltip-host-2">Sent</forge-tooltip>
          <forge-icon slot="start" name="send"></forge-icon>
          <a href="javascript: void(0)">Sent</a>
        </forge-list-item>
        <forge-list-item id="tooltip-host-3">
          <forge-tooltip anchor="tooltip-host-3">Drafts</forge-tooltip>
          <forge-icon slot="start" name="drafts"></forge-icon>
          <a href="javascript: void(0)">Drafts</a>
        </forge-list-item>
      </forge-list>
    </aside>
  </forge-mini-drawer>
  <main
    slot="body"
    style="padding: 16px; background-color: var(--forge-theme-surface-dim);"
  >
    <forge-card>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </forge-card>
  </main>
</forge-scaffold>
```

## Hover

The mini drawer can be configured to open to a larger width when hovered with a pointer. This is useful for desktop applications where the user has a mouse.

```html
<forge-scaffold style="--forge-scaffold-height: 300px;">
  <forge-app-bar slot="header" title-text="Drawer Demo">
    <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
  </forge-app-bar>
  <forge-mini-drawer slot="body-left" hover>
    <aside>
      <forge-list navlist>
        <forge-list-item selected id="tooltip-host-1">
          <forge-icon slot="start" name="inbox"></forge-icon>
          <a href="javascript: void(0)">Inbox</a>
        </forge-list-item>
        <forge-list-item id="tooltip-host-2">
          <forge-icon slot="start" name="send"></forge-icon>
          <a href="javascript: void(0)">Sent</a>
        </forge-list-item>
        <forge-list-item id="tooltip-host-3">
          <forge-icon slot="start" name="drafts"></forge-icon>
          <a href="javascript: void(0)">Drafts</a>
        </forge-list-item>
      </forge-list>
    </aside>
  </forge-mini-drawer>
  <main
    slot="body"
    style="padding: 16px; background-color: var(--forge-theme-surface-dim);"
  >
    <forge-card>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </forge-card>
  </main>
</forge-scaffold>
```

Note: The hover feature is not available on touch devices.

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| direction | DrawerDirection | "left" | Controls the layout and animation direction of the drawer for positioning on the left vs. right side of the screen when toggling the open attribute. |
| hover | boolean | false | The drawer will expand open when hovered. |
| open | boolean | false | Toggles whether the drawer is visible or not. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| direction | DrawerDirection | "left" | Controls the layout and animation direction of the drawer for positioning on the left vs. right side of the screen when toggling the open attribute. |
| hover | boolean | false | The drawer will expand open when hovered. |
| open | boolean | false | Toggles whether the drawer is visible or not. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-drawer-after-close | Dispatched after the drawer has closed. | CustomEvent<void> |
| forge-drawer-after-open | Dispatched after the drawer has opened. | CustomEvent<void> |

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
| --forge-mini-drawer-delay | The delay before the drawer closes when the mouse leaves the drawer. |
| --forge-mini-drawer-hover-transition-delay | The delay before the drawer closes when the mouse leaves the drawer when hovered. |
| --forge-mini-drawer-hover-transition-duration | The transition duration of the drawer when hovered. |
| --forge-mini-drawer-hover-transition-easing | The transition timing function of the drawer when hovered. |
| --forge-mini-drawer-hover-width | The width of the drawer when hovered. |
| --forge-mini-drawer-min-width | The minimum width of the drawer. Defaults to match the width. |
| --forge-mini-drawer-transition-duration | The transition duration of the drawer. |
| --forge-mini-drawer-transition-easing | The transition timing function of the drawer. |
| --forge-mini-drawer-width | The width of the drawer. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| container | The container element around the content. |
| content | The content container element. |
| root | The component's root element. |

## Accessibility

The drawer component does not provide any semantics by default. Developers should provide their own `<aside>` for navigation, or various ARIA roles in other scenarios.
