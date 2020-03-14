import React from 'react';
import {Field} from 'redux-form';
import Avatar from '@material-ui/core/Avatar';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MyFlash from '../commun/flash'
import CircularProgress from '@material-ui/core/CircularProgress';
import renderField from '../commun/TextField';
const useStyles = makeStyles(theme => ({
 
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',

  },
  lock:{
    backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',

  },
 
}));


const ForgotPassword = (props) => {
  const classes = useStyles();
    const {handleSubmit, status, errors} = props;
    return (
     <Container component="main" maxWidth="xs">
      <CssBaseline />
      {status === "success" && <MyFlash variant="success" msg={['Please check your e-mail']}/>}
      {status === "error" && <MyFlash variant="error" msg={[errors]}/>}
      {status !== 'loading' && <div className={classes.paper}> 
      <Avatar className={classes.avatar}>
            <SendTwoToneIcon/>
      </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Send reset link
        </Typography>
        <form  className={classes.form}>
            <Grid item xs={12}>
              <Field
                  name="email"
                  component={renderField}
                  label="Email"
                  type = "email"
                  rows='1'
              />
            </Grid>

            <Grid item xs={12}>
            <Button  className={classes.submit, classes.lock} fullWidth variant="contained" type="submit" color="primary" onClick={handleSubmit}>Submit</Button>
            </Grid>
        </form>
      </div>}

      {status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}

    </Container>
    )
  }

  export default ForgotPassword;