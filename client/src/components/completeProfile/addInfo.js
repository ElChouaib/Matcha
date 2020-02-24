import React , {useState} from 'react';
import {Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import CreatableSelect from 'react-select/creatable';
import MySnackBar from '../commun/flash';
import renderField from '../commun/TextField';
import RadioGroup from '../commun/RadioGroup';


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
        margin: theme.spacing(2, 0, 2),
        backgroundColor: theme.palette.secondary.main,
    },
    margin: {
      margin: theme.spacing(1),
    },
    chg: {
      backgroundColor: '#9fa1a2',
    },
    nor: {
      backgroundColor: 'white',
    },
}));



const renderDatepicker = ({input, label, meta : { touched, error}}
  ) => (
      <TextField
          {...input}
          type = 'date'
          label = {label}
          error = {touched && (error ? true : false)}
          helperText={touched && error}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
      />
)

const AddInfo = (props) => {
  const classes = useStyles();
  const {handleSubmit, selectLoading, selectOptions, selectError, createOption} = props;
  const [state, setstate] = useState({male: false, female: false});

  const handleCreate =  (value) => {
    createOption(value);
  }

  // const handlechange = (value) => {
  //   setstate({male: !state.male, female: !state.male});
  // }

  const selectField = ({ input, meta: { touched, error }}) => (
    <div>
      <CreatableSelect
        {...input}
        isMulti
        isDisabled={selectLoading}
        isLoading={selectLoading}
        isClearable={false}
        options={selectOptions}
        onBlur={() => input.onBlur(input.value)}
        onChange={(value) => { input.onChange(value) }}
        onCreateOption={handleCreate}
      />
      <div>{(touched && error) &&
        <div style={{'fontSize':'12px','color':'rgb(244, 67, 54)'}}>{error}</div>}
      </div>
    </div>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    <div className={classes.paper}>
        <Typography component="h1" variant="h5" color="primary">
          Additional infos
        </Typography>
        {selectError && <MySnackBar variant="error" msg={selectError}/> }
        <form  className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormLabel component="legend">Gender</FormLabel>
              <Field component={RadioGroup} name="gender" required={true} options={[
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' }
                  ]}
              />
            </Grid>
            <Grid item xs={12}>
            <FormLabel component="legend">Match with</FormLabel>
              <Field component={RadioGroup} name="sexOrient" required={true} options={[
                    { title:  'Men ' , value: 'men'  },
                    { title:  'Women', value: 'women'},
                    { title:  'Both' , value: 'both' }
                  ]}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Birthday</FormLabel>
              <Field
                name="birthday"
                component={renderDatepicker}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Bio</FormLabel>
              <Field
                name="bio"
                component={renderField}
                type = "text"
                rows='4'
                variant='outlined'
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel component="legend">Interests</FormLabel>
              <Field name='interests' component={selectField}/>
            </Grid>
            <Grid  container direction="row" item xs={12}>
              <Grid item xs={9}/>
              <Grid item container alignItems="flex-end" xs={3}>
                <Button  onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Next</Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default AddInfo;