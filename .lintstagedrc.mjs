const lintStagedConfig = {
  '*.{js,ts,mjs,mts}': (filenames) => [
    `npx prettier --write ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
    'eslint . --fix --ignore-pattern "dist/*"',
    `npx jest --bail --findRelatedTests --passWithNoTests ${filenames
      .map((filename) => `"${filename}"`)
      .join(' ')}`,
  ],
};

export default lintStagedConfig;
