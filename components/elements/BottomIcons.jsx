import {
    FaInstagram,
    FaMedium,
    FaLinkedin,
    FaYoutube,
    FaTelegramPlane,
  } from "react-icons/fa";
  
  const BottomIcons = () => {
    return (
      <div className="BottomIcons">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 mx-auto ">
              <div className="d-flex justify-content-evenly my-3">
                <div className="icon-border">
                  <FaTelegramPlane size={40} />
                </div>
                <div>
                  <FaInstagram size={40} />
                </div>
                <div>
                  <FaYoutube size={40} />
                </div>
                <div>
                  <FaMedium size={40} />
                </div>
                <div>
                  <FaLinkedin size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BottomIcons;
  