# Accordion

This component does not provide any visual appearance. It is just an orchestrator of child `<forge-expansion-panel>` components.

The `<forge-accordion>` will ensure that only one child expansion panel, at most, is open at any given time. If you need to allow for multiple panels to be opened simultaneously, you should opt for using just multiple `<forge-expansion-panel>` components together without an accordion wrapper.

See the expansion panel component for information on how to use that component separately.

## Example

```html
<forge-accordion>
  <forge-expansion-panel>
    <div slot="header">
      Panel One
      <forge-open-icon></forge-open-icon>
    </div>
    <div>Panel One Content</div>
    <forge-divider></forge-divider>
  </forge-expansion-panel>
  <forge-expansion-panel>
    <div slot="header">
      Panel Two
      <forge-open-icon></forge-open-icon>
    </div>
    <div>Panel Two Content</div>
    <forge-divider></forge-divider>
  </forge-expansion-panel>
  <forge-expansion-panel>
    <div slot="header">
      Panel Three
      <forge-open-icon></forge-open-icon>
    </div>
    <div>Panel Three Content</div>
  </forge-expansion-panel>
</forge-accordion>

<style>
  forge-accordion {
    width: 300px;
    display: inline-block;
  }
  
  forge-accordion forge-expansion-panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| panelSelector | string | - | Dictates the selector to use for finding the child expansion panels. Defaults to searching the direct children for `<forge-expansion-panel>` elements. Use this if you need to scope this accordion to a specific set of expansion panels, or your expansion panels are not direct children of the accordion. |

Learn more about [Properties](#).

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| panel-selector | string | - | Dictates the selector to use for finding the child expansion panels. Defaults to searching the direct children for `<forge-expansion-panel>` elements. Use this if you need to scope this accordion to a specific set of expansion panels, or your expansion panels are not direct children of the accordion. |

Learn more about [Attributes](#).

### Events

| Name | Description | Type |
|------|-------------|------|
| forge-accordion-toggle | Dispatched when a child expansion panel is toggled. Includes the related expansion panel element in the event detail. | CustomEvent<ExpansionPanelComponent> |

Learn more about [Events](#).

### Dependencies

This component will automatically include the following components:

* [forge-expansion-panel](#)

## Accessibility

* Verify that you can tab to each panel in the accordion.
* Ensure that there is a visual cue that the panel is selected.
* Verify that pressing the space bar or enter key while focusing on a panel will toggle it open and closed.
* If any open panel contains a link, button, or other navigation element, ensure that those tab stops are included while tabbing through the accordion.
* If any closed panel contains a link, button, or other navigation element, ensure those tab stops are skipped while tabbing through the accordion.
