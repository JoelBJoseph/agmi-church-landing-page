import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.linksListFrameWrapper}>
      <div className={styles.linksListFrame}>
        <div className={styles.dividerLine}>
          <h3 className={styles.contactUs}>Contact form:</h3>
        </div>
        <div className={styles.navButtonInstance}>
          <div className={styles.contactUsFrame}>
            <input
              className={styles.input}
              placeholder="Your full Name"
              type="text"
            />
            <input
              className={styles.input1}
              placeholder="Your Email"
              type="text"
            />
            <input
              className={styles.input2}
              placeholder="Query Related"
              type="text"
            />
            <textarea
              className={styles.input3}
              placeholder="Message"
              rows={6}
              cols={31}
            />
            <button className={styles.button}>
              <div className={styles.buttonText}>Send message</div>
            </button>
          </div>
          <div className={styles.emailInput}>
            <div className={styles.queryRelatedInput}>
              <div className={styles.address}>Address</div>
              <h3 className={styles.pOBox37Container}>
                <p className={styles.pOBox37}>P. O. Box-37,</p>
                <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
                <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
                <p className={styles.kerala683642India}>Kerala-683642, India</p>
              </h3>
            </div>
            <div className={styles.phoneNumberText}>
              <div className={styles.contactDetails}>Contact Details</div>
              <b className={styles.ph9194466}>Ph: +91 94466 36378</b>
              <h3 className={styles.finsweetexamplecom}>
                finsweet@example.com
              </h3>
            </div>
            <div className={styles.socialFrames}>
              <div className={styles.findUsHere}>Find us here</div>
              <div className={styles.instagramComponent}>
                <img
                  className={styles.facebookNegative}
                  loading="lazy"
                  alt=""
                  src="/facebook--negative1.svg"
                />
                <img
                  className={styles.twitterNegative}
                  loading="lazy"
                  alt=""
                  src="/twitter--negative1.svg"
                />
                <img
                  className={styles.instaFillIcon}
                  loading="lazy"
                  alt=""
                  src="/insta-fill@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
