import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const apiKey = "VhHLFYr-V3Zx0lbS7";

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.checkValidity()) {
      emailjs.sendForm(serviceID, templateID, form.current, apiKey).then(
        (result) => {
          console.log(sendEmail);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      form.current.reportValidity();
    }
  };

  return (
    <div id="contacts" className="contacts">
      <div className="text-center">
        <h1>Contact me ASAP</h1>
        <p>
          Please fill out the form and describe your project needs and I'll
          contact you as soon as possible.
        </p>
      </div>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name input*/}
              <input
                className="form-control"
                placeholder="Name"
                name="name"
                type="text"
                required
              />
              <div className="line"></div>
              {/* Phone input*/}
              <input
                className="form-control"
                placeholder="Phone"
                name="phone"
                type="text"
                required
              />
              <div className="line"></div>
              {/* Email input*/}
              <input
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                required
              />
              <div className="line"></div>
              {/* Subject input*/}
              <input
                className="form-control"
                placeholder="Subject"
                name="subject"
                type="text"
                required
              />
              <div className="line"></div>
            </div>
            <div className="col-md-6 col-xs_12">
              {/* Description */}
              <textarea
                className="form-control"
                placeholder="Please describe which services you wish to get."
                name="description"
                required
              ></textarea>
              <div className="line"></div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact Me
              </button>
              {isSent && (
                <div className="sent-message">
                  <p color="white">
                    Your message has been sent. Thank you for contacting me!
                  </p>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
