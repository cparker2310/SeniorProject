import React from 'react';
import Box from "@mui/material/Box";
import { 
    Grid,
    Typography,
    Button
} from '@material-ui/core';

export default props => (
    <Box py={10}>
        <Grid container justifyContent='center'>
            <Grid item xs={10}>
                <Box display='flex' justifyContent='end'>
                    <Button variant='contained' color='primary'>Post New Job</Button>
                </Box>
            </Grid>
        </Grid>
    </Box>
);