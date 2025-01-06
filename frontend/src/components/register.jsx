import { useState } from "react";
import style from "../components/register.module.css";
import { NavLink } from "react-router-dom";
function Register() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    surname: "",
    middleName: "",
    firstName: "",
    username: "",
    email: "",
    role: "",
    password: "",
    gender: "",
    confirmPassword: "",
  });

  // State to handle errors and success messages
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for this field
  };

  // Validate password strength
  const validatePassword = (password) => {
    if (password.length < 8)
      return "Password must be at least 8 characters long.";
    if (!/[A-Z]/.test(password))
      return "Password must include an uppercase letter.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return "Password must include a special character.";
    return null;
  };

  // Validate the form and handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Display validation errors
      return;
    }

    // Submit data to the backend
    try {
      const response = await fetch("http://your-backend-url/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Registration failed.");

      setSuccessMessage("Registration successful!");
      setFormData({
        surname: "",
        middleName: "",
        firstName: "",
        username: "",
        email: "",
        role: "",
        gender: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    } catch (err) {
      setErrors({ apiError: err.message });
    }
  };

  return (
    <>
      <section className={style.registerSection}>
        <div className={style.loginSectionWrapper}>
          <div className={style.image}></div>
          <div className={style.registerSectionCol2}>
            <h2>MOWE UNIVERSITY</h2>
            <form action="" method="post" onSubmit={handleSubmit}>
              <h3>Register</h3>
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}
              {errors.apiError && (
                <p style={{ color: "red" }}>{errors.apiError}</p>
              )}
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className={style.nameandpass}
                placeholder="Surname"
              />
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className={style.nameandpass}
                placeholder="Middle name"
              />
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={style.nameandpass}
                  placeholder="First name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  className={style.nameandpass}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <select name="role" value={formData.role} onChange={handleChange} className={style.nameandpass}>
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Applicant">Applicant</option>
              </select>
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={style.nameandpass}
                  placeholder="Password"
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={style.nameandpass}
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>{errors.confirmPassword}</p>
                )}
              </div>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                className={style.nameandpass}
                onChange={handleChange}
              />
              <input type="submit" value="Register" className={style.submit} />
              <div className={style.row3}>
                <p>Already have an account?</p>{" "}
                <NavLink to="/login">Login</NavLink>
              </div>
              <div className={style.row4}>
                <p>
                  <input type="checkbox" name="" id="" />{" "}
                  <label htmlFor="">Remember me</label>
                </p>
                <NavLink>Forgot Password</NavLink>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
