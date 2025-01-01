import Hotspot from "./hotspot";
import style from "./hotspots.module.css";
function Hotspots() {
  return (
    <section  className={style.HotspotsWrapper}>
      <div  className={style.Hotspots}>
        <h2>Hotspots</h2>
        <Hotspot img="/images/auditorium.jpg" title="AUDITORIUM">
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat
        </Hotspot>
        <Hotspot img="/images/sportcentre.jpg" title="SPORTS CENTRE">
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat
        </Hotspot>
        <Hotspot img="/images/cafeteria.jpg" title="CAFETERIA">
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat
        </Hotspot>
        <Hotspot img="/images/sciencelab.jpg" title="SCIENCE LAB">
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat
        </Hotspot>
        <Hotspot img="/images/computerlab.jpg" title="SOFTWARE LAB">
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat
        </Hotspot>
      </div>
    </section>
  );
}
export default Hotspots;
