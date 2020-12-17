import React from 'react';
import {Grid,Container,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root:{
        border:"1px solid red"
    },
    paper: {
        height: 140,
        width: 100
    }
}));

const GridEx=()=>{
    const classes = useStyles();
    return (
        <Container maxWidth={"sm"} className={classes.root}>
        <Grid container spacing={10} justify="center" alignItems="stretch">
            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    test
                </Paper>
            </Grid >
            <Grid item xs={4}>Test</Grid>
            <Grid item xs={4}>Test</Grid>
        </Grid>
        </Container>
    );
}
export default GridEx;