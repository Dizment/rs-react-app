import type { Entity } from '../shared/types';

export interface AppState {
  entities: Entity[];
  searchQuery: string;
  searchType: string;
  currentPage: number;
  totalPages: number;
  loading: boolean;
  apiErrorMessage: string;
}
