import React from 'react';
import {SignOut} from '../firebase';



const CurrentUser = ({photoURL,displayName,email,Children}) => {
    return(
        <section className= "CurrentUser">
            <div className ="CurrentUser--profile">
                {photoURL && <img src={photoURL} alt={displayName} />}
                <div className="CurrentUser--information">
                    <h2>{displayName}</h2>
                    <p className="email">{email}</p>
                    {/* <p className="created-at">{moment(createdAt.toDate()).calendar()}</p> */}
                </div>
            </div>
            <div>
                <div>{Children}</div>
                <button onClick={SignOut}>Sign Out</button>
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

