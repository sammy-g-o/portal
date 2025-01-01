/* eslint-disable react/prop-types */
import style from './banner2.module.css'
function Banner2({img, children}) {
  return (
    <div className={style.CampusBanner}>
      <img src={img} alt="" />
      <div className={style.overlay}>
        <h2>{children}</h2>
      </div>
    </div>
  );
}
export default Banner2;
