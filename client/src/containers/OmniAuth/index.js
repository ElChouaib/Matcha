import React, { Component, useEffect } from 'react';
import {checkOmniToken} from '../../actions/loginAction';
import {connect} from "react-redux";

const CheckOmniToken = (props) => {
    useEffect(() => {
        const token = props.match.params.token;
        props.checkOmniToken(token);
    }, []);
    return(<></>);
}

const mapStateToProps = (state) => (
{
});
const mapDispatchToProps = {
    "checkOmniToken": checkOmniToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOmniToken);