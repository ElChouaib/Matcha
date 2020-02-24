import React  from 'react';
import { Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import renderField from '../commun/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyFlash from '../commun/flash';

const useStyles = makeStyles(theme => ({
  
  paper: {
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
  },
  color: {
    backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  },
}));


const Register = (props) => {
  const {handleSubmit, status, err} = props;
  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    {status === "error" && <MyFlash variant="error" msg={[err]}/>}
    {status !== "loading" && 
    <div className={classes.paper}> 
      <Avatar className={classes.avatar, classes.color}>
            <LockRoundedIcon/>
          </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign up
        </Typography>
        <form  className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Field
                            name="firstname"
                            component={renderField}
                            label="Firstname"
                            type = "text"
                            rows='1'
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Field
                            name="lastname"
                            component={renderField}
                            label="Lastname"
                            type = "text"
                            rows='1'
                       />
            </Grid>
            <Grid item xs={12}>
            <Field
                            name="username"
                            component={renderField}
                            label="Username"
                            type = "text"
                            rows='1'
                            
                       />
            </Grid>
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
             
              <Button  onClick={handleSubmit} className={classes.submit, classes.color} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
            </Grid>
          </Grid>
        </form>  
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" style={{textDecoration: 'none', color:'#3f51b5'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        
      </div>}
      {status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}
      
    </Container>
  );
}

export default Register;
