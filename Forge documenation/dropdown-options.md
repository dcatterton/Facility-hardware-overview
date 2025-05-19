# Dropdown Options

Many of the dropdown-style components in Tyler Forge™, such as the autocomplete and menu for example, are configured using an array of JavaScript objects that describe the options that should be rendered to the user. This allows for a high degree of customization and flexibility when it comes to the content and behavior of the dropdown, while maintaining a consistent design that is shared.

While that said, sometimes it can be difficult to understand how to configure these dropdowns, especially when it comes to more complex scenarios. Below is a breakdown of how to configure dropdown options in Tyler Forge. In each section, we will quickly show what we call "builder" callbacks to provide your own custom content and overrides for the options.

## List Items

The "options" you see rendered within a dropdown are just `<forge-list-item>` components that are rendered within a `<forge-list>`. This is important to note that you can use the same configuration options that are available to the `<forge-list-item>` component to customize the appearance and behavior of the options that are rendered in the dropdown.

Keep this in mind for below when we discuss the builder callbacks because an instance of the list item component is created for each option that is rendered in the dropdown, and it is provided as an argument to the builder callback so that you can further control the list item if necessary.

## Configuration

The configuration of dropdown options is typically done using an array of JavaScript objects that describe the options that should be rendered in the dropdown. These objects can contain properties such as `label`, `value`, and typically contain properties such as `label`, `value`, and `disabled` (among many others) to control the appearance and behavior of the option.

The interfaces below are an example of all of the configuration properties that are available to you at a base level:

```typescript
interface IListDropdownOption<T = any> {
  value: T; // The underlying value
  label: string; // The primary text
  secondaryText?: string; // Secondary supporting text (optional)
  disabled?: boolean; // Whether the option is disabled
  divider?: boolean; // Whether to show a divider above this option
  selectionIcon?: string | IOptionCSS; // Custom CSS classes to apply to the option
  selectionTemplate?: string; // Custom CSS classes to apply to the selection
  trailingIcon?: string; // Custom CSS classes to apply to the trailing icon
  trailingText?: string; // Custom CSS classes to apply to the trailing icon
  leadingIcon?: string; // Custom CSS classes to apply to the leading icon
  leadingTemplate?: string | ((option: IListDropdownOption) => string); // Icon type, full (default) or compact (renders a <forge-icon>)
  trailingTemplate?: string | ((option: IListDropdownOption) => string); // Icon type, full (default) or compact (renders a <forge-icon>)
  leadingBuilder?: ((el: HTMLElement) => void); // Allow for providing a custom content in the leading area of the option
  trailingBuilder?: ((el: HTMLElement) => void); // Allow for providing a custom content in the trailing area of the option
}

interface IListDropdownOptions<T = any> extends Array<IListDropdownOption<T>> {
  options?: Array<IListDropdownOption>; // Nested options (can be a flat list of options)
  classList?(option: IListDropdownOption, string: // Attributes to apply to the option <forge-list-item>
}
```

The interface is the base configuration that is used for all dropdown-style components in Tyler Forge™. However, each dropdown component may have additional properties that are specific to that component. See below for information on how to configure options for each dropdown component.

## Menu

The menu component provides a few additional configuration options that are specific to the menu component:

```typescript
interface IMenuOption<T = any> extends IListDropdownOption<T> {
  label?: string; // A convenience property for setting the leading icon
  selected?: boolean; // Whether the option is selected
}
```

## Builder Callbacks

Builder callbacks are a way to provide your own custom content and overrides for the options that are rendered in the dropdown. This concept is sometimes known as "render props" in various frameworks out there. It essentially allows for you to hook into the rendering process of the options and provide your own custom content or behavior for each option that is rendered (to an extent).

Below is an example of how to use builder callbacks to provide your own custom content for the options that are rendered in the dropdown:

```javascript
// The type for the builder callback will be specific to the component.
// Below is an example that pertains to the <forge-menu> component.
[{
  label: 'Web Development',
  value: 'web', // This "key" property is required if receiving via the 'listitem' argument
  leadingBuilder: (container: HTMLElement, listitem?: HTMLElement) => {
    // You can return either a string (which overrides the option label) or an HTML element
    container.innerHTML = `<span style="color: red">Red</span>`;
    container.textContent = 'Custom Label';
  }
}]
```

## Example

Below is an example of how you might configure menu options using various properties such as leading icon, secondary text, and tooltip:

```javascript
const options: IMenuOption[] = [
{
  label: "settings",
  secondaryText: "Settings for your account",
  value: "settings",
  leadingIcon: "settings",
  leadingTemplate: "compact",
  tooltip: { text: "Edit user settings", type: "label" }
},
{
  label: "help",
  secondaryText: "Get help with the application",
  value: "help",
  leadingIcon: "help",
  leadingTemplate: "compact",
  tooltip: { text: "View help information", type: "label" }
}
];
```

## Declarative Configuration

The select component is a good example of a dropdown-style component that uses a declarative configuration to define the options that should be displayed to the user. The child `<forge-option>` elements are just configuration. However, this is just syntax sugar for the underlying JavaScript objects configuration that is used to render the options.

A caveat with this pattern is that if you want to place any HTML within the `<forge-option>` elements, it would be rendered as text and not as HTML. This is because the `<forge-option>` elements are just configuration and not actual HTML elements that get rendered in the dropdown.

## Future Improvements

Now that the native HTML Pattern API is available and used to power the `<forge-popover>`, we have the opportunity to actually render the `<forge-option>` elements, and any HTML specified within their content, verbatim in the dropdown. This will be a huge improvement over the current pattern, and greatly simplify the configuration and usage of all dropdown-style components within Forge.

We expect to begin work on implementing this change in the second half of 2023, so stay tuned for updates on this exciting new feature!
