const Virtual = () => {
    return (
      <>
        <div className="Virtual">
          <div className="container-fluid">
          <div className="text-center">
            <h3 className="m-0">SOMNIUM SPACE IS A</h3>
            <h3 className="virtual-h3 m-0">VIRTUAL REALITY WORLD</h3>
            <h3 className="m-0">Open, Social Persistent</h3>
          </div>
            <div className="row virtual-top">
              <div className="col-lg-3 text-end">
                <p className="virtual-p">
                  We are creating an Open, Social, Virtual Reality world. A world
                  with its own economy and its own currency. A VR world with its
                  own Marketplace, Games, Social experiences and Virtual Land
                  ownership.
                </p>
              </div>
              <div className="col-lg-6">
                <div>
                  <img src="assets/pc.png" className="pc-img" alt="no" />
                </div>
              </div>
              <div className="col-lg-3 ">
                <p className="virtual-p">
                  A VR world which is fully interconnected and seamless. Fully
                  accessible from any device: PC & VR clients for user Desktop
                  or an immersive VR experience on mobile devices.
                </p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row virtual-bottom">
              <div className="col-lg-4 text-end">
                <div>
                  <img
                    className="virtual-2image"
                    src="https://somniumspace.com/static/media/PC_client.24b5aed3.png"
                    alt="no"
                  />
                </div>
                <p className="m-0">Chat Build</p>
                <p>Trade in dedicated Somnium PC client</p>
              </div>
              <div className="col-lg-4 text-center">
                <p className="m-0">PC VR Mode</p>
                <p>Live Inside Somnium World</p>
              </div>
              <div className="col-lg-4 text-center">
                <div>
                  <img
                    className="virtual-2image"
                    src="https://somniumspace.com/static/media/oculusNew.2e72a7ac.png"
                    alt="no"
                  />
                </div>
                <p className="m-0">Oculus Quest</p>
                <p>Compatible</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row last-patner py-4">
              <div className="col-lg-10 mx-auto ">
                <div className="row">
                  <div className="col-lg-3 ">
                    <h1 className="patner-b-h1">Available Now</h1>
                  </div>
                  <div className="col-lg-6  d-flex justify-content-evenly">
                    <div>
                      <img
                      src="assets/window.png"
                        className="img-p-footer"
                        alt="no"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/oclus.png"
                        alt="no"
                        className="img-p-footer"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/vive.png"
                          alt="no"
                        className="img-p-footer"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/steam.png"
                         alt="no"
                        className="img-p-footer"
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 ">
                    <h1 className="patner-b-h1">Ready to Play</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Virtual;
  