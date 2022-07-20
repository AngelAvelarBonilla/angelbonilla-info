import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/email-svgrepo-com.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {submitted && (
            <span>
              I haven't implemented this yet. <br />
              Email me directly instead!
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
