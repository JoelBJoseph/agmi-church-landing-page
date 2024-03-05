import Item3 from "./Item3";
import styles from "./OurTeam.module.css";

const OurTeam = () => {
  return (
    <section className={styles.ourTeam}>
      <div className={styles.members}>
        <Item3 santosPayne="Santos Payne" image="/image-3@2x.png" />
        <Item3
          santosPayne="Naomi Craig"
          image="/image-2@2x.png"
          propLeft="40.75rem"
          propRight="5.188rem"
          propWidth="8.375rem"
          propRight1="1.438rem"
          propRight2="1.313rem"
          propTextAlign="left"
        />
        <Item3
          santosPayne="Danielle Watkins"
          image="/httpswwwpexelscomphotophotoofwomanwearingredtop3760737@2x.png"
          propLeft="20.375rem"
          propRight="3.563rem"
          propWidth="11.813rem"
          propRight1="3.125rem"
          propRight2="3rem"
          propTextAlign="left"
        />
        <Item3
          santosPayne="Kim Bowen"
          image="/httpswwwpexelscomphotowomaninsleevelesstop2075673@2x.png"
          propLeft="0rem"
          propRight="5.875rem"
          propWidth="7.188rem"
          propRight1="0.813rem"
          propRight2="0.688rem"
          propTextAlign="left"
        />
      </div>
      <div className={styles.title}>
        <h1 className={styles.meetOurInspirational}>
          meet our Inspirational team
        </h1>
        <div className={styles.churchOfficers}>church members</div>
      </div>
    </section>
  );
};

export default OurTeam;
