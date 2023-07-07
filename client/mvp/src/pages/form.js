

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    state: "",
    address: "",
    phoneNumber: "",
    experiencedMother: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to a server or handle it as needed
    // For this example, we'll simply display an alert message
    alert("Form submitted successfully!");
    navigate('/');
    // Reset the form after submission
    setFormData({
      fullName: "",
      age: "",
      state: "",
      address: "",
      phoneNumber: "",
      experiencedMother: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="giver">Complete this form to become our caregiver</h2>
      <form className="join-form" onSubmit={handleSubmit}>
        <label>Full name</label>
        <input
          type="text"
          placeholder="full name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="number"
          placeholder="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="state">State of origin</label>
        <select
          name="state"
          id="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select state</option>
            
          <option value="Abia">Abia</option>
             <option value="Adamawa">Adamawa</option>
             <option value="Akwa Ibom">Akwa Ibom</option>
             <option value="Anambra">Anambra</option>
             <option value="Bauchi">Bauchi</option>
             <option value="Bayelsa">Bayelsa</option>
             <option value="Benue">Benue</option>
             <option value="Borno">Borno</option>
             <option value="Cross River">Cross River</option>
             <option value="Delta">Delta</option>
             <option value="Ebonyi">Ebonyi</option>
             <option value="Edo">Edo</option>
             <option value="Ekiti">Ekiti</option>
             <option value="Enugu">Enugu</option>
             <option value="FCT">Federal Capital Territory</option>
             <option value="Gombe">Gombe</option>
             <option value="Imo">Imo</option>
             <option value="Jigawa">Jigawa</option>
             <option value="Kaduna">Kaduna</option>
             <option value="Kano">Kano</option>
             <option value="Katsina">Katsina</option>
             <option value="Kebbi">Kebbi</option>
             <option value="Kogi">Kogi</option>
             <option value="Kwara">Kwara</option>
             <option value="Lagos">Lagos</option>
             <option value="Nasarawa">Nasarawa</option>
             <option value="Niger">Niger</option>
             <option value="Ogun">Ogun</option>
             <option value="Ondo">Ondo</option>
             <option value="Osun">Osun</option>
             <option value="Oyo">Oyo</option>
             <option value="Plateau">Plateau</option>
             <option value="Rivers">Rivers</option>
             <option value="Sokoto">Sokoto</option>
             <option value="Taraba">Taraba</option>
             <option value="Yobe">Yobe</option>
             <option value="Zamfara">Zamfara</option>
        </select>
        <label>Address</label>
        <input
          type="text"
          placeholder="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <label>Phone number</label>
        <input
          type="number"
          placeholder="phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="experiencedMother">Are you an experienced mother?</label>
        <div className="radio-container">
          <input
            type="radio"
            id="yes"
            name="experiencedMother"
            value="yes"
            checked={formData.experiencedMother === "yes"}
            onChange={handleChange}
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="experiencedMother"
            value="no"
            checked={formData.experiencedMother === "no"}
            onChange={handleChange}
          />
          <label htmlFor="no">No</label>
        </div>

        <button className="" type="submit">
          Submit
        </button>
        <h3 className="giver1">
          By clicking "submit" I accept the Terms of Service, the Anti-Spam
          Policy and the Privacy Policy.
        </h3>
      </form>
    </div>
  );
};

export default Form;
