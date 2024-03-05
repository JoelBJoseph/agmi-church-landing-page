import styles from "./BenefitsOfOurChurch.module.css";

const BenefitsOfOurChurch = () => {
  return (
    <section className={styles.benefitsOfOurChurch}>
      <div className={styles.section4}>
        <img
          className={styles.httpsunsplashcomphotos3xIcon}
          loading="lazy"
          alt=""
          src="/httpsunsplashcomphotos3xmcv5mjzpw-1@2x.png"
        />
        <div className={styles.content}>
          <h1 className={styles.allAreWelcome}>All are welcome</h1>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <img
          className={styles.httpsunsplashcomphotos3mIcon}
          loading="lazy"
          alt=""
          src="/httpsunsplashcomphotos3mwdi5-6hrc-1@2x.png"
        />
        <div className={styles.content1}>
          <h1 className={styles.charityEvents}>charity events</h1>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <img
          className={styles.httpsunsplashcomphotos3xIcon1}
          alt=""
          src="/httpsunsplashcomphotos3xmcv5mjzpw@2x.png"
        />
        <div className={styles.content2}>
          <h1 className={styles.sharedValues}>shared values</h1>
          <div className={styles.loremIpsumDolor2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
        </div>
      </div>
      <div className={styles.section1}>
        <img
          className={styles.httpsunsplashcomphotos3mIcon1}
          alt=""
          src="/httpsunsplashcomphotos3mwdi5-6hrc@2x.png"
        />
        <div className={styles.content3}>
          <h1 className={styles.findFulfillmentAnd}>
            find fulfillment and joy
          </h1>
          <div className={styles.loremIpsumDolor3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h1 className={styles.benefitsOfOur}>
          THE benefits of joining our church
        </h1>
        <div className={styles.benefits}>{`BENEFITS `}</div>
      </div>
    </section>
  );
};

export default BenefitsOfOurChurch;
