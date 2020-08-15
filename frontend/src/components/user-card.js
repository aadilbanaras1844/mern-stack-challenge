import React from 'react';

function UserCard({data}) {
  return (
    <>
        <div className="user-card">
            <div className="card-content">
                <img src={data.avatar_url} alt="avatar" />
                <div className="labels">
                    <p>{data.login}</p> 
                    <a href={data.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                    {/* <a href={data.repos_url} target="_blank">
                        Repositories
                    </a> */}
                </div>
            </div>
        </div>
    </>
  );
}

export default UserCard;