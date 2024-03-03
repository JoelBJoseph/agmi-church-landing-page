import styles from "./Contentleft.module.css";

const Contentleft = () => {
  return (
    <section className={styles.contentleft}>
      <div className={styles.quicklinks}>
        <div className={styles.subscribe}>
          <h2 className={styles.contactUs}>Contact form:</h2>
        </div>
        <div className={styles.inputForm}>
          <div className={styles.contactDetailsFrame}>
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
            <div className={styles.addressText}>
              <div className={styles.address}>Address</div>
              <h2 className={styles.pOBox37Container}>
                <p className={styles.pOBox37}>P. O. Box-37,</p>
                <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
                <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
                <p className={styles.kerala683642India}>Kerala-683642, India</p>
              </h2>
            </div>
            <div className={styles.dividerLine}>
              <div className={styles.contactDetails}>Contact Details</div>
              <b className={styles.b}>(480) 555-0103</b>
              <h2 className={styles.finsweetexamplecom}>
                finsweet@example.com
              </h2>
            </div>
            <div className={styles.pOPBox}>
              <div className={styles.findUsHere}>Find us here</div>
              <div className={styles.connectFrame}>
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
                  className={styles.linkedinNegative}
                  loading="lazy"
                  alt=""
                  src="/linkedin--negative.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contentleft;
