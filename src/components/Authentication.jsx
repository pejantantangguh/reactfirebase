import React from 'react';

import CurrentUser from './CurrentUser';
import SignInAndSignUp from './SingInAndSignUp';

const Authentication = ({user,loading}) => {
    if (loading) return null;

    return (
        <div>
            {user ? <CurrentUser /> : <SignInAndSignUp/> }
        </div>
    );
}

export default Authentication;