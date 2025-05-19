# Time Picker

The time picker component can be used to allow the user to enter a time manually, or to choose a time from the configurable dropdown list of suggestions. The built-in input mask is enabled by default, and will force users to enter a time in either 12 hour (default) or 24 hour formats.

This component is composable and only requires that an `<input>` element be provided as one of its children. It's common that the component wraps a text-field component to provide the Forge look-and-feel, but it can technically attach itself to any instance of a child `<input>` element.

**Important**: all communication with this component through its APIs, such as getting/setting value or listen for change events must be in 24 hour time format. Ex. "15:30".

This is to ensure that a compatible format is used in all locales, as well as to provide a uniform way to interact with the component.

Values should always be set through the `<forge-time-picker>` element, not the `<input>` element.

You can still use attributes such as `placeholder` on the `<input>` but things like `value`, `disabled`, `min`, and `max` should be set on the `<forge-time-picker>` element itself.

> **Note**: When used in a form where you want the date to be required, you must set the `required` property on the embedded `<forge-text-field>` element, rather than the `<forge-time-picker>` element. This also applies to the `invalid` property.

## Example

```html
<forge-time-picker use-24-hour-time="false" allow-invalid-time="false">
  <forge-text-field>
    <input id="time-picker" type="text" />
    <label for="time-picker">Time</label>
  </forge-text-field>
</forge-time-picker>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowDropdown | boolean | false | Whether or not to allow the time picker to be a dropdown. |
| allowInput | boolean | false | Whether or not to allow manual input of the time. |
| allowInvalidTime | boolean | false | Whether or not to allow invalid times. |
| allowSeconds | boolean | false | Whether or not to allow seconds in the time picker. |
| coercionCallback | TimePickerCoercionCallback | undefined | A callback function to coerce the time. |
| customOptions | ITimePickerOption[] | [] | An array of custom time picker options. |
| disabled | boolean | false | Whether or not the time picker is disabled. |
| formatCallback | TimePickerFormatCallback | undefined | A callback function to format the time. |
| masked | boolean | false | Whether or not the time picker input should be masked. |
| max | string \| null \| undefined | undefined | The maximum time that can be selected. |
| min | string \| null \| undefined | undefined | The minimum time that can be selected. |
| open | boolean | false | Whether or not the time picker is open. |
| parseCallback | TimePickerParseCallback | undefined | A callback function to parse the time. |
| popupClasses | string \| string[] | undefined | The classes to apply to the time picker popup. |
| popupTarget | string | undefined | The target element to attach the popup to. |
| prepareMaskCallback | TimePickerPrepareMaskCallback | undefined | A callback function to prepare the mask. |
| restrictedTimes | string[] | [] | An array of times that cannot be selected. |
| showHourOptions | boolean | false | Whether or not to display hour options in dropdown. |
| showMaskFormat | boolean | false | Whether or not to show the mask format in the input. |
| showNow | boolean | false | Whether or not to show a "Now" button. |
| startTime | string \| null \| undefined | undefined | The time to start the time picker at. |
| step | number | undefined | The step interval for the time picker. |
| use24HourTime | boolean | false | Whether or not to use 24-hour time. |
| validationCallback | TimePickerValidationCallback | undefined | A callback function to validate the time. |
| value | string \| null \| undefined | undefined | The current value of the time picker. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow-dropdown | boolean | false | Whether or not to allow the time picker to be a dropdown. |
| allow-input | boolean | false | Whether or not to allow manual input of the time. |
| allow-invalid-time | boolean | false | Whether or not to allow invalid times. |
| allow-seconds | boolean | false | Whether or not to allow seconds in the time picker. |
| coercion-callback | TimePickerCoercionCallback | undefined | A callback function to coerce the time. |
| custom-options | ITimePickerOption[] | [] | An array of custom time picker options. |
| disabled | boolean | false | Whether or not the time picker is disabled. |
| format-callback | TimePickerFormatCallback | undefined | A callback function to format the time. |
| masked | boolean | false | Whether or not the time picker input should be masked. |
| max | string \| null \| undefined | undefined | The maximum time that can be selected. |
| min | string \| null \| undefined | undefined | The minimum time that can be selected. |
| open | boolean | false | Whether or not the time picker is open. |
| parse-callback | TimePickerParseCallback | undefined | A callback function to parse the time. |
| popup-classes | string \| string[] | undefined | The classes to apply to the time picker popup. |
| popup-target | string | undefined | The target element to attach the popup to. |
| prepare-mask-callback | TimePickerPrepareMaskCallback | undefined | A callback function to prepare the mask. |
| restricted-times | string[] | [] | An array of times that cannot be selected. |
| show-hour-options | boolean | false | Whether or not to display hour options in dropdown. |
| show-mask-format | boolean | false | Whether or not to show the mask format in the input. |
| show-now | boolean | false | Whether or not to show a "Now" button. |
| start-time | string \| null \| undefined | undefined | The time to start the time picker at. |
| step | number | undefined | The step interval for the time picker. |
| use-24-hour-time | boolean | false | Whether or not to use 24-hour time. |
| validation-callback | TimePickerValidationCallback | undefined | A callback function to validate the time. |
| value | string \| null \| undefined | undefined | The current value of the time picker. |

## Accessibility

When using a screen reader, ensure keyboard navigation in the dropdown list is announced.

Be sure that you add the proper aria-label to the `<input>` element if not using a `<label>` element with a for attribute.

The time-picker component will add the following ARIA attributes to the `<input>` element for you:
- aria-live
- aria-atomic
- aria-haspopup
- aria-expanded
- aria-owns
- aria-disabled
