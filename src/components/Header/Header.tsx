import styles from './Header.module.css';
import type { FC } from 'react';
import type { HeaderProps } from './types';
import { ERROR_MESSAGES } from '@/shared';
import { SearchForm } from './SearchForm';

export const Header: FC<HeaderProps> = ({
  onSearch,
  onSearchType,
  apiErrorMessage,
}) => {
  return (
    <div className={styles.header}>
      <SearchForm onSearch={onSearch} onSearchType={onSearchType} />
      {apiErrorMessage && (
        <div className={styles.apiErrorMessage}>
          {`${ERROR_MESSAGES.OOOPS} ${apiErrorMessage}`}
        </div>
      )}
    </div>
  );
};
