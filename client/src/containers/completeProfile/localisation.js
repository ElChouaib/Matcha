import React, { Component } from 'react';
import Localisation from '../../components/completeProfile/localisation';
import {connect} from "react-redux";
import {getLoc, addLocationSuccess} from '../../actions/addInfoAction';

class LocalisationContainer extends Component{
    componentDidMount(){
        this.props.getLoc();
    }
    render(){
        const userLocation = {lat: this.props.user.lat, lng: this.props.user.long}
        const setLocation = ({lat, lng}) => {
            const marker = true;
            this.props.addLocationSuccess({marker, lat, lng});
        }
        if(!this.props.user.lat)
            return null;
        return (
            <Localisation isMarker={this.props.user.marker} setLocation={setLocation} userL={userLocation}/>
        )
    }
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