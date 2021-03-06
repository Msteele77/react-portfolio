import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required before submission.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };





    return (
        <section id="contact-section">
          <h2>Contact me</h2>
      {/* <div id="contact"> */}
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="Name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" name="Email"  defaultValue={email} onBlur={handleChange}  />
            </div>
            <div>
              {/* <label htmlFor="message">Message:</label> */}
              <textarea name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
            <button type="submit">Submit</button>
          </form>
          {/* </div> */}
        </section>
        );
}

export default Contact;



  