import style from "./enrolled.module.css";
function Enrolled() {
  return (
    <section className={style.enrolledSection}>
      <h1>
        More than 50,000 students
        <br />
        has enrolled this year
      </h1>
      <img src="/images/Map.jpg" alt="" />
    </section>
  );
}
export default Enrolled;
