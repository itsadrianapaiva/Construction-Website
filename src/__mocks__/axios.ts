
export default {
    post: jest.fn(() => Promise.resolve({
      data: { secure_url: 'https://example.com/uploaded-image.jpg' }
    })),
    isAxiosError: jest.fn()
  };