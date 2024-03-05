import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({
  socialWrapper,
  backgroundShapeTop,
  inputLeft,
  inputWidth,
  buttonLeft,
  buttonTextLeft,
  subscribeToGetLeft,
  socialWrapperIconWidth,
  socialWrapperIconRight,
  linksListWidth,
  linksListRight,
  copyrightFinsweet2022Width,
  addressNumberWidth,
  addressNumberRight,
  emailnamegmsilcomWidth,
  emailnamegmsilcomLeft,
  messageFillIconWidth,
  messageFillIconLeft,
  onButtonClick,
  onSermonsTextClick,
  onContactTextClick,
  onHOMETextClick,
  onAboutUsTextClick,
}) => {
  const footerStyle = useMemo(() => {
    return {
      top: backgroundShapeTop,
    };
  }, [backgroundShapeTop]);

  const subscriptionStyle = useMemo(() => {
    return {
      left: inputLeft,
      width: inputWidth,
    };
  }, [inputLeft, inputWidth]);

  const inputStyle = useMemo(() => {
    return {
      left: buttonLeft,
    };
  }, [buttonLeft]);

  const buttonStyle = useMemo(() => {
    return {
      left: buttonTextLeft,
    };
  }, [buttonTextLeft]);

  const yourmailgmailcomStyle = useMemo(() => {
    return {
      left: subscribeToGetLeft,
    };
  }, [subscribeToGetLeft]);

  const connectStyle = useMemo(() => {
    return {
      width: socialWrapperIconWidth,
      right: socialWrapperIconRight,
    };
  }, [socialWrapperIconWidth, socialWrapperIconRight]);

  const linksColumnStyle = useMemo(() => {
    return {
      width: linksListWidth,
      right: linksListRight,
    };
  }, [linksListWidth, linksListRight]);

  const contentLeftStyle = useMemo(() => {
    return {
      width: copyrightFinsweet2022Width,
    };
  }, [copyrightFinsweet2022Width]);

  const contentLeft1Style = useMemo(() => {
    return {
      width: addressNumberWidth,
      right: addressNumberRight,
    };
  }, [addressNumberWidth, addressNumberRight]);

  const groupDivStyle = useMemo(() => {
    return {
      width: emailnamegmsilcomWidth,
      left: emailnamegmsilcomLeft,
    };
  }, [emailnamegmsilcomWidth, emailnamegmsilcomLeft]);

  const emailnamegmsilcomStyle = useMemo(() => {
    return {
      width: messageFillIconWidth,
      left: messageFillIconLeft,
    };
  }, [messageFillIconWidth, messageFillIconLeft]);

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.backgroundShape} />
      <div className={styles.subscription} style={subscriptionStyle}>
        <div className={styles.input} style={inputStyle}>
          <button
            className={styles.button}
            onClick={onButtonClick}
            style={buttonStyle}
          >
            <div className={styles.buttonText}>Subscribe</div>
          </button>
          <div className={styles.background} />
          <div
            className={styles.yourmailgmailcom}
            style={yourmailgmailcomStyle}
          >
            Yourmail@gmail.com
          </div>
        </div>
        <h1 className={styles.subscribeToGet}>
          Subscribe to get Latest Updates and News
        </h1>
      </div>
      <div className={styles.connect} style={connectStyle}>
        <img
          className={styles.socialWrapperIcon}
          loading="lazy"
          alt=""
          src={socialWrapper}
        />
        <div className={styles.connect1}>{`Connect `}</div>
      </div>
      <div className={styles.linksColumn} style={linksColumnStyle}>
        <div className={styles.linksList}>
          <div className={styles.sermons} onClick={onSermonsTextClick}>
            Sermons
          </div>
          <div className={styles.contact} onClick={onContactTextClick}>
            contact
          </div>
          <div className={styles.home} onClick={onHOMETextClick}>
            HOME
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
            About us
          </div>
        </div>
        <div className={styles.quicklinks}>Quicklinks</div>
      </div>
      <div className={styles.contentLeft} style={contentLeftStyle}>
        <div className={styles.copyrightFinsweet2022}>
          © Copyright Finsweet 2022
        </div>
        <div className={styles.logo}>
          <h1 className={styles.agmi}>AGMI</h1>
        </div>
      </div>
      <div className={styles.contentLeft1} style={contentLeft1Style}>
        <div className={styles.addressNumber}>
          <div className={styles.pOBox37Container}>
            <p className={styles.pOBox37}>P. O. Box-37,</p>
            <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
            <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
            <p className={styles.kerala683642India}>Kerala-683642, India</p>
          </div>
          <div className={styles.ph9194466}>Ph: +91 94466 36378</div>
        </div>
      </div>
      <div className={styles.emailnamegmsilcomParent} style={groupDivStyle}>
        <div
          className={styles.emailnamegmsilcom}
          style={emailnamegmsilcomStyle}
        >
          emailname@gmsil.com
        </div>
        <img className={styles.messageFillIcon} loading="lazy" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
