
import React from 'react';
import {connect} from "react-redux";
import ViewProfile from '../../components/Profile/viewProfile'

const ViewProfileContainer = (props) => {
    const {user,images} = props;
    
    return (
        <div>
            <ViewProfile user={user} images={images} interests={user.interests}/>
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfileContainer);