import React from 'react';
import Picture from '../../components/completeProfile/pictures';
import {connect} from "react-redux";
import {sendImages,delImages,setProfilePic} from '../../actions/imagesAction';


const Pictures = (props) => {
const { user,images,sendImages,delImages,setProfilePic} = props;

const fileChangedHandler = (event) => {
    let files  = event.target.files[0];
    const formData = new FormData();
    formData.append('files',files);
    formData.append('user_id',user.id);
    sendImages(formData);
    event.target.value = null;
}

const deletePicture = (imgId,isProfilePic) => {
   const img = {
    imgId : imgId,
    isProfilePic :isProfilePic
   }
    delImages(img);
  }
  const setProfilePicture = (imgId,path) => {
    setProfilePic(imgId,path);
  }

    return (
        <div>
            <Picture
                fileChangedHandler = {fileChangedHandler} 
                images = {images} deletePicture={deletePicture} setProfilePicture={setProfilePicture}
            />
        </div>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "images" : state.images,
});
const mapDispatchToProps = {
    "sendImages" : sendImages,
    "delImages" : delImages,
    "setProfilePic" :setProfilePic
};

export default connect(mapStateToProps, mapDispatchToProps)(Pictures);