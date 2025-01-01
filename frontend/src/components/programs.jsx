/* eslint-disable react/prop-types */

import style from './programs.module.css'
function Programs({children}) {
    return(
        <section className={style.Programs}>
            {children}
        </section>
    )
}
export default Programs