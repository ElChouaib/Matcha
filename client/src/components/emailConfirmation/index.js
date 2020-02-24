import React  from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const EmailConfirmation = (props) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

    {props.status !== 'loading' && <div className={classes.paper}>
        <Typography variant="h4" color="primary">
          Email confirmation
        </Typography>
        {props.status === 'error' && <Typography variant="h6" color="error">
          <ErrorIcon /> There was an error, please retry.
        </Typography>}
        {props.status === 'success' && <Typography variant="h6" color="inherit">
          <CheckCircleIcon /> Email verified successfully.
          <br/>
          You can now <Link to="/login"  style={{textDecoration: 'none', color:'#3f51b5'}}>Login</Link>
        </Typography>}
      </div>}
      {props.status === "loading" && <div className={classes.paper} style={{marginTop: "300px"}}><CircularProgress color="secondary" /></div>}
    </Container>
  );
}

export default EmailConfirmation;