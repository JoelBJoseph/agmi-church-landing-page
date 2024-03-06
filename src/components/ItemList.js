import FrameComponent3 from "./FrameComponent3";
import FrameComponent2 from "./FrameComponent2";
import styles from "./ItemList.module.css";

const ItemList = () => {
  return (
    <section className={styles.sectionTitle}>
      <FrameComponent3 />
      <FrameComponent2
        findFulfillmentAndJoy="find fulfillment and joy"
        httpsunsplashcomphotos3MW="/httpsunsplashcomphotos3mwdi5-6hrc@2x.png"
      />
      <div className={styles.subNavigation}>
        <div className={styles.httpsunsplashcomphotos3xParent}>
          <img
            className={styles.httpsunsplashcomphotos3xIcon}
            loading="lazy"
            alt=""
            src="/httpsunsplashcomphotos3xmcv5mjzpw@2x.png"
          />
          <div className={styles.inputFieldWrapper}>
            <div className={styles.inputField}>
              <h1 className={styles.leadershipTraining}>LEADERSHIP TRAINING</h1>
              <div className={styles.thereIsA}>
                There is a lack of effective trained leadership in so many
                communities today because of several reasons. They needed to
                have a vision. More equipped leaders needed too. Leader
                Development is an initiative to raise more visionary, effective,
                focused leaders who will strive for the development of the
                community. We train men and women to bring them to the qualified
                Christian leaders for the present and future.
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent2
        findFulfillmentAndJoy="charity events"
        httpsunsplashcomphotos3MW="/httpsunsplashcomphotos3mwdi5-6hrc-1@2x.png"
        propWidth="unset"
      />
      <div className={styles.frameFrame}>
        <div className={styles.httpsunsplashcomphotos3xGroup}>
          <img
            className={styles.httpsunsplashcomphotos3xIcon1}
            alt=""
            src="/httpsunsplashcomphotos3xmcv5mjzpw-1@2x.png"
          />
          <div className={styles.linksColumnFrame}>
            <h1 className={styles.allAreWelcome}>All are welcome</h1>
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.teamSectionWrapper}>
        <div className={styles.teamSection}>
          <h1 className={styles.meetOurInspirational}>
            meet our Inspirational team
          </h1>
          <div className={styles.socialMediaIcon}>
            <div className={styles.item}>
              <div className={styles.background} />
              <div className={styles.wrapperHttpswwwpexelscom}>
                <img
                  className={styles.httpswwwpexelscomphotowIcon}
                  loading="lazy"
                  alt=""
                  src="/httpswwwpexelscomphotowomaninsleevelesstop2075673@2x.png"
                />
              </div>
              <div className={styles.personName}>
                <div className={styles.personName1}>
                  <h3 className={styles.joseCarmel}>jose carmel</h3>
                  <div className={styles.personName2}>
                    <div className={styles.agmiPresident}>AGMI PRESIDENT</div>
                    <div className={styles.socialLink}>
                      <div className={styles.socialLink1}>
                        <img
                          className={styles.facebookNegative}
                          loading="lazy"
                          alt=""
                          src="/facebook--negative2.svg"
                        />
                        <img
                          className={styles.twitterNegative}
                          loading="lazy"
                          alt=""
                          src="/twitter--negative2.svg"
                        />
                        <img
                          className={styles.instaFillIcon}
                          loading="lazy"
                          alt=""
                          src="/insta-fill1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item1}>
              <div className={styles.background1} />
              <div className={styles.wrapperHttpswwwpexelscomWrapper}>
                <div className={styles.wrapperHttpswwwpexelscom1}>
                  <img
                    className={styles.httpswwwpexelscomphotopIcon}
                    loading="lazy"
                    alt=""
                    src="/httpswwwpexelscomphotophotoofwomanwearingredtop3760737@2x.png"
                  />
                </div>
              </div>
              <div className={styles.jancyCarmelParent}>
                <h3 className={styles.jancyCarmel}>JANCY CARMEL</h3>
                <div className={styles.secretaryFrame}>
                  <div className={styles.secretaryFrame1}>
                    <div className={styles.agmiSecretary}>AGMI SECRETARY</div>
                    <div className={styles.footerBackgroundShape}>
                      <img
                        className={styles.facebookNegative1}
                        alt=""
                        src="/facebook--negative2.svg"
                      />
                      <img
                        className={styles.twitterNegative1}
                        alt=""
                        src="/twitter--negative2.svg"
                      />
                      <img
                        className={styles.instaFillIcon1}
                        alt=""
                        src="/insta-fill1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.item2}>
              <div className={styles.background2} />
              <div className={styles.wrapperImage}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-1@2x.png"
                />
              </div>
              <div className={styles.frameParent}>
                <div className={styles.nameWrapper}>
                  <h3 className={styles.name}>NAME</h3>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.pastorChurchWrapper}>
                    <div className={styles.pastorChurch}>Pastor, Church</div>
                  </div>
                  <div className={styles.footerBackgroundShape1}>
                    <img
                      className={styles.facebookNegative2}
                      alt=""
                      src="/facebook--negative2.svg"
                    />
                    <img
                      className={styles.twitterNegative2}
                      alt=""
                      src="/twitter--negative2.svg"
                    />
                    <img
                      className={styles.instaFillIcon2}
                      alt=""
                      src="/insta-fill1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemList;
