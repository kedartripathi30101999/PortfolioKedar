import React, { useState } from 'react';

function ContactMe() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

     
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2 style={{ color: 'cornflowerblue' }}>Contact Me</h2>
      </div>
      <form
        className="contact--form--container"
        action="https://formspree.io/f/xpwaaedp"
        method="POST"
        onSubmit={handleSubmit} // Attach handleSubmit function to form onSubmit event
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              value={firstName} // Bind value to state variable
              onChange={(e) => setFirstName(e.target.value)} // Update state on change
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel" // Changed to type "tel" for phone number input
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
