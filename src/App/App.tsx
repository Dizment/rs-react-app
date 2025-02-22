import { Component } from 'react';
import { AppState } from './types';
import styles from './App.module.css';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { startWarsApi, storageService } from '@/services';
import { CACHE_KEY } from '@/shared/constants';
import { Spinner } from '@/components/Spinner';
import { Footer } from '@/components/Footer';

export class App extends Component<unknown, AppState> {
  state: AppState = {
    entities: [],
    searchQuery: '',
    searchType: 'people',
    currentPage: 1,
    totalPages: 0,
    loading: false,
    apiErrorMessage: '',
  };

  async componentDidMount() {
    const currentPage = 1;

    const savedSearchQuery =
      storageService.loadSearchQuery(CACHE_KEY.searchQuery) || '';
    await this.loadData(this.state.searchType, savedSearchQuery, currentPage);
  }

  async loadData(searchType: string, searchQuery: string, page: number) {
    this.setState({ loading: true });

    try {
      const { entities, totalPages } = await startWarsApi.getEntities(
        searchType,
        searchQuery,
        page
      );

      this.setState({
        entities,
        totalPages,
        searchQuery,
        searchType,
        currentPage: page,
        loading: false,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : `${error}`;
      this.setState({ apiErrorMessage: errorMessage, loading: false });
    }
  }

  handleSearch = (searchQuery: string) => {
    const currentPage = 1;

    storageService.saveSearchQuery(CACHE_KEY.searchQuery, searchQuery);
    this.loadData(this.state.searchType, searchQuery, currentPage);
  };

  handlePageChange = (page: number) => {
    this.loadData(this.state.searchType, this.state.searchQuery, page);
  };

  handleSearchType = (searchType: string) => {
    const searchQuery = '';
    const currentPage = 1;

    this.loadData(searchType, searchQuery, currentPage);
  };

  render() {
    const {
      entities,
      currentPage,
      totalPages,
      loading,
      searchQuery,
      searchType,
    } = this.state;

    console.log('запуск render app');

    const showPagination = totalPages > 1;

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>STAR WARS</h1>
        <Header
          onSearchType={this.handleSearchType}
          onSearch={this.handleSearch}
          apiErrorMessage={this.state.apiErrorMessage}
        />
        {loading ? (
          <div className={styles.spinnerContainer}>
            <Spinner />
          </div>
        ) : (
          <Main
            entities={entities}
            searchQuery={searchQuery}
            searchType={searchType}
            apiErrorMessage={this.state.apiErrorMessage}
          />
        )}
        <Footer
          showPagination={showPagination}
          currentPage={currentPage}
          totalPages={totalPages}
          onPreviousPage={() => this.handlePageChange(currentPage - 1)}
          handlePageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
