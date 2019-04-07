import React from 'react';


const CurrentUser = ({photoURL,displayName,email,Children}) => {
    return(
        <section className= "CurrentUser">
            <div ClassName ="CurrentUser--profile">
                {photoURL && <img src={photoURL} alt={displayName} />}
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