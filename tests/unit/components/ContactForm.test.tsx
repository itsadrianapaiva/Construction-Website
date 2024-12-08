import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../../../src/components/ContactForm';
import axios from 'axios';
import emailjs from 'emailjs-com';

// Mock external dependencies
jest.mock('axios');
jest.mock('emailjs-com');

describe('ContactForm Component', () => {
  // Create a mock file for testing
  const createMockFile = () => 
    new File(['test'], 'test.png', { type: 'image/png' });

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders all form elements correctly', () => {
    render(<ContactForm />);
    
    // Personal Information
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();

    // Address Information
    expect(screen.getByLabelText('Street Address')).toBeInTheDocument();
    expect(screen.getByLabelText('City')).toBeInTheDocument();
    expect(screen.getByLabelText('Province')).toBeInTheDocument();
    expect(screen.getByLabelText('Postal Code')).toBeInTheDocument();

    // Additional Information
    expect(screen.getByLabelText('How Did You Hear About Us?')).toBeInTheDocument();
    expect(screen.getByLabelText('Project Type')).toBeInTheDocument();
    expect(screen.getByLabelText('Project Description')).toBeInTheDocument();

    // File Upload
    expect(screen.getByLabelText('Upload an Image')).toBeInTheDocument();

    // Submit Button
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('validates form submission with empty fields', async () => {
    render(<ContactForm />);
    
    // Attempt to submit empty form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText('Full Name is required')).toBeInTheDocument();
      expect(screen.getByText('Email Address is required')).toBeInTheDocument();
      expect(screen.getByText('Phone Number is required')).toBeInTheDocument();
      expect(screen.getByText('Street Address is required')).toBeInTheDocument();
      expect(screen.getByText('City is required')).toBeInTheDocument();
      expect(screen.getByText('Province is required')).toBeInTheDocument();
      expect(screen.getByText('Postal Code is required')).toBeInTheDocument();
      expect(screen.getByText('Project Type is required')).toBeInTheDocument();
      expect(screen.getByText('Project Description is required')).toBeInTheDocument();
    });
  });

  test('allows file upload', async () => {
    render(<ContactForm />);
    
    // Find file input
    const fileInput = screen.getByLabelText('Upload an Image') as HTMLInputElement;
    
    // Create mock file
    const mockFile = createMockFile();
    
    // Simulate file upload
    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    // Verify file was added
    await waitFor(() => {
      expect(fileInput.files).toBeTruthy();
      expect(fileInput.files?.length).toBe(1);
      expect(fileInput.files?.[0].name).toBe('test.png');
    });
  });

  test('successful form submission', async () => {
    // Mock axios and emailjs
    (axios.post as jest.Mock).mockResolvedValue({
      data: { secure_url: 'https://example.com/uploaded-image.jpg' }
    });
    (emailjs.send as jest.Mock).mockResolvedValue({
      status: 200,
      text: 'Email sent successfully'
    });

    render(<ContactForm />);

    // Fill out form
    fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByLabelText('Street Address'), { target: { value: '123 Test St' } });
    fireEvent.change(screen.getByLabelText('City'), { target: { value: 'Test City' } });
    fireEvent.change(screen.getByLabelText('Province'), { target: { value: 'Ontario' } });
    fireEvent.change(screen.getByLabelText('Postal Code'), { target: { value: 'A1B 2C3' } });
    fireEvent.change(screen.getByLabelText('How Did You Hear About Us?'), { target: { value: 'Google Search' } });
    fireEvent.change(screen.getByLabelText('Project Type'), { target: { value: 'Residential Construction' } });
    fireEvent.change(screen.getByLabelText('Project Description'), { target: { value: 'Test project description' } });

    // Upload file
    const fileInput = screen.getByLabelText('Upload an Image') as HTMLInputElement;
    const mockFile = createMockFile();
    fireEvent.change(fileInput, { target: { files: [mockFile] } });

    // Submit form
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

    // Wait for form submission
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
      expect(emailjs.send).toHaveBeenCalled();
      expect(screen.getByText('Message sent successfully!')).toBeInTheDocument();
    });
  });
});