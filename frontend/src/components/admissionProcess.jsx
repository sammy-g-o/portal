import style from "./admissionProcess.module.css";
import pic from "../assets/admission.jpg";
import { NavLink } from "react-router-dom";
function AdmissionProcess() {
  return (
    <div className={style.admissionProcessWrapper}>
      <section className={style.admissionProcessSection}>
        <div className={style.row1}>
          <p className={style.heading}>
            Student Admission Process and <br />
            <span></span>Assistance from us
          </p>
          <p className={style.subHeading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at{" "}
            <br />
            massa sit amet nisi blandit vehicula adipiscing elit.{" "}
          </p>
        </div>
        <div className={style.row2}>
          <div className={style.col1}>
            <img src={pic} alt="" />
          </div>
          <div className={style.col2}>
            <div className={style.col2List}>
              <p>
                <img src="/check.svg" alt="" />
                Complete everything as ordered
              </p>
              <p>
                <img src="/check.svg" alt="" />
                Provide your last exam result
              </p>
              <p>
                <img src="/check.svg" alt="" />
                Choose your desired program{" "}
              </p>
              <p>
                <img src="/check.svg" alt="" />
                Finally get started your program
              </p>
            </div>
            <NavLink>Start Application</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AdmissionProcess;
