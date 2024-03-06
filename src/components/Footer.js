import { useMemo } from "react";
import styles from "./Footer.module.css";

const Footer = ({
  socialWrapper,
  propPadding,
  propWidth,
  propPadding1,
  propPadding2,
  propPadding3,
  propGap,
  propWidth1,
  propGap1,
  propWidth2,
  propMinWidth,
  propWidth3,
  propPadding4,
  onHOMETextClick,
  onAboutUsTextClick,
  onMinistryTextClick,
  onContactTextClick,
  onButton1Click,
}) => {
  const footerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv2Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv3Style = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameDiv4Style = useMemo(() => {
    return {
      width: propWidth1,
      gap: propGap1,
    };
  }, [propWidth1, propGap1]);

  const linksColumnStyle = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth,
    };
  }, [propWidth2, propMinWidth]);

  const subscribeToGetStyle = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const inputStyle = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className={styles.backgroundShape} />
      <div className={styles.contentLeftParent} style={frameDivStyle}>
        <div className={styles.contentLeft}>
          <div className={styles.logoWrapper} style={frameDiv1Style}>
            <div className={styles.logo}>
              <div className={styles.agmiWrapper}>
                <h1 className={styles.agmi}>AGMI</h1>
              </div>
            </div>
          </div>
          <div className={styles.copyrightAgmi2024}>© Copyright agmi 2024</div>
        </div>
        <div className={styles.contentLeftWrapper} style={frameDiv2Style}>
          <div className={styles.contentLeft1}>
            <div className={styles.addressNumber}>
              <div className={styles.ph9194466}>Ph: +91 94466 36378</div>
              <div className={styles.pOBox37Container}>
                <p className={styles.pOBox37}>P. O. Box-37,</p>
                <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
                <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
                <p className={styles.kerala683642India}>Kerala-683642, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper} style={frameDiv3Style}>
          <div className={styles.frameParent} style={groupDivStyle}>
            <div className={styles.messageFillWrapper}>
              <img
                className={styles.messageFillIcon}
                loading="lazy"
                alt=""
                src="/message-fill@2x.png"
              />
            </div>
            <div className={styles.agmicarmelgmailcomagmiingmailc}>
              <div className={styles.agmicarmelgmailcom}>
                agmicarmel@gmail.com
              </div>
              <div className={styles.agmiingmailcom}>agmi.in@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linksColumnParent} style={frameDiv4Style}>
        <div className={styles.linksColumn} style={linksColumnStyle}>
          <div className={styles.linksColumn1}>
            <div className={styles.quicklinks}>Quicklinks</div>
            <div className={styles.linksList}>
              <div className={styles.home} onClick={onHOMETextClick}>
                HOME
              </div>
              <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className={styles.ministry} onClick={onMinistryTextClick}>
                ministry
              </div>
              <div className={styles.contact} onClick={onContactTextClick}>
                contact
              </div>
            </div>
          </div>
          <div className={styles.connect}>
            <div className={styles.connect1}>{`Connect `}</div>
            <img
              className={styles.socialWrapperIcon}
              loading="lazy"
              alt=""
              src={socialWrapper}
            />
          </div>
        </div>
        <div className={styles.subscription}>
          <h1 className={styles.subscribeToGet} style={subscribeToGetStyle}>
            Subscribe to get Latest Updates and News
          </h1>
          <div className={styles.input} style={inputStyle}>
            <div className={styles.yourmailgmailcom}>Yourmail@gmail.com</div>
            <div className={styles.background} />
            <button className={styles.button} onClick={onButton1Click}>
              <div className={styles.buttonText}>Subscribe</div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
