# Cre8-Components Pattern Generator

This repository now includes a powerful pattern generator that leverages the **Cre8-Components** library to create reusable UI patterns quickly and efficiently.

## What's Included

- **Cre8-Components Library**: Integrated `@cre8_dev/cre8-wc` v1.0.8 with 84+ web components
- **Pattern Generator**: Nx-based generator for creating UI patterns
- **6 Pattern Types**: Layout, Navigation, Form, Data Display, Feedback, and Interaction patterns
- **TypeScript Support**: Full type safety and IntelliSense
- **Storybook Integration**: Optional story files for component documentation
- **Test Support**: Optional test files with accessibility testing

## Available Components

The Cre8-Components library provides 84+ components including:

### Layout & Structure
- `Cre8Layout`, `Cre8LayoutContainer`, `Cre8LayoutSection`
- `Cre8Grid`, `Cre8GridItem`, `Cre8Card`
- `Cre8Header`, `Cre8Footer`, `Cre8Main`

### Navigation
- `Cre8PrimaryNav`, `Cre8PrimaryNavItem`
- `Cre8Breadcrumbs`, `Cre8BreadcrumbsItem`
- `Cre8Tabs`, `Cre8Tab`, `Cre8TabPanel`

### Forms & Input
- `Cre8Field`, `Cre8Button`, `Cre8ButtonGroup`
- `Cre8CheckboxField`, `Cre8RadioField`, `Cre8Select`
- `Cre8DatePicker`, `Cre8MultiSelect`

### Data Display
- `Cre8Table`, `Cre8TableRow`, `Cre8TableCell`
- `Cre8List`, `Cre8ListItem`
- `Cre8Chart` (Chart.js integration)

### Feedback & Communication
- `Cre8Alert`, `Cre8Modal`, `Cre8Tooltip`
- `Cre8LoadingSpinner`, `Cre8InlineAlert`

### Interactive Elements
- `Cre8Dropdown`, `Cre8DropdownItem`
- `Cre8Accordion`, `Cre8AccordionItem`
- `Cre8Popover`, `Cre8Badge`

## Using the Pattern Generator

### Basic Usage

```bash
npx nx g @cre8_dev/yarn-plugin:cre8-component-pattern <name> --pattern=<pattern-type>
```

### Pattern Types

1. **Layout Pattern** (`--pattern=layout`)
   - Creates responsive layout components
   - Variants: default, centered, sidebar
   - Includes grid system and container management

2. **Navigation Pattern** (`--pattern=navigation`)
   - Creates navigation components
   - Variants: primary, breadcrumbs, tabs
   - Handles active states and routing

3. **Form Pattern** (`--pattern=form`)
   - Creates form components with validation
   - Built-in field validation and error handling
   - Form submission events

4. **Data Display Pattern** (`--pattern=data-display`)
   - Creates data visualization components
   - Variants: table, list, chart, cards
   - Handles empty states and loading

5. **Feedback Pattern** (`--pattern=feedback`)
   - Creates user feedback components
   - Variants: alert, modal, tooltip, loading
   - Dismissible and interactive states

6. **Interaction Pattern** (`--pattern=interaction`)
   - Creates interactive UI components
   - Variants: dropdown, accordion, tabs, popover
   - Event handling and state management

### Generator Options

- `--name`: Pattern name (required)
- `--pattern`: Pattern type (required)
- `--directory`: Output directory (default: "src/patterns")
- `--includeTests`: Include test files (default: true)
- `--includeStorybook`: Include Storybook stories (default: true)

### Examples

```bash
# Generate a dashboard layout
npx nx g @cre8_dev/yarn-plugin:cre8-component-pattern dashboard-layout --pattern=layout --directory=components

# Generate a user form with validation
npx nx g @cre8_dev/yarn-plugin:cre8-component-pattern user-form --pattern=form --directory=forms

# Generate a data table for displaying records
npx nx g @cre8_dev/yarn-plugin:cre8-component-pattern data-table --pattern=data-display --directory=components

# Generate navigation with tabs
npx nx g @cre8_dev/yarn-plugin:cre8-component-pattern main-nav --pattern=navigation --includeStorybook=true
```

## Generated Examples

The repository includes example patterns in the `examples/` directory:

- `examples/dashboard-layout/` - Layout pattern with sidebar and grid system
- `examples/user-form/` - Form pattern with validation and field management
- `examples/data-table/` - Data display pattern with table, list, and chart views
- `examples/main-navigation/` - Navigation pattern with breadcrumbs and tabs

## Integration Features

### TypeScript Integration
All generated patterns include full TypeScript support with:
- Type-safe component props
- Custom event typing
- Generic interfaces for data handling

### Lit Element Base
Patterns extend Lit Element providing:
- Shadow DOM encapsulation
- Reactive properties
- Efficient rendering
- Style scoping

### Accessibility
All patterns include:
- ARIA attributes where appropriate
- Keyboard navigation support
- Focus management
- Screen reader compatibility

## Development Workflow

1. **Generate Pattern**: Use the generator to create your pattern
2. **Customize**: Modify the generated code to fit your needs
3. **Test**: Use the generated test files to verify functionality
4. **Document**: Use Storybook stories to document usage
5. **Integrate**: Import and use in your applications

## Usage in Applications

```typescript
// Import the pattern
import './patterns/dashboard-layout/dashboard-layout';

// Use in your HTML
<dashboard-layout-layout variant="sidebar" with-container>
  <nav slot="sidebar">Navigation content</nav>
  <header slot="header">Page header</header>
  <main slot="main">Main content</main>
  <footer slot="footer">Footer content</footer>
</dashboard-layout-layout>
```

## Benefits

- **Rapid Prototyping**: Generate complex UI patterns in seconds
- **Consistent Design**: Built on Cre8-Components design system
- **Production Ready**: Full TypeScript, testing, and accessibility support
- **Customizable**: Generated code is fully editable and extensible
- **Standards Compliant**: Uses modern web standards and best practices

This pattern generator accelerates development by providing pre-built, tested, and documented UI patterns that can be customized for your specific needs while maintaining consistency across your application.