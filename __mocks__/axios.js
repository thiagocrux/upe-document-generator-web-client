const defaultOkResponse = {
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

const defaultDeleteResponse = {
  data: null,
  status: 204,
  statusText: 'No Content',
  headers: {},
  config: {},
};

const axiosMock = {
  get: jest.fn(() => Promise.resolve({ ...defaultOkResponse })),
  post: jest.fn(() => Promise.resolve({ ...defaultOkResponse })),
  put: jest.fn(() => Promise.resolve({ ...defaultOkResponse })),
  patch: jest.fn(() => Promise.resolve({ ...defaultOkResponse })),
  delete: jest.fn(() => Promise.resolve({ ...defaultDeleteResponse })),
};

export default axiosMock;
