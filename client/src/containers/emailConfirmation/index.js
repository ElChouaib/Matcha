import React, { Component } from 'react';
import EmailConfirmation from '../../components/emailConfirmation';
import {EmailConfirmationAction} from '../../actions/registerAction';
import {connect} from "react-redux";

class EmailConfirmCont extends Component {
    componentDidMount = () => {
        const token = this.props.match.params.token;
        this.props.emailConfirm(token);
    }
    render() {
        return (
            <EmailConfirmation status={this.props.status} />
        )
    }
}

const mapStateToProps = (state) => (
{
    "status" : state.register.emailConfirmation,
});
const mapDispatchToProps = {
    "emailConfirmation": EmailConfirmationAction
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "emailConfirm" : function (token) {
        dispatchProps.emailConfirmation(token);
    }
});

export default connect(mapStateToProps, mapDispatchToProps,mergeProps)(EmailConfirmCont);