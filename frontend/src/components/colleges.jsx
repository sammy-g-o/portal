import Row1 from "./row1";
import Row2 from "./row2";
import style from './colleges.module.css'
function Colleges() {
  return (
    <section className={style.collegeSection}>
      <h3>Colleges</h3>
      <Row1 />
      <Row2 />
    </section>
  );
}
export default Colleges;
