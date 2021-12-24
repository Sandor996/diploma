import React, { useContext } from 'react'
import classes from './Login.module.css'
import LoginBtn from './LoginBtn/LoginBtn'
import backgroundVideoDesktop from './../../video/background_video_desktop.mp4'
import backgroundVideoMobile from './../../video/background_video_mobile.mp4'
import { Context } from '../..'
import firebase from 'firebase/compat/app'
import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'
import { phrases } from '../../utils/consts'

const Login = () => {
    const { auth } = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }

  

    return (
        <main>
        <div className={classes.container}>
            <div onClick={login} className={classes.login_btn}>
                <LoginBtn />
            </div>
            <div className={classes.scramble_text}>
            <TextScrambler phrases={phrases} speed={50} pauseTime={800}/>
            </div>
            <div className={classes.video_overlay}></div>
           
            <video className={classes.background_video} src={window.innerHeight > 768 ? backgroundVideoDesktop : backgroundVideoMobile} muted loop autoPlay type='video/mp4'></video>
            
            
        </div>
        </main>
    )
}

export default Login
