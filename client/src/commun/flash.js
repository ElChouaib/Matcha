import React, {useEffect} from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyFlash(props) {
    const {msg, variant} = props;
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        if(msg && variant)
            msg.forEach(element => {
                enqueueSnackbar(element, { variant: variant });
            });
    }, [])
    return(<></>);
}

export default function Snackbar(props){
    return(
        <SnackbarProvider
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            autoHideDuration={4000}
            maxSnack={5}
        >
        <MyFlash msg={props.msg} variant={props.variant}/>
        </SnackbarProvider>
    );
};