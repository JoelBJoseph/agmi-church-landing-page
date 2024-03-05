import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.testimonialBackground}>
      <div className={styles.quoteIcon}>
        <h1 className={styles.heading}>a mission that's relevant</h1>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.background} />
            <div className={styles.aboutUsTab}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className={styles.givingBackTab}>
                <h1 className={styles.aboutUs}>About us</h1>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.bottomLine} />
          </div>
          <div className={styles.item1}>
            <div className={styles.background1} />
            <div className={styles.iconParent}>
              <img className={styles.icon1} alt="" src="/icon-1.svg" />
              <div className={styles.getInvolvedParent}>
                <h1 className={styles.getInvolved}>Get involved</h1>
                <div className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.bottomLine1} />
          </div>
          <div className={styles.item2}>
            <div className={styles.background2} />
            <div className={styles.iconGroup}>
              <img className={styles.icon2} alt="" src="/icon-2.svg" />
              <div className={styles.givingBackParent}>
                <h1 className={styles.givingBack}>Giving back</h1>
                <div className={styles.loremIpsumDolor2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>
            <div className={styles.bottomLine2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
