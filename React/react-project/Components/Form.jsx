import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstname: "john",
    lastname: "cent",
    age: 24,
    address: "section -C",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
    console.log(formData); // Logs the updated formData
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name Field */}
      <div className="mb-3">
        <label htmlFor="firstname" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstname"
          value={formData.firstname}
          onChange={(event) => {
            setFormData({ ...formData, firstname: event.target.value });
          }}
        />
      </div>

      {/* Last Name Field */}
      <div className="mb-3">
        <label htmlFor="lastname" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastname"
          value={formData.lastname}
          onChange={(event) => {
            setFormData({ ...formData, lastname: event.target.value });
          }}
        />
      </div>

      {/* Age Field */}
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={formData.age}
          onChange={(event) => {
            setFormData({ ...formData, age: Number(event.target.value) });
          }}
        />
      </div>

      {/* Address Field */}
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          value={formData.address}
          onChange={(event) => {
            setFormData({ ...formData, address: event.target.value });
          }}
        />
      </div>

      {/* Password Field */}
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      {/* Checkbox Field */}
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
