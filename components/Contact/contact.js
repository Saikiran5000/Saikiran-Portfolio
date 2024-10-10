import React, { useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === "") {
      setErrors((errors) => ({ ...errors, name: "Enter Name" }));
      isValid = false;
    } else if (name.trim().length < 4) {
      setErrors((errors) => ({ ...errors, name: "Enter Atleast 4 letters" }));
      isValid = false;
    } else {
      setErrors((errors) => ({ ...errors, name: "" }));
    }

    if (email.trim() === "") {
      setErrors((errors) => ({ ...errors, email: "Enter Email" }));
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setErrors((errors) => ({ ...errors, email: "Enter Valid Email Address" }));
      isValid = false;
    } else {
      setErrors((errors) => ({ ...errors, email: "" }));
    }

    if (message.trim() === "") {
      setErrors((errors) => ({ ...errors, message: "Enter Message" }));
      isValid = false;
    } else {
      setErrors((errors) => ({ ...errors, message: "" }));
    }

    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('service_jk9wawa', 'template_jule81x', form.current, {
          publicKey: 'R95cqwmuPeg95MK-Q',
        })
        .then(
          () => {
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
            setTimeout(() => {
              setSuccess(false);
            }, 3000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  };

  return (
    <section id='contactPage'>
      <h1 className='contactTitle'>Contact Me</h1>
      <div id='contact' className="container">
        <h1 className='contactPageTitle'>Get in Touch</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        {success ? (
          <p className="successMessage">Message sent successfully!</p>
        ) : (
          <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input
                type="text"
                className='inputFields'
                placeholder='Your Name'
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className='errorStyle'>{errors.name}</span>}
            </div>
            <div className="form-group">
              <input
                type="email"
                className='inputFields'
                placeholder='Your Email'
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className='errorStyle'>{errors.email}</span>}
            </div>
            <div className="form-group">
              <textarea
                className="inputFields"
                name="message"
                rows="7"
                cols="85"
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <span className='errorStyle'>{errors.message}</span>}
            </div>
            <button
              type="submit"
              value="send"
              className='inputFields submitBtn'
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
