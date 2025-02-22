import type {
  Character,
  Film,
  Planet,
  Species,
  Starship,
  Vehicle,
} from '@/shared/types';

export interface CharacterCardProps {
  character: Character;
}

export interface StarshipCardProps {
  starship: Starship;
}

export interface VehicleCardProps {
  vehicle: Vehicle;
}

export interface PlanetCardProps {
  planet: Planet;
}

export interface SpeciesCardProps {
  species: Species;
}

export interface FilmCardProps {
  film: Film;
}
