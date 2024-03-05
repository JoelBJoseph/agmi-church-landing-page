import styles from "./Item1.module.css";

const Item1 = () => {
  return (
    <div className={styles.item}>
      <div className={styles.background} />
      <div className={styles.wrapperHttpswwwpexelscomWrapper}>
        <div className={styles.wrapperHttpswwwpexelscom}>
          <img
            className={styles.httpswwwpexelscomphotopIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotophotoofwomanwearingredtop3760737@2x.png"
          />
        </div>
      </div>
      <div className={styles.jancyCarmelParent}>
        <h3 className={styles.jancyCarmel}>JANCY CARMEL</h3>
        <div className={styles.frameWrapper}>
          <div className={styles.agmiSecretaryParent}>
            <div className={styles.agmiSecretary}>AGMI SECRETARY</div>
            <div className={styles.facebookNegativeParent}>
              <img
                className={styles.facebookNegative}
                alt=""
                src="/facebook--negative2.svg"
              />
              <img
                className={styles.twitterNegative}
                alt=""
                src="/twitter--negative2.svg"
              />
              <img
                className={styles.linkedinNegative}
                alt=""
                src="/linkedin--negative1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item1;
