import { useMemo } from "react";
import styles from "./Item1.module.css";

const Item1 = ({ icon, aboutUs, propPadding }) => {
  const itemStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.item} style={itemStyle}>
      <div className={styles.background} />
      <div className={styles.churchOfficersFrame}>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
        <div className={styles.backgroundShape}>
          <h1 className={styles.aboutUs}>{aboutUs}</h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
      <div className={styles.bottomLine} />
    </div>
  );
};

export default Item1;
