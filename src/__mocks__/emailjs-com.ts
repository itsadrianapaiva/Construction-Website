
export default {
    init: jest.fn(), // Mock the initialization method
    send: jest.fn(() => Promise.resolve({
      status: 200,
      text: 'Email sent successfully',
    })),
    sendForm: jest.fn(() => Promise.resolve({
      status: 200,
      text: 'Form email sent successfully',
    })),
  };