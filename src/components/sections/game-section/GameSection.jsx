import clsx from 'clsx';
import styles from './GameSection.module.css';
import { cursedBladeBackgroundImg } from '../../../assets';
import { formatNumber, openGameInRoblox } from '../../../utils';

export const GameSection = () => {
  return (
    <div className={clsx(styles.gameSection, 'px-[6px] sm:px-16 lg:px-32 xl:px-40 py-16 sm:py-24 lg:py-32')} id="game">
      <div className={styles.gameSectionContent}>
        <div
          className={clsx(
            styles.game,
            'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center',
          )}
        >
          <div className={styles.gameDetails}>
            <div className={styles.gameTitleContainer}>
              <p className={styles.gameTitle}>
                <span>C</span>ursed <span className="ml-2 sm:ml-4">B</span>lade
              </p>
              <p className={styles.gameDescription}>A fantasy RPG universe where legends are forged through battle, exploration, and progression.</p>
            </div>

            <div className={styles.gameCountContainer}>
              <p>{formatNumber(22808443)}</p>
              <small>Game Visits</small>
            </div>

            <div className={styles.buttonsContainer}>
              <button
                className={styles.playButton}
                onClick={() => openGameInRoblox(112107733863518)}
              >
                Play
              </button>
              <a
                className={styles.viewButton}
                href="https://www.roblox.com/games/112107733863518/Cursed-Blade"
                rel="noopener noreferrer"
                target={'_blank'}
              >
                View Page
              </a>
            </div>
          </div>

          <figure className={styles.gameImageContainer}>
            <img className={styles.gameImage} src={cursedBladeBackgroundImg} alt="Cursed Blade Background" />
          </figure>
        </div>
      </div>
    </div>
  );
};