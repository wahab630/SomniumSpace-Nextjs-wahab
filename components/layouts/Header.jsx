import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="header  sticky-top">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12 top">
              <div className="row">
                <div className="col-lg-2 ">
                  <div>
                    <img src="assets/logo1.png" alt="no" className="logo" />
                  </div>
                </div>
                <div className="col-lg-3 ">
                  <ul className="list-unstyled  d-flex justify-content-evenly">
                    <li>Blockchain</li>
                    <li>Mechanics</li>
                    <li>Partners</li>
                    <li>Events</li>
                  </ul>
                </div>
                <div className="col-lg-4 ">
                  <button className="btn rounded-pills btn-blue">
                    <span>Explore Somnium Map</span>
                  </button>
                  <button className="btn rounded-pills btn-green">
                    <span>Marketplace</span>
                  </button>
                </div>
                <div className="col-lg-3">
                  <p className=" para1 ">
                    <span>Download VR Client</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 offset-2 mt-2  d-flex justify-content-evenly">
              <div className="d-flex">
                <p className="me-4 pb-0">Log In</p>
                <p className="border-start ps-4 pb-0">Sign Up</p>
              </div>
              <div>
                <ul className="list-unstyled d-flex justify-content-evenly ">
                  <li className="me-2 ">
                    {" "}
                    <FaDiscord className="border-circle" size={30} />{" "}
                  </li>
                  <li className="me-2 ">
                    {" "}
                    <FaFacebookF className="border-circle" size={30} />{" "}
                  </li>
                  <li className="me-2 ">
                    {" "}
                    <FaTwitter className="border-circle" size={30} />{" "}
                  </li>
                  <li className="me-2 ">
                    <FaInstagram className="border-circle" size={30} />{" "}
                  </li>

                  <li className="me-2 ">
                    <FaYoutube className="border-circle" size={30} />{" "}
                  </li>
                  <li className="me-2 ">
                    <FaTelegramPlane className="border-circle" size={30} />{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 offset-3">            
                <p className=" para2 ">
                  Join SOMNIUM<span className="red-in-h">WEB</span>
                </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
