import { useMemo } from "react";
import styles from "./InstagramNegative.module.css";

const InstagramNegative = ({
  propWidth,
  propWidth1,
  propHeight,
  propWidth2,
  propWidth3,
  propDisplay,
  propRight,
  propTop,
  propBottom,
  propLeft,
  propBottom1,
  propLeft1,
  onAboutUsTextClick,
  onSermonsTextClick,
  onReviewTextClick,
  onContactTextClick,
}) => {
  const reviewStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const contactStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const subscribeToGetStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const yourmailgmailcomStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const buttonTextStyle = useMemo(() => {
    return {
      width: propWidth3,
      display: propDisplay,
    };
  }, [propWidth3, propDisplay]);

  const instagramNegativeStyle = useMemo(() => {
    return {
      right: propRight,
      top: propTop,
    };
  }, [propRight, propTop]);

  const wwwagmiinStyle = useMemo(() => {
    return {
      bottom: propBottom,
      left: propLeft,
    };
  }, [propBottom, propLeft]);

  const messageFillIconStyle = useMemo(() => {
    return {
      bottom: propBottom1,
      left: propLeft1,
    };
  }, [propBottom1, propLeft1]);

  return (
    <footer className={styles.instagramNegative}>
      <div className={styles.footer}>
        <div className={styles.backgroundShape} />
        <div className={styles.contentLeft}>
          <div className={styles.logo}>
            <div className={styles.agmiWrapper}>
              <h1 className={styles.agmi}>AGMI</h1>
            </div>
          </div>
          <div className={styles.copyrightFinsweet2022}>
            © Copyright Finsweet 2022
          </div>
          <div className={styles.addressNumber}>
            <div className={styles.ph919446636378}>Ph: +91 9446636378</div>
            <div className={styles.pOBox37Container}>
              <p className={styles.pOBox37}>P. O. Box-37,</p>
              <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
              <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
              <p className={styles.kerala683642India}>Kerala-683642, India</p>
            </div>
          </div>
        </div>
        <div className={styles.footerContentLeft}>
          <div className={styles.linksColumnParent}>
            <div className={styles.linksColumn}>
              <div className={styles.linksColumn1}>
                <div className={styles.quicklinks}>Quicklinks</div>
                <div className={styles.linksList}>
                  <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                    About us
                  </div>
                  <div className={styles.sermons} onClick={onSermonsTextClick}>
                    Sermons
                  </div>
                  <div
                    className={styles.review}
                    onClick={onReviewTextClick}
                    style={reviewStyle}
                  >
                    Review
                  </div>
                  <div
                    className={styles.contact}
                    onClick={onContactTextClick}
                    style={contactStyle}
                  >
                    contact
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.connect}>
              <div className={styles.connect1}>{`Connect `}</div>
              <div className={styles.socialWrapper}>
                <img
                  className={styles.facebookNegative}
                  alt=""
                  src="/facebook--negative.svg"
                />
                <img
                  className={styles.twitterNegative}
                  alt=""
                  src="/twitter--negative.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.subscription}>
            <h1 className={styles.subscribeToGet} style={subscribeToGetStyle}>
              Subscribe to get Latest Updates and News
            </h1>
            <div className={styles.input}>
              <div
                className={styles.yourmailgmailcom}
                style={yourmailgmailcomStyle}
              >
                Yourmail@gmail.com
              </div>
              <div className={styles.background} />
              <button className={styles.button}>
                <div className={styles.buttonText} style={buttonTextStyle}>
                  Subscribe
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.instagramNegative1}
        loading="lazy"
        alt=""
        src="/instagram--negative@2x.png"
        style={instagramNegativeStyle}
      />
      <div className={styles.wwwagmiin} style={wwwagmiinStyle}>
        www.agmi.in
      </div>
      <img
        className={styles.messageFillIcon}
        loading="lazy"
        alt=""
        src="/message-fill@2x.png"
        style={messageFillIconStyle}
      />
    </footer>
  );
};

export default InstagramNegative;
