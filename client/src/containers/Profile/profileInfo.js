import React from 'react'
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import ProfileInfo from '../../components/Profile/profileInfo';
import Age from '../../components/commun/age';
import {editInfo} from '../../actions/profileAction';
import {createOption} from '../../actions/addInfoAction';

let profileInfoContainer = (props) => {
    return(
        <ProfileInfo
            handleSubmit={props.handleSubmit}
            selectLoading={props.selectLoading}
            selectOptions={props.selectOptions}
            selectError={props.selectError}
            createOption={props.createOption}
        />
    )
}

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        "firstname",
        "lastname",
        "username",
        "email",
        'gender',
        'birthday',
        'sexOrient',
        'bio',
    ];
    const requiredArr = [
        'interests'
    ];
    requiredFields.forEach(field => {
        if (!values[field] || !values[field].trim()) {
            errors[field] = 'Required !';
        }
    });
    requiredArr.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required !';
        }
    });

    if(values.bio && !/^.{1,200}$/.test(values.bio))
        errors.bio = 'maximum 200 characters';

    if(values.birthday && !/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(values.birthday))
        errors.birthday = 'Invalid date !';

    const age = Age(values.birthday)
    if(age < 18)
        errors.birthday = "Come back when you're 18 ;)";
    if(age > 120)
        errors.birthday = 'Invalid age !';
    if(values.username && !/^[a-z0-9_-]{2,20}$/.test(values.username))
        errors.username = 'Username can contain 2-20 characters, letters (a-z), numbers, "_" and "-"';
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid email address !";
    if(values.password && !/\d/.test(values.password))
        errors.password = "Password must contain a number !";
    else if(values.password && !/[A-Z]/.test(values.password))
        errors.password = "Password must contain an uppercase letter !";
    else if(values.password && !/[a-z]/.test(values.password))
        errors.password = "Password must contain a lowercase letter !";
    else if(values.password && !/[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password))
        errors.password = "Password must contain a special character !";
    else if(values.password && !/[a-zA-Z0-9 !@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]{8,20}/.test(values.password))
        errors.password = "Password must contain at least 8 characters !";
    if('password' in values && !values.confirmPassword)
        errors.confirmPassword = "Required !";
    if(values.confirmPassword && values.password !== values.confirmPassword)
        errors.confirmPassword = "Passwords does not match !";
    return errors;
}

const mapStateToProps = (state) => ({
    user: state.user,
    'selectOptions': state.addInfo.selectOptions,
    'selectLoading': state.addInfo.selectLoading,
    'selectError' : state.addInfo.error,
});
const mapDispatchToProps = {
    "editInfo": editInfo,
    "createOption": createOption,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleSubmit" : otherProps.handleSubmit((values) => {
        dispatchProps.editInfo(values);
        delete values.password;
        delete values.confirmPassword;
    }),
});

profileInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(profileInfoContainer);

profileInfoContainer = reduxForm({
    'form' :'profileInfo',
    validate,
})(profileInfoContainer);

profileInfoContainer = connect(
    state => ({
        initialValues: {
            firstname: state.user.firstname,
            lastname: state.user.lastname,
            username: state.user.username,
            email: state.user.email,
            gender: state.user.gender,
            birthday: state.user.birthday,
            sexOrient: state.user.sexOrient,
            interests: state.user.interests,
            bio: state.user.bio,
        },
    }),
)(profileInfoContainer);

export default profileInfoContainer;
