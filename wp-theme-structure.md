# WordPress Theme Structure for React Developers

## Key Files & Their React Equivalents

### theme.json
Similar to your project's configuration files like:
- `tailwind.config.js`
- `next.config.js`
- `package.json` (for styling/theming configurations)

Controls global settings like:
```json
{
  "version": 2,
  "settings": {
    "color": {
      "palette": [
        {
          "name": "Primary",
          "slug": "primary",
          "color": "#0073aa"
        }
      ]
    },
    "typography": {
      "fontSizes": [
        {
          "name": "Small",
          "slug": "small",
          "size": "13px"
        }
      ]
    }
  }
}
```

### style.css
Similar to:
- `global.css` in Next.js
- `index.css` in React/Vite

Contains theme metadata and global styles:
```css
/*
Theme Name: My Theme
Theme URI: https://example.com
Author: Your Name
Version: 1.0.0
*/

/* Global styles follow */
```

## Directory Structure Translation

### /parts
Similar to React's components directory. Contains reusable template parts.

React/Next.js:
```
/components
  /Header
    index.jsx
    styles.css
  /Footer
    index.jsx
    styles.css
```

WordPress:
```
/parts
  header.html
  footer.html
  sidebar.html
```

### /patterns
Similar to component libraries or UI kits in React. Contains pre-built, reusable block patterns.

React/Next.js:
```
/components
  /ui
    /Card
    /Hero
    /Pricing
```

WordPress:
```
/patterns
  card.php
  hero.php
  pricing.php
```

### /templates
Similar to page layouts in Next.js or route components in React Router.

React/Next.js:
```
/pages (Next.js)
  index.js
  blog.js
  [slug].js
```

WordPress:
```
/templates
  index.html
  single.html
  archive.html
  page.html
```

## Block Theme vs Classic Theme Comparison

### Block Theme (Modern)
Similar to component-based React development:
- Uses HTML templates
- Relies on block editor
- Leverages theme.json for global styles
- More declarative approach

```
my-block-theme/
├── style.css
├── theme.json
├── templates/
│   ├── index.html
│   └── single.html
├── parts/
│   ├── header.html
│   └── footer.html
└── patterns/
    └── hero.html
```

### Classic Theme (Legacy)
Similar to PHP/jQuery era development:
- Uses PHP templates
- More imperative approach
- Relies on functions.php for customization
- Manual styling with CSS

```
my-classic-theme/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
└── sidebar.php
```

## Key Concepts Translation

### WordPress Blocks ≈ React Components
- WordPress blocks are like React components
- Both are reusable, configurable units
- Both accept props/attributes
- Both can be composed into larger layouts

### Template Parts ≈ Layout Components
- WordPress template parts are like layout components in React
- Both handle common layout elements (header, footer, sidebar)
- Both can be reused across different pages/templates

### Theme.json ≈ Design System Configuration
- Controls global styles and settings
- Similar to Tailwind/CSS-in-JS theme configuration
- Defines design tokens (colors, typography, spacing)

### Block Patterns ≈ Component Composition
- Pre-built layouts using blocks
- Similar to building page sections with component composition
- Reusable across different pages
