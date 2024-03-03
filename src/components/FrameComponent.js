import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.sermonTitlesParent}>
      <div className={styles.sermonTitles}>
        <div className={styles.sermonTitles1}>
          <div className={styles.upcomingSermons}>Upcoming SERMONS</div>
        </div>
        <h1 className={styles.joinUsAnd}>
          join us and become part of something great
        </h1>
      </div>
      <div className={styles.viewAllSermonsButton}>
        <h2 className={styles.viewAllSermons}>View all Sermons</h2>
        <img
          className={styles.arrowIcon}
          loading="lazy"
          alt=""
          src="/arrow.svg"
        />
        <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
        <div className={styles.content}>
          <div className={styles.background} />
          <div className={styles.frameParent}>
            <div className={styles.footerWrapper}>
              <b className={styles.footer}>3</b>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.upComingEventsParent}>
                <b className={styles.upComingEvents}>Upcoming Event</b>
                <h2 className={styles.watchAndListen}>
                  WATCH AND LISTEN TO OUR SERMONS
                </h2>
                <div className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </div>
              </div>
              <div className={styles.mar}>MAR</div>
            </div>
          </div>
          <div className={styles.clockIconFrameWrapper}>
            <div className={styles.clockIconFrame}>
              <img
                className={styles.clockIcon}
                loading="lazy"
                alt=""
                src="/clock-icon.svg"
              />
              <div className={styles.sunday9Am}>SUNDAY 9 AM - 12 AM</div>
            </div>
          </div>
          <div className={styles.membersSection}>
            <div className={styles.membersSection1}>
              <div className={styles.membersSection2}>
                <div className={styles.membersSection3}>
                  <div className={styles.noMainSt}>
                    <div className={styles.icon}>
                      <div className={styles.membersSection4} />
                      <div className={styles.circle} />
                    </div>
                  </div>
                  <div className={styles.pOBox37Container}>
                    <p className={styles.pOBox37}>P. O. Box-37,</p>
                    <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
                    <p
                      className={styles.kochiErnakulam}
                    >{`Kochi - Ernakulam, `}</p>
                    <p className={styles.kerala683642India}>
                      Kerala-683642, India
                    </p>
                  </div>
                </div>
              </div>
              <h1 className={styles.comeJoinUs}>COME JOIN US</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
