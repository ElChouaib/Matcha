import React  from 'react';
import { Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyFlash from '../commun/flash'
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

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  },
  lock: {
    backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  },
}));



const ResetPassword = (props) => {
    const {handleSubmit, status, resetPasswordStatus, resetError} = props;
    const classes = useStyles();

    return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    {resetPasswordStatus === "success" && <MyFlash variant="success" msg={['Your password has been reset successfully! You will be redirected to login']}/>}
    {resetPasswordStatus === "error" && <MyFlash variant="error" msg={[resetError+' You will be redirected to login']}/>}
    {status !== "loading" &&
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
            <LockRoundedIcon/>
          </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Reset password
        </Typography>
        <form  className={classes.form}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Field
                        name="password"
                        component={renderField}
                        label="Password"
                        type="password"
                        rows='1'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="confirmPassword"
                        component={renderField}
                        label="ConfirmPassword"
                        type="password"
                        rows='1'
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button  onClick={handleSubmit} className={classes.submit, classes.lock} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
                </Grid>
            </Grid>
        </form>    
        
        
    </div>}
    {status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}
      
    </Container>
    );
}

export default ResetPassword;