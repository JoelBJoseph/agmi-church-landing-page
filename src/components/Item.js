import styles from "./Item.module.css";

const Item = () => {
  return (
    <div className={styles.item}>
      <div className={styles.background} />
      <div className={styles.wrapperImage}>
        <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
      </div>
      <div className={styles.itemInner}>
        <div className={styles.frameParent}>
          <div className={styles.nameWrapper}>
            <h3 className={styles.name}>NAME</h3>
          </div>
          <div className={styles.pastorChurchParent}>
            <div className={styles.pastorChurch}>Pastor, Church</div>
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

export default Item;
