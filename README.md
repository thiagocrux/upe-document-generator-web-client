# UPE Document Generator (Web Client)

This web client allows students and university staff to create, preview, and export documents related to student internships at the University of Pernambuco (UPE).

For details about the other components of the project, check the backend repository:

- Backend: https://github.com/thiagocrux/upe-document-generator-api

## Technologies

The project uses a modern toolchain focused on developer experience, performance and testability. Below are the main technologies used individually:

- `next` — Framework for building the client application; provides routing, server-side rendering and other production features.
- `react` — Component-based UI library used to build the interface and manage state.
- `react-dom` — React DOM renderer used to render React components in the browser.
- `typescript` — Strongly typed superset of JavaScript that improves developer tooling and code robustness.
- `tailwindcss` — Utility-first CSS framework used for rapid and consistent styling.
- `jest` — Test runner for unit and component tests, configured to work with TypeScript.
- `@testing-library/react` — Utility library for testing React components using user-focused testing queries.
- `@testing-library/jest-dom` — Custom Jest matchers for testing the state of the DOM.
- `@testing-library/dom` — Generic DOM testing utilities used by testing libraries.
- `cypress` — End-to-end testing framework used to validate the app behavior in a real browser.
- `eslint` — Linter for maintaining code quality and enforcing conventions.
- `eslint-config-next` — Next.js ESLint configuration providing recommended rules for Next.js apps.
- `husky` — Git hooks tool to automate tasks like running lint or tests before commits.
- `lint-staged` — Runs configured linters or scripts on staged files before commit.
- `pnpm` — Fast and disk-efficient JavaScript package manager used in this project.
- `ts-node` — Tool for executing TypeScript directly in Node.js environments, useful for scripts.

_See `package.json` for a full list of dependencies and devDependencies._

## Prerequisites

Before installing and running this app, make sure you have the following installed on your machine:

- Node.js (recommended v16+; verify with `node -v`)
- pnpm (package manager used here; install via `corepack enable` or `npm i -g pnpm`)
- Optional: If running E2E tests locally you will need a compatible browser (Chrome/Chromium) and enough disk space for Cypress binary.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/thiagocrux/upe-document-generator-web-client.git
cd upe-document-generator-web-client
```

2. Install dependencies:

```bash
pnpm install
```

3. Run (development):

```bash
pnpm dev
```

This starts the Next.js dev server and opens the app on port 3000 by default.

## Available scripts

This section documents the main scripts available in `package.json` and what they do.

### Development

- #### `dev`

  Starts the Next.js development server with hot reloading and fast builds.

  ```bash
  pnpm dev
  ```

### Production

- #### `build`

  Builds the application for production. Generated output is stored in the `.next` folder.

  ```bash
  pnpm build
  ```

- #### `start`

  Runs the compiled production build.

  ```bash
  pnpm start
  ```

### Testing and Quality

- #### `lint`

  Runs `eslint` against the codebase.

  ```bash
  pnpm lint
  ```

- #### `test`

  Runs unit & component tests using Jest.

  ```bash
  pnpm test
  ```

- #### `test:watch`

  Runs Jest in watch mode for rapid iteration.

  ```bash
  pnpm run test:watch
  ```

- #### `test:coverage`

  Runs Jest and outputs coverage information.

  ```bash
  pnpm run test:coverage
  ```

### E2E / Cypress

- #### `cypress:install`

  Installs the Cypress binary for the current user (if not present). This project also includes a conditional `postinstall` script that uses `scripts/install-cypress-if-needed.js` to avoid redundant installs.

  ```bash
  pnpm run cypress:install
  ```

- #### `cypress:verify`

  Verifies the Cypress binary installation.

  ```bash
  pnpm run cypress:verify
  ```

- #### `cypress:open`

  Opens the Cypress Test Runner interface (interactive UI) — useful for creating or debugging tests locally.

  ```bash
  pnpm run cypress:open
  ```

- #### `cypress:run`

  Runs Cypress headless tests. This is the recommended step in CI.

  ```bash
  pnpm run cypress:run
  ```

## Related links

- Vercel / Next.js docs: https://nextjs.org/docs
- Jest docs: https://jestjs.io/docs
- Testing Library docs: https://testing-library.com/docs
- Cypress docs: https://docs.cypress.io

## License

[MIT](https://choosealicense.com/licenses/mit/)
