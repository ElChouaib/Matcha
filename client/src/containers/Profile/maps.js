import React, { Component } from 'react';
import Maps from '../../components/Profile/maps';
import {connect} from "react-redux";
import {getLoc, addLocation, addLocationSuccess} from '../../actions/addInfoAction';

class MapsContainer extends Component{
    componentDidMount(){
        this.props.getLoc();
    }
    render(){
        const userLocation = {lat: this.props.user.lat, lng: this.props.user.long}
        const setLocation = ({lat, lng}) => {
            const marker = true;
            this.props.addLocationSuccess({marker, lat, lng});
        }
        const handleSubmit = () => {
            this.props.addLocation({lat: this.props.user.lat, lng: this.props.user.long});
        }
        if(!this.props.user.lat)
            return null;
        return (
            <Maps isMarker={this.props.user.marker} setLocation={setLocation} userL={userLocation} handleSubmit={handleSubmit}/>
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
    "addLocation": addLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapsContainer);