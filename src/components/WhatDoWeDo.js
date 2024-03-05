import styles from "./WhatDoWeDo.module.css";

const WhatDoWeDo = () => {
  return (
    <section className={styles.whatDoWeDo}>
      <div className={styles.list}>
        <div className={styles.item}>
          <div className={styles.background} />
          <div className={styles.bottomLine} />
          <div className={styles.text}>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <h1 className={styles.givingBack}>Giving back</h1>
          </div>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-2.svg"
          />
        </div>
        <div className={styles.item1}>
          <div className={styles.background1} />
          <div className={styles.bottomLine1} />
          <div className={styles.text1}>
            <div className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <h1 className={styles.getInvolved}>Get involved</h1>
          </div>
          <img className={styles.icon1} alt="" src="/icon-1.svg" />
        </div>
        <div className={styles.item2}>
          <div className={styles.background2} />
          <div className={styles.bottomLine2} />
          <div className={styles.text2}>
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <h1 className={styles.aboutUs}>About us</h1>
          </div>
          <img className={styles.icon2} alt="" src="/icon.svg" />
        </div>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.heading1}>a church that's relevant</h1>
        <div className={styles.headerImage}>sub-headline</div>
      </div>
    </section>
  );
};

export default WhatDoWeDo;
