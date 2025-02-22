import { memo } from 'react';
import styles from '../EntityCard.module.css';
import type { StarshipCardProps } from '../types';

const StarshipCardComponent = ({ starship }: StarshipCardProps) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.name}>{starship.name}</h1>
      <ul>
        <li className={styles.info}>
          <span>model: </span>
          <span>{starship.model}</span>
        </li>
        <li className={styles.info}>
          <span>length: </span>
          <span>{starship.length}</span>
        </li>
        <li className={styles.info}>
          <span>max_atmosphering_speed: </span>
          <span>{starship.max_atmosphering_speed}</span>
        </li>
        <li className={styles.info}>
          <span>hyperdrive_rating: </span>
          <span>{starship.hyperdrive_rating}</span>
        </li>
        <li className={styles.info}>
          <span>crew: </span>
          <span>{starship.crew}</span>
        </li>
        <li className={styles.info}>
          <span>cost_in_credits: </span>
          <span>{starship.cost_in_credits}</span>
        </li>
        <li className={styles.info}>
          <span>passengers: </span>
          <span>{starship.passengers}</span>
        </li>
      </ul>
    </div>
  );
};

StarshipCardComponent.displayName = 'StarshipCard';

export const StarshipCard = memo(StarshipCardComponent);
