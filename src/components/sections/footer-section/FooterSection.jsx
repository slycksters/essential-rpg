import clsx from 'clsx';
import styles from './FooterSection.module.css';

export const FooterSection = () => {
  return (
    <div className={clsx(styles.footer, 'px-[6px] sm:px-16 lg:px-32 xl:px-40')}>
      © 2026 Essential RPG LLC - All Rights Reserved
    </div>
  );
};