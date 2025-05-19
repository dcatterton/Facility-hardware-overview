# Tyler Forge Table Component

Tables are used to display data in a tabular format. The Forge table is a configuration-based component that handles the rendering of data and user interactions, designed to be flexible and customizable.

## Overview

The `<forge-table>` component was originally designed to be a basic configuration-based component to render data, provide built-in sorting, filtering, and row selection. While it has evolved to include more features, it comes with maintenance and performance considerations.

For more advanced table requirements (like virtual scrolling, infinite scrolling, or advanced filtering), consider using specialized table components like AG Grid.

## Getting Started

In its most basic form, the `<forge-table>` component requires two properties:
- `columnConfigurations`: Array of objects defining columns
- `data`: Array of objects representing data

### Basic Example

```javascript
import { IColumnConfiguration } from '@tylertech/forge';

const data = [
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Doe', age: 25 },
  { firstName: 'Jim', lastName: 'Smith', age: 40 },
  { firstName: 'Jill', lastName: 'Johnson', age: 35 }
];

const columnConfigurations = [
  {
    header: 'First Name',
    property: 'firstName',
    sortable: true,
    initialSort: true,
    filter: true,
    filterDelegate: () => new TextFieldComponentDelegate({ options: { placeholder: 'Filter first name...' }, props: { showClear: true } })
  },
  {
    header: 'Last Name',
    property: 'lastName',
    sortable: true,
    filter: true,
    filterDelegate: () => new TextFieldComponentDelegate({ options: { placeholder: 'Filter last name...' }, props: { showClear: true } })
  },
  {
    header: 'Age',
    property: 'age',
    sortable: true,
    filter: true,
    filterDelegate: () => new TextFieldComponentDelegate({ options: { placeholder: 'Filter age...' }, props: { showClear: true } })
  }
];

const tableEl = document.createElement('forge-table');
tableEl.columnConfigurations = columnConfigurations;
tableEl.data = data;
```

## Column Configuration

The `columnConfigurations` property defines columns to display. Each configuration object can include:

| Property | Description |
|----------|-------------|
| `header` | Text displayed in column header |
| `property` | Property name of the data object to display |
| `sortable` | Whether column is sortable (default: `false`) |
| `initialSort` | Whether column is sorted initially (default: `false`) |
| `filter` | Whether column has filter input (default: `false`) |
| `filterDelegate` | Component delegate for filter input |
| `transform` | Function to transform value before display |

## Using Column Filters

To add column filters, specify a `filterDelegate` for each filterable column. Use built-in component delegate classes or create custom ones.

```javascript
import { TextFieldComponentDelegate, SelectComponentDelegate } from '@tylertech/forge';
import { SomeCustomComponentDelegate } from './my-custom-component-delegates';

table.columnConfigurations = [
  {
    property: 'name',
    header: 'Person name',
    filter: true,
    filterDelegate: new TextFieldComponentDelegate({ options: { placeholder: 'Filter name...' } })
  },
  {
    property: 'color',
    header: 'Favorite color',
    filter: true,
    filterDelegate: new SelectComponentDelegate({ props: { placeholder: 'Filter color...' } })
  },
  {
    property: 'age',
    header: 'Person age',
    filter: true,
    filterDelegate: new SomeCustomComponentDelegate()
  }
];
```

## Mapping Boolean Outputs

To display custom text for boolean values, use the `transform` method:

```javascript
{
  transform: value => value ? 'Enabled' : 'Disabled'
}
```

## Angular Usage

Example in Angular template:

```html
<forge-table
  [columnConfigurations]="columnConfigurations"
  [data]="data$ | async"
  select="true"
  select-key="Id"
  (forge-table-select)="onSelect($event)"
  (forge-table-select-all)="onSelectAll($event)"
  (forge-table-sort)="onTableSort($event)">
</forge-table>
```

Example Angular component:

```typescript
@Component({
  selector: 'table-example',
  templateUrl: './table-example.component.html'
})
export class TableExampleComponent implements OnInit {
  public columnConfigurations: IColumnConfiguration[] = [
    { header: 'Name', property: 'Name', sortable: true, initialSort: true },
    { header: 'Age', property: 'Age', sortable: true },
    { header: 'Position', property: 'Position', sortable: true }
  ];
  public data$: BehaviorSubject<IPlayer[]>;

  public ngOnInit() {
    // Note: In a real application this data would likely be set from an async data source
    const players: IPlayer = [
      { Id: 1, Name: 'Tom Brady', Age: 41, Position: 'QB' },
      { Id: 2, Name: 'Julian Edelman', Age: 32, Position: 'WR' },
      { Id: 3, Name: 'Rob Gronkowski', Age: 29, Position: 'TE' },
      { Id: 4, Name: 'Chris Hogan', Age: 30, Position: 'WR' },
      { Id: 5, Name: 'James White', Age: 26, Position: 'RB' }
    ];
    this.data$ = new BehaviorSubject(players);
  }

  public onSelect(evt: CustomEvent): void {
    const data = evt.detail as ITableSelectEventData;
  }

  public onSelectAll(evt: CustomEvent): void {
    const data = evt.detail as ITableSelectAllEventData;
  }

  public onTableSort(evt: CustomEvent): void {
    const data = evt.detail as ITableSortEventData;
  }
}
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `allowRowClick` | boolean | `false` | Gets/sets whether rows respond to click events |
| `cellCreated` | TableCellCreatedCallback | - | Callback for when a cell is created |
| `columnConfigurations` | IColumnConfiguration[] | `[]` | Column configuration options |
| `data` | any[] | `[]` | Data to display in table body |
| `dense` | boolean | `false` | Controls whether table is dense |
| `filter` | boolean | `false` | Controls whether table shows column filter row |
| `fixedHeaders` | boolean | `false` | Controls whether table applies fixed headers in scroll containers |
| `layoutType` | TableLayoutType | `'auto'` | Controls table layout algorithm |
| `minResizeWidth` | number | `100` | Minimum width columns can be resized to |
| `multiColumnSort` | boolean | `false` | Gets/sets if table supports multi-column sorting |
| `multiselect` | boolean | `true` | Controls visibility of select all checkbox |
| `resizable` | boolean | `false` | Controls whether columns are resizable |
| `roomy` | boolean | `false` | Controls whether table is roomy |
| `rowCreated` | TableRowCreatedCallback | - | Callback for when a row is created |
| `select` | boolean | `true` | Controls visibility of select column |
| `selectAllTemplate` | TableHeaderSelectAllTemplate | - | Template for select all checkbox |
| `selectCheckboxAlignment` | `${ CellAlign }` | `"center"` | Controls alignment of select checkbox |
| `selectKey` | string \| string[] | - | Row key for matching data to selections |
| `tooltipSelect` | string \| TableSelectTooltipCallback | - | Tooltip when hovering over select column |
| `tooltipSelectAll` | string | - | Tooltip when hovering over select all checkbox |
| `wrapContent` | boolean | `true` | Controls whether cell content wraps |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|-------------|
| `clearSelections()` | Clears all selected table rows | - | void |
| `collapseRow()` | Collapses an expanded row | rowIndex: number | Promise<void> |
| `deselectRow()` | Deselects a single row | data: any | void |
| `deselectRows()` | Deselects multiple rows | data: any[] | void |
| `deselectRowsByIndex()` | Deselects rows by index | indexes: number \| number[] | void |
| `expandRow()` | Expands a collapsed row | rowIndex: any, template: TableViewTemplate | Promise<void> |
| `getSelectedRows()` | Returns selected row instances | - | any[] |
| `hideColumn()` | Hides a column | columnIndex: number | void |
| `isColumnHidden()` | Checks if column is hidden | columnIndex: number | boolean |
| `isRowExpanded()` | Checks if row is expanded | rowIndex: number | boolean |
| `isRowSelected()` | Checks if row is selected | rowData: { [key: string]: any } | boolean |
| `render()` | Forces table re-render | - | void |
| `selectRow()` | Selects a row | data: any | void |
| `selectRows()` | Selects multiple rows | data: any[], preserveExisting: boolean | void |
| `selectRowsByIndex()` | Selects rows by index | indexes: number \| number[], preserveExisting: boolean | void |
| `showColumn()` | Shows a hidden column | columnIndex: number | void |

### Events

| Name | Description | Type |
|------|-------------|------|
| `forge-table-column-resize` | Dispatched when column is resized | CustomEvent<ITableColumnResizeEventData> |
| `forge-table-filter` | Dispatched when column is filtered | CustomEvent<ITableFilterEventData> |
| `forge-table-initialized` | Dispatched when table is initialized | CustomEvent<void> |
| `forge-table-row-click` | Dispatched when row is clicked | CustomEvent<ITableRowClickEventData> |
| `forge-table-select` | Dispatched when row is selected | CustomEvent<ITableSelectEventData> |
| `forge-table-select-all` | Dispatched when select all checkbox is toggled | CustomEvent<ITableSelectAllEventData> |
| `forge-table-select-double` | Dispatched when row is double-clicked | CustomEvent<ITableSelectDoubleEventData> |
| `forge-table-sort` | Dispatched when column is sorted | CustomEvent<ITableSortEventData \| ITableSortMultipleEventData> |

## Dependencies

The table component automatically includes these components:
- `<forge-checkbox>`
- `<forge-expansion-panel>`
- `<forge-icon>`
- `<forge-tooltip>`

## Accessibility

- Avoid using tables for layout, as this can make it difficult for screen reader users
- The checkbox element receives proper ARIA attributes such as `aria-label="Select row"`
- All interactive controls should be accessible by both mouse and keyboard

## CSS-Only Version

To use the CSS-only table component, include:

```scss
@use '@tylertech/forge/dist/table/forge-table.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| `forge-data-table` | The base table class |
