import { AppBar, Toolbar, Grid, Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/consts'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

export default function Navbar() {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent={'flex-end'}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={'outlined'}>Exit</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
