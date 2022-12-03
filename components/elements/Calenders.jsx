const Calenders = () => {
    return (
      <>
        <div className="Calenders">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="text-center">
                  <h3 className="m-0">STAY SHARP WITH UPCOMING EVENTS</h3>
                  <h3 className="calender-h3 m-0">SOMNIUM EVENTS CALENDAR</h3>
                  <h3 className="m-0">
                    Have Fun and Share with your Friends our Weekly and Special
                    Events
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-6 text-center">
                <h4 >Featured events</h4>
                <div className="top pt-5 ">
                  <div>
                    <img
                      src="assets/calenderimg.png"
                      alt="no"
                      className="firstimg"
                    />
                  </div>
                  <div>
                    <img src="assets/calender2.png" alt="no" className="first2" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 text-center ">
                <h4>Events Calender</h4>
                <div className="top pt-5 ">
                  <iframe
                    className="w-100"
                    src="https://calendar.google.com/calendar/embed?src=somnium.space.events%40gmail.com"
                    width="500"
                    height="400"
                    scrolling="no"
                    style={{}}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Calenders;
  