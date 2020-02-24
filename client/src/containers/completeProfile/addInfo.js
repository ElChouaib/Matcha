import AddInfo from '../../components/completeProfile/addInfo';
import {connect} from "react-redux";
import {reduxForm} from 'redux-form';
import Age from '../../components/commun/age';
import {createOption, addInfo} from '../../actions/addInfoAction';

const validate = (values) => {
    const errors = {};
    const requiredFields = [
        'gender',
        'sexOrient',
        'birthday',
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
        errors.birthday = "Come back when you're 18 ;)"
    if(age > 120)
        errors.birthday = 'Invalid age !'
    return errors;
}

const mapStateToProps = (state) => (
{
    'values' : state.form.values,
    'selectOptions': state.addInfo.selectOptions,
    'selectLoading': state.addInfo.selectLoading,
    'selectError' : state.addInfo.error,
    'user': state.user,
});
const mapDispatchToProps = {
    "addInfo": addInfo,
    "createOption": createOption,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,

    "handleSubmit" : otherProps.handleSubmit((values) => {
        dispatchProps.addInfo(values, stateProps.user.id);
    }),
});

const connectedAddInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddInfo);

let AddInfoContainer = reduxForm ({
    form : "addInfo",
    destroyOnUnmount: true,
    validate,
})(connectedAddInfoContainer);

AddInfoContainer = connect(
    state => ({
        initialValues: {
            gender: state.user.gender,
            sexOrient: state.user.sexOrient,
            birthday: state.user.birthday,
            bio: state.user.bio,
            interests: state.user.interests,
        },
    }),
)(AddInfoContainer);

export default AddInfoContainer;