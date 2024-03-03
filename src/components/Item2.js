import { useMemo } from "react";
import styles from "./Item2.module.css";

const Item2 = ({
  httpswwwpexelscomphotowom,
  kimBowen,
  propFlex,
  propPadding,
  propAlignSelf,
  propPadding1,
  propTextAlign,
}) => {
  const item2Style = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const frameDStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding1,
    };
  }, [propAlignSelf, propPadding1]);

  const kimBowen1Style = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.item} style={item2Style}>
      <div className={styles.background} />
      <div className={styles.wrapperHttpswwwpexelscom}>
        <img
          className={styles.httpswwwpexelscomphotowIcon}
          loading="lazy"
          alt=""
          src={httpswwwpexelscomphotowom}
        />
      </div>
      <div className={styles.frameD} style={frameDStyle}>
        <h2 className={styles.kimBowen} style={kimBowen1Style}>
          {kimBowen}
        </h2>
        <div className={styles.frameLayout}>
          <div className={styles.pastorChurch}>Pastor, Church</div>
          <div className={styles.frameLayoutGroup}>
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
  );
};

export default Item2;
