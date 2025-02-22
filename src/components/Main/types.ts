import { Entity } from '@/shared/types';

export interface MainProps {
  entities: Entity[];
  searchQuery: string;
  searchType: string;
  apiErrorMessage: string;
}
