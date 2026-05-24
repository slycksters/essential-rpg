import clsx from 'clsx';
import { openGameInRoblox } from '../../../utils';
import styles from './LandingSection.module.css';

export const LandingSection = () => {
  return (
    <div className={clsx(styles.landing, 'px-[6px] sm:px-16 lg:px-32 xl:px-40')} id="landing">
      <p className={styles.title}>Essential RPG</p>

      <p className={styles.subtitle}>
        A game development organization crafting immersive fantasy RPG
        experiences on Roblox.
      </p>

      <div className={styles.actions}>
        <button
          className={styles.playButton}
          onClick={() => openGameInRoblox(112107733863518)}
          type="button"
        >
          Play
        </button>
      </div>
    </div>
  );
};