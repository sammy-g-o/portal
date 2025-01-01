/* eslint-disable react/prop-types */
import style from './hotspot.module.css'
function Hotspot({ img, title, children }) {
  return (
    <div className={style.Hotspot}>
      <img src={img} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
export default Hotspot;
