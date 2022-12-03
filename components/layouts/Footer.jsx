import {
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer bg-dark">
        <div className="container-fluid pt-3 bg-dark">
          <div className="row">
            <div className="col-lg-3 pt-2">
              <div>
                <img
                  className="img-fluid mb-3"
                  src="assets/logo1.png"
                  alt="no"
                />
              </div>
              <p>
                © 2022 by Somnium Space LTD. Somnium Space and Somnium Space
                Logo are trademarks of Somnium Space LTD. All other trademarks
                are the property of their respective owners. All rights
                reserved.
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-between">
              <div className=" pt-4">
                <ul className="list-unstyled">
                  <li>Get Somnium</li>
                  <li>Events</li>
                </ul>
              </div>
              <div className=" pt-4">
                <ul className="list-unstyled">
                  <li>Partners</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className=" pt-4">
                <ul className="list-unstyled">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className=" pt-4">
                <ul className="list-unstyled">
                  <li>FAQ</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 pt-3">
              <div>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className=" me-2">
                    {" "}
                    <FaDiscord className="border-circle" size={45} />{" "}
                  </li>
                  <li className="me-2 ">
                    {" "}
                    <FaFacebookF className="border-circle" size={45} />{" "}
                  </li>
                  <li className="me-2 ">
                    {" "}
                    <FaTwitter className="border-circle" size={45} />{" "}
                  </li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled d-flex justify-content-center">
                  <li className="me-2 ">
                    {" "}
                    <FaInstagram className="border-circle" size={45} />{" "}
                  </li>

                  <li className="me-2 ">
                    {" "}
                    <FaYoutube className="border-circle" size={45} />{" "}
                  </li>
                  <li className="me-2 ">
                    {" "}
                    <FaTelegramPlane className="border-circle" size={45} />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
