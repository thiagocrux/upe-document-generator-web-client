import '@testing-library/jest-dom';

// Mock Pointer Events for Radix UI
// JSDOM does not implement Pointer Events, which are used by Radix UI
if (typeof window !== 'undefined') {
  window.HTMLElement.prototype.hasPointerCapture = () => false;
  window.HTMLElement.prototype.setPointerCapture = () => {};
  window.HTMLElement.prototype.releasePointerCapture = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
}
