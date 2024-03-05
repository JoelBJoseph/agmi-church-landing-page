import Navbar from "../components/Navbar";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Item2 from "../components/Item2";
import Item1 from "../components/Item1";
import Item from "../components/Item";
import Footer1 from "../components/Footer1";
import styles from "./AboutUs1.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Navbar />
      <section className={styles.aboutUsHeroWrapper}>
        <div className={styles.aboutUsHero}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <b className={styles.aboutUs1}>About us</b>
          <h1 className={styles.servingTheWorld}>
            Serving the world around us
          </h1>
        </div>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent2 />
          <div className={styles.frameContainer}>
            <div className={styles.ourMissionVisionParent}>
              <div className={styles.ourMission}>{`OUR MISSIOn & Vision`}</div>
              <h1 className={styles.strivingForA}>
                STRIVING FOR A BETTER TOMORROW
              </h1>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </div>
            </div>
            <div className={styles.whatWeDoParent}>
              <div className={styles.whatWeDo}>WHAT WE DO</div>
              <h1 className={styles.bringingPeaceAnd}>
                BRINgING PEACE AND JOY TO THE WORLD
              </h1>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.benefits}>{`BENEFITS `}</div>
          </div>
          <h1 className={styles.benefitsOfOur}>
            THE benefits of joining our church
          </h1>
        </div>
        <FrameComponent1
          findFulfillmentAndJoy="find fulfillment and joy"
          httpsunsplashcomphotos3MW="/httpsunsplashcomphotos3mwdi5-6hrc@2x.png"
        />
        <FrameComponent
          httpsunsplashcomphotos3Xm="/httpsunsplashcomphotos3xmcv5mjzpw@2x.png"
          sharedValues="shared values"
        />
        <FrameComponent1
          findFulfillmentAndJoy="charity events"
          httpsunsplashcomphotos3MW="/httpsunsplashcomphotos3mwdi5-6hrc-1@2x.png"
          propWidth="unset"
        />
        <FrameComponent
          httpsunsplashcomphotos3Xm="/httpsunsplashcomphotos3xmcv5mjzpw-1@2x.png"
          sharedValues="All are welcome"
          propPadding="0rem var(--padding-12xs) var(--padding-45xl) 0rem"
          propWidth="unset"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.churchOfficersParent}>
            <div className={styles.churchOfficers}>church members</div>
            <h1 className={styles.meetOurInspirational}>
              meet our Inspirational team
            </h1>
          </div>
        </div>
        <div className={styles.members}>
          <Item2 />
          <Item1 />
          <Item />
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default AboutUs;
