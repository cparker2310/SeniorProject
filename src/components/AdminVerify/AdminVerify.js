import React, { forwardRef } from 'react';
import { 
    Dialog, 
    DialogContent, 
    Fade, 
    IconButton,
    Grid, 
    Typography
} from '@material-ui/core';

const Transition= forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />
});

const AdminVerify = ({open, close, title, denyFunction}) => {
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
                <Grid item xs={12} sx={{display:'flex', justifyContent: 'flex-end', gap:'1rem'}}>
                        <Typography variant='h5'>Deny {title}</Typography>
                        <Typography variant='body1'>Are you sure you want to deny this user? {title}</Typography>
                        
                        <Button onClick={denyFunction} size='medium' variant='contained' color='#63625d'>
                            Deny
                        </Button>
                        <Button size='medium' variant='contained' color='#a32738'>
                            Accept
                        </Button>
                </Grid>
            </Grid>
        </DialogContent>

    </Dialog>
  );
}

export default AdminVerify;

