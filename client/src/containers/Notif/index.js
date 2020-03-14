import React from 'react'
import {connect} from "react-redux";
import Notif from '../../components/Notif';

const NotifCont = (props) => {
    const {notifList}  = props;
    
    return (
        <div>
            <Notif notifList={notifList}/>
        </div>
    )
}
const mapStateToProps = (state) => (
{
    "user": state.user,
    "notifList": state.notif.notifications,
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps,mapDispatchToProps)(NotifCont);