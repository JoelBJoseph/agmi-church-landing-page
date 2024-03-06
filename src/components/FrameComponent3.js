import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.sermonsLink}>
        <div className={styles.contactLink}>
          <div className={styles.welcomeToOur}>Welcome to our ministry</div>
        </div>
        <h1 className={styles.loveAndCompassion}>Love and compassion</h1>
      </div>
      <div className={styles.inspirationalTeamFrame}>
        <div className={styles.emailInput}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum.
        </div>
      </div>
      <div className={styles.logoFrame}>
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
          src="/httpswwwpexelscomphotopeoplesittingonbrownpews86741511@2x.png"
        />
      </div>
      <div className={styles.messageInstance}>
        <div className={styles.linksFrame}>
          <div className={styles.ourMission}>{`OUR MISSIOn & Vision`}</div>
          <h1 className={styles.strivingForA}>
            STRIVING FOR A BETTER TOMORROW
          </h1>
          <div className={styles.trainMenAndContainer}>
            <ul className={styles.trainMenAndWomenInTheolog}>
              <li className={styles.trainMenAnd}>
                {" "}
                Train men and women in Theological studies and send them to the
                mission fields. Make them the qualified leaders for present and
                in future. 
              </li>
              <li
                className={styles.shareTheGospel}
              >{`Share the Gospel of Jesus Christ to all people in and around the world  `}</li>
              <li
                className={styles.establishLocalChurches}
              >{`Establish local churches among unreached people.   `}</li>
              <li className={styles.helpThePoor}>
                Help the poor and needy kids and make them better personalities.
                
              </li>
              <li
                className={styles.arrangeBibleConferences}
              >{`Arrange bible conferences  `}</li>
              <li>
                Give Credential Ordination to the qualified ministers to help
                them in the Christian ministry.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.instagramIconFrame}>
          <div className={styles.whatWeDo}>WHAT WE DO</div>
          <h1 className={styles.bringingPeaceAnd}>
            BRINgING PEACE AND JOY TO THE WORLD
          </h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum.
          </div>
        </div>
      </div>
      <div className={styles.twitterFrame}>
        <h1 className={styles.benefitsOfOur}>
          THE benefits of joining our ministry
        </h1>
      </div>
    </div>
  );
};

export default FrameComponent3;
