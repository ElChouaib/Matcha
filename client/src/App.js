import React, {useEffect} from 'react';
import NavBar from '../src/containers/Navbar';
import Footer from '../src/components/Footer';
import Routes from './Routes/Routes';
import socket from './socketConn';
import {NewNotif, GetNotif, OpenNotifSuccess} from './actions/notifAction';

function App(props) {
  useEffect(() => {
    props.store.dispatch(GetNotif());
    const handleNotif = (data) => {
      props.store.dispatch(NewNotif(data));
    }
    const handleOpenNotif = () => {
      props.store.dispatch(OpenNotifSuccess());
    }
    socket.on('new_notif', handleNotif);
    socket.on('openedNotif', handleOpenNotif);
  }, [])

  const handlerFunc =  () =>  {
    props.store.dispatch({type: "REJOIN_ROOM"});
  }
  socket.on('connect', handlerFunc);
  return (
    <div className="App">
      <NavBar />
      <Routes />
      <Footer/>
    </div>
  );
}

export default App;