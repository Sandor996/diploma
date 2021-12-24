import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Context } from '../..'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../../utils/consts'
import Chat from '../Chat/Chat'
import Login from '../Login/Login'
import { useAuthState } from 'react-firebase-hooks/auth'

const AppRouter = () => {

    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return user ?
        (
            <Routes>
                <Route path={CHAT_ROUTE} element={<Chat />} />
                <Route path="*" element={<Navigate replace to={CHAT_ROUTE} />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path={LOGIN_ROUTE} element={<Login />} />
                <Route path="*" element={<Navigate replace to={LOGIN_ROUTE} />} />
            </Routes>
        )
}

export default AppRouter
