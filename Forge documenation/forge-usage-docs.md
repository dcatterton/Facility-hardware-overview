# Tyler Forge Usage Documentation

## Overview

Tyler Forge components are custom HTML elements built as Web Components. This means that you can use them in any front-end framework or library, such as React, Angular, Vue, or vanilla JavaScript, just like any other built-in HTML element. Each component has API documentation that describes the properties, events, and methods that it supports, as well as examples of how to use the component in your application.

## Installation Options

### NPM Package

**Recommended method** for installing Forge. Benefits include:
- Easy dependency management 
- Simple project updates
- Integration with build tools

To install Forge from npm, run:

```bash
npm install @tylertech/forge
```

### CDN

Suitable for:
- Experimenting with Forge
- Projects without a package manager
- Quick prototyping

To use Forge via CDN, include this script tag in your HTML:

```html
<script type="module" src="https://cdn.forge.tylertech.com/v1/libs/@tylertech/forge@<version>/index.js"></script>
```

Replace `<version>` with the desired Forge version.

## Package Format

The `@tylertech/forge` package follows this structure:

- **dist/** - Contains all pre-built static distribution sources.
  - **\<component-name\>/** - Pre-built CSS stylesheets for specific components.
    - **\<component-name\>/forge-\<component-name\>.css** - CSS stylesheets for CSS-only components.
  - **forge-core.css** - Optional Forge core stylesheet (useful when using `<forge-scaffold>` for page layout).
  - **forge-tokens.css** - Optional tokens stylesheet containing all design tokens.
  - **forge-dark.css** - Default Forge dark theme (must be loaded after forge.css).
  - **forge.css** - Pre-built global stylesheet (contains all global styles). For production, prefer loading individual stylesheets.
  - **lib.js** - Pre-built JavaScript bundle with all components and utilities (includes dependencies).
- **esm/** - Unbundled ESM JavaScript sources (uses bare module specifiers).
- **sass/** - Sass stylesheets copied directly from the library for use in your application/library.
- **custom-elements.json** - Custom elements manifest used to generate docs and Angular adapters.
- **LICENSE** - Apache 2.0 license.
- **package.json** - Package specification.
- **README.md** - Package documentation.

## VS Code Integration

This is optional, but Forge provides custom data files for VS Code that you can use to get autocompletion and documentation for Forge components in your HTML and CSS files.

1. If not done already, install the @tylertech/forge package
2. If it doesn't already exist, create a `.vscode` directory at the root of your project
3. If it doesn't already exist, create `settings.json` file inside the `.vscode` directory
4. Add the following to the settings.json file:

```json
{
  "html.customData": ["./node_modules/@tylertech/forge/dist/vscode.html-custom-data.json"],
  "css.customData": ["./node_modules/@tylertech/forge/dist/vscode.css-custom-data.json"]
}
```

**Important**: you will need to restart VS Code for the changes to take effect.

You may need to adjust the path to your node_modules directory if it's not at the root of your project.

## Defining Components

After installation, you need to import and define the components in the browser's custom element registry:

```javascript
import { defineButtonComponent, defineTextFieldComponent } from '@tylertech/forge';

// Call these functions early in your application bootstrap process
defineButtonComponent();
defineTextFieldComponent();
```

For prototyping, you can import and define all components at once:

```javascript
import { defineComponents } from '@tylertech/forge';
defineComponents();
```

> **Note:** Call the definition functions as early as possible in your application bootstrap process to ensure components are defined before rendering, avoiding FOUC (Flash of Unstyled Content).

## Properties & Attributes

Tyler Forge components have a set of properties and attributes that you can use to customize the appearance and behavior of the component.

HTML attributes use kebab-case (dash-separated) names, while JavaScript properties use camelCase (camelCased) names. Almost all attributes have a corresponding JavaScript property, and setting the property will update the attribute, and vice versa. The only exception to this is when complex data types such as objects or arrays are used, in which case you should use the property to set the value.

All HTML attributes are passed as strings to the element. For primitive data types, such as numbers and booleans, the element will automatically coerce the attribute value to the correct type before setting the internal property in most cases.

Properties are used to set values programmatically, while attributes are used to set values declaratively in the HTML (typically for default values on the element):

```html
<forge-button variant="raised">Click Me</forge-button>
```

In the example above, the variant property is set to "raised" to create a raised button. You can also set the variant attribute in the JavaScript like this:

```javascript
const button = document.querySelector('forge-button');
button.variant = 'raised';
```

### Boolean Attributes

Some properties are boolean attributes, which means that they can be set to true or false by the existence of the attribute on the element:

```html
<forge-button disabled>Button</forge-button>
```

It's important to note that boolean attributes are set to true when the attribute is present, regardless of the value.

In the following example, the disabled attribute is set to false but the button will still be disabled:

```html
<forge-button disabled="false">Button</forge-button>
```

You would need to remove the attribute from the element to set the underlying disabled property to false.

## Events

Tyler Forge components emit events that you can listen for in your application. Events are used to notify you when something happens, such as a button being clicked or a dialog being closed.

### Custom Events

You can listen for native events like click on any Tyler Forge component, but some components also emit custom events that you can listen for.

Custom events are prefixed with the component name, followed by a hyphen, and then the event name. For example, the forge-dialog component emits a forge-dialog-close event when the dialog is closed. See the API docs page for each component to see which events it supports.

```javascript
const dialog = document.querySelector('forge-dialog');
dialog.addEventListener('forge-dialog-close', () => {
  console.log('Dialog closed');
});
```

## Methods

Many Tyler Forge components have JavaScript methods that you can use to interact with the component programmatically. Methods are used to perform actions on the component, such as opening a dialog or showing a snackbar.

```html
<forge-dialog>Content</forge-dialog>
<script>
  const dialog = document.querySelector('forge-dialog');
  dialog.show();
</script>
```

## Slots

Tyler Forge components use slots to allow you to place content inside the component. Slots are used to define where the content should be placed, and can be named or unnamed.

Named slots are used to place content in a specific location within the component, while unnamed slots are used to place content in the default location. Some components have multiple named slots that you can use to place content in different locations.

```html
<forge-scaffold>
  <forge-app-bar slot="header" title-text="My Application"></forge-app-bar>
  <main slot="body">
    <forge-card>
      <p>My Content</p>
    </forge-card>
  </main>
  <forge-footer slot="footer">
    <p>My Footer</p>
  </forge-footer>
</forge-scaffold>
```

In the example above, the forge-app-bar component is placed in the header slot, the forge-card component is placed in the body slot, and the forge-footer component is placed in the footer slot. Note that the content placed within the `<forge-card>` component is placed in the default (unnamed) slot.

## States

Some Tyler Forge components provide custom states that enable targeting the component in CSS under certain conditions using the `:state()` pseudo-class.

```css
forge-meter:state(optimum-value) {
  outline: 1px solid green;
}
```

States provide a more reliable way to find and style components based on their current state than similar features such as attributes, which are not guaranteed to always represent the current state of a component.

## CSS Custom Properties

Many Tyler Forge components support design tokens, which are implemented as CSS custom properties (also referred to as CSS variables) to allow you to customize the appearance of an element using CSS.

CSS custom properties are defined using the `--` prefix, followed by the property name, and are set using the `var()` function in CSS. See the API docs page for each component to see which custom properties it supports.

```html
<style>
  .my-custom-button {
    --forge-button-background: red;
    --forge-button-color: white;
  }
</style>
<forge-button class="my-custom-button">Button</forge-button>
```

Custom properties are a powerful feature that allows you to customize the appearance of an element using CSS, but they should be used sparingly to maintain design consistency across applications.

## CSS Shadow Parts

Tyler Forge components use CSS shadow parts to allow you to style the internal "parts" of an element using CSS. Shadow parts are defined using the `::part()` pseudo-element, and can be used to fully customize the appearance of an element.

```css
forge-button::part(root) {
  padding: 24px;
  background-color: red;
  color: white;
}
```

While shadow parts are a powerful feature, they should be used sparingly, as they can make it difficult to maintain and update the component in the future if the internals of the component change, and they can also make it difficult to maintain design consistency across applications.

## Flash of Unstyled Content (FOUC)

When using Tyler Forge components, you may experience what is referred to as "flash of unstyled content" or FOUC when the page loads. This is caused by the browser rendering the page before the Forge elements have been what is referred to as "upgraded" by the browser. Upgrading a custom element is the process of defining the element with the browser's custom element registry, which allows the browser to instantiate the element and apply the custom element's styles, template, and behavior.

There are a few ways to prevent FOUC when using Tyler Forge, or more specifically custom elements in general:

1. Use the `:defined` pseudo-class to hide the content until the custom elements have been upgraded:

```css
/* Hide the content until the custom elements have been upgraded */
:not(:defined) {
  visibility: hidden;
}
```

Note: Use `visibility: hidden` instead of `display: none` to prevent layout shifts when the elements are upgraded.

2. Using the `customElements.whenDefined()` method to wait for the custom elements to be defined before rendering the content:

```javascript
// Wait for a specific custom element to be defined
customElements.whenDefined('forge-button').then(() => {
  // Do something after the custom element has been defined
});

// Wait for all custom elements to be defined with `Promise.allSettled()`
Promise.allSettled([
  customElements.whenDefined('forge-scaffold'),
  customElements.whenDefined('forge-card')
]).then(() => {
  // Do something after all custom elements have been defined
});
```

One way to handle this situation more gracefully is to fade in the content once the custom elements have been defined. You can do this by adding a CSS transition to the body element that fades in the content once a CSS class has been added:

```html
<style>
  body {
    opacity: 0;
  }
  body.ready {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }
</style>
<script>
  await Promise.allSettled([
    customElements.whenDefined('forge-app-bar'),
    customElements.whenDefined('forge-scaffold'),
    customElements.whenDefined('forge-card')
  ]);
  document.body.classList.add('ready');
</script>
```

## Key Components

Now that you understand how to install and use Forge, let's take a look at some of the key components that Forge provides.

### Scaffold

The `<forge-scaffold>` component is a layout component that you can use for the base layout of your application. It provides a set of named slots that you can use to place your content, and handles the scrolling and overflow of the content for you.

```html
<forge-scaffold>
  <forge-app-bar slot="header" title-text="My Application"></forge-app-bar>
  <forge-toolbar slot="body-header">
    <h2 class="forge-typography--heading4">My Page</h2>
  </forge-toolbar>
  <main slot="body">
    <forge-card>
      <p>My Content</p>
    </forge-card>
  </main>
  <forge-footer slot="footer">
    <p>My Footer</p>
  </forge-footer>
</forge-scaffold>
```

The scaffold component is great for a top-level layout, but you can also use it within other components, such as dialogs and cards, to utilize the same layout structure.

### App Bar

The `<forge-app-bar>` component is a header component that you can use to display the logo and title of your application, as well as any actions and/or navigation items.

An app bar gives your application an identity, consistent look and feel, and provides a consistent location for users to quickly access common actions.

```html
<forge-app-bar title-text="My Application">
  <forge-icon-button slot="end" aria-label="View my favorites">
    <forge-icon icon="favorites"></forge-icon>
  </forge-icon-button>
  <forge-app-bar-profile-button slot="end"></forge-app-bar-profile-button>
</forge-app-bar>
```

### Card

The `<forge-card>` component is a container component that you can use to group related content together. It provides a consistent surface for your content, and can be used to display information, actions, and other components.

```html
<forge-card>
  <h3 class="forge-typography--heading5">My Card</h3>
  <p>My Content</p>
</forge-card>
```

### Toolbar

The `<forge-toolbar>` component is a layout component that you can use to display a title or other content at the top of a page or section.

```html
<forge-toolbar>
  <h2 slot="start" class="forge-typography--heading4">My Page</h2>
  <forge-icon-button slot="end" aria-label="See more">
    <forge-icon icon="more_vert"></forge-icon>
  </forge-icon-button>
</forge-toolbar>
```

These are just a few of the components that Forge provides. See the "Components" section in the sidebar for more information on the components available in Forge.

## Best Practices

1. Call component definition functions as early as possible in your application bootstrap process.
2. For production, load only the components you actually use.
3. Consider using individual component stylesheets instead of the global stylesheet.
4. When using the CDN, make sure to include the `type="module"` attribute in script tags.
5. Use CSS custom properties and shadow parts sparingly to maintain design consistency.
6. Handle FOUC gracefully to improve the user experience.
7. Use the appropriate component for the job to ensure a consistent user experience.
