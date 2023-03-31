import React from 'react';
import Box from "@mui/material/Box";
import { FaPaw } from 'react-icons/fa';
import { Grid, Button } from '@material-ui/core';

export default (props) => (
    <Box py={10}>
        <Grid container justifyContent='center'>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='end'>
                    <Button onClick={props.openNewMessage} variant='contained' color='primary'>Post New Message <FaPaw /></Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
);