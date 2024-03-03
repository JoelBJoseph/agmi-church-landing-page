import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Members from "../components/Members";
import InstagramNegative from "../components/InstagramNegative";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSermonTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onReviewText1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSermonsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onReviewTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <Navbar1
        onLogoContainerClick={onLogoContainerClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsText1Click={onAboutUsText2Click}
        onSermonTextClick={onSermonTextClick}
        onReviewText1Click={onReviewText1Click}
        onNavButtonClick={onNavButtonClick}
      />
      <div className={styles.contactForm}>
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
      </div>
      <main className={styles.socialIcon}>
        <section className={styles.pastorChurch}>
          <FrameComponent2 />
          <div className={styles.linkedInNegative}>
            <div className={styles.pastorChurch1}>
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
            <div className={styles.pastorChurch2}>
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
        </section>
        <section className={styles.connect}>
          <div className={styles.headerGroup}>
            <div className={styles.logoFrame}>
              <div className={styles.benefits}>{`BENEFITS `}</div>
            </div>
            <h1 className={styles.benefitsOfOur}>
              THE benefits of joining our church
            </h1>
          </div>
          <div className={styles.pastorChurchFrameA}>
            <div className={styles.contentLeftFrame}>
              <h1 className={styles.findFulfillmentAnd}>
                find fulfillment and joy
              </h1>
              <div className={styles.loremIpsumDolor2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </div>
            </div>
            <img
              className={styles.httpsunsplashcomphotos3mIcon}
              loading="lazy"
              alt=""
              src="/httpsunsplashcomphotos3mwdi5-6hrc@2x.png"
            />
          </div>
        </section>
        <FrameComponent1
          httpsunsplashcomphotos3Xm="/httpsunsplashcomphotos3xmcv5mjzpw@2x.png"
          sharedValues="shared values"
        />
        <section className={styles.frameParent}>
          <div className={styles.charityEventsParent}>
            <h1 className={styles.charityEvents}>charity events</h1>
            <div className={styles.loremIpsumDolor3}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </div>
          </div>
          <img
            className={styles.httpsunsplashcomphotos3mIcon1}
            alt=""
            src="/httpsunsplashcomphotos3mwdi5-6hrc-1@2x.png"
          />
        </section>
        <FrameComponent1
          httpsunsplashcomphotos3Xm="/httpsunsplashcomphotos3xmcv5mjzpw-1@2x.png"
          sharedValues="All are welcome"
          propPadding="0rem 0rem var(--padding-45xl)"
          propWidth="unset"
        />
        <div className={styles.churchDetails}>
          <div className={styles.churchOfficers}>church members</div>
          <h1 className={styles.meetOurInspirational}>
            meet our Inspirational team
          </h1>
        </div>
        <Members />
      </main>
      <InstagramNegative
        propWidth="unset"
        propWidth1="unset"
        propHeight="unset"
        propWidth2="unset"
        propWidth3="unset"
        propDisplay="inline-block"
        propRight="45.75rem"
        propTop="6.375rem"
        propBottom="4.5rem"
        propLeft="8.5rem"
        propBottom1="4.313rem"
        propLeft1="6.875rem"
        onAboutUsTextClick={onAboutUsTextClick}
        onSermonsTextClick={onSermonsTextClick}
        onReviewTextClick={onReviewTextClick}
        onContactTextClick={onContactTextClick}
      />
    </div>
  );
};

export default AboutUs;
