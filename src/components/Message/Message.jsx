import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
    return (
        <div className={props.sender? classes.message_container_self: classes.message_container}>
            <div className={classes.user_info}>
                <div className={classes.user_avatar}><img src={props.photoURL} alt='user_avatar' /></div>
                <div className={classes.user_name}>{props.displayName}</div>
            </div>
            <div className={classes.message_text}>{props.text}</div>
        </div>
    )
}

/* {`${classes.message_container} ${classes.self}`} */
export default Message
