import React from "react";
import "./ConnectForm.scss";

function ConnectForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form action="submit" className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">Connect with Us</h1>
      <section className="form__details">
        <div className="form__contact">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            // value=""
            placeholder="Enter your name here"
            className="form__input"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            // value=""
            placeholder="Enter your email here"
            className="form__input"
          />
          <label htmlFor="phoneNumber" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            // value=""
            placeholder="Enter your phone number here"
            className="form__input"
          />
        </div>
        <div className="form__comment">
          <label htmlFor="comment" className="form__label">
            Comment
          </label>

          <input
            type="text"
            id="comment"
            name="comment"
            // value=""
            placeholder="Enter your comment here"
            className="form__input"
          />
        </div>
      </section>
      <div className="button-wrapper">
        <button className="form__button" type="text">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ConnectForm;
