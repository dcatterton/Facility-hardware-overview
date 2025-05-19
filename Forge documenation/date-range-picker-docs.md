# Date Range Picker

The date range picker is very similar to the usage of the standard datepicker component, the only difference is that it allows for the selection of two dates that define a start and end range. This means that when setting up the component, you must provide it two `<input>` elements, one for the start date and one for the end date.

There are many configuration options available through the component API, along with date masking options that force the dates to be entered using a specific format.

```html
<forge-date-range-picker style="width: 263px">
  <forge-text-field>
    <label for="input-date-range-picker-01">Date</label>
    <input
      type="text"
      id="input-date-range-picker-01"
      autocomplete="off"
      placeholder="mm/dd/yyyy"
    />
    <input
      type="text"
      id="input-date-range-picker-02"
      autocomplete="off"
      placeholder="mm/dd/yyyy"
    />
  </forge-text-field>
</forge-date-range-picker>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allowInvalidDate | boolean | false | Gets/sets the state of whether to allow invalid dates. |
| calendarText | DatePickerCalendarDropdownText | - | Customized strings to display in the calendar dropdown UI. |
| disabled | boolean | false | Gets/sets the disabled state of the date range picker. |
| disableDayCallback | (date: Date) => boolean | undefined | Gets/sets the callback used to disable days in the calendar. |
| disabledDates | Date \| Date[] \| null \| undefined | null | Gets/sets the disabled date range values. |
| disabledDaysOfWeek | DayOfWeek[] | [] | Gets/sets the disabled days of the week. |
| formatCallback | DatePickerFormatCallback | formatDate | Gets/sets the callback used to format date strings. |
| from | Date \| string \| null \| undefined | null | Gets/sets the "from" date range value. |
| locale | string \| undefined | undefined | Gets/sets the locale for the date range picker. |
| masked | boolean | false | Gets/sets the masked state of the date range picker. |
| maskFormat | string | 'MM/DD/YYYY' | Gets/sets the mask format for the date input. |
| max | Date \| string \| null \| undefined | null | Gets/sets the maximum date range value. |
| min | Date \| string \| null \| undefined | null | Gets/sets the minimum date range value. |
| notifyInputValueChanges | boolean | false | Gets/sets the state of whether to notify input value changes. |
| open | boolean | false | Gets/sets the open state of the date range picker. |
| parseCallback | DatePickerParseCallback | parseDate | Gets/sets the callback used to parse date strings. |
| popupClasses | string \| string[] | '' | Gets/sets the classes to apply to the date range picker popup. |
| prepareMaskCallback | DatePickerPrepareMaskCallback | prepareDateMask | Gets/sets the callback used to prepare the mask for the date input. |
| showClear | boolean | true | Gets/sets the state of whether to show the "Clear" button. |
| showMaskFormat | boolean | false | Gets/sets the state of whether to show the mask format in the date input. |
| showToday | boolean | true | Gets/sets the state of whether to show the "Today" button. |
| to | Date \| string \| null \| undefined | null | Gets/sets the "to" date range value. |
| value | TValue | null | Gets/sets the date range value. |
| valueMode | DatePickerValueMode | 'range' | Gets/sets the value mode of the date range picker. |
| yearRange | string | '' | Gets/sets the year range for the date range picker. |

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
| value-mode | DatePickerValueMode | string | The type for the value property and forge-date-picker-change event. |
| year-range | string | - | The year range. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-date-range-picker-change | Emits when the value of the date range picker changes. | CustomEvent< IDateRangePickerChangeEventData > |
| forge-date-range-picker-close | Emits when the date range picker calendar closes. | CustomEvent<void> |
| forge-date-range-picker-input | Emits when the user inputs a value into the date range picker. | CustomEvent<string> |
| forge-date-range-picker-open | Emits when the date range picker calendar opens. | CustomEvent<void> |

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
