import { memo } from 'react';
import styles from '../EntityCard.module.css';
import type { PlanetCardProps } from '../types';

const PlanetCardComponent = ({ planet }: PlanetCardProps) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.name}>{planet.name}</h1>
      <ul>
        <li className={styles.info}>
          <span>Population: </span>
          <span>{planet.population}</span>
        </li>
        <li className={styles.info}>
          <span>Diameter: </span>
          <span>{planet.diameter}</span>
        </li>
        <li className={styles.info}>
          <span>Orbital Period: </span>
          <span>{planet.orbital_period}</span>
        </li>
        <li className={styles.info}>
          <span>Gravity: </span>
          <span>{planet.gravity}</span>
        </li>
        <li className={styles.info}>
          <span>Rotation period: </span>
          <span>{planet.rotation_period}</span>
        </li>
        <li className={styles.info}>
          <span>Terrain: </span>
          <span>{planet.terrain}</span>
        </li>
      </ul>
    </div>
  );
};

PlanetCardComponent.displayName = 'PlanetCard';

export const PlanetCard = memo(PlanetCardComponent);
