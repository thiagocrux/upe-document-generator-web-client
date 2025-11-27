#!/usr/bin/env node

// install-cypress-if-needed.js
// - Checks whether the Cypress binary is installed and installs it only if necessary.
// - Respects the environment variables CYPRESS_INSTALL_BINARY=0 and CI=true to skip installation.

import { execSync } from 'child_process';

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (e) {
    // Log debug info on failure and return false
    console.error(e);
    return false;
  }
}

// Respect explicit disabling of installation
if (process.env.CYPRESS_INSTALL_BINARY === '0') {
  console.log('CYPRESS_INSTALL_BINARY=0 — skipping Cypress binary install.');
  process.exit(0);
}

// If in CI, avoid automatic installation in postinstall; CI should call cypress:install explicitly
if (process.env.CI === 'true') {
  console.log(
    'CI environment detected — skipping automatic Cypress binary install from postinstall.'
  );
  process.exit(0);
}

// Try to verify if Cypress binary is already installed
const verifyCmds = [
  'pnpm exec cypress verify',
  'npx cypress verify',
  'node ./node_modules/cypress/bin/cypress verify',
];
for (const cmd of verifyCmds) {
  if (run(cmd)) {
    console.log('Cypress binary is present; no installation required.');
    process.exit(0);
  }
}

console.log('Cypress binary not found. Attempting to install...');
const installCmds = [
  'pnpm exec cypress install',
  'npx cypress install',
  'node ./node_modules/cypress/bin/cypress install',
];
for (const cmd of installCmds) {
  if (run(cmd)) {
    console.log('Cypress installed successfully.');
    process.exit(0);
  }
}

console.error(
  'Failed to install Cypress. Run `pnpm run cypress:install` to try manually.'
);
process.exit(1);
