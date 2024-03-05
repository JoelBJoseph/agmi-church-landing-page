import styles from "./Welcome1.module.css";

const Welcome1 = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.emailInput}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.leftContent}>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </div>
          <h1 className={styles.strivingForA}>
            STRIVING FOR A BETTER TOMORROW
          </h1>
          <div className={styles.ourMission}>{`OUR MISSIOn & Vision`}</div>
        </div>
        <div className={styles.rightContent}>
          <h1 className={styles.bringingPeaceAnd}>
            BRINgING PEACE AND JOY TO THE WORLD
          </h1>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </div>
          <div className={styles.whatWeDo}>WHAT WE DO</div>
        </div>
      </div>
      <div className={styles.gallery}>
        <img
          className={styles.httpswwwpexelscomphotopIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotopeoplesittingonbrownpews8674151@2x.png"
        />
        <img
          className={styles.httpswwwpexelscomphotomIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotomanandwomanreadingbookwhilesittingonpews8468470@2x.png"
        />
        <img
          className={styles.httpswwwpexelscomphotoaIcon}
          loading="lazy"
          alt=""
          src="/httpswwwpexelscomphotoabeardedmanpraying5206040@2x.png"
        />
      </div>
      <div className={styles.heading}>
        <h1 className={styles.loveAndCompassion}>Love and compassion</h1>
        <div className={styles.welcomeToOur}>Welcome to our CHURCH</div>
      </div>
    </section>
  );
};

export default Welcome1;
