import React, { useEffect } from 'react';
import {sendToken} from '../../actions/loginAction';
import {connect} from "react-redux";

const  OmniAuth  = (props) => {
    const {sendToken} = props;
    useEffect(()=> {
        sendToken(props.match.params.token);
    },[])
    
    return(<></>)
}
const mapDispatchToProps = {
    "sendToken" : sendToken,
};

export default connect(null,mapDispatchToProps)(OmniAuth);

