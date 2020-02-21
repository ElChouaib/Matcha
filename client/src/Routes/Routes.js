import React from 'react'
import {connect} from "react-redux"
import {Route, Switch} from 'react-router-dom'
import Register from '../containers/Register'
import Login from '../containers/Login'


const Routes = (props) => {

    return (
        <div>
            <Switch>
                <Route path="/register"  component={ Register } />
                <Route path="/login" component={ Login } />
            </Switch>
        </div>
    )};
const mapStateToProps = (state) => (
{
    'user': state.user,
});
export default connect(mapStateToProps)(Routes);
