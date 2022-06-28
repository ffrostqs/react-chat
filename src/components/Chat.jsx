import React, { useContext, useState } from 'react'
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core';
import Loader from './Loader';
import firebase from "firebase";

export default function Chat() {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );


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
    console.log(user);
    if (loading) {
        return <Loader />
    }

    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 84, marginTop: 20 }}
                justifyContent={'center'}>
                <div style={{ width: '80%', height: '70vh', border: '2px solid black', overflowY: 'auto' }}>
                    {messages.map(message =>
                        <div
                            key={message.createdAt}
                            style={{
                                margin: 10,
                                padding: 20,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content'
                            }}>
                            <Grid container >
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>
                                {message.text}
                            </div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{ width: '80%' }}
                >
                    <TextField variant={'outlined'}
                        fullWidth
                        maxRows={2}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button
                        style={{ marginTop: 10 }}
                        variant={'outlined'}
                        onClick={sendMessage}
                    >Send</Button>
                </Grid>
            </Grid>
        </Container >
    )
}
