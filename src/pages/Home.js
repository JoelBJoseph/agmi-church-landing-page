import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import QuickLinksColumn from "../components/QuickLinksColumn";
import Text1 from "../components/Text1";
import Welcome from "../components/Welcome";
import FrameComponent from "../components/FrameComponent";
import MembersSection from "../components/MembersSection";
import Background from "../components/Background";
import InstagramNegative from "../components/InstagramNegative";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

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
    <div className={styles.home}>
      <Navbar />
      <QuickLinksColumn />
      <Text1 />
      <section className={styles.subscriptionFrame}>
        <Welcome />
      </section>
      <FrameComponent />
      <MembersSection />
      <Background />
      <InstagramNegative
        propWidth="unset"
        propWidth1="unset"
        propHeight="unset"
        propWidth2="unset"
        propWidth3="unset"
        propDisplay="inline-block"
        propRight="45.625rem"
        propTop="6.25rem"
        propBottom="4.5rem"
        propLeft="8.438rem"
        propBottom1="4.313rem"
        propLeft1="6.813rem"
        onAboutUsTextClick={onAboutUsTextClick}
        onSermonsTextClick={onSermonsTextClick}
        onReviewTextClick={onReviewTextClick}
        onContactTextClick={onContactTextClick}
      />
    </div>
  );
};

export default Home;
