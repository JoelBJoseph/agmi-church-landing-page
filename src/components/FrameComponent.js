import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  httpsunsplashcomphotos3Xm,
  sharedValues,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const sharedValuesStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={styles.httpsunsplashcomphotos3xParent}
      style={frameDivStyle}
    >
      <img
        className={styles.httpsunsplashcomphotos3xIcon}
        loading="lazy"
        alt=""
        src={httpsunsplashcomphotos3Xm}
      />
      <div className={styles.sharedValuesParent}>
        <h1 className={styles.sharedValues} style={sharedValuesStyle}>
          {sharedValues}
        </h1>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
