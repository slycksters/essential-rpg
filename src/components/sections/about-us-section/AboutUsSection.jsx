import clsx from 'clsx';
import styles from './AboutUsSection.module.css';

export const AboutUsSection = () => {
  return (
    <div className={clsx(styles.aboutUs, 'px-6 sm:px-16 py-16 sm:py-32')} id="about-us">
      <div>
        <p className={styles.title}>About Us</p>

        <p className={styles.introduction}>
          <span className={styles.organizationName}>Essential RPG</span> is a
          Roblox game development organization focused on creating high-quality,
          immersive, and engaging experiences for players. Through careful
          design, polished gameplay mechanics, and continuous updates, we strive
          to deliver games that stand out for their creativity, performance, and
          lasting player enjoyment.
        </p>

        <p className={clsx(styles.quote, 'my-8')}>
          "We don't follow the path of existing worlds — we forge our own
          through stories yet untold.{' '}
          <span className={styles.organizationName}>Essential RPG</span> is
          dedicated to building rich fantasy realms where every journey, battle,
          and choice shapes a living adventure beyond imagination."
        </p>

        <p className="text-center">
          - <span className={styles.organizationName}>Essential RPG</span> Team
        </p>
      </div>
    </div>
  );
};
