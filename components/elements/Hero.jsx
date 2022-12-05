const Hero = () => {
  return (
    <>
      <div className="hero text-white">
        <div className="bgvideo ">
          <video
            className="hero-video "
            src="https://somniumspace.com/images/AvatarsAnimation.mp4"
            autoPlay
            loop
            muted
          />
          <div className="container-fluid hero-content ">
            <div className="row  ">
              <div className="col-lg-5  d-sm-block d-none mt-5  offset-4  d-flex align-items-center mt-auto">
                <div className="d-flex flex-column  ">
                  <div className="d-flex  justify-content-center ">
                    <div>
                      <img
                      src="assets/heroone.png"
                      alt="no"
                      />
                    </div>
                    <div className="mt-3 ms-2">
                      <img
                     src="assets/herothree.png"
                     alt="no"
                      />
                      <button className="btn btn-one d-block mx-auto mt-2">
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex ms-4">
                    <div>
                      <img
                      src="assets/herotwo.png"
                      alt="no"
                      />
                    </div>
                    <div className="d-flex align-items-center ms-3">
                      <h4>Access CUBEs</h4>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly ">
                    <div className="btn-img ">
                      <div>
                        <img
                          className="btn-img-two"
                          src="assets/hero4.png"
                          alt="no"
                        />
                      </div>
                    </div>
                    <div className="btn-img-five ">
                      <div>
                        <img
                          className="btn-img-two"
                          src="assets/hero5.png"
                          alt="no"
                        />
                      </div>
                    </div>
                    <div className="btn-img">
                      <div>
                        <img
                          className="btn-img-two"
                          src="assets/herogemni.png"
                          alt="no"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 d-sm-block d-none right text-center">
                <div>
                  <img src="assets/unity.png" className="img-fluid" alt="no" />
                  <p className="pic-p ">UnitySDK</p>
                </div>
                <div>
                  <img
                    src="assets/virtual-reality.png"
                    className="img-fluid"
                    alt="no"
                  />
                  <p className="pic-p ">Virtual Reality</p>
                </div>
                <div>
                  <img
                    src="assets/builder.png"
                    className="img-fluid"
                    alt="no"
                  />
                  <p className="pic-p ">Builder</p>
                </div>
                <div>
                  <img
                    src="assets/heromarketplace.png"
                    className="img-fluid"
                    alt="no"
                  />
                  <p className="pic-p ">Marketplace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
