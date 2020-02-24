import React, {useEffect} from 'react'
import {connect} from "react-redux";
import Activity from '../../components/Activity';
import {getBlockUser,deblockUser,getLikeUser,dislikeUserAct, getViewProfileList, likeUser, getLikedBy} from '../../actions/userAction';

const ActivityContainer = (props) => {
    const {getLikedBy, likedByList, likeUser, viewProfileList, getViewProfileList,getBlockUser,blockList,deblockUser,getLikeUser,dislikeUserAct,likeList} = props;
    useEffect(() => {
        getViewProfileList();
        getBlockUser();
        getLikeUser();
        getLikedBy();
}, []);
    const handleDeblock = (deblocked_user_id) => {
        deblockUser(deblocked_user_id);
    }
    const handleDislike= (dislike_user_id) => {
        dislikeUserAct(dislike_user_id);
    }
    const handleLike = (liked_user_id) => {
        likeUser(liked_user_id);
    }
    return (
        <div>
            <Activity likedByList={likedByList} viewProfileList={viewProfileList} blockList={blockList} handleLike={handleLike} handleDeblock={handleDeblock} handleDislike={handleDislike} likeList={likeList}/>
        </div>
    )
}
const mapStateToProps = (state) => (
{
    "user": state.user,
    "blockList" : state.blockList,
    "likeList" : state.likeList,
    "viewProfileList": state.viewProfileList,
    "likedByList": state.likedByList,
});
const mapDispatchToProps = {
    "getBlockUser" : getBlockUser,
    "deblockUser" : deblockUser,
    "getLikeUser" : getLikeUser,
    "dislikeUserAct" : dislikeUserAct,
    "likeUser": likeUser,
    "getViewProfileList": getViewProfileList,
    "getLikedBy": getLikedBy,
};

export default connect(mapStateToProps,mapDispatchToProps)(ActivityContainer);