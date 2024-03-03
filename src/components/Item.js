import { useMemo } from "react";
import styles from "./Item.module.css";

const Item = ({
  httpswwwpexelscomphotowom,
  kimBowen,
  propFlex,
  propPadding,
  propPadding1,
  propAlignSelf,
  propTextAlign,
  propPadding2,
  propPadding3,
}) => {
  const item1Style = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const pOPoBoxFrameStyle = useMemo(() => {
    return {
      padding: propPadding1,
      alignSelf: propAlignSelf,
    };
  }, [propPadding1, propAlignSelf]);

  const kimBowenStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const nameFrameStyle = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const reviewGroupStyle = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  return (
    <div className={styles.item} style={item1Style}>
      <div className={styles.background} />
      <div className={styles.pOPoBoxFrame} style={pOPoBoxFrameStyle}>
        <div className={styles.wrapperHttpswwwpexelscom}>
          <img
            className={styles.httpswwwpexelscomphotowIcon}
            loading="lazy"
            alt=""
            src={httpswwwpexelscomphotowom}
          />
        </div>
      </div>
      <h2 className={styles.kimBowen} style={kimBowenStyle}>
        {kimBowen}
      </h2>
      <div className={styles.nameFrame} style={nameFrameStyle}>
        <div className={styles.pastorChurch}>Pastor, Church</div>
      </div>
      <div className={styles.reviewGroup} style={reviewGroupStyle}>
        <div className={styles.review}>Review</div>
      </div>
      <img
        className={styles.itemChild}
        loading="lazy"
        alt=""
        src="/group-2196.svg"
      />
    </div>
  );
};

export default Item;
