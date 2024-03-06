import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  findFulfillmentAndJoy,
  httpsunsplashcomphotos3MW,
  propWidth,
}) => {
  const findFulfillmentAndStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.subNavigation}>
      <div className={styles.instagramFillFrame}>
        <div className={styles.inspirationalTeamFrame}>
          <h1
            className={styles.findFulfillmentAnd}
            style={findFulfillmentAndStyle}
          >
            {findFulfillmentAndJoy}
          </h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
        </div>
        <img
          className={styles.httpsunsplashcomphotos3mIcon}
          loading="lazy"
          alt=""
          src={httpsunsplashcomphotos3MW}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
