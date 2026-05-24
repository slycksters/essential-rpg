import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './NavbarSection.module.css';

export const NavbarSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleNavbarScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleNavbarScroll);

    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
    };
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    if (targetId === 'landing') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <header
      className={clsx(styles.navbar, isScrolled && styles.navbarScrolled, 'px-[6px] sm:px-16 lg:px-32 xl:px-40')}
    >
      <ul className={styles.navbarList}>
        <li
          className={styles.navbarListItem}
          onClick={(e) => handleScroll(e, 'landing')}
        >
          Home
        </li>

        <li
          className={styles.navbarListItem}
          onClick={(e) => handleScroll(e, 'about-us')}
        >
          About Us
        </li>

        <li
          className={styles.navbarListItem}
          onClick={(e) => handleScroll(e, 'game')}
        >
          Games
        </li>

        <li
          className={styles.navbarListItem}
          onClick={(e) => handleScroll(e, 'community')}
        >
          Community
        </li>
      </ul>
    </header>
  );
};