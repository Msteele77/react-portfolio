import React from 'react';

//import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  





    return (
        <section class="contact-section">
          <h2>Contact me</h2>
      <div  id="contact">
          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" rows="5" />
            </div>
            <button type="submit">Submit</button>
          </form>
          </div>
        </section>
        );
}

export default ContactForm;



  