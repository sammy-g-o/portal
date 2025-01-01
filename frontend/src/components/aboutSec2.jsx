import style from "./aboutSec2.module.css";
function AboutSec2() {
  return (
    <section className={style.aboutsec2}>
      <div className={style.background}>
        <img src="images/aboutsec2.jpg" alt="" />
      </div>
      <div className={style.housevision}>
        <div className={style.whoweare}>
          <h2>Who we are</h2>
          <p>
            Mowe University offers a diverse range of undergraduate and graduate
            programs across various disciplines.
          </p>
          <p>
            Our distinguished faculty are passionate about teaching and
            research, and they are dedicated to providing a rigorous and
            enriching learning experience for all students. Beyond the
            classroom, Mowe University boasts state-of-the-art facilities.
          </p>
          <p>
            Our vibrant campus life offers a wealth of opportunities for
            students to engage in extracurricular activities, student
            organizations, and cultural events. Join us at Mowe University and
            embark on a transformative journey that will prepare you for a
            successful and fulfilling future.
          </p>
        </div>
        <div className={style.vision}>
          <h2>Vision</h2>
          <ul>
            <li>
              To be a world-class institution, renowned for academic excellence,
              innovation, and social impact.
            </li>
            <li>
              To be a leading global university, shaping the future through
              knowledge and discovery.
            </li>

            <li>
              To be a transformative force in higher education, inspiring minds
              and empowering lives.
            </li>
          </ul>
          <div className={style.mission}>
            Mission <img src="/ArrowRight.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSec2;
