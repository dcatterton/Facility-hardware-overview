# Chips

Chips allow users to enter information, make selections, filter content, or trigger actions. Chips should appear dynamically as a group of multiple interactive elements, unlike buttons, which should be a consistent and familiar call to action.

```html
<forge-chip-set>
  <forge-chip value="payments">Payments</forge-chip>
  <forge-chip value="bills">Bills</forge-chip>
  <forge-chip value="adjustments">Adjustments</forge-chip>
</forge-chip-set>
```

## Anchor

Chips can be used as an anchor by providing the href attribute. This will render the chip as an anchor tag.

```html
<forge-chip-set>
  <forge-chip value="payments" href="javascript: void(0);">
    Anchor
    <forge-icon name="open_in_new" slot="end"></forge-icon>
  </forge-chip>
</forge-chip-set>
```

## Avatar

Chips also work well with avatars. You can add an avatar to the left or right of the chip with the `<forge-avatar>` component.

```html
<forge-chip-set>
  <forge-chip value="ruby">
    <forge-avatar
      size="small"
      image-url="./ruby-side.jpg"
      slot="start"
    ></forge-avatar>
    Ruby
  </forge-chip>
  <forge-chip value="leo">
    <forge-avatar
      size="small"
      image-url="./leo.png"
      slot="start"
    ></forge-avatar>
    Leo
  </forge-chip>
  <forge-chip value="harley">
    <forge-avatar
      size="small"
      image-url="./harley.jpg"
      slot="start"
    ></forge-avatar>
    Harley
  </forge-chip>
</forge-chip-set>
```

## API

### Chip Set

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | false | Whether the chip set is dense. |
| disabled | boolean | false | Whether the chip set is disabled. |
| invalid | boolean | false | Whether the chip set is invalid. |
| theme | ChipTheme | 'primary' | The theme of the chip set. |
| type | ChipType | 'action' | The type of chip. |
| vertical | boolean | false | Whether the chip set is vertical. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | - | Whether all chips in the chip set are dense. |
| disabled | boolean | - | Whether all chips in the chip set are disabled. |
| invalid | boolean | - | Whether all chips in the chip set are invalid. |
| theme | ChipTheme | - | The theme of the chips. |
| type | ChipType | - | The type of chips. |
| vertical | boolean | - | Whether the chip set is vertically oriented. |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The chips to display in the chip set. |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-chip-set-spacing | The spacing between chips. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| root | The component's root element. |

### Chip

#### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | - | Whether the chip is dense. |
| disabled | boolean | - | Whether the chip is disabled. |
| download | string | - | The download of the chip. |
| href | string | - | The href of the chip. |
| invalid | boolean | - | Whether the chip is invalid. |
| rel | string | - | The rel of the chip. |
| selected | boolean | - | Whether the chip is selected. |
| target | string | - | The target of the chip. |
| theme | ChipTheme | - | The theme of the chip. |
| type | ChipType | - | The type of chip. |
| value | unknown | - | The value of the chip. |

#### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| dense | boolean | - | Whether the chip is dense. |
| disabled | boolean | - | Whether the chip is disabled. |
| download | string | - | The download of the chip. |
| href | string | - | The href of the chip. |
| invalid | boolean | - | Whether the chip is invalid. |
| rel | string | - | The rel of the chip. |
| selected | boolean | - | Whether the chip is selected. |
| target | string | - | The target of the chip. |
| theme | ChipTheme | - | The theme of the chip. |
| type | ChipType | - | The type of chip. |
| value | unknown | - | The value of the chip. |

#### Events

| Name | Description | Type |
|------|-------------|------|
| forge-chip-delete | Event fired when the chip is deleted. | CustomEvent< IChipDeleteEventData > |
| forge-chip-select | Event fired when the chip is selected. | CustomEvent< IChipSelectEventData > |

#### Slots

| Name | Description |
|------|-------------|
| (default) | The content of the chip. |
| end | The end content of the chip. |
| start | The start content of the chip. |

#### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| click() | - | - | void |
| focus() | - | options: FocusOptions | void |
| focusRemoveButton() | - | - | void |

#### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-chip-avatar-font-size | The font size of the avatar in chips. |
| --forge-chip-avatar-font-size-dense | The font size of the avatar in dense chips. |
| --forge-chip-avatar-size | The size of the avatar in chips. |
| --forge-chip-avatar-size-dense | The size of the avatar in dense chips. |
| --forge-chip-avatar-spacing | The spacing of the avatar in chips. |
| --forge-chip-avatar-spacing-dense | The spacing of the avatar in dense chips. |
| --forge-chip-background | The background color of the chip. |
| --forge-chip-border-color | The color of the chip border. |
| --forge-chip-border-style | The style of the chip border. |
| --forge-chip-border-width | The width of the chip border. |
| --forge-chip-checkmark-color | The color of the checkmark in chips. |
| --forge-chip-checkmark-size | The size of the checkmark in chips. |
| --forge-chip-checkmark-spacing | The spacing of the checkmark in chips. |
| --forge-chip-checkmark-transition-delay | The delay of the checkmark transition in chips. |
| --forge-chip-color | The background color of the chip. |
| --forge-chip-cursor | The cursor style of the chip. |
| --forge-chip-dense-focus-indicator-offset | The offset of the focus indicator for dense chips. |
| --forge-chip-dense-font-size | The font size of the dense chip. |
| --forge-chip-dense-font-weight | The font weight of the dense chip. |
| --forge-chip-dense-height | The height of the dense chip. |
| --forge-chip-dense-icon-font-size | The font size of the icon in dense chips. |
| --forge-chip-dense-padding-inline | The inline padding of the dense chip. |
| --forge-chip-dense-spacing | The spacing between dense chips. |
| --forge-chip-disabled-cursor | The cursor style of the disabled chip. |
| --forge-chip-disabled-opacity | The opacity of the disabled chip. |
| --forge-chip-field-background | The background color of the chip field. |
| --forge-chip-field-border-color | The color of the chip field border. |
| --forge-chip-field-color | The text color of the chip field. |
| --forge-chip-field-cursor | The cursor style of the chip field. |
| --forge-chip-field-shape | The shape of the chip field. |
| --forge-chip-focus-indicator-color | The color of the focus indicator. |
| --forge-chip-height | The height of the chip. |
| --forge-chip-icon-font-size | The font size of the chip icon. |
| --forge-chip-invalid-color | The text color of the invalid chip. |
| --forge-chip-invalid-selected-background | The background color of the invalid selected chip. |
| --forge-chip-invalid-selected-color | The text color of the invalid selected chip. |
| --forge-chip-padding-block | The block padding of the chip. |
| --forge-chip-padding-inline | The inline padding of the chip. |
| --forge-chip-remove-button-height-dense | The height of the remove button in dense chips. |
| --forge-chip-remove-button-icon-size-dense | The icon size of the remove button in dense chips. |
| --forge-chip-remove-button-spacing | The spacing of the remove button in chips. |
| --forge-chip-remove-button-spacing-dense | The spacing of the remove button in dense chips. |
| --forge-chip-selected-background | The background color of the selected chip. |
| --forge-chip-selected-color | The text color of the selected chip. |
| --forge-chip-shape | The shape of the chip. |
| --forge-chip-spacing | The spacing between chips. |
| --forge-chip-transition-duration | The duration of the chip transition. |
| --forge-chip-transition-easing | The easing function of the chip transition. |

#### CSS Shadow Parts

| Name | Description |
|------|-------------|
| focus-indicator | The focus indicator of the chip. |
| root | The component's root element. |
| state-layer | The state layer surface. |
| trigger | The trigger element of the chip. |

## Accessibility

- Verify that you can tab to each chip component.
- Ensure that there is a visual cue that the chip component is active or inactive, and/or currently focused.
- Verify that pressing the space bar or enter key while focusing on a chip will toggle it in the same manner as if it had been clicked by a mouse.
- If a chip has a delete icon, ensure it can be focused and activated independently of the chip itself.
- Be sure to include a role attribute to indicate to screen readers what the chip is being used for.
- Verify that there is sufficient contrast between the foreground text and background to meet WCAG requirements.
- If color conveys important information, provide additional cues for users with color perception deficiencies.

## CSS-Only

Chips are also available as CSS-only components without the need for JavaScript.

To use the CSS-only chip set component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/chips/forge-chips.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-chip-set | The chip container element. |
| forge-chip-set--vertical | Renders the chips vertically. |
| forge-chip | The interactive button-like element. |
| forge-chip--invalid | Invalid chips. |
| forge-chip--selected | Selected chips. |
| forge-chip--field | Renders a chip in its field variant (for use within inputs). |
| forge-chip--dense | Uses a smaller font size and height. |
