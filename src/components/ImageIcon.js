import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import styles from "./ImageIcon.module.css";

const ImageIcon = () => {
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

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMinistryText1Click = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <section className={styles.backgroundShape}>
      <Navbar1
        onAgmiLogo1ImageClick={onAgmiLogo1ImageClick}
        onLogoContainerClick={onLogoContainerClick}
        onAbundantGraceMinistriesClick={onAbundantGraceMinistriesClick}
        onHomeTextClick={onHomeTextClick}
        onAboutUsText1Click={onAboutUsText1Click}
        onMinistryText1Click={onMinistryText1Click}
        onNavButtonClick={onNavButtonClick}
      />
      <div className={styles.sermonsHeader}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
        <b className={styles.mission}>mission</b>
        <h1 className={styles.takePartIn}>take part in OUR ministry</h1>
      </div>
    </section>
  );
};

export default ImageIcon;
