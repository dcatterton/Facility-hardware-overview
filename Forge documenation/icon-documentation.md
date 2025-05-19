# Icon

Icons are used to visually communicate the intention of content or actions. They can enhance the user experience and make the interface more intuitive.

The icon component in Forge is used to render SVG icons. It supports direct integration with the Tyler icons library.

```html
<forge-icon name="forge_logo"></forge-icon>
```

## Registry

The Forge icon component uses the Forge `IconRegistry` to define icons that are available in your application/library.

```javascript
import { IconRegistry } from '@tylertech/forge';
import { tylIconForgeLogo } from '@tylertech/tyler-icons/custom';

IconRegistry.define([
  tylIconForgeLogo
  // Add more icons here
]);
```

**Important**: The IconRegistry is side-effectful (stores the icons on `window`), but cannot be statically analyzed by bundlers. This means that calls to the `IconRegistry.define()` method might be removed from optimized production bundles because the bundles may identify them as dead (unused) code. To prevent this, you can move these calls to either a constructor of a JavaScript class, static initialization block, or to a module that is imported in your application's entry point.

## External

You can also use the icon component to render icons dynamically from the Forge CDN (or any other external source). This is useful when you don't know the icon name at build time.

**Note**: since external icons are not known at runtime, you do not need to register them with the IconRegistry. The icon component will automatically cache the icons it fetches from the external source in the registry for you for any additional usages of the icon to avoid fetching the same icon multiple times.

```html
<forge-icon external external-type="custom" name="action_launcher"></forge-icon>
```

If you view your network requests you will see that the icon is fetched from the Forge CDN when this page loads.

## URL Builder

If you want to adjust where the icon is fetched from, you can implement the `externalUrlBuilder` callback, which is called with the icon name and should return the URL of the .svg icon you want to render.

```javascript
const externalUrlBuilder = (name: string, type: IconExternalType): string => {
  return `https://example.com/${iconName}.svg`;
};
```

## Lazy

Icons can also be rendered lazily using the `lazy` attribute. This is useful when you have a large number of icons on a page and you want to defer rendering them until they are visible within the viewport.

```html
<forge-icon lazy name="forge_logo"></forge-icon>
```

If you were to inspect this page before scrolling this section into view, you would see that the icon is not rendered in the DOM until it is visible.

## Custom SVG

You can also use the icon component to render custom SVG content via the `src` property/attribute. This is useful when you need to render custom SVGs or SVGs from a third-party library.

For example, here is how we can use the icon component to render an SVG from the Forge illustration library and treat it like text:

```html
<forge-icon
  src='<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 92 92"><defs><style>.cls-1{fill:none;}.cls-2,.cls-5{fill:#d0dbf4;}.cls-2{fill-rule:evenodd;}.cls-3,.cls-4{fill:#5cc5cd;}.cls-3,.cls-4,.cls-6,.cls-7{stroke:#586ab1;stroke-width:2px;}.cls-3,.cls-6{stroke-miterlimit:10;}.cls-4,.cls-7{stroke-linecap:round;stroke-linejoin:round;}.cls-6,.cls-7{fill:#fff;}</style></defs><title>artistry-spot</title><rect'
  style="--forge-icon-size: 100px;"
></forge-icon>
```

## API

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| external | boolean | false | Controls whether external network requests are allowed for this icon. Only pertains for icons that aren't already defined in the registry. |
| externalType | IconExternalType | "standard" | The type of icon to load externally. Possible values: "standard" (default), "extended", "custom". |
| externalUrlBuilder | IconUrlBuilder | - | A callback that can be provided to generate a URL that will be used to fetch an SVG icon. |
| lazy | boolean | false | Controls whether the icon will be loaded dynamically when it comes into view. False by default. |
| name | string | - | The name of the icon to render. |
| src | string | - | Provides the ability to set the SVG string content directly. |
| theme | IconTheme | - | The theme to apply to the icon. |
| viewbox | string | - | A custom value to apply to the viewBox attribute on the internal `<svg>` element. |

### Attributes

| Name | Type | Default | Description |
|------|------|---------|-------------|
| external | boolean | false | Controls whether external network requests are allowed for this icon. Only pertains for icons that aren't already defined in the registry. |
| external-type | IconExternalType | - | The type of icon to load externally. Possible values: "standard", "extended", "custom". |
| external-url-builder | IconUrlBuilder | - | A callback that can be provided to generate a URL that will be used to fetch an SVG icon. |
| lazy | boolean | false | Controls whether the icon will be loaded dynamically when it comes into view. False by default. |
| name | string | - | The name of the icon to render. |
| src | string | - | Provides the ability to set the SVG string content directly. |
| theme | IconTheme | - | The theme to apply to the icon. |
| viewbox | string | - | A custom value to apply to the viewBox attribute on the internal `<svg>` element. |

### Methods

| Name | Description | Parameters | Return Type |
|------|-------------|------------|------------|
| layout() | Forces a reload of the icon. | - | void |

### CSS Custom Properties

| Name | Description |
|------|-------------|
| --forge-icon-color | The color of the icon. |
| --forge-icon-font-size | The font size of the icon. |
| --forge-icon-height | The height of the icon. |
| --forge-icon-size | The size of the icon. Defaults to the font-size of the context it is placed in. |
| --forge-icon-width | The width of the icon. |

### CSS Shadow Parts

| Name | Description |
|------|-------------|
| svg | The internal SVG element. |

## Accessibility

There are two types of icons used in applications, decorative and semantic. Typically we use icons for decorative purposes only, but there may be cases where you need to make an icon semantic and accessible.

### Decorative icons

Decorative icons are typically hidden from assistive technology, but there are some important things to note about these icons:

- Add an `aria-hidden="true"` attribute to the icon element to avoid its content being interpreted incorrectly.
- Treat icons as any other text on the page and use proper color contrast ratios.

### Semantic icons

- Use an `role="img"` attribute to give it semantic meaning.
- Use an `aria-label` or `aria-describedby` attribute.
- Use a `title` attribute or a Forge tooltip component to provide a visual description.
- Treat icons as any other text on the page and use proper color contrast ratios.
- If using an SVG icon, hook up the `<title>` element (if applicable) to an `aria-labelledby` attribute on the `<svg>` element.
- If no `<title>` element exists, use an alternative approach such as `aria-label` or `title` attribute.

## CSS-Only

The icon component is also available as a CSS-only component without the need for JavaScript.

To use the CSS-only icon component, include the following CSS file in your project:

```scss
@use '@tylertech/forge/dist/icon/forge-icon.css';
```

### CSS Classes

| Name | Description |
|------|-------------|
| forge-icon | The icon element. |
