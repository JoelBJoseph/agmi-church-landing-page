import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./Home1.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSermonsTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <Navbar />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className={styles.homeHeaderFrame}>
        <div className={styles.testimonialFrame}>
          <div className={styles.loveandcompassion}>
            <div className={styles.quoteIconVector}>
              <h1 className={styles.loveAndCompassion}>love and compassion</h1>
              <div className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
          <FrameComponent1 />
        </div>
      </section>
      <FrameComponent />
      <Footer
        socialWrapper="/social-wrapper1@2x.png"
        propPadding="var(--padding-45xl) 6.75rem var(--padding-17xl) var(--padding-66xl)"
        propWidth="12.188rem"
        propPadding1="0rem var(--padding-base) 0rem 0rem"
        propPadding2="0rem var(--padding-11xl)"
        propPadding3="0rem var(--padding-12xs) 0rem var(--padding-10xl)"
        propGap="0.375rem"
        propWidth1="53.438rem"
        propGap1="0rem 7.313rem"
        propWidth2="14.063rem"
        propMinWidth="14.063rem"
        propWidth3="23.594rem"
        propPadding4="0rem var(--padding-12xs) 0rem var(--padding-xl)"
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onSermonsTextClick={onSermonsTextClick}
        onContactTextClick={onContactTextClick}
        onButton1Click={onButtonClick}
      />
    </div>
  );
};

export default Home;
