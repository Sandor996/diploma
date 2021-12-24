import React, { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '../..';
import Loader from '../Loader/Loader';
import Message from '../Message/Message'
import classes from './Chat.module.css'
import firebase from 'firebase/compat/app';
import TextScrambler from 'react-scramble-text'
import 'react-scramble-text/dist/index.css'

const Chat = () => {

    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))
    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader />
    }

    return (
        <main>
            <div className={classes.container}>
                <div className={classes.chat_container}>
                <TextScrambler phrases={['CHAT', 'ЧАТ']} speed={50} pauseTime={800}/>
  
                    {messages.map((message, index) => {
                        return (
                            <Message key={index} photoURL={message.photoURL} displayName={message.displayName} text={message.text} sender={user.uid === message.uid ? true : false} />
                        )
                    })}
                </div>
                <div className={classes.message_form}>
                    <textarea className={classes.message_field} value={value} onChange={e => setValue(e.target.value)} cols="30" rows="10"></textarea>
                    <div onClick={value !== '' ? sendMessage : console.log('empty message')} className={classes.paper_plane}></div>
                </div>
            </div>
        </main>
    )
}

export default Chat
