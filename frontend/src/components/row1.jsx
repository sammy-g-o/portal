import { college } from '../data';
import style from "./row1.module.css";
function Row1() {
  const row1 = college.filter((row1) => row1.id < 5);
  return (
    <div className={style.row1}>
      {row1.map((row1) => (
        <div className={style.collegeCard} key={crypto.randomUUID()}>
          <img src={row1.image} alt="" />
          <h2>{row1.title}</h2>
        </div>
      ))}
    </div>
  );
}
export default Row1;
