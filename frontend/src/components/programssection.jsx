import style from "./programssection.module.css";
import Programs from "../components/programs";
import Program from "../components/program";
function Programssection() {
  return (
    <section className={style.Programssection}>
      <Programs>
        <h2>College of Engineering and Technology</h2>
        <div>
          <Program img="images/CivilEng.jpg">MSc in Civil Engineering </Program>
          <Program img="images/ElectricalEng.jpg">
            MSc in Electrical Engineering{" "}
          </Program>
          <Program img="images/ComputerSci.jpg">
            MSc in Computer Science{" "}
          </Program>
          <Program img="images/AerospaceEng.jpg">
            MSc in Aerospace Engineering{" "}
          </Program>
          <Program img="images/Biomed.jpg">
            MSc in Biomedical Engineering{" "}
          </Program>
        </div>
      </Programs>
      <Programs>
        <h2>College of Sciences</h2>
        <div>
          <Program img="images/Biology.jpg">MSc in Biology </Program>
          <Program img="images/Chemistry.jpg">MSc in Chemistry </Program>
          <Program img="images/Physics.jpg">MSc in Physics </Program>
          <Program img="images/Mathematics.jpg">MSc in Mathematics </Program>
          <Program img="images/Goelogy.jpg">MSc in Goelogy </Program>
        </div>
      </Programs>
      <Programs>
        <h2>College of Business and Management </h2>
        <div>
          <Program img="images/Marketing.jpg">MSc in Marketing </Program>
          <Program img="images/Finance.jpg">MSc in Finance </Program>
          <Program img="images/Accounting.jpg">MSc in Accounting </Program>
          <Program img="images/Entrepreneurship.jpg">
            MSc in Entrepreneurship{" "}
          </Program>
          <Program img="images/Business.jpg">
            MSc in Business Analytics{" "}
          </Program>
        </div>
      </Programs>
      <Programs>
        <h2>College of Arts and Humanities </h2>
        <div>
          <Program img="images/English.jpg">MSc in English</Program>
          <Program img="images/Philosophy.jpg">MSc in Philosophy </Program>
          <Program img="images/Music.jpg">MSc in Music Education </Program>
          <Program img="images/Journalism.jpg">MSc in Journalism </Program>
          <Program img="images/theatre.jpg">MSc in theatre arts </Program>
        </div>
      </Programs>
    </section>
  );
}
export default Programssection;
