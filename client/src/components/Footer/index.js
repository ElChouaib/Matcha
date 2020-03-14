import React from 'react';
import Hink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

var style = {
  backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  borderTop: "3px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Hink color="inherit" href="#">
            Elchouai&Mgoulman
          </Hink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}

const Footer = () => {
  return(
    <div>
      <div style={phantom}/>
      <div style={style}>
        <Copyright />
      </div>  
    </div>      
  );
}

export default Footer;