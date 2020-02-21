import React from 'react';
import Hink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

var style = {
  backgroundColor: "#d81b60",
  borderTop: "3px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}
var phantom = {
  display: 'block',
  height: '60px',
  width: '100%',
}
const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Hink color="inherit" href="#">
            MATCHA
          </Hink>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}
const Footer = () => {
  //const classes = useStyles();
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