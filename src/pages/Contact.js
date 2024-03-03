import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Contentleft from "../components/Contentleft";
import InstagramNegative from "../components/InstagramNegative";
import styles from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
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
    <div className={styles.contact}>
      <Navbar1
        onLogoContainerClick={onLogoContainerClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsText1Click={onAboutUsText1Click}
        onSermonTextClick={onSermonTextClick}
        onReviewText1Click={onReviewText1Click}
        onNavButtonClick={onNavButtonClick}
      />
      <section className={styles.twitter}>
        <div className={styles.header}>
          <img
            className={styles.httpsunsplashcomphotos6lIcon}
            alt=""
            src="/httpsunsplashcomphotos6liebveafry@2x.png"
          />
          <div className={styles.contact1}>Contact</div>
          <h1 className={styles.getInTouch}>Get in touch with our CHURCH</h1>
        </div>
      </section>
      <Contentleft />
      <InstagramNegative
        onAboutUsTextClick={onAboutUsTextClick}
        onSermonsTextClick={onSermonsTextClick}
        onReviewTextClick={onReviewTextClick}
        onContactTextClick={onContactTextClick}
      />
    </div>
  );
};

export default Contact;
