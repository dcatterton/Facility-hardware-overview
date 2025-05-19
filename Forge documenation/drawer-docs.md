# Drawer

Drawers are used to display content that is not a primary focus of the page. They can be used for navigation, settings, or other secondary content.

There are two types of drawers:
- **dismissible**: can be hidden by the user via a button provided by the developer
- **permanent**: always visible

```html
<forge-scaffold style="--forge-scaffold-height: 300px;">
  <forge-app-bar slot="header" title-text="Drawer Demo">
    <forge-app-bar-menu-button slot="start"></forge-app-bar-menu-button>
  </forge-app-bar>
  <forge-drawer slot="body-left">
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
  </forge-drawer>
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
| content | The content container element. |
| root | The component's root element. |

## Accessibility

The drawer component does not provide any semantics by default. Developers should provide their own `<aside>` for navigation, or various ARIA roles in other scenarios.

## CSS-Only

The drawer component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only drawer component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/drawer/forge-drawer.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-drawer | The drawer element. |
| forge-drawer--right | The drawer element when positioned to the right. |
| forge-drawer--mini | Renders a smaller width variant of the drawer for rail navigation. |
| forge-drawer--closing | Triggers the drawer dismiss animation. |
| forge-drawer--closed | Applied when the drawer is dismissed. |
