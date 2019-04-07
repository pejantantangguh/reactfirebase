import React from 'react';


const CurrentUser = ({photoUrl,displayName,email,Children}) => {
    return(
        <section className= "CurrentUser">
            <div ClassName ="CurrentUser--profile">
                {photoUrl && <img src={photoUrl} alt={displayName} ></img>}
                <div className="CurrentUser--information">
                    <h2>{displayName}</h2>
                    <p className="email">{email}</p>
                    {/* <p className="created-at">{moment(createdAt.toDate()).calendar()}</p> */}
                </div>
            </div>
            <div>
                <div>{Children}</div>
                <div>SIgn Out</div>
            </div>
        </section>
    );
};

CurrentUser.defaultProps = {
    displayName : 'Herman Ng',
    email: 'suherman.ng@gmail.com',
    photoUrl : '',
    createdAt: new Date(),
};

export default CurrentUser;