import React from 'react'
import Photos from '../../containers/completeProfile/pictures';

import {connect} from "react-redux";
import {sendImages} from '../../actions/imagesAction';
const photosContainer = (props) => {
    const { user,images,sendImages } = props;
    return (
        <div>
            <Photos />
        </div>
    )
}
export default photosContainer;