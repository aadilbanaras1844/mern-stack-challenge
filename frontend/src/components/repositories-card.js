import React from 'react';

function RepositoryCard({data}) {
  return (
    <>
        <div className="repository-card">
            <div className="card-content">
            <p className="name">{data.name}</p>
            <p className="fullname">{data.full_name}</p>

            <p className="description">{data.description}</p>


            <div className="bottom">
                <div className="profile">
                    <a href={data.html_url}>Link</a>
                    <p className="language">{data.language}</p>
                </div>
                <div className="user-info">
                    {
                        data.owner !== undefined &&
                        <>
                            <img src={data.owner.avatar_url} alt="avatar" />
                            <p>{data.owner.login}</p>
                        </>
                    }
                    
                </div>
            </div>

            
            
            </div>
        </div>
    </>
  );
}

export default RepositoryCard;
