import Item2 from "./Item2";
import styles from "./Members.module.css";

const Members = () => {
  return (
    <section className={styles.members}>
      <Item2
        httpswwwpexelscomphotowom="/httpswwwpexelscomphotowomaninsleevelesstop2075673@2x.png"
        kimBowen="Kim Bowen"
      />
      <Item2
        httpswwwpexelscomphotowom="/httpswwwpexelscomphotophotoofwomanwearingredtop3760737@2x.png"
        kimBowen="Danielle Watkins"
        propFlex="0.9175"
        propPadding="var(--padding-29xl) var(--padding-38xl) var(--padding-29xl) var(--padding-37xl)"
        propAlignSelf="stretch"
        propPadding1="unset"
        propTextAlign="left"
      />
      <div className={styles.item}>
        <div className={styles.background} />
        <div className={styles.wrapperImage}>
          <img className={styles.imageIcon} alt="" src="/image-2@2x.png" />
        </div>
        <div className={styles.itemInner}>
          <div className={styles.naomiCraigParent}>
            <h2 className={styles.naomiCraig}>Naomi Craig</h2>
            <div className={styles.pastorChurchFrameC}>
              <div className={styles.facebookNegativeGroup}>
                <div className={styles.pastorChurch}>Pastor, Church</div>
                <div className={styles.footerContent}>
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
        </div>
      </div>
      <Item2
        httpswwwpexelscomphotowom="/image-3@2x.png"
        kimBowen="Santos Payne"
        propFlex="1"
        propPadding="20px 44px 20px 48px"
        propAlignSelf="unset"
        propPadding1="0rem var(--padding-xl)"
        propTextAlign="center"
      />
    </section>
  );
};

export default Members;
