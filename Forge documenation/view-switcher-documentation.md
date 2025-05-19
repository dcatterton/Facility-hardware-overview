# View Switcher

The view switcher component allows users to toggle between different views of content. This component is often used in conjunction with tabs to control which view is actively displayed.

> **Note**: Content hidden by this component is still present in the DOM unless you control it manually.

## Basic Usage

```html
<forge-tab-bar active-tab="0">
  <forge-tab>Tab 1</forge-tab>
  <forge-tab>Tab 2</forge-tab>
  <forge-tab>Tab 3</forge-tab>
</forge-tab-bar>

<forge-view-switcher>
  <forge-view name="view1">View 1</forge-view>
  <forge-view name="view2">View 2</forge-view>
  <forge-view name="view3">View 3</forge-view>
</forge-view-switcher>

<style>
  forge-view {
    width: 100%;
    height: 200px;
    border: 2px dashed grey;
    display: flex;
    justify-content: center;
    align-items: center
  }
  forge-tab-bar {
    margin-bottom: 12px
  }
</style>
```

## Animations

The view switcher can animate between views using the views via the `animationType` property/attribute. The following animations are available:

- **slide**: The new view slides in from the right while the old view slides out to the left.
- **fade**: The new view fades in while the old view fades out.
- **none**: The new view replaces the old view without any animation. This is the default.

## API

### View Switcher

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| animationType | `${ ViewSwitcherAnimationType }` \| ViewSwitcherAnimation | "none" | Gets/sets the animation type. |
| index | number | 0 | Gets/sets the currently visible view index. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| animation-type | `${ ViewSwitcherAnimationType }` \| ViewSwitcherAnimation | "none" | Gets/sets the animation type. |
| index | number | 0 | Gets/sets the currently visible view index. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| goToEnd() | Transitions to the last view. | - | void |
| goToStart() | Transitions to the first view. | - | void |
| next() | Transitions to the next view. | - | void |
| previous() | Transitions to the previous view. | - | void |

### Dependencies

This component will automatically include the following components:
- `<forge-view>`

### View

#### Accessibility

- Verify that you can tab into the `<forge-view>` content.
- Verify that you can access elements within `<forge-view>` content using only the keyboard.
