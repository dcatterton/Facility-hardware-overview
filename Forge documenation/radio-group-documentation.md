# Radio Group

A component to act as the semantic group for a set of radios.

Option 1   Option 2   Option 3

```html
<forge-radio-group name="radios">
  <forge-radio
    name="radios"
    value="1"
    label-position
    aria-disabled="false"
    tabindex="0"
  >
    Option 1
  </forge-radio>
  <forge-radio
    name="radios"
    value="1"
    tabindex="0"
    label-position
    aria-disabled="false"
  >
    Option 2
  </forge-radio>
  <forge-radio
    name="radios"
    value="1"
    tabindex="0"
    label-position
    aria-disabled="false"
  >
    Option 3
  </forge-radio>
</forge-radio-group>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Controls whether the radio group is disabled. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| disabled | boolean | false | Controls whether the radio group is disabled. |

Learn more about [Attributes](#).

## Dependencies

This component will automatically include the following components:
- `<forge-radio>`
