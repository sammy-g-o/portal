import style from "./aboutSec1.module.css";
function AboutSec1() {
  return (
    <section className={style.aboutsec1}>
      <div className={style.founderSection}>
        <div className={style.founderImageWrapper}>
          <img src="images/founder.jpg" alt="" />
        </div>
        <div className={style.founderInfoWrapper}>
          <h1 className={style.founderTitle}>
            Founder
          </h1>
          <div className={style.founderCard}>
            <h3 className={style.founderCardHeader}>
              Mowe University <img src="/GraduationCapSmall.svg" alt="" />
            </h3>
            <p className={style.founderCardText}>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin felis vel a
              volutpat dui. Auctor pellentesque ipsum velit turpis nisi enim
              morbi enim. Volutpat in malesuada eget blandit diam dolor. Et amet
              fusce volutpat sit.
            </p>
            <div className={style.founderCardFooter}>
              <h2 className={style.founderNameTitle}>
                Mowe University Founder
              </h2>
              <h3 className={style.founderName}>
                Sanusi Tijani
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={style.aboutUsSection}>
        <div className={style.aboutUsCard}>
          <h2 className={style.aboutUsTitle}>
            About Us
          </h2>
          <p className={style.aboutUsText}>
            Welcome to Mowe University, a premier institution dedicated to
            academic excellence and innovation. Our mission is to empower
            students with the knowledge, skills, and values needed to thrive in
            a rapidly changing world. With a rich history of academic
            achievement and a commitment to fostering a vibrant campus
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutSec1;