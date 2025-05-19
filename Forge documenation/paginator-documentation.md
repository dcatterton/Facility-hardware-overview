# Paginator

The paginator component is used to navigate through a collection of items. While this component is typically composed with a list or table component to allow users to navigate large sets of data, it can be used in any context where pagination of content is desired.

```html
<forge-paginator total="100"></forge-paginator>
```

## Alternative

The paginator also supports an alternative variant that is less verbose and more compact. This variant removes the page size selector, and uses a simpler label for the page count. Use when space is limited, or if you don't want the user to be able to change the page size.

```html
<forge-paginator page-size="1" total="10" alternative></forge-paginator>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alternative | boolean | false | Whether to use the alternative range label slot. |
| disabled | boolean | false | Whether the paginator is disabled. |
| first | boolean | false | Whether to show the first page button. Default is false. |
| firstLast | boolean | false | Whether to show the first page and last page buttons. |
| label | string | "Rows per page:" | A label for the paginator. |
| offset | number | 0 | Sets page index by providing the number of items to skip. The getter for this property returns the number of items to skip. |
| pageIndex | number | 0 | The zero-based page index. |
| pageSize | number | 25 | Number of items to display on a page. |
| pageSizeOptions | number[] | [5, 15, 25, 50, 100] | The set of provided page size options to display to the user. |
| rangeLabelCallback | PaginatorRangeLabelBuilder | - | A callback function to build the range label dynamically. |
| total | number | 0 | The total number of items to be paginated. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| alternative | boolean | false | Whether to use the alternative range label slot. |
| disabled | boolean | false | Whether the paginator is disabled. |
| first | boolean | false | Whether to show the first page button. Default is false. |
| first-last | boolean | false | Whether to show the first page and last page buttons. |
| label | string | "Rows per page:" | A label for the paginator. |
| offset | number | 0 | Sets page index by providing the number of items to skip. The getter for this property returns the number of items to skip. |
| page-index | number | 0 | The zero-based page index. |
| page-size | number | 25 | Number of items to display on a page. |
| page-size-options | number[] | [5, 15, 25, 50, 100] | The set of provided page size options to display to the user. |
| total | number | 0 | The total number of items to be paginated. |

Learn more about [Attributes](#).

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-paginator-change | Dispatched when the paginator state changes. | CustomEvent< IPaginatorChangeEventData > |

Learn more about [Events](#).

### Slots

| Name | Description |
|------|-------------|
| alternative-range-label | Overrides the default range label with a custom label when in the alternative variant. |
| first-page-tooltip | Overrides the default tooltip for the first page button. |
| label | Overrides the label text when in the default variant. |
| last-page-tooltip | Overrides the default tooltip for the last page button. |
| next-page-tooltip | Overrides the default tooltip for the next page button. |
| previous-page-tooltip | Overrides the default tooltip for the previous page button. |
| range-label | Overrides the default range label with a custom label when in the default variant. |

Learn more about [Slots](#).

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| focus() | Sets focus to the first focusable element within the paginator. | options: FocusOptions | void |

Learn more about [Methods](#).

## Accessibility

- Ensure that all of the controls that are accessible by a mouse are also accessible by keyboard.
- Ensure the controls are reachable by the tab key.
- Ensure each control can be updated or activated by the keyboard.
- The paginator component will handle adding the proper ARIA attributes to its internal elements.
