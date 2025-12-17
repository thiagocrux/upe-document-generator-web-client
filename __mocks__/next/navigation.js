const router = {
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
};

const searchParams = {
  get: jest.fn(),
  getAll: jest.fn(),
  has: jest.fn(),
  forEach: jest.fn(),
  entries: jest.fn(),
  keys: jest.fn(),
  values: jest.fn(),
  toString: jest.fn(),
  size: 0,
};

const useRouter = jest.fn(() => router);
const usePathname = jest.fn(() => '');
const useSearchParams = jest.fn(() => searchParams);

module.exports = {
  useRouter,
  usePathname,
  useSearchParams,
};
