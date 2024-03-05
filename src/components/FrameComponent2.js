import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.welcomeToOurChurchParent}>
        <div className={styles.welcomeToOur}>Welcome to our CHURCH</div>
        <h1 className={styles.loveAndCompassion}>Love and compassion</h1>
      </div>
      <div className={styles.emailInputWrapper}>
        <div className={styles.emailInput}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </div>
      </div>
      <div className={styles.httpswwwpexelscomphotoaParent}>
        <img
          className={styles.httpswwwpexelscomphotoaIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotoabeardedmanpraying52060401@2x.png"
        />
        <img
          className={styles.httpswwwpexelscomphotomIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotomanandwomanreadingbookwhilesittingonpews84684701@2x.png"
        />
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

export default FrameComponent2;
