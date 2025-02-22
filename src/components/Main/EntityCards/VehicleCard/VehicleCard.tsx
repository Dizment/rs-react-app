import { memo } from 'react';
import styles from '../EntityCard.module.css';
import type { VehicleCardProps } from '../types';

const VehicleCardComponent = ({ vehicle }: VehicleCardProps) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.name}>{vehicle.name}</h1>
      <ul>
        <li className={styles.info}>
          <span>model: </span>
          <span>{vehicle.model}</span>
        </li>
        <li className={styles.info}>
          <span>length: </span>
          <span>{vehicle.length}</span>
        </li>
        <li className={styles.info}>
          <span>crew: </span>
          <span>{vehicle.crew}</span>
        </li>
        <li className={styles.info}>
          <span>max_atmosphering_speed: </span>
          <span>{vehicle.max_atmosphering_speed}</span>
        </li>
        <li className={styles.info}>
          <span>passengers: </span>
          <span>{vehicle.passengers}</span>
        </li>
        <li className={styles.info}>
          <span>manufacturer: </span>
          <span>{vehicle.manufacturer}</span>
        </li>
        <li className={styles.info}>
          <span>vehicle_class: </span>
          <span>{vehicle.vehicle_class}</span>
        </li>
      </ul>
    </div>
  );
};

VehicleCardComponent.displayName = 'VehicleCard';

export const VehicleCard = memo(VehicleCardComponent);
