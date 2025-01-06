function Register2() {
    const styleNumbers = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <section>
      <h2>Register</h2>
      <div className="numbers" style={styleNumbers}>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div
            style={{
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </div>
          upload photo
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div
            style={{
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </div>
          personal information
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div
            style={{
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3
          </div>
          programs
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <div
            style={{
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              backgroundColor: "grey",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            4
          </div>
          Email and password
        </div>
      </div>
      <div className="display">
        <UploadPictures/>
      </div> 
    </section>
  );
}
export default Register2;

function UploadPictures() {
    return(
        <>
        <input type="file" src="" alt="" />
        hi
        </>
    )
}