import { college } from "../data";
import style from "./row2.module.css";
function Row2() {
  const row2 = college.filter((row2) => row2.id >= 5);
  return (
    <div className={style.row2}>
      {row2.map((row2) => (
        <div className={style.collegeCard} key={crypto.randomUUID()}>
          <img src={row2.image} alt="" />
          <h2>{row2.title}</h2>
        </div>
      ))}
    </div>
  );
}
export default Row2;
