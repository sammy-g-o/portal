/* eslint-disable react/prop-types */
import style from './program.module.css'
function Program({img, children}) {
    return(
        <div className={style.program}>
            <img src={img} alt="" />
            <h3>{children}</h3>
        </div>
    )
}
export default Program