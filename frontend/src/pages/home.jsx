import Nav from "../components/nav";
import Banner from "../components/banner";
import Colleges from "../components/colleges";
import AdmissionProcess from "../components/admissionProcess";
import Enrolled from "../components/enrolled";
import Footer from "../components/footer";
import style from './home.module.css'
function Home() {
  return (
    <section className={style.home}>
      <Nav />
      <Banner />
      <Colleges />
      <AdmissionProcess />
      <Enrolled />
      <Footer />
    </section>
  );
}
export default Home;
