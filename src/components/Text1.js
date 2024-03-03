import Item1 from "./Item1";
import styles from "./Text1.module.css";

const Text1 = () => {
  return (
    <section className={styles.text}>
      <div className={styles.contentLeftParent}>
        <div className={styles.contentLeft}>sub-headline</div>
        <h1 className={styles.heading}>a church that's relevant</h1>
      </div>
      <div className={styles.list}>
        <Item1 icon="/icon.svg" aboutUs="About us" />
        <Item1
          icon="/icon-1.svg"
          aboutUs="Get involved"
          propPadding="var(--padding-61xl) 0rem 0rem"
        />
        <Item1
          icon="/icon-2.svg"
          aboutUs="Giving back"
          propPadding="var(--padding-61xl) var(--padding-12xs) 0rem 0rem"
        />
      </div>
    </section>
  );
};

export default Text1;
