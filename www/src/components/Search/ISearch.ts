export interface ISearchProps {
  searchIndex: Record<string, any>,
}

export interface ISearchState {
  query: string,
  results: ISearchResult[],
}

interface ISearchResult {
  id: string,
  title: string,
  urlPath: string,
  name: string,
}
