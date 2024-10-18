import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ConnectForm.scss";

function ConnectForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phoneNumber, comment } = formData;
    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!phoneNumber) newErrors.phoneNumber = "Phone number is required.";
    if (!comment) newErrors.comment = "Comment is required.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      newErrors.email = "Invalid email format.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (phoneNumber && !phoneRegex.test(phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form submitted: ", formData);
      setErrors({});

      await Swal.fire({
        title: "Message Received!",
        text: "We will get in touch with you soon! Thank you for connecting with us.",
        icon: "success",
        confirmButtonText: "Return to Home",
        customClass: {
          title: "swal-title",
          content: "swal-content",
          confirmButton: "swal-confirm-button",
        },
      });

      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        comment: "",
      });

      navigate("/");
    }
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
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name here"
            className="form__input"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email here"
            className="form__input"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phoneNumber" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number here"
            className="form__input"
          />
          {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        </div>
        <div className="form__comment">
          <label htmlFor="comment" className="form__label">
            Comment
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Enter your comment here"
            className="form__input"
          />
          {errors.comment && <p className="error">{errors.comment}</p>}
        </div>
      </section>
      <div className="button-wrapper">
        <button className="form__button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ConnectForm;
