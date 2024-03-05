import styles from "./Item31.module.css";

const Item31 = () => {
  return (
    <section className={styles.item}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image2@2x.png"
      />
      <div className={styles.content}>
        <div className={styles.background} />
        <div className={styles.info}>
          <div className={styles.location}>
            <div className={styles.globalAcademyPContainer}>
              <p className={styles.globalAcademy}>global academy,</p>
              <p className={styles.pOBox37}>P. O. Box-37,</p>
              <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
              <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
              <p className={styles.kerala683642India}>Kerala-683642, India</p>
            </div>
            <div className={styles.icon}>
              <div className={styles.circleShape} />
              <div className={styles.circle} />
            </div>
          </div>
          <div className={styles.titleAndDescription}>
            <h3 className={styles.reachingEquippingSending}>
              Reaching, Equipping, Sending, Serving
            </h3>
            <h1 className={styles.bibleTraining}>bible training</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item31;
