import styles from './Main.module.css';
import type { FC } from 'react';
import type { MainProps } from './types';
import { Character, ERROR_MESSAGES } from '@/shared';
import { ENTITY_TYPE } from '@/shared/constants';
import { Film, Planet, Species, Starship, Vehicle } from '@/shared/types';
import {
  CharacterCard,
  PlanetCard,
  SpeciesCard,
  StarshipCard,
  VehicleCard,
  FilmCard,
} from './EntityCards/';

export const Main: FC<MainProps> = ({
  entities,
  searchQuery,
  searchType,
  apiErrorMessage,
}) => {
  const isResultsFound = entities.length > 0;

  if (isResultsFound) {
    if (searchType == ENTITY_TYPE.PEOPLE) {
      const characters = entities as Character[];

      return (
        <ul className={styles.list}>
          {characters.map((character: Character) => (
            <li key={character.name}>
              <CharacterCard character={character} />
            </li>
          ))}
        </ul>
      );
    }

    if (searchType == ENTITY_TYPE.PLANET) {
      const planets = entities as Planet[];

      return (
        <ul className={styles.list}>
          {planets.map((planet: Planet) => (
            <li key={planet.name}>
              <PlanetCard planet={planet} />
            </li>
          ))}
        </ul>
      );
    }

    if (searchType == ENTITY_TYPE.SPECIES) {
      const species = entities as Species[];

      return (
        <ul className={styles.list}>
          {species.map((species: Species) => (
            <li key={species.name}>
              <SpeciesCard species={species} />
            </li>
          ))}
        </ul>
      );
    }

    if (searchType == ENTITY_TYPE.STARSHIP) {
      const starships = entities as Starship[];

      return (
        <ul className={styles.list}>
          {starships.map((starship: Starship) => (
            <li key={starship.name}>
              <StarshipCard starship={starship} />
            </li>
          ))}
        </ul>
      );
    }

    if (searchType == ENTITY_TYPE.VEHICLE) {
      const vehicles = entities as Vehicle[];

      return (
        <ul className={styles.list}>
          {vehicles.map((vehicle: Vehicle) => (
            <li key={vehicle.name}>
              <VehicleCard vehicle={vehicle} />
            </li>
          ))}
        </ul>
      );
    }

    if (searchType == ENTITY_TYPE.FILM) {
      const films = entities as Film[];

      return (
        <ul className={styles.list}>
          {films.map((film: Film) => (
            <li key={film.title}>
              <FilmCard film={film} />
            </li>
          ))}
        </ul>
      );
    }
  }

  return (
    !apiErrorMessage && (
      <p className={styles.noResults}>
        {ERROR_MESSAGES.NO_RESULTS_FOUND}
        <span className={styles.searchQuery}>{`'${searchQuery}'`}</span>
      </p>
    )
  );
};
