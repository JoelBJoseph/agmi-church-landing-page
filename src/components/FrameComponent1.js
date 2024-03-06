import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  return (
    <div className={styles.backgroundShapeRectangle}>
      <div className={styles.testimonialImageFrame}>
        <img
          className={styles.httpswwwpexelscomphotoaIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotoabeardedmanpraying5206040@2x.png"
        />
      </div>
      <div className={styles.buttonParent}>
        <button className={styles.button} onClick={onButtonClick}>
          <div className={styles.buttonText}>Read more</div>
        </button>
        <img
          className={styles.httpswwwpexelscomphotomIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotomanandwomanreadingbookwhilesittingonpews8468470@2x.png"
        />
      </div>
      <div className={styles.testimonialImageFrame1}>
        <img
          className={styles.httpswwwpexelscomphotopIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotopeoplesittingonbrownpews8674151@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
