import Nav from "../components/nav";
import Banner2 from "../components/banner2";
import Hotspots from "../components/hotspots";
import CampusFooter from "../components/campusFooter";
function Campus() {
  return (
    <>
      <Nav />
      <Banner2 img='/images/campusbanner.jpg'>
        Campus
      </Banner2>
      <Hotspots />
      <CampusFooter/>
    </>
  );
}
export default Campus;
