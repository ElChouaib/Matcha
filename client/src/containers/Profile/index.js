import React ,{ useEffect }from 'react';
import Profile from '../../components/Profile'
import {getOptions} from '../../actions/addInfoAction'
import {getImages} from '../../actions/imagesAction';
import {connect} from "react-redux";

const ProfileContainer = (props) => {
    const {user,getImages, getOptions} = props;
    useEffect(() => {
        if(user){
            getOptions();
            getImages(user.id);
        }
    }, []);
    return (
        <div>
            <Profile />
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user": state.user,
    
});
const mapDispatchToProps = {
    "getImages" : getImages,
    "getOptions": getOptions,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);