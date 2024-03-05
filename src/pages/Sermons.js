import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Item31 from "../components/Item31";
import styles from "./Sermons.module.css";

const Sermons = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onSermonsTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onNavButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onMinistryTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onAboutUsText1Click = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAbundantGraceMinistriesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAgmiLogo1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.sermons}>
      <Footer1
        socialWrapper="/social-wrapper@2x.png"
        onButtonClick={onButtonClick}
        onSermonsTextClick={onSermonsTextClick}
        onContactTextClick={onContactTextClick}
        onHOMETextClick={onHOMETextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <main className={styles.upcomingSermons}>
        <Item31 />
        <section className={styles.item}>
          <img className={styles.imageIcon} alt="" src="/image-11@2x.png" />
          <div className={styles.content}>
            <div className={styles.background} />
            <div className={styles.info}>
              <div className={styles.location}>
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
                <div className={styles.icon}>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
              <div className={styles.titleAndDescription}>
                <div className={styles.thisOrdinationCredential}>
                  "This ordination credential is the official minister license
                  of the universal church, verifying your licensed ministry."
                </div>
                <h1 className={styles.credentialOrdination}>
                  credential ordination
                </h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.item1}>
          <img className={styles.imageIcon1} alt="" src="/image-21@2x.png" />
          <div className={styles.content1}>
            <div className={styles.background1} />
            <div className={styles.info1}>
              <div className={styles.location1}>
                <div className={styles.pOBox37Container1}>
                  <p className={styles.pOBox371}>P. O. Box-37,</p>
                  <p className={styles.perumbavoorPO1}>Perumbavoor. P. O.</p>
                  <p
                    className={styles.kochiErnakulam1}
                  >{`Kochi - Ernakulam, `}</p>
                  <p className={styles.kerala683642India1}>
                    Kerala-683642, India
                  </p>
                </div>
                <div className={styles.icon1}>
                  <div className={styles.line1} />
                  <div className={styles.circle1} />
                </div>
              </div>
              <div className={styles.titleAndDescription1}>
                <b className={styles.letTheLittle}>
                  "Let the little children come to me, and do not hinder them,
                  for the kingdom of God belongs to such as these." - Mark 10:14
                </b>
                <h1 className={styles.kidsEvangelism}>kids evangelism</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.item2}>
          <img className={styles.imageIcon2} alt="" src="/image-31@2x.png" />
          <div className={styles.content2}>
            <div className={styles.background2} />
            <div className={styles.info2}>
              <div className={styles.location2}>
                <div className={styles.agmiPOContainer}>
                  <p className={styles.agmi}>AGMI,</p>
                  <p className={styles.pOBox372}>P. O. Box-37,</p>
                  <p className={styles.perumbavoorPO2}>Perumbavoor. P. O.</p>
                  <p
                    className={styles.kochiErnakulam2}
                  >{`Kochi - Ernakulam, `}</p>
                  <p className={styles.kerala683642India2}>
                    Kerala-683642, India
                  </p>
                </div>
                <div className={styles.icon2}>
                  <div className={styles.line2} />
                  <div className={styles.circle2} />
                </div>
              </div>
              <div className={styles.time}>
                <div className={styles.sunday2024TimeContainer}>
                  <p className={styles.sunday2024}>SUNDAY, 2024</p>
                  <p className={styles.time9Am}>TIME: 9 AM - 12 AM</p>
                </div>
                <img
                  className={styles.clockIcon}
                  loading="lazy"
                  alt=""
                  src="/clock-icon.svg"
                />
              </div>
              <div className={styles.titleAndDescription2}>
                <h3 className={styles.encourageEquipAnd}>
                  Encourage, Equip and Enlist workers for the harvest
                </h3>
                <h1 className={styles.missionConference}>mission conference</h1>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.item3}>
          <img className={styles.imageIcon3} alt="" src="/image-4@2x.png" />
          <div className={styles.content3}>
            <div className={styles.background3} />
            <div className={styles.info3}>
              <div className={styles.location3}>
                <div className={styles.agmiPOContainer1}>
                  <p className={styles.agmi1}>AGMI,</p>
                  <p className={styles.pOBox373}>P. O. Box-37,</p>
                  <p className={styles.perumbavoorPO3}>Perumbavoor. P. O.</p>
                  <p
                    className={styles.kochiErnakulam3}
                  >{`Kochi - Ernakulam, `}</p>
                  <p className={styles.kerala683642India3}>
                    Kerala-683642, India
                  </p>
                </div>
                <div className={styles.icon3}>
                  <div className={styles.line3} />
                  <div className={styles.circle3} />
                </div>
              </div>
              <div className={styles.time1}>
                <div className={styles.sunday2024TimeContainer1}>
                  <p className={styles.sunday20241}>SUNDAY, 2024</p>
                  <p className={styles.time9Am1}>TIME: 9 AM - 12 AM</p>
                </div>
                <img
                  className={styles.clockIcon1}
                  alt=""
                  src="/clock-icon.svg"
                />
              </div>
              <div className={styles.titleAndDescription3}>
                <h3 className={styles.whereTwoOr}>
                  "Where two or three gather in my name, there am I with them."
                  - Matthew 18:20
                </h3>
                <h1 className={styles.localChurches}>local churches</h1>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.heading}>
          <h1 className={styles.joinUsAnd}>
            join us and become part of something great
          </h1>
          <div className={styles.upcomingSermons1}>Upcoming SERMONS</div>
        </div>
      </main>
      <div className={styles.sermonsHeader}>
        <img className={styles.imageIcon4} alt="" src="/image-5@2x.png" />
        <div className={styles.content4}>
          <h1 className={styles.takePartIn}>take part in OUR ministry</h1>
          <b className={styles.mission}>mission</b>
        </div>
      </div>
      <header className={styles.navbar}>
        <div className={styles.background4} />
        <button className={styles.navButton} onClick={onNavButtonClick}>
          <div className={styles.buttonText}>Contact us</div>
        </button>
        <div className={styles.linksList}>
          <h3 className={styles.ministry} onClick={onMinistryTextClick}>
            ministry
          </h3>
          <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
            About us
          </div>
          <div className={styles.home} onClick={onHomeTextClick}>
            Home
          </div>
          <div className={styles.divider} />
        </div>
        <div className={styles.logo} onClick={onLogoContainerClick}>
          <h1 className={styles.agmi2}>AGMI</h1>
        </div>
        <div
          className={styles.abundantGraceMinistries}
          onClick={onAbundantGraceMinistriesClick}
        >
          Abundant Grace Ministries India
        </div>
        <img
          className={styles.agmiLogo1Icon}
          loading="lazy"
          alt=""
          src="/agmilogo-1@2x.png"
          onClick={onAgmiLogo1ImageClick}
        />
      </header>
      <h2 className={styles.comeJoinUs}>COME JOIN US</h2>
      <h2 className={styles.comeJoinUs1}>COME JOIN US</h2>
      <h2 className={styles.comeJoinUs2}>COME JOIN US</h2>
      <h2 className={styles.comeJoinUs3}>COME JOIN US</h2>
      <h2 className={styles.comeJoinUs4}>COME JOIN US</h2>
    </div>
  );
};

export default Sermons;
