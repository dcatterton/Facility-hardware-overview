# Forge Installation Guide

## Overview

This guide covers the different methods for installing and using Forge in your projects. Forge is available in two main formats, each designed for different use cases.

## Installation Options

Before getting started, determine what kind of installation you need:

### NPM Package

**Recommended method** for installing Forge. Benefits include:
- Easy dependency management 
- Simple project updates
- Integration with build tools

### CDN

Suitable for:
- Experimenting with Forge
- Projects without a package manager
- Quick prototyping

## NPM Package Installation

To install Forge from npm, run:

```bash
npm install @tylertech/forge
```

### Package Format

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

You can inspect the package contents by navigating to the `node_modules/@tylertech/forge` directory in your project.

## Framework Installation

If you're using a framework, refer to the framework-specific guide:

- [Angular](https://your-link-to-angular-guide)
- [React](https://your-link-to-react-guide)
- [Vue](https://your-link-to-vue-guide)
- [Svelte](https://your-link-to-svelte-guide)
- [Blazor](https://your-link-to-blazor-guide)

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

## CDN Installation

To use Forge via CDN, include this script tag in your HTML:

```html
<script type="module" src="https://cdn.forge.tylertech.com/v1/libs/@tylertech/forge@<version>/index.js"></script>
```

Replace `<version>` with the desired Forge version.

> **Note:** The CDN distributes Forge as ES modules, so the `type="module"` attribute is required.

The above script loads all components automatically. For production use, load only the components you need:

```html
<script type="module" src="https://cdn.forge.tylertech.com/v1/libs/@tylertech/forge@<version>/<component>/index.js"></script>
```

Replace `<component>` with the name of the component you want to use.

For example, to use `<forge-button>`, include:

```html
<script type="module" src="https://cdn.forge.tylertech.com/v1/libs/@tylertech/forge@<version>/button/index.js"></script>
```

You also need to load required global styles:

```html
<link rel="stylesheet" href="https://cdn.forge.tylertech.com/v1/libs/@tylertech/forge@<version>/forge.css" />
```

Alternatively, you can use the JSDelivr CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@tylertech/forge@<version>/dist/esm/index.js"></script>
```

## Best Practices

1. Call component definition functions as early as possible in your application bootstrap process.
2. For production, load only the components you actually use.
3. Consider using individual component stylesheets instead of the global stylesheet.
4. When using the CDN, make sure to include the `type="module"` attribute in script tags.
