import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: ''
  });

  useEffect(() => {
    // Initialize EmailJS with the correct version
    emailjs.init({
      publicKey: "A8KDdYvltqyOGVD8W",
      limitRate: true
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, errorMessage: '' });

    try {
      console.log('Sending email with data:', formData);
      
      // Create template parameters using the default EmailJS variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      console.log('Template parameters:', templateParams);

      const result = await emailjs.send(
        'service_0qxewi9',
        'template_isisp4j',
        templateParams
      );
      
      console.log('EmailJS result:', result);
      
      if (result.status === 200) {
        setStatus({ loading: false, success: true, error: false, errorMessage: '' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email: ' + result.text);
      }
    } catch (error) {
      console.error('Detailed error:', error);
      setStatus({ 
        loading: false, 
        success: false, 
        error: true,
        errorMessage: error.message || 'Failed to send message'
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="submit-button"
            disabled={status.loading}
          >
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>
          
          {status.success && (
            <p style={{ color: 'green', marginTop: '1rem' }}>
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status.error && (
            <p style={{ color: 'red', marginTop: '1rem' }}>
              {status.errorMessage || 'Failed to send message. Please try again or contact me directly via email.'}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 