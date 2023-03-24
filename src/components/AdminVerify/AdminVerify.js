/*import React, { forwardRef } from 'react';
import { 
    Dialog, 
    DialogContent, 
    Fade, 
    IconButton,
    Grid, 
    Typography
} from '@material-ui/core';

const Transition= forwardRef(function Transition(prop, ref) {
    return <Fade ref={ref} {...props} />
})

const AdminVerify = ({open, close, title}) => {
  return (
    <Dialog
        fullWidth
        open={open}
        maxWidth='md'
        scroll='body'
        onClose={close}
        onBackdropClick={close}
        TransitionComponent={Transition}
    >
        <DialogContent sx={{px:8, py:6, position:'relative'}}>
            <IconButton size='medium' onClick={close} sx={{position: 'absolute', right: '1rem', top: '1rem'}}>
                X
            </IconButton>

            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Box sx={{mb:3, display:'flex', justifyContent:'flex-start', flexDirection:'column'}}>
                        <Typography>Deny {title}</Typography>

                    </Box>
                </Grid>
            </Grid>
        </DialogContent>

    </Dialog>
  );
}

export default AdminVerify;

*/