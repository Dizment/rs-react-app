import { PAGE_CHARACTERS_COUNT as PAGE_ENTITIES_COUNT } from '@/shared/constants';
import { Entity } from '../shared/types';
import { BASE_URL, ENDPOINTS } from './constants';

class StarWarsApiService {
  private async fetchData<T>(
    url: string
  ): Promise<{ entities: T; dataCount: number }> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Get SW data error. ${response.status}`);
    }

    const data = await response.json();
    const entities: T = data.results;
    const dataCount = data.count;

    return { entities, dataCount };
  }

  async getEntities(
    searchType: string,
    searchQuery: string = '',
    page: number = 1
  ): Promise<{ entities: Entity[]; totalPages: number }> {
    let url = `${BASE_URL.api}/${searchType}/?${ENDPOINTS.page}=${page}`;

    if (searchQuery && searchQuery.trim() !== '') {
      url = `${BASE_URL.api}/${searchType}/?${ENDPOINTS.search}=${searchQuery}`;
    }

    const { entities, dataCount } = await this.fetchData<Entity[]>(url);
    const totalPages = Math.ceil(dataCount / PAGE_ENTITIES_COUNT);

    return { entities, totalPages };
  }
}

export const startWarsApi = new StarWarsApiService();
