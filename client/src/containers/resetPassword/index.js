import ResetPassword from '../../components/resetPassword';
import {ResetPasswordAction} from '../../actions/resetPasswordAction';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'password',
        'confirmPassword',
    ];

    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });

    if(values.password && !/\d/.test(values.password))
        errors.password = "Password must contain a number !"
    else if(values.password && !/[A-Z]/.test(values.password))
        errors.password = "Password must contain an uppercase letter !"
    else if(values.password && !/[a-z]/.test(values.password))
        errors.password = "Password must contain a lowercase letter !"
    else if(values.password && !/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password))
        errors.password = "Password must contain a special character !"
    else if(values.password && !/[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]{8,20}/.test(values.password))
        errors.password = "Password must contain 8-20 characters !"
    if(values.confirmPassword && values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords does not match !"
    return errors;
}

const mapStateToProps = (state) => (
{
    "form" : state.form,
    "status" : state.resetPassword.status,
    "resetPasswordStatus": state.resetPassword.status,
    "resetError": state.resetPassword.error
});
const mapDispatchToProps = {
    "resetPasswordAction": ResetPasswordAction
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((form) => {
        const token = otherProps.match.params.token;
        const data = {form, token}
        dispatchProps.resetPasswordAction(data);
    })
});

const connectedResetPasswordContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(ResetPassword);
const ResetPasswordContainer = reduxForm({
    form : "resetPassword",
    "destroyOnUnmount": true,
    validate,
})(connectedResetPasswordContainer);

export default ResetPasswordContainer;