import { FaTwitter, FaDiscord, FaFacebookF } from "react-icons/fa";

const Community = () => {
  return (
    <>
      <div className="Community text-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 text-center mx-auto">
              <h3 className="mb-0">KEEP IN TOUCH WITH</h3>
              <h3 className="community-heading pb-0 mb-0">SOMNIUM COMMUNITY</h3>
              <h3 className="mb-0">
                Share your thoughts with Us and the World
              </h3>
              <p className="text-center mt-5">
                We are an open social world. Our community is the most important
                thing. We are active and happy to answer every question through
                our live channels or through our social channels.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12  text-center">
              <div>
                <FaDiscord className="community-icon mb-3" size={40} />
              </div>
              <div>
                <iframe
                  src="https://e.widgetbot.io/channels/494994753146847233/496817347211034630"
                  
                  className="community-discord"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row mt-4 pb-5">
            <div className="col-lg-5 text-center ">
              <div>
                <FaTwitter className="community-icon mb-3" size={40} />
              </div>
              <div>
                <iframe
                  id="twitter-widget-1"
                  scrolling="no"
                  frameborder="0"
                  allowtransparency="true"
                  allowfullscreen="true"
                  className="twitter-community  mx-auto"
                  style={{
                    position: "static",
                    visibility: "visible",
                    width: "340px",
                    height: "500px",
                    display: "block",
                  }}
                  title="Twitter Timeline"
                  src="https://syndication.twitter.com/srv/timeline-profile/screen-name/somniumspace?dnt=falseembedId=twitter-widget-1features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19ibHVlX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19frame=falsehideBorder=falsehideFooter=falsehideHeader=falsehideScrollBar=falselang=enmaxHeight=600pxorigin=https%3A%2F%2Fsomniumspace.com%2FsessionId=38da9433ce27fb70e194b5dab929acf03d29b0e5showHeader=trueshowReplies=falsetheme=darktransparent=falsewidgetsVersion=a3525f077c700%3A1667415560940"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-5 offset-2  text-center">
              <FaFacebookF className="community-icon mb-3" size={40} />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
