import Nav from "../components/nav";
import Banner from "../components/banner";
import Colleges from "../components/colleges";
import AdmissionProcess from "../components/admissionProcess";
import Enrolled from "../components/enrolled";
import Footer from "../components/footer";
function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Colleges />
      <AdmissionProcess />
      <Enrolled />
      <Footer />
    </>
  );
}
export default Home;
