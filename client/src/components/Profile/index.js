import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlaceTwoToneIcon from '@material-ui/icons/PlaceTwoTone';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import { red } from '@material-ui/core/colors';
import MonochromePhotosTwoToneIcon from '@material-ui/icons/MonochromePhotosTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import ViewProfile from '../../containers/Profile/viewProfile';
import Photos from '../../containers/completeProfile/pictures';
import Maps from '../../containers/Profile/maps';
import ProfileInfo from '../../containers/Profile/profileInfo';

const useStyles = makeStyles(theme => ({
  root1: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 500,

  },
  avatar: {
    backgroundColor: red[500],
    width: 150,
 height: 150,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function SimpleContainer() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
    <React.Fragment>
      <Grid container  justify="center">
        
        <Grid item xs={12} sm={12}>
          <Paper square className={classes.root1}>
            <Tabs value={value} onChange={handleChange} variant="fullWidth" indicatorColor="primary" textColor="secondary">
              <Tab icon={<AccountCircleTwoToneIcon />} label="INFOS" id ='0'/>
              <Tab icon={<MonochromePhotosTwoToneIcon />} label="PHOTOS" id='1'/>
              <Tab icon={<PlaceTwoToneIcon />} label="LOCALISATION" id='2'/>
              <Tab icon={<VisibilityTwoToneIcon />} label="VIEW PROFILE" id='3'/>
            </Tabs>
            <TabPanel value={value} index={0}><ProfileInfo /></TabPanel>
            <TabPanel value={value} index={1}><Photos/></TabPanel>
            <TabPanel value={value} index={2}><Maps/></TabPanel>
            <TabPanel value={value} index={3}><ViewProfile/></TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
