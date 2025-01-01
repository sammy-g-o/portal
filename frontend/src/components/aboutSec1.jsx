import style from "./aboutSec1.module.css";
function AboutSec1() {
  return (
    <section className={style.aboutsec1}>
      <div style={{ display: "flex" }}>
        <div style={{ zIndex: "50" }}>
          <img src="images/founder.jpg" alt="" />
        </div>
        <div style={{ position: "relative", width: "320px" }}>
          <h1
            style={{
              fontFamily: "Abyssinica SIL",
              fontSize: "100px",
              fontWeight: 400,
              lineHeight: "100px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              color: "#E8ECED",
              position: "absolute",
              top: "-25px",
            }}
          >
            Founder
          </h1>
          <div
            style={{
              width: "320px",
              height: "446px",
              boxShadow: "10px 10px 0px 0px #0540F2",
              position: "absolute",
              backgroundColor: "white",
              left: "-60px",
              top: "40px",
              zIndex: "100",
              padding: "10px 10px",
            }}
          >
            <h3
              style={{
                fontFamily: "Aleo",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "19.2px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              Mowe University <img src="/GraduationCapSmall.svg" alt="" />
            </h3>
            <p
              style={{
                fontFamily: "Abyssinica SIL",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "28.8px",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                padding: "10px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Sollicitudin felis vel a
              volutpat dui. Auctor pellentesque ipsum velit turpis nisi enim
              morbi enim. Volutpat in malesuada eget blandit diam dolor. Et amet
              fusce volutpat sit.
            </p>
            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "#0540F2",
                  fontFamily: "Abyssinica SIL",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Mowe University Founder
              </h2>
              <h3
                style={{
                  color: "#667F83",
                  fontFamily: "Abyssinica SIL",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "27px",
                  textAlign: "left",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Sanusi Tijani
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "645px",
            height: "270px",
            padding: "16px 38px 16px 16px",
            gap: "0px",
            borderRadius: "16px",
            opacity: "0px",
            background: "#FFFFFF",
            border: "3px solid #0540F280",
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <h2
            style={{
              fontFamily: "Aleo",
              fontSize: "32px",
              fontWeight: "400",
              lineHeight: "38.4px",
              textAlign: "left",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "auto",
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontFamily: "Aleo",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Welcome to Mowe University, a premier institution dedicated to
            academic excellence and innovation. Our mission is to empower
            students with the knowledge, skills, and values needed to thrive in
            a rapidly changing world. With a rich history of academic
            achievement and a commitment to fostering a vibrant campus
            community.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutSec1;
