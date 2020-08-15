import React from 'react';
import { connect } from 'react-redux';
import UserCard from './user-card';
import RepositoryCard from './repositories-card';

function UserResult(props) {
  const items = props.results;
  return (
    <>
        <div className="container results">
            {items.map(resultObj =>
                <div className="col-sm-4">
                    <div className="result-card">
                        {props.searchType === 'users' &&
                            <UserCard data={resultObj}/>
                        }
                        {props.searchType ==='repositories' &&
                            <RepositoryCard data={resultObj} />
                        }
                        
                    </div>
                </div>
            )}
            {items.length === 0 &&
                <>
                    <h3 className="col-sm-12">
                        No results found...!
                    </h3>
                </>
            }
        </div>
    </>
  );
}

const mapStateToProps = (state) => ({
    status: state.status,
    results: state.results,
    searchType: state.searchType,
});  
export default connect(mapStateToProps)(UserResult);
  