import {SendEmail} from '../../actions/resetPasswordAction'
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import ForgotPassword from '../../components/SendEmail'


const validate = (values) => {
    const errors = {};

    const requiredFields = [
        'email'
      ];
      requiredFields.forEach(field => {
        if (!values[field]) {
          errors[field] = 'Required!';
        }
      });

    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }
    return errors;
}

const mapStateToProps = (state) => (
{
    "form" : state.form,
    "status" : state.resetPassword.status,
    "errors" : state.resetPassword.errors
});
const mapDispatchToProps = {
    "sendEmail": SendEmail
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((form) => {
        dispatchProps.sendEmail(form);
    })
});

const cnForgotPasswordContainer = connect(mapStateToProps, mapDispatchToProps,mergeProps)(ForgotPassword);

const ForgotPasswordContainer = reduxForm ({
    form: 'ForgotPassword',
    validate
}) (cnForgotPasswordContainer);

export default ForgotPasswordContainer;