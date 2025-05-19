# Stepper

Steppers display progress through a sequence by breaking it up into multiple logical and numbered steps. They may also be used for navigation.

```html
<forge-stepper>
  <forge-step>Step 1</forge-step>
  <forge-step>
    Step 2
    <span slot="optional">Optional</span>
  </forge-step>
  <forge-step>
    <div slot="expansion-content">Expansion Content</div>
    Step 3
  </forge-step>
  <forge-step>Step 4</forge-step>
</forge-stepper>
```

## Linear vs Non-linear

Steppers are either linear or non-linear. This means that for linear steps the user needs to complete one step in order to move on to the next one. Non-linear steps allow for a more flexible way of navigation by allowing the user to jump to any step at any time.

## Vertical

Vertical steppers are designed for narrow layouts. They are ideal for mobile devices or drawers adjacent to the content they relate to.

```html
<forge-stepper vertical>
  <forge-step>Step 1</forge-step>
  <forge-step>
    Step 2
    <span slot="optional">Optional</span>
  </forge-step>
  <forge-step>
    <div slot="expansion-content">Expansion Content</div>
    Step 3
  </forge-step>
  <forge-step>Step 4</forge-step>
</forge-stepper>
```

## API

### Stepper

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alternative | boolean | false | Whether the stepper uses the default or alternative label layout mode. |
| disabled | boolean | false | Whether the stepper is disabled. |
| layoutAlign | StepperLayoutAlign | "center" | The layout alignment of the stepper. |
| layoutMode | StepperLayoutMode | "fixed" | The layout mode of the stepper. |
| linear | boolean | false | Whether the stepper is linear or non-linear. |
| selectedIndex | number | 0 | The active step index. |
| steps | IStepConfiguration[] | [] | The step configurations. |
| vertical | boolean | false | Whether the stepper is vertical. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alternative | boolean | false | Whether the stepper uses the default or alternative label layout mode. |
| disabled | boolean | false | Whether the stepper is disabled. |
| layout-align | StepperLayoutAlign | "center" | The layout alignment of the stepper. |
| layout-mode | StepperLayoutMode | "fixed" | The layout mode of the stepper. |
| linear | boolean | false | Whether the stepper is linear or non-linear. |
| selected-index | number | 0 | The active step index. |
| vertical | boolean | false | Whether the stepper is vertical. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-step-expanded-content-focusin | Emits the step component when the expanded content is focused. | CustomEvent<IStepComponent> |
| forge-step-expanded-content-focusout | Emits the step component when the expanded content is blurred. | CustomEvent<IStepComponent> |
| forge-step-select | Emits the index when a step is selected. | CustomEvent<number> |

#### Dependencies

This component will automatically include the following components:
- `<forge-step>`

### Step

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alternative | boolean | false | Whether the step is in the alternative style. |
| completed | boolean | false | Whether the step is completed. |
| disabled | boolean | false | Whether the step is disabled. |
| editable | boolean | false | Whether the step is editable. |
| error | boolean | false | Whether the step has an error. |
| expanded | boolean | false | Whether the step is expanded. |
| ignoreUserExpansion | boolean | false | Whether the step should ignore user expansion. |
| index | number | undefined | The index of the step. |
| selected | boolean | false | Whether the step is selected. |
| vertical | boolean | false | Whether the step is in vertical mode. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alternative | boolean | false | Whether the step is in alternative mode. |
| completed | boolean | false | Whether the step is completed. |
| disabled | boolean | false | Whether the step is disabled. |
| editable | boolean | false | Whether the step is editable. |
| error | boolean | false | Whether the step has an error. |
| expanded | boolean | false | Whether the step is expanded. |
| ignore-user-expansion | boolean | false | Whether the step should ignore user expansion. |
| index | number | undefined | The index of the step. |
| selected | boolean | false | Whether the step is selected. |
| vertical | boolean | false | Whether the step is in vertical mode. |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The content of the step. |
| expansion-content | The content of the step expansion. |
| optional | The optional content of the step. |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-step-border-radius | The border radius of the step. Defaults to the extra-large shape. |
| --forge-step-border-radius-vertical | The border radius of the step in vertical mode. Defaults to the medium shape. |
| --forge-step-disabled-color | The color of the step when disabled. Defaults to the surface-container-minimum theme. |
| --forge-step-disabled-text-color | The text color of the step when disabled. Defaults to the text-low theme. |
| --forge-step-error-color | The color of the step error. Defaults to the error theme. |
| --forge-step-error-text-color | The text color of the step error. Defaults to the on-error theme. |
| --forge-step-expansion-panel-border-left-width | The border left width of the step expansion panel. Defaults to 1px. |
| --forge-step-expansion-panel-icon-color | The color of the step expansion panel icon. Defaults to the text-medium theme. |
| --forge-step-expansion-panel-margin-bottom | The margin bottom of the step expansion panel. Defaults to 4px. |
| --forge-step-expansion-panel-margin-left | The margin left of the step expansion panel. Defaults to 60px. |
| --forge-step-expansion-panel-margin-top | The margin top of the step expansion panel. Defaults to 4px. |
| --forge-step-icon-content-size | The size of the step icon content. Defaults to 24px. |
| --forge-step-icon-fill | The fill color of the step icon. Defaults to unset. |
| --forge-step-icon-fill-active | The fill color of the step icon when active. Defaults to the primary color. |
| --forge-step-icon-size | The size of the step icon. Defaults to 0.875em. |
| --forge-step-icon-text-color | The text color of the step icon. Defaults to the primary theme. |
| --forge-step-icon-text-color-active | The text color of the step icon when active. Defaults to the on-primary theme. |
| --forge-step-icon-transition-duration | The duration of the step icon transition. Defaults to the medium4 animation duration. |
| --forge-step-icon-transition-easing | The easing of the step icon transition. Defaults to the standard animation easing. |
| --forge-step-label-color | The color of the step label. Defaults to the text-high theme. |
| --forge-step-line-color | The color of the step line. Defaults to the outline theme. |
| --forge-step-line-min-width | The minimum width of the step line. Defaults to 10px. |
| --forge-step-line-min-width-clustered | The minimum width of the step line when clustered. Defaults to 25px. |
| --forge-step-primary-color | The primary color of the step. Defaults to the primary theme. |
| --forge-step-sub-label-color | The color of the step sub-label. Defaults to the text-medium theme. |
| --forge-step-text-color | The text color of the step. Defaults to the on-primary theme. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| after | The line after the step. |
| before | The line before the step. |
| focus-indicator | The focus indicator element. |
| icon | The icon element. |
| icon-container | The icon container element. |
| icon-content | The icon content element. |
| index | The index content container. |
| root | The root element. |
| state-layer | The state layer surface element. |
| step | The step container element. |
| subtitle-container | The subtitle container element. |
| text-container | The text container element. |
| title-container | The title container element. |

## Accessibility

- Ensure that all of the controls that are accessible by a mouse are also accessible by keyboard.
- Ensure the controls are reachable by the tab key.
- Ensure each control can be updated or activated by the keyboard.
- The step element will receive the proper ARIA attribute `aria-selected` as necessary.
