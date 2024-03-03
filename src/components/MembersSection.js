import Item from "./Item";
import styles from "./MembersSection.module.css";

const MembersSection = () => {
  return (
    <section className={styles.membersSection}>
      <div className={styles.membersSection1}>
        <div className={styles.churchOfficers}>church members</div>
        <h1 className={styles.reviewsOfThe}>Reviews of the members</h1>
      </div>
      <div className={styles.members}>
        <Item
          httpswwwpexelscomphotowom="/httpswwwpexelscomphotowomaninsleevelesstop2075673@2x.png"
          kimBowen="Kim Bowen"
        />
        <Item
          httpswwwpexelscomphotowom="/httpswwwpexelscomphotophotoofwomanwearingredtop3760737@2x.png"
          kimBowen="Danielle Watkins"
          propFlex="0.9175"
          propPadding="var(--padding-29xl) var(--padding-38xl) var(--padding-37xl) var(--padding-37xl)"
          propPadding1="0rem var(--padding-lgi) var(--padding-5xs) var(--padding-lg)"
          propAlignSelf="stretch"
          propTextAlign="left"
          propPadding2="0rem var(--padding-3xs) 0rem 0rem"
          propPadding3="0rem var(--padding-3xs) 0rem 0rem"
        />
        <div className={styles.item}>
          <div className={styles.background} />
          <div className={styles.wrapperImageWrapper}>
            <div className={styles.wrapperImage}>
              <img className={styles.imageIcon} alt="" src="/image-2@2x.png" />
            </div>
          </div>
          <div className={styles.naomiCraigWrapper}>
            <h2 className={styles.naomiCraig}>Naomi Craig</h2>
          </div>
          <div className={styles.pastorChurchWrapper}>
            <div className={styles.pastorChurch}>Pastor, Church</div>
          </div>
          <div className={styles.reviewWrapper}>
            <div className={styles.review}>Review</div>
          </div>
          <img
            className={styles.itemChild}
            loading="lazy"
            alt=""
            src="/group-2196.svg"
          />
        </div>
        <Item
          httpswwwpexelscomphotowom="/image-3@2x.png"
          kimBowen="Santos Payne"
          propFlex="1"
          propPadding="var(--padding-29xl) var(--padding-29xl) var(--padding-37xl)"
          propPadding1="0rem var(--padding-xl) var(--padding-5xs)"
          propAlignSelf="unset"
          propTextAlign="center"
          propPadding2="0rem var(--padding-4xs) 0rem 0rem"
          propPadding3="0rem var(--padding-lgi) 0rem 0rem"
        />
      </div>
    </section>
  );
};

export default MembersSection;
