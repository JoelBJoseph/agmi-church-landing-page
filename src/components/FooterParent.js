import styles from "./FooterParent.module.css";

const FooterParent = () => {
  return (
    <section className={styles.footerParent}>
      <div className={styles.credentialFrame}>
        <div className={styles.ministrialText}>
          <div className={styles.background} />
          <h1 className={styles.credentialOrdination}>credential ordination</h1>
          <div className={styles.logoFrame}>
            <div className={styles.thisOrdinationCredential}>
              "This ordination credential is the official minister license of
              the universal church, verifying your licensed ministry."
            </div>
          </div>
          <div className={styles.linksContainer}>
            <div className={styles.quicklinksText}>
              <div className={styles.messageFrame}>
                <div className={styles.icon}>
                  <div className={styles.addressDetails} />
                  <div className={styles.circle} />
                </div>
              </div>
              <div className={styles.pOBox37Container}>
                <p className={styles.pOBox37}>P. O. Box-37,</p>
                <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
                <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
                <p className={styles.kerala683642India}>Kerala-683642, India</p>
              </div>
            </div>
          </div>
          <div className={styles.joinUsCallToAction}>
            <h2 className={styles.comeJoinUs}>COME JOIN US</h2>
          </div>
        </div>
        <img className={styles.imageIcon} alt="" src="/image-11@2x.png" />
      </div>
    </section>
  );
};

export default FooterParent;
