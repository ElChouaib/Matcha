import React, { useEffect } from 'react';
import Stepper from '../../components/completeProfile/stepper';
import {getOptions, addLocation} from '../../actions/addInfoAction';
import {getImages} from '../../actions/imagesAction';
import {connect} from "react-redux";
import {decStepper, incStepper} from '../../actions/stepperAction';

const StepperContainer = (props) => {
    const { user, images, getImages, getOptions, decStepper, incStepper, addLocation} = props;
    useEffect(() => {
        if(user){
            getOptions();
            getImages(user.id);
        }
    }, []);
    const handleBack = () => {
        decStepper();
    }
    const handleNext = () => {
        if(user.complete === 2)
            addLocation({lat: user.lat, lng: user.long});
        incStepper();
    }
    return (
        <Stepper handleBack={handleBack} handleNext={handleNext} user={user} images={images}/>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    "getOptions": getOptions,
    "getImages" : getImages,
    "decStepper": decStepper,
    "incStepper": incStepper,
    "addLocation": addLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(StepperContainer);