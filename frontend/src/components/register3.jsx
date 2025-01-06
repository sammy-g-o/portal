import { useState } from "react";
import "./Register3.css";


const Register3 = () => {
  const [step, setStep] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    surname: "",
    middleName: "",
    firstName: "",
    gender: "",
    program: "",
  });

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.size <= 20480) {
      setPhoto(URL.createObjectURL(file));
    } else {
      alert("Please upload an image less than 20KB.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step === 1 && !photo) {
      alert("Please upload a photo to proceed.");
    } else if (
      step === 2 &&
      Object.values(formData).slice(0, 4).some((field) => !field)
    ) {
      alert("Please fill out all personal information fields to proceed.");
    } else if (step === 3 && !formData.program) {
      alert("Please select a program to proceed.");
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const programs = {
    "College of Sciences": [
      "MSc in Biology",
      "MSc in Chemistry",
      "MSc in Physics",
      "MSc in Mathematics",
      "MSc in Geology",
    ],
    "College of Engineering and Technology": [
      "MSc in Civil Engineering",
      "MSc in Electrical Engineering",
      "MSc in Computer Science",
      "MSc in Aerospace Engineering",
      "MSc in Biomedical Engineering",
    ],
    "College of Business And Management": [
      "MSc in Marketing",
      "MSc in Finance",
      "MSc in Accounting",
      "MSc in Entrepreneurship",
      "MSc in Business Analytics",
    ],
    "College of Art and Humanities": [
      "MA in English",
      "MA in Philosophy",
      "MA in Music Education",
      "MA in Journalism",
      "MA in Theatre Arts",
    ],
  };

  return (
    <div className="register3-container">
      <header className="register3-header">
        <h1>Welcome</h1>
        <button className="sign-out">Sign out</button>
      </header>

      <div className="register3-stepper">
        <div className={`step ${step === 1 ? "active" : ""}`}>1</div>
        <span className="step-label">Upload photo</span>
        <div className={`step ${step === 2 ? "active" : ""}`}>2</div>
        <span className="step-label">Personal information</span>
        <div className={`step ${step === 3 ? "active" : ""}`}>3</div>
        <span className="step-label">Program</span>
        <div className={`step ${step === 4 ? "active" : ""}`}>4</div>
        <span className="step-label">Email & Password</span>
      </div>

      <div className="register3-content">
        {step === 1 && (
          <>
            <h2>Register</h2>
            <div className="upload-container">
              <label className="upload-label">
                {photo ? (
                  <img src={photo} alt="Uploaded" className="uploaded-image" />
                ) : (
                  <div className="upload-placeholder">
                    <span>Upload picture</span>
                    <span className="error">(not more than 20KB)</span>
                  </div>
                )}
                <input
                  type="file"
                  className="file-input"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Personal Information</h2>
            <div className="form-group">
              <label>Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                placeholder="Surname"
              />
            </div>
            <div className="form-group">
              <label>Middle name</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                placeholder="Middle name"
              />
            </div>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                placeholder="Gender"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Program</h2>
            <div className="program-grid">
              {Object.entries(programs).map(([college, courses]) => (
                <div key={college} className="program-group">
                  <h3>{college}</h3>
                  {courses.map((course) => (
                    <label key={course} className="program-option">
                      <input
                        type="radio"
                        name="program"
                        value={course}
                        checked={formData.program === course}
                        onChange={handleInputChange}
                      />
                      {course}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}

        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};




export default Register3;
