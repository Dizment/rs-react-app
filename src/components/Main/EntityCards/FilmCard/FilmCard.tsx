import { memo } from 'react';
import styles from '../EntityCard.module.css';
import type { FilmCardProps } from '../types';

const FilmCardComponent = ({ film }: FilmCardProps) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.name}>{film.title}</h1>
      <ul>
        <li className={styles.info}>
          <span>director: </span>
          <span>{film.director}</span>
        </li>
        <li className={styles.info}>
          <span>episode_id: </span>
          <span>{film.episode_id}</span>
        </li>
        <li className={styles.info}>
          <span>producer: </span>
          <span>{film.producer}</span>
        </li>
        <li className={styles.info}>
          <span>opening_crawl: </span>
          <span>{film.opening_crawl}</span>
        </li>
        <li className={styles.info}>
          <span>release_date: </span>
          <span>{film.release_date}</span>
        </li>
      </ul>
    </div>
  );
};

FilmCardComponent.displayName = 'FilmCard';

export const FilmCard = memo(FilmCardComponent);
