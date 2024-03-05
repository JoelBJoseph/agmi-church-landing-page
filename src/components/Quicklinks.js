import styles from "./Quicklinks.module.css";

const Quicklinks = () => {
  return (
    <section className={styles.quicklinks}>
      <div className={styles.content}>
        <div className={styles.background} />
        <div className={styles.subscribe}>
          <h1 className={styles.kidsEvangelism}>kids evangelism</h1>
          <b className={styles.letTheLittle}>
            "Let the little children come to me, and do not hinder them, for the
            kingdom of God belongs to such as these." - Mark 10:14
          </b>
        </div>
        <div className={styles.contentInner}>
          <div className={styles.iconParent}>
            <div className={styles.icon}>
              <div className={styles.icon1}>
                <div className={styles.line} />
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
        <h2 className={styles.comeJoinUs}>COME JOIN US</h2>
      </div>
      <img className={styles.imageIcon} alt="" src="/image-21@2x.png" />
    </section>
  );
};

export default Quicklinks;
