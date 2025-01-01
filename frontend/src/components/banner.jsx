import style from "./banner.module.css";
function Banner() {
  return (
    <div className={style.banner}>
      <p className={style.heading}>
        Shaping the Future
        <span><br />Through Education and <br /></span> Innovation
      </p>
      <p className={style.subHeading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa
        sit amet <br /><span></span> nisi blandit vehicula. Donec sollicitudin luctus fermentum.{" "}
      </p>
      <p className={style.learnMore}>
        learn more
      </p>
    </div>
  );
}
export default Banner;
