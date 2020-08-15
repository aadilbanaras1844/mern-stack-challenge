import React from 'react';
import searchIcon from './../logo_2.png';
import UserResult from '../components/user-results';
// import _ from "lodash";
import { searchGithub } from '../actions';
import { setSearchText, setSearchType, setResults, setFormStatus } from '../reducers/store'
import { connect } from 'react-redux';

function Home(props) {
  // const delayedQuery = useRef(_.debounce(() => {
  //   handleSubmit();
  // }, 500)).current;

  const changeHandle = async (e) => {
    if(e.target.name === 'searchText'){
      props.setSearchText(e.target.value);
    }
    if(e.target.name === 'searchType'){
      props.setSearchType(e.target.value)
      props.setResults([])
    }
    // delayedQuery();
    handleSubmit();
  }

  const  handleSubmit = async () => {
    let searchText = props.searchText;
    if(searchText.length<3){
      props.setResults([])
      props.setFormStatus('initial')
      props.setResults( [] )
    }
    else {
      props.setFormStatus('loading')
      try {
        const data = {
          searchText: props.searchText,
          searchType: props.searchType,
        }
        const response = await searchGithub(data);
        props.setResults( response.result.items )
        props.setFormStatus('loaded')

      } catch (error) {
        console.log('api error ', error)
      }

    }

    
  }

  return (
    <>
        <div className={ props.searchText.length>2 ? 'row app-header-animate':'row app-header-animate app-header'}>
            <div className="container">
              <div className="col-sm-12 search-form-content">
                <div className="search-form">
                  <div className="search-icon">
                      <img src={searchIcon} alt='search' />
                  </div>
                  <div className="search-labels">
                      <h3>Github Searcher</h3>
                      <p>Search users or repositories</p>
                  </div>
                </div>
                <div className="search-fields">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input onChange={changeHandle} autoComplete="off" name="searchText" type="text" placeholder="Start typing to search" />
                    </div>
                    <div className="form-group">
                      <select onChange={changeHandle} name="searchType">
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {props.status === 'loaded' && <UserResult />}
            {props.status === 'loading' &&
              <div className="container">
                <h3>Loading data...!</h3>
              </div>
            }
        </div>
    </>
  );
}

// export default Home;


const mapStateToProps = (state) => ({
  searchText: state.searchText,
  searchType: state.searchType,
  status: state.status,
  results: state.results,
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  setSearchType: (str) => dispatch(setSearchType(str)),
  setSearchText: (str) => dispatch(setSearchText(str)),
  setResults: (arr) => dispatch(setResults(arr)),
  setFormStatus: (str) => dispatch(setFormStatus(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
