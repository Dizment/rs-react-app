import type { ChangeEvent, FormEvent, RefObject } from 'react';
import { Component, createRef } from 'react';
import { SearchFormProps } from './types';
import styles from './SearchForm.module.css';
import { CACHE_KEY } from '@/shared/constants';
import { storageService } from '@/services';

export class SearchForm extends Component<SearchFormProps> {
  private searchInput: RefObject<HTMLInputElement> = createRef();

  componentDidMount() {
    const savedSearchQuery = storageService.loadSearchQuery(
      CACHE_KEY.searchQuery
    );
    if (savedSearchQuery && this.searchInput.current) {
      this.searchInput.current.value = savedSearchQuery;
    }
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const searchQuery = this.searchInput.current?.value.trim() || '';
    if (searchQuery) {
      storageService.saveSearchQuery(CACHE_KEY.searchQuery, searchQuery);
      this.props.onSearch(searchQuery);
    } else {
      this.props.onSearch('');
    }
  };

  handleFocus = () => {
    if (this.searchInput.current) {
      this.searchInput.current.value = '';
    }
  };

  handlerSearchTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const searchType = event.target.value;
    this.props.onSearchType(searchType);
  };

  render() {
    return (
      <div className={styles.searchContainer}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            className={styles.input}
            type="search"
            ref={this.searchInput}
            placeholder="Enter search term"
            onFocus={this.handleFocus}
          />
          <select onChange={this.handlerSearchTypeChange}>
            <option value="people">People</option>
            <option value="planets">Planet</option>
            <option value="films">Film</option>
            <option value="species">Species</option>
            <option value="vehicles">Vehicle</option>
            <option value="starships">Starship</option>
          </select>
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
