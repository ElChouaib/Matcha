import React, { useEffect } from 'react';
import Localisation from '../../components/completeProfile/localisation';
import {connect} from "react-redux";
import {getLoc, addLocationSuccess} from '../../actions/addInfoAction';



const LocalisationContainer = (props) => { 
    
    const {addLocationSuccess, getLoc, user} = props

    useEffect(() => {
        getLoc();    
    }, [])
    
    const userLocation = {lat: user.lat, lng: user.long}
    const setLocation = ({lat, lng}) => {
        const marker = true;
        addLocationSuccess({marker, lat, lng});
    }
    if(!user.lat || !user.long)
        return null;
    
    return(
        <Localisation isMarker={user.marker} setLocation={setLocation} userL={userLocation}/>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
});
const mapDispatchToProps = {
    "getLoc": getLoc,
    "addLocationSuccess": addLocationSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocalisationContainer);