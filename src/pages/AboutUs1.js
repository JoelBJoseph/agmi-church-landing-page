import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import ItemList from "../components/ItemList";
import Footer1 from "../components/Footer1";
import styles from "./AboutUs1.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onAgmiLogo1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAbundantGraceMinistriesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsText2Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMinistryText1Click = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <Navbar1
        onAgmiLogo1ImageClick={onAgmiLogo1ImageClick}
        onLogoContainerClick={onLogoContainerClick}
        onAbundantGraceMinistriesClick={onAbundantGraceMinistriesClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsText1Click={onAboutUsText2Click}
        onMinistryText1Click={onMinistryText1Click}
        onNavButtonClick={onNavButtonClick}
      />
      <div className={styles.inputField}>
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
      <main className={styles.pageContent}>
        <ItemList />
      </main>
      <Footer1 />
    </div>
  );
};

export default AboutUs;
