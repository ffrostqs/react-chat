import React, { useContext } from 'react'
import { Container, Grid, Box, Button } from '@material-ui/core'
import { Context } from '../index'
import firebase from "firebase"
export default function Login() {
    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log(user);
    }

    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 64 }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid style={{ padding: 60, background: 'lightblue' }}
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Sign in with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}
