import styles from "./Addresses.module.css";

const Addresses = () => {
  return (
    <div className={styles.addresses}>
      <div className={styles.address}>
        <div className={styles.address1}>
          <h3 className={styles.pOBox37Container}>
            <p className={styles.pOBox37}>P. O. Box-37,</p>
            <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
            <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
            <p className={styles.kerala683642India}>Kerala-683642, India</p>
          </h3>
          <div className={styles.address2}>Address</div>
        </div>
      </div>
      <div className={styles.contactDetails}>
        <div className={styles.contactDetails1}>
          <h3 className={styles.finsweetexamplecom}>finsweet@example.com</h3>
          <b className={styles.ph9194466}>Ph: +91 94466 36378</b>
          <div className={styles.contactDetails2}>Contact Details</div>
        </div>
      </div>
      <div className={styles.social}>
        <div className={styles.findUsHere}>Find us here</div>
        <div className={styles.icons}>
          <img className={styles.facebookNegative} loading="lazy" alt="" />
          <img className={styles.twitterNegative} loading="lazy" alt="" />
          <img
            className={styles.instaFillIcon}
            loading="lazy"
            alt=""
            src="/insta-fill@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Addresses;
