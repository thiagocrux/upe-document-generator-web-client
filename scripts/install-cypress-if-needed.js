#!/usr/bin/env node

/**
 * install-cypress-if-needed.js
 *
 * Purpose
 *  - Ensure the Cypress binary is available before running tests.
 *  - Run automatically (e.g. in postinstall) to avoid unnecessary downloads
 *    when the binary is already present.
 *
 * Behavior
 *  - Verifies whether a usable Cypress binary is available using a set of
 *    common verification commands. If verification succeeds the script exits 0.
 *  - If verification fails, attempts to install Cypress with a set of
 *    common installation commands. Exits 0 on success, 1 on failure.
 *
 * Environment variables
 *  - CYPRESS_INSTALL_BINARY=0  -> Explicitly skip automatic install. Useful
 *                                for locked environments or when binaries are
 *                                managed externally.
 *  - CI=true                  -> Avoid automatic install in CI. Prefer an
 *                                explicit `cypress:install` step that can be
 *                                cached and controlled by your pipeline.
 *
 * Usage
 *  - Add to package.json postinstall: "node scripts/install-cypress-if-needed.js"
 *  - Or call it from CI helper tasks when appropriate.
 *
 * Troubleshooting
 *  - If the script fails, run `pnpm run cypress:install` manually to see
 *    installation errors and retry with more verbose logging.
 *  - The script tries `pnpm`, then `npx`, then a direct `node` invocation to
 *    accommodate different developer environments.
 */

import { execSync } from 'child_process';

/**
 * Run a shell command synchronously and return a boolean indicating success.
 * We intentionally run with stdio: 'inherit' so the underlying tool (pnpm/npx)
 * can print helpful progress and errors for debugging.
 */
function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (e) {
    // Print the error to help debugging postinstall/CI failures. The script
    // itself will handle returning a non-zero exit code if all attempts fail.
    console.error(e);
    return false;
  }
}

// Respect explicit disabling of installation. This is useful when
// the environment cannot download binaries (air-gapped) or a maintainer has
// opted out of automatic installs.
if (process.env.CYPRESS_INSTALL_BINARY === '0') {
  console.log('CYPRESS_INSTALL_BINARY=0 — skipping Cypress binary install.');
  process.exit(0);
}

// In CI environments we prefer an explicit install step that can be cached and
// controlled by the pipeline. Skip automatic postinstall installs in CI.
if (process.env.CI === 'true') {
  console.log(
    'CI environment detected — skipping automatic Cypress binary install from postinstall.'
  );
  process.exit(0);
}

// Try to verify if Cypress binary is already installed. We try several
// strategies to be robust across setups (pnpm first, then npx, then direct file
// invocation). If any verification succeeds we exit with code 0.
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

// Try installing using the same set of strategies. Most environments will
// succeed on the first attempt; the fallbacks help in unusual setups.
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

// If we reached here, all attempts failed. Provide a helpful message and exit
// with a non-zero code so CI or callers can fail fast and surface logs.
console.error(
  'Failed to install Cypress. Run `pnpm run cypress:install` to try manually.'
);

process.exit(1);
