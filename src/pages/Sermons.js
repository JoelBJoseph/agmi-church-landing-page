import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ImageIcon from "../components/ImageIcon";
import FooterBackground from "../components/FooterBackground";
import Line1 from "../components/Line1";
import Line from "../components/Line";
import Quicklinks from "../components/Quicklinks";
import FooterParent from "../components/FooterParent";
import Footer from "../components/Footer";
import styles from "./Sermons.module.css";

const Sermons = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className={styles.sermons}>
      <ImageIcon />
      <section className={styles.footerBackgroundParent}>
        <FooterBackground />
        <Line1 />
        <Line />
      </section>
      <Quicklinks />
      <FooterParent />
      <Footer
        socialWrapper="/social-wrapper@2x.png"
        propPadding="var(--padding-45xl) var(--padding-91xl) var(--padding-17xl) var(--padding-66xl)"
        propWidth="12.125rem"
        propPadding1="0rem var(--padding-sm) 0rem 0rem"
        propPadding2="0rem var(--padding-10xl)"
        propPadding3="0rem 0rem 0rem var(--padding-10xl)"
        propGap="5px"
        propWidth1="53.313rem"
        propGap1="0rem 7.188rem"
        propWidth2="14.125rem"
        propMinWidth="14.125rem"
        propWidth3="23.563rem"
        propPadding4="0rem 0rem 0rem var(--padding-xl)"
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
        onMinistryTextClick={onMinistryTextClick}
        onContactTextClick={onContactTextClick}
        onButton1Click={onButtonClick}
      />
    </div>
  );
};

export default Sermons;
