import Nav from "../components/nav";
import Banner2 from "../components/banner2";
import Programssection from "../components/programssection";
import Footer from "../components/footer";
function ProgramsPage() {
  return (
    <>
      <Nav />
      <Banner2 img="/images/programbanner.jpg">Programs</Banner2>
      <Programssection/>
      <Footer/>
    </>
  );
}
export default ProgramsPage;
