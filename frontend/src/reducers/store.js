

export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SET_RESULTS = 'SET_RESULTS_CHANGE';
export const SET_FORM_STATUS = 'SET_FORM_STATE';

export const setSearchText = (searchText) => ({
    type: SET_SEARCH_TEXT,
    searchText
});

export const setSearchType = (searchType) => ({
    type: SET_SEARCH_TYPE,
    searchType
});

export const setFormStatus = (status) => ({
  type: SET_FORM_STATUS,
  status
});

export const setResults = (results) => ({
    type: SET_RESULTS,
    results
});



export default function reducer(
    state = {  
      results: [],
      searchText: '',
      searchType: 'users',
      status: 'initial'
    },
    action
  ) {
    switch (action.type) {
      case SET_SEARCH_TYPE:
        return {
          ...state,
          searchType: action.searchType
        }; 
      case SET_SEARCH_TEXT:
        return {
          ...state,
          searchText: action.searchText
        };
      case SET_RESULTS:
        return {
            ...state,
            results: action.results
        };  
      case SET_FORM_STATUS:
        return {
            ...state,
            status: action.status
        };    
      default:
        break;
    }
    return state;
  }
  