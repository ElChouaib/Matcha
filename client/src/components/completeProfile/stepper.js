import React  from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import AddInfoContainer from '../../containers/completeProfile/addInfo';
import Pictures from '../../containers/completeProfile/pictures';
import Localistaion from '../../containers/completeProfile/localisation'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid, Button } from '@material-ui/core';
import StepConnector from '@material-ui/core/StepConnector';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import PlaceIcon from '@material-ui/icons/Place';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    minWidth: 350,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
  back: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.grey,
  },
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
}));

const steps = ['Additional infos', 'Pictures', 'Localisation'];

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddInfoContainer />;
    case 1:
      return <Pictures />;
    case 2:
      return <Localistaion/>;
    default:
      throw new Error('Unknown step');
  }
}


function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <HowToRegIcon/>,
    2: <LinkedCameraIcon />,
    3: <PlaceIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const Checkout = (props) => {

  const {handleBack,handleNext,user,images} = props;
  const activeStep = user.complete;
    const classes = useStyles();

    return (
    <React.Fragment>
      <CssBaseline />
      {activeStep !== 'loading' &&
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" color='secondary'>
            Complete profile
          </Typography>
          <Stepper  alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>      
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Success
                </Typography>
                <Typography variant="subtitle1">
                  You completed your profile successfully.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
              </React.Fragment>
            )}
          </React.Fragment>
        
        {(activeStep === 1 || activeStep === 2) && 
           <Grid container direction="row" item xs={12}>
              <Grid item xs={3}>
              <Button className={classes.back} fullWidth onClick={handleBack} variant="contained" type="submit" color="default" >Back</Button>
              </Grid>
              <Grid item xs={6}/>

              <Grid item container alignItems="flex-end" xs={3}>
                {
                  images.isImages === true && 
                <Button  className={classes.submit} onClick={handleNext} fullWidth variant="contained" type="submit" color="primary">Next</Button>
              }
                </Grid>
            </Grid>
        }
        </Paper>
      </main>}
      {activeStep === "loading" && <div className={classes.loading}><CircularProgress color="secondary" /></div>}
    </React.Fragment>
  );
}

export default Checkout;