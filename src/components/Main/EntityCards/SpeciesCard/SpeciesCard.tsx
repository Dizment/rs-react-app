import { memo } from 'react';
import styles from '../EntityCard.module.css';
import type { SpeciesCardProps } from '../types';

const SpeciesCardComponent = ({ species }: SpeciesCardProps) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.name}>{species.name}</h1>
      <ul>
        <li className={styles.info}>
          <span>homeworld: </span>
          <span>{species.homeworld}</span>
        </li>
        <li className={styles.info}>
          <span>language: </span>
          <span>{species.language}</span>
        </li>
        <li className={styles.info}>
          <span>eye_colors: </span>
          <span>{species.eye_colors}</span>
        </li>
        <li className={styles.info}>
          <span>hair_colors: </span>
          <span>{species.hair_colors}</span>
        </li>
        <li className={styles.info}>
          <span>average_height: </span>
          <span>{species.average_height}</span>
        </li>
        <li className={styles.info}>
          <span>average_lifespan: </span>
          <span>{species.average_lifespan}</span>
        </li>
        <li className={styles.info}>
          <span>designation: </span>
          <span>{species.designation}</span>
        </li>
      </ul>
    </div>
  );
};

SpeciesCardComponent.displayName = 'SpeciesCard';

export const SpeciesCard = memo(SpeciesCardComponent);
