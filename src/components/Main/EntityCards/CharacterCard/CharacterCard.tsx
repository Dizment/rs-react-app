import { memo } from 'react';
import styles from '../EntityCard.module.css';
import type { CharacterCardProps } from '../types';

const CharacterCardComponent = ({ character }: CharacterCardProps) => {
  return (
    <div className={styles.item}>
      <h1 className={styles.name}>{character.name}</h1>
      <ul>
        <li className={styles.info}>
          <span>Species: </span>
          <span>{character.species}</span>
        </li>
        <li className={styles.info}>
          <span>Gender: </span>
          <span>{character.gender}</span>
        </li>
        <li className={styles.info}>
          <span>Birth: </span>
          <span>{character.birth_year}</span>
        </li>
        <li className={styles.info}>
          <span>Home: </span>
          <span>{character.homeworld}</span>
        </li>
        <li className={styles.info}>
          <span>Height: </span>
          <span>{character.height}</span>
        </li>
        <li className={styles.info}>
          <span>Mass: </span>
          <span>{character.mass}</span>
        </li>
        <li className={styles.info}>
          <span>Eye color: </span>
          <span>{character.eye_color}</span>
        </li>
      </ul>
    </div>
  );
};

CharacterCardComponent.displayName = 'CharacterCard';

export const CharacterCard = memo(CharacterCardComponent);
