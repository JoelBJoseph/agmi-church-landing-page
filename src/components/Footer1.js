import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer1.module.css";

const Footer1 = () => {
  const navigate = useNavigate();

  const onHOMETextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onSermonsTextClick = useCallback(() => {
    navigate("/sermons");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <footer className={styles.footer}>
      <div className={styles.backgroundShape} />
      <div className={styles.contentLeftParent}>
        <div className={styles.contentLeft}>
          <div className={styles.logo}>
            <div className={styles.agmiWrapper}>
              <h1 className={styles.agmi}>AGMI</h1>
            </div>
          </div>
          <div className={styles.copyrightFinsweet2022Wrapper}>
            <div className={styles.copyrightFinsweet2022}>
              © Copyright Finsweet 2022
            </div>
          </div>
        </div>
        <div className={styles.contentLeftWrapper}>
          <div className={styles.contentLeft1}>
            <div className={styles.addressNumber}>
              <div className={styles.ph9194466}>Ph: +91 94466 36378</div>
              <div className={styles.pOBox37Container}>
                <p className={styles.pOBox37}>P. O. Box-37,</p>
                <p className={styles.perumbavoorPO}>Perumbavoor. P. O.</p>
                <p className={styles.kochiErnakulam}>{`Kochi - Ernakulam, `}</p>
                <p className={styles.kerala683642India}>Kerala-683642, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.messageFillParent}>
            <img
              className={styles.messageFillIcon}
              loading="lazy"
              alt=""
              src="/message-fill@2x.png"
            />
            <div className={styles.emailnamegmsilcom}>emailname@gmsil.com</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.linksColumnParent}>
          <div className={styles.linksColumn}>
            <div className={styles.quicklinks}>Quicklinks</div>
            <div className={styles.linksList}>
              <div className={styles.home} onClick={onHOMETextClick}>
                HOME
              </div>
              <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About us
              </div>
              <div className={styles.sermons} onClick={onSermonsTextClick}>
                Sermons
              </div>
              <div className={styles.contact} onClick={onContactTextClick}>
                contact
              </div>
            </div>
          </div>
          <div className={styles.connect}>
            <div className={styles.connect1}>{`Connect `}</div>
            <img
              className={styles.socialWrapperIcon}
              loading="lazy"
              alt=""
              src="/social-wrapper@2x.png"
            />
          </div>
        </div>
        <div className={styles.subscription}>
          <h1 className={styles.subscribeToGet}>
            Subscribe to get Latest Updates and News
          </h1>
          <div className={styles.input}>
            <div className={styles.yourmailgmailcom}>Yourmail@gmail.com</div>
            <div className={styles.background} />
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.buttonText}>Subscribe</div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
