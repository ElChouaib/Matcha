import React  from 'react';
import { Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MyFlash from '../commun/flash'
import renderField from '../commun/TextField'

const useStyles = makeStyles(theme => ({
  
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
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
  lock: {
    backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
  },
}));

const Login = (props) => {
  const {handleSubmit, status, errors, registredStatus} = props;
  const classes = useStyles();

  const handleAuth = async () => {
    window.open("http://localhost:5000/auth/42");
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
    {registredStatus === 'success' && <MyFlash variant="success" msg={['Registred successfully, check your e-mail']}/>}
    {status === "errorField" && <MyFlash variant="error" msg={[errors]}/>}
    <div className={classes.paper}>
      <Avatar className={classes.avatar, classes.lock}>
            <VpnKeyIcon />
          </Avatar>
        <Typography component="h1" variant="h5" color="primary">
          Sign in
        </Typography>
        
        <form  className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Field
                name="username"
                label="Username"
                type = "text"
                component={renderField}
            />
            </Grid>
            <Grid item xs={12}>
            <Field
              name="password"
              type="password"
              component={renderField}
              rows='1'
              label="Password"
            />
            </Grid>
            <Grid item xs={12}>
              <Button  onClick={handleSubmit} className={classes.submit , classes.lock} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
            </Grid>
          </Grid>
        </form>   
        <Grid container justify="flex-end">
          <Grid item xs>
              <Link to="/forgotPassword"  style={{textDecoration: 'none', color:'#3f51b5'}}>
                  Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" style={{textDecoration: 'none', color:'#3f51b5'}}>
                  Don't have an account? Sign Up
              </Link>
            </Grid>
            <Button onClick={handleAuth}>42</Button>

          </Grid>
      </div>
    </Container>
  );
}

export default Login;