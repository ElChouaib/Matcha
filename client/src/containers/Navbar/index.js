import React, {useState} from 'react';
import {connect} from "react-redux";
import {LogoutAction} from '../../actions/logoutAction';
import {OpenNotif} from '../../actions/notifAction';
import NavBar from '../../components/NavBar';
import MyMenu from '../../components/commun/menu';
import NotifList from "../../components/Notif/index";

const NavBarContainer = (props) => {
    const {openNotif, user, handleLogout, notifList} = props;
    const [state, setState] = useState({
        open: false,
    });
    const handleNotifListOpen = (e) => {
        openNotif();
        setState({open: true, anchor: e.currentTarget});
    }
    const handleClose = () => {
        setState({open: false, anchor: null});
    }
    let i = 0;
    notifList && notifList.forEach(e => {
        if(e.seen === 0)
            i++;
    });
    return(
        <>
            <NavBar unseenNotif={i} handleLogout={handleLogout} user={user} handleNotifListOpen={handleNotifListOpen}/>
            <MyMenu  state={state} handleClose={handleClose}>
                <NotifList notifList={notifList}/>
            </MyMenu>
        </>
    )
}

const mapStateToProps = (state) => (
{
    "user" : state.user,
    "notifList": state.notif.notifications,
});
const mapDispatchToProps = {
    "logoutAction": LogoutAction,
    "openNotif": OpenNotif,
};
const mergeProps = (stateProps, dispatchProps, otherProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...otherProps,
    "handleLogout" : () => {
        dispatchProps.logoutAction();
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(NavBarContainer);
 