import clsx from 'clsx';
import styles from './GameSection.module.css';
import { cursedBladeBackgroundImg } from '../../../assets';
import { formatNumber } from '../../../utils';

// To Fetch Cursed Blade Game Visits
// https://games.roblox.com/v1/games?universeIds=9501409571

export const GameSection = () => {
  const openGameInRoblox = (placeId) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      // Android device
      const intentUrl = `intent://placeId=${placeId}#Intent;scheme=roblox;package=com.roblox.client;end`;
      window.location.href = intentUrl;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS device
      const appUrl = `roblox://placeId=${placeId}`;
      const fallbackUrl = `https://www.roblox.com/games/${placeId}`;

      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = fallbackUrl;
      }, 1500);
    } else {
      // Desktop fallback
      window.location.href = `roblox://placeId=${placeId}`;
    }
  };

  return (
    <div className={clsx(styles.gameSection, 'px-6 sm:px-40 py-16 sm:py-32')} id="game">
      <div className={styles.gameSectionContent}>
        {/* <p className={styles.title}>Games</p> */}

        <div
          className={clsx(
            styles.game,
            'grid grid-cols-1 lg:grid-cols-2 gap-10',
          )}
        >
          <div className={styles.gameDetails}>
            <div className={styles.gameTitleContainer}>
              <p className={styles.gameTitle}>
                <span>C</span>ursed <span className="ml-4">B</span>lade
              </p>
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
            <img className={styles.gameImage} src={cursedBladeBackgroundImg} />
          </figure>
        </div>
      </div>
    </div>
  );
};
