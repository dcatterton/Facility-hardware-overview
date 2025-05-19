# Date Picker

Date pickers are used to allow users to select a date from a calendar.

```html
<forge-date-picker>
  <forge-text-field>
    <label for="date-picker">Date</label>
    <input
      aria-label="Pick a date"
      type="text"
      id="date-picker"
      autocomplete="off"
      placeholder
    />
  </forge-text-field>
</forge-date-picker>
```

## Custom Date Format

Input masking is enabled by default to ensure the user enters the date in the correct format, but you can also customize the date format via the `parseCallback`, `formatCallback`, and `maskFormat` properties.

```html
<forge-date-picker mask-format="YYYY-MM-DD">
  <forge-text-field>
    <label for="date-picker">Date</label>
    <input
      type="text"
      id="date-picker"
      autocomplete="off"
      placeholder="YYYY-MM-DD"
    />
    <span slot="support-text">Enter a date in the format YYYY-MM-DD</span>
  </forge-text-field>
</forge-date-picker>
```

In the example above, the `parseCallback` function is used to parse the date string into a Date object, and the `formatCallback` function is used to format the date object into a string using the YYYY-MM-DD format. You will also need to set the `mask-format` attribute to YYYY-MM-DD to enable input masking support.

```javascript
function parseCallback(str: string): Date | null {
  if (!str) {
    return null;
  }
  const split = str.split('-');
  if (split.length !== 3) {
    return null;
  }
  const yyyy = +split[0];
  const mm = +split[1];
  const dd = split[2].indexOf('T') ? +split[2].split('T')[0] : +split[2];
  if (!yyyy || isNaN(yyyy) || !mm || isNaN(mm) || !dd || isNaN(dd)) {
    return null;
  }
  return new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
}

function formatCallback(date: Date): string | null {
  return date ? date.toISOString().split('T')[0] : null;
}
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowInvalidDate | boolean | false | Whether to allow an invalid date to be input. When true, the date picker will not clear out the value of the input if the date was invalid (i.e. could not be parsed). |
| calendarText | DatePickerCalendarDropdownText | - | Customized strings to display in the calendar dropdown UI. |
| disabled | boolean | false | Whether the date picker is disabled or not. |
| disableDayCallback | (date: Date) => boolean | - | The callback to use for testing whether a specific date should be disabled or not. |
| disabledDates | Date \| Date[] \| null \| undefined | - | The dates that are restricted from being selected. |
| disabledDaysOfWeek | DayOfWeek[] | - | The days of the week to disable from selection. |
| formatCallback | DatePickerFormatCallback | - | The callback to use for formatting Date value to a custom string format. |
| locale | string \| undefined | - | The locale to use. |
| masked | boolean | false | Whether the input mask is applied or not. |
| maskFormat | string | - | The mask format that displayed in the input. Default is MM/DD/YYYY. |
| max | Date \| string \| null \| undefined | - | The maximum date the calendar will allow. |
| min | Date \| string \| null \| undefined | - | The minimum date the calendar will allow. |
| notifyInputValueChanges | boolean | false | Whether the native input will be notified of value changes via the input and change events. |
| open | boolean | false | Whether the calendar dropdown is open. |
| parseCallback | DatePickerParseCallback | - | The callback to use for parsing a date value string to a Date object. |
| popupClasses | string \| string[] | - | The CSS classes that are applied to the popup element. |
| prepareMaskCallback | DatePickerPrepareMaskCallback | - | The callback to use when altering default mask entry. |
| showClear | boolean | false | Whether the clear button is visible in the popup. |
| showMaskFormat | boolean | false | Whether the mask format is displayed in the input or not. Only applies if masked is true. |
| showToday | boolean | false | Whether the today button is visible in the popup. |
| value | TValue | - | The value of the date picker. |
| valueMode | DatePickerValueMode | - | The type for the value property and forge-date-picker-change event. |
| yearRange | string | - | The year range. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow-invalid-date | boolean | false | Whether to allow an invalid date to be input. When true, the date picker will not clear out the value of the input if the date was invalid (i.e. could not be parsed). |
| calendar-text | DatePickerCalendarDropdownText | - | Customized strings to display in the calendar dropdown UI. |
| disabled | boolean | false | Whether the date picker is disabled or not. |
| disabled-days-of-week | string | - | The days of the week to disable from selection. |
| locale | string | - | The locale to use. |
| mask-format | string | MM/DD/YYYY | The mask format that displayed in the input. |
| masked | boolean | false | Whether the input mask is applied or not. |
| max | string | - | The maximum date the calendar will allow. |
| min | string | - | The minimum date the calendar will allow. |
| open | boolean | false | Whether the calendar dropdown is open. |
| popup-classes | string | - | The CSS classes that are applied to the popup element. |
| show-clear | boolean | false | Whether the clear button is visible in the popup. |
| show-mask-format | boolean | false | Whether the mask format is displayed in the input or not. Only applies if masked is true. |
| show-today | boolean | false | Whether the today button is visible in the popup. |
| value | string | - | The value of the date picker. |
| value-mode | DatePickerValueMode | string | The type for the value property and forge-date-picker-change event. |
| year-range | string | - | The year range. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-date-picker-change | Emits when the value of the date picker changes. | CustomEvent<Date \| string \| null> |
| forge-date-picker-close | Emits when the date picker closes. | CustomEvent<void> |
| forge-date-picker-input | Emits when the user inputs a value into the date picker. | CustomEvent<string> |
| forge-date-picker-open | Emits when the date picker opens. | CustomEvent<void> |

## Accessibility

- When using a screen reader, ensure keyboard navigation in the calendar is announced.
- Be sure that you add the proper aria-label to the `<input>` element if necessary.
- The date picker component will add the following ARIA attributes to the `<input>` element for you:
  - aria-live
  - aria-atomic
  - aria-haspopup
  - aria-expanded
  - aria-owns
  - aria-disabled
