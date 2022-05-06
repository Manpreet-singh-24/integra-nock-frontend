import React, { useImperativeHandle, forwardRef } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import Switch from "@mui/material/Switch";
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
    outline:'none'
};

const MDModal = (props, ref) => {
    const [open, setOpen] = React.useState(false);

    const modalOpen = () => {
        setOpen(true)
    };

    const modalClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({
        //handleClickOpen: handleClickOpen
        modalOpen,
        modalClose,
    }));

    return (
        <React.Fragment>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={modalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" align="center">
                            Check Chaincode Update
            </Typography>
                        {/* <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
                        <MDBox pt={4} pb={3} px={3}>
                            <MDBox component="form" role="form">
                                <MDBox mb={2}>
                                    <MDInput type="email" label="Email" fullWidth />
                                </MDBox>
                                <MDBox mb={2}>
                                    <MDInput type="password" label="Password" fullWidth />
                                </MDBox>
                                <MDBox mt={4} mb={1}>
                                    <MDButton variant="gradient" color="info" fullWidth>
                                       check Update
              </MDButton>
                                </MDBox>
                            </MDBox>
                        </MDBox>
                    </Box>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}

export default forwardRef(MDModal);
