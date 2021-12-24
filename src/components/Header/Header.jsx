import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../..';
import GlitchBtn from './GlitchBtn/GlitchBtn'
import firebase from 'firebase/compat/app';

import classes from './Header.module.css'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../utils/consts';

const Header = () => {

    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <header>
            <div className={classes.header_container}>
                {user ?
                    <div onClick={()=>auth.signOut()} className={classes.header_container_btn}>
                        <GlitchBtn name='ВЫЙТИ' href={LOGIN_ROUTE}/>
                    </div>
                    :
                    <div onClick={login} className={classes.header_container_btn}>
                        <GlitchBtn name='ЛОГИН' href={CHAT_ROUTE}/>
                    </div>}
            </div>
        </header>
    )
}

export default Header
