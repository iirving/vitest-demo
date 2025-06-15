Code is Vue3 Javascript , with Vite for testing.

Use the composable pattern

- Prefer the **Composition API** (`setup()`, `<script setup>`) over Options API for new code.
- Use [script setup syntax](https://vuejs.org/guide/extras/composition-api-faq.html#should-i-always-use-script-setup) for SFCs.
- Extract complex logic into composables in `src/composables/`.
- Use `defineProps`, `defineEmits`, and `defineExpose` as needed.

## 7. Testing

- Use [Vitest](https://vitest.dev/) for unit and integration tests.
- Use [Cypress](https://www.cypress.io/) for end-to-end testing.
- Test components in isolation; mock dependencies.

## 11. Linting & Formatting

- Use [ESLint](https://eslint.vuejs.org/) with Vue 3 plugin and [Prettier](https://prettier.io/).
- Set up pre-commit hooks using [lint-staged](https://github.com/okonet/lint-staged).

## 12. Documentation

- Write JSDoc/TSDoc comments for composables, stores, and complex logic.
- Use [Vue Styleguidist](https://vue-styleguidist.github.io/) or [Storybook](https://storybook.js.org/) for documenting components.

# Vue 3 + Vite Project Guidelines

## Project Structure

- `src/` - Contains all source code
  - `assets/` - Static assets like images and fonts
  - `components/` - Reusable Vue components
  - `views/` - Page components
  - `router/` - Vue Router configuration
  - `store/` - State management (Pinia recommended)
  - `composables/` - Reusable composition functions
  - `utils/` - Utility functions
  - `App.vue` - Root component
  - `main.js` - Entry point

## Component Conventions

- Use Composition API with `<script setup>` for new components
- Add JSDoc comments for component props and emits
- Use PascalCase for component names
- Use kebab-case for component files and directories

## Style Guidelines

- Use scoped styles or CSS modules
- Follow BEM methodology for class naming
- Use CSS variables for theming

## Testing

- Place tests in `__tests__` directory or with `.spec.js` suffix
- Use Vitest for unit and component testing
- Aim for high test coverage of business logic

## Performance Optimization

- Lazy load routes and components
- Use `shallowRef` for large reactive objects when appropriate
- Avoid unnecessary watchers and computed properties
- Use v-once for static content

## Build and Deployment

- Use environment variables for configuration
- Customize Vite config for production builds
- Consider using Vite's PWA plugin for production

## Recommended VS Code Extensions

- Volar - Vue 3 language features
- ESLint - Code linting
- Prettier - Code formatting
- i18n Ally - Internationalization support
- Vitest - Test runner integration

## Git Workflow

- Use feature branches
- Write descriptive commit messages
- Review code before merging
