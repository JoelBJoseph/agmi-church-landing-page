import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onReadMoreContainerClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.welcome} data-scroll-to="welcomeContainer">
      <div className={styles.text}>
        <div className={styles.text1}>
          <div className={styles.shape}>
            <div className={styles.contentRight}>
              <div className={styles.subHeadline}>SUB-HEADLINE</div>
            </div>
            <h1 className={styles.loveAndCompassion}>love and compassion</h1>
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.backgroundImage}>
          <img
            className={styles.httpswwwpexelscomphotoaIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotoabeardedmanpraying5206040@2x.png"
          />
        </div>
        <div className={styles.item}>
          <div className={styles.textBlock}>
            <button className={styles.button1} onClick={onButtonClick}>
              <div className={styles.buttonText}>Read more</div>
            </button>
          </div>
          <img
            className={styles.httpswwwpexelscomphotomIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotomanandwomanreadingbookwhilesittingonpews8468470@2x.png"
          />
        </div>
        <div className={styles.backgroundImage1}>
          <img
            className={styles.httpswwwpexelscomphotopIcon}
            loading="lazy"
            alt=""
            src="/httpswwwpexelscomphotopeoplesittingonbrownpews8674151@2x.png"
          />
        </div>
      </div>
      <div className={styles.quoteFrame}>
        <div className={styles.relationshipFrame}>
          <div className={styles.iconFrame}>
            <div className={styles.missionVision}>{`our mission & vision`}</div>
          </div>
          <div className={styles.lineAndCircle}>
            <h1 className={styles.celebrateWithUs}>celebrate WITH US</h1>
          </div>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className={styles.textFrame}>
            <div className={styles.readMore} onClick={onReadMoreContainerClick}>
              <div className={styles.readMore1}>Read More</div>
              <img
                className={styles.shapeIcon}
                loading="lazy"
                alt=""
                src="/shape.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
