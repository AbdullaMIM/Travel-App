import React from 'react'
import "./ContactFormStyles.css"

const ContactForm = () => {
  return (
    <div className="form-container">
        <h1>Send a message to us!</h1>

        <form method="POST" action="https://getform.io/f/29a3084e-0ccf-44b3-95d1-b50597bc2cc3">
              <input type="text" placeholder="Name" name="Name" required/>
              <input type="email" placeholder="Email" name="Email" required/>
              <input type="text" placeholder="Subject" name="Subject" required/>
              <textarea placeholder="Message" rows="4" name="Message" required></textarea>
              <button>Send Message</button>
        </form>
    </div>
  )
}

export default ContactForm
