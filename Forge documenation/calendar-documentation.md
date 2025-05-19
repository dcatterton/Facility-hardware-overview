# Calendar

The calendar component is used for selecting dates or displaying data related to dates in a small calendar format. It is commonly used in date pickers, date range pickers, as well as standalone.

This is not a full-featured calendar component and it's not intended to be. The goal of this component is to be used in simple scenarios to allow for users to select dates or data ranges, or for displaying basic events on important dates. For more complex scenarios, consider using a library such as FullCalendar.

```html
<forge-calendar view="month"></forge-calendar>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| activeDate | Date | - | The currently active date in the calendar. |
| allowSingleDateRange | boolean | true | Whether to allow a single date range to be selected. |
| clearButton | boolean | false | Whether to show a button to clear the selected date(s). |
| clearCallback | () => void \| undefined | - | Callback function to call when the clear button is clicked. |
| constrainToEnabled | boolean | true | Whether to constrain the selected date(s) to the enabled dates. |
| dateBuilder | CalendarDateBuilder \| undefined | - | Function to build the date content. |
| dateSelectCallback | CalendarDateSelectCallback \| undefined | - | Callback function to call when a date is selected. |
| dayBuilder | CalendarDayBuilder \| undefined | - | Function to build the day content. |
| disabledDateBuilder | (date: Date) => boolean \| undefined | - | Function to determine if a date is disabled. |
| disabledDates | Date \| Date[] \| null \| undefined | [] | Dates that are disabled from being selected. |
| disabledDaysOfWeek | DayOfWeek \| DayOfWeek[] \| null \| undefined | [] | Days of the week that are disabled from being selected. |
| eventBuilder | CalendarEventBuilder \| undefined | - | Function to build the event content. |
| events | ICalendarEvent[] \| null \| undefined | [] | Events to display on the calendar. |
| firstDayOfWeek | DayOfWeek \| undefined | - | The first day of the week. |
| fixedHeight | boolean | false | Whether to fix the height of the calendar. |
| listYears | boolean | true | Whether to list the years in the year view. |
| locale | string \| undefined | - | The locale to use for formatting dates. |
| max | Date \| string \| null \| undefined | - | The maximum date that can be selected. |
| menuAnimation | CalendarMenuAnimationType | "scale" | The animation to use for the menu. |
| min | Date \| string \| null \| undefined | - | The minimum date that can be selected. |
| mode | CalendarMode | "single" | The mode of the calendar. |
| month | number | <current month> | The month to display. |
| preventFocus | boolean | false | Whether to prevent the calendar from taking focus. |
| readonly | boolean | false | Whether the calendar is readonly. |
| selectionFollowsMonth | boolean | false | Whether the selection follows the month. |
| showHeader | boolean | true | Whether to show the header. |
| showOtherMonths | boolean | false | Whether to show days from other months. |
| showToday | boolean | true | Whether to show the today button. |
| todayButton | boolean | false | Whether to show a button to select today. |
| todayCallback | () => void \| undefined | - | Callback function to call when the today button is clicked. |
| tooltipBuilder | CalendarTooltipBuilder \| undefined | - | Function to build the tooltip content. |
| value | Date \| Date[] \| DateRange \| null \| undefined | [] | The selected date(s). |
| view | CalendarView | "date" | The view of the calendar. |
| weekendDays | DayOfWeek[] \| null \| undefined | - | The days of the week that are considered weekends. |
| year | number | <current year> | The year to display. |
| yearRange | string | "-50:+50" | The range of years to display. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| allow-single-date-range | boolean | true | Whether to allow a single date range to be selected. |
| clear-button | boolean | false | Whether to show a button to clear the selected date(s). |
| constrain-to-enabled | boolean | true | Whether to constrain the selected date(s) to the enabled dates. |
| first-day-of-week | DayOfWeek | - | The first day of the week. |
| fixed-height | boolean | false | Whether to fix the height of the calendar. |
| list-years | boolean | true | Whether to list the years in the year view. |
| locale | string | - | The locale to use for formatting dates. |
| max | Date \| string \| null | - | The maximum date that can be selected. |
| menu-animation | CalendarMenuAnimationType | "scale" | The animation to use for the menu. |
| min | Date \| string \| null | - | The minimum date that can be selected. |
| mode | CalendarMode | "single" | The mode of the calendar. |
| month | number | <current month> | The month to display. |
| prevent-focus | boolean | false | Whether to prevent the calendar from taking focus. |
| readonly | boolean | false | Whether the calendar is readonly. |
| selection-follows-month | boolean | false | Whether the selection follows the month. |
| show-header | boolean | true | Whether to show the header. |
| show-other-months | boolean | false | Whether to show days from other months. |
| show-today | boolean | true | Whether to show the today button. |
| today-button | boolean | false | Whether to show a button to select today. |
| view | CalendarView | "date" | The view of the calendar. |
| year | number | <current year> | The year to display. |
| year-range | string | "-50:+50" | The range of years to display. |

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-calendar-date-select | Event fired when a date is selected. | CustomEvent< ICalendarDateSelectEventData > |
| forge-calendar-focus-change | Event fired when the focus changes. | CustomEvent< ICalendarFocusChangeEventData > |
| forge-calendar-month-change | Event fired when the month changes. | CustomEvent< ICalendarMonthChangeEventData > |
| forge-calendar-view-change | Event fired when the view changes. | CustomEvent< CalendarView > |

### Slots

| Name | Description |
|------|-------------|
| clear-button-text | Text to display in the clear button. |
| next-month-button-text | Text to display in the next month button's tooltip. |
| next-year-button-text | Text to display in the next year button's tooltip. |
| next-years-button-text | Text to display in the next years button's tooltip. |
| previous-month-button-text | Text to display in the previous month button's tooltip. |
| previous-year-button-text | Text to display in the previous year button's tooltip. |
| previous-years-button-text | Text to display in the previous years button's tooltip. |
| today-button-text | Text to display in the today button. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| clear() | Clears the selected date(s). | - | void |
| deselectDate() | Deselects a date. | date: Date | void |
| goToDate() | Navigates to a specific date. | date: Date, setFocus: boolean | void |
| handleKey() | Handles a keyboard event. | evt: KeyboardEvent | void |
| layout() | Lays out the calendar. | - | void |
| selectDate() | Selects a date. | date: Date | void |
| setActiveDate() | Sets the active date. | date: Date, setFocus: boolean | boolean |
| today() | Sets the calendar to today. | - | void |
| toggleDate() | Toggles a date selection. | date: Date, force: boolean | void |

### Accessibility

- Ensure that the days can be navigated by keyboard.
- Ensure that each day is properly announced via screen reader, including its selected state.
