// __mocks__/next-themes.js
// A test-friendly mock of `next-themes`.
// - `useTheme()` returns a stable `resolvedTheme` string
// - `setTheme` is a spyable function (exports as named `setTheme` so tests can assert calls)

const setTheme =
  typeof jest !== 'undefined'
    ? jest.fn((value) => localStorage.setItem('theme', value))
    : (value) => localStorage.setItem('theme', value);

function useTheme() {
  // resolvedTheme as string (not function). default to 'dark' if not set in localStorage
  const resolvedTheme =
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') ?? 'dark')
      : 'dark';
  return { resolvedTheme, setTheme };
}

// Passthrough ThemeProvider for components that import ThemeProvider directly
function ThemeProvider({ children }) {
  return children;
}

module.exports = {
  useTheme,
  // Named export for tests to assert setTheme calls
  setTheme,
  ThemeProvider,
  default: { useTheme, setTheme },
};
