import { useMemo } from "react";
import styles from "./Item3.module.css";

const Item3 = ({
  santosPayne,
  image,
  propLeft,
  propRight,
  propWidth,
  propRight1,
  propRight2,
  propTextAlign,
}) => {
  const itemStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const infoStyle = useMemo(() => {
    return {
      right: propRight,
      width: propWidth,
    };
  }, [propRight, propWidth]);

  const socialStyle = useMemo(() => {
    return {
      right: propRight1,
    };
  }, [propRight1]);

  const pastorChurchStyle = useMemo(() => {
    return {
      right: propRight2,
    };
  }, [propRight2]);

  const santosPayneStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div className={styles.item} style={itemStyle}>
      <div className={styles.background} />
      <div className={styles.info} style={infoStyle}>
        <div className={styles.social} style={socialStyle}>
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
        <div className={styles.pastorChurch} style={pastorChurchStyle}>
          Pastor, Church
        </div>
        <h3 className={styles.santosPayne} style={santosPayneStyle}>
          {santosPayne}
        </h3>
      </div>
      <div className={styles.wrapperImage}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      </div>
    </div>
  );
};

export default Item3;
