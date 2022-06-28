import React from 'react'
import { Container, Grid, Box, Button } from '@material-ui/core'

export default function Loader() {
    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 64 }}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Grid
                    container
                    alignItems={'center'}
                    justifyContent={'center'}
                    direction={'column'}
                >
                    <div className="lds-ripple"><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container >
    )
}
