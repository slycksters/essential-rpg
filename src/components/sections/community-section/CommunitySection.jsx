import { useEffect, useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { SiRoblox } from 'react-icons/si';
import clsx from 'clsx';
import styles from './CommunitySection.module.css';
import { formatNumber } from '../../../utils';

export const CommunitySection = () => {
  const [socialStats, setSocialStats] = useState({
    roblox: 815720,
  });

  useEffect(() => {
    let isMounted = true;

    // Fetch the discord members count
    fetch('https://discord.com/api/v9/invites/rdcuJbWWWw?with_counts=true')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted)
          setSocialStats((prev) => ({
            ...prev,
            discord: data.approximate_member_count || 9458,
          }));
      })
      .catch(() => {
        if (isMounted)
          setSocialStats((prev) => ({
            ...prev,
            discord: 9458,
          }));
      });

    // Fetch the count of roblox members
    // 112107733863518 = Cursed Blade
    // https://groups.roblox.com/v1/groups/440941144

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={clsx(styles.community, 'px-6 sm:px-16 py-16 sm:py-32')} id="community">
      <p className={styles.title}>Join our Community</p>

      <div
        className={clsx(
          styles.socialLinks,
          'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 items-center',
        )}
      >
        <a
          className={clsx(styles.socialButton, 'xl:col-start-2 link')}
          href="https://discord.com/invite/rdcuJbWWWw"
          rel="noopener noreferrer"
          target={'_blank'}
        >
          <FaDiscord className={styles.socialIcon} />
          <p className={styles.socialCount}>
            {formatNumber(socialStats.discord)}
          </p>
          <p className={styles.socialTitle}>Discord Members</p>
        </a>

        <a
          className={clsx(styles.socialButton, 'link')}
          href="https://www.roblox.com/communities/440941144/ESSENTIAL-RPG"
          rel="noopener noreferrer"
          target={'_blank'}
        >
          <SiRoblox className={styles.socialIcon} />
          <p className={styles.socialCount}>
            {formatNumber(socialStats.roblox)}
          </p>
          <p className={styles.socialTitle}>Roblox Members</p>
        </a>
      </div>
    </div>
  );
};
