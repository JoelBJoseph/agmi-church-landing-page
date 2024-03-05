import styles from "./Item2.module.css";

const Item2 = () => {
  return (
    <div className={styles.item}>
      <div className={styles.background} />
      <div className={styles.wrapperHttpswwwpexelscom}>
        <img
          className={styles.httpswwwpexelscomphotowIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotowomaninsleevelesstop2075673@2x.png"
        />
      </div>
      <div className={styles.itemInner}>
        <div className={styles.joseCarmelParent}>
          <h3 className={styles.joseCarmel}>jose carmel</h3>
          <div className={styles.agmiPresidentParent}>
            <div className={styles.agmiPresident}>AGMI PRESIDENT</div>
            <div className={styles.frameWrapper}>
              <div className={styles.facebookNegativeParent}>
                <img
                  className={styles.facebookNegative}
                  loading="lazy"
                  alt=""
                  src="/facebook--negative2.svg"
                />
                <img
                  className={styles.twitterNegative}
                  loading="lazy"
                  alt=""
                  src="/twitter--negative2.svg"
                />
                <img
                  className={styles.linkedinNegative}
                  loading="lazy"
                  alt=""
                  src="/linkedin--negative1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item2;
