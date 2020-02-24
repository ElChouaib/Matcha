import React from 'react';
import { Field} from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import CreatableSelect from 'react-select/creatable';
import { makeStyles } from '@material-ui/core/styles';
import renderField from '../commun/TextField'
import RadioGroup from '../commun/RadioGroup';
import MyFlash from '../commun/flash';

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

const ProfileInfo = (props) => {
    const {handleSubmit, selectLoading, selectOptions, selectError, createOption} = props;
    const classes = useStyles();

    const handleCreate =  (value) => {
      createOption(value);
    }
  
    const sel = ({ input, meta: { touched, error }}) => (
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
    <div>
      {selectError && <MyFlash msg={selectError} variant="error"/>}
        <form>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={5}>
              <FormLabel  component="legend">Firstname</FormLabel>
                  <Field
                      name="firstname"
                      component={renderField}
                      type = "text"
                      rows='1'
                  />
              </Grid>
              <Grid item xs={5}>
              <FormLabel  component="legend">Lastname</FormLabel>
                  <Field
                      name="lastname"
                      component={renderField}
                      type = "text"
                      rows='1'
                  />
              </Grid>
              <Grid item xs={5}>
              <FormLabel  component="legend">Username</FormLabel>
                  <Field
                      name="username"
                      component={renderField}
                      type = "text"
                      rows='1'
                  />
              </Grid>
              <Grid item xs={5}>
              <FormLabel  component="legend">Email</FormLabel>
                  <Field
                      name="email"
                      component={renderField}
                      type = "email"
                      rows='1'
                  />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Gender</FormLabel>
                <Field component={RadioGroup} name="gender" required={true} options={[
                      { title: 'Male', value: 'male' },
                      { title: 'Female', value: 'female' }
                    ]}
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Birthday</FormLabel>
                <Field
                  name="birthday"
                  component={renderDatepicker}
                />
              </Grid>
              <Grid item xs={5}>
              <FormLabel component="legend">Match with</FormLabel>
                <Field component={RadioGroup} name="sexOrient" required={true} options={[
                      { title:  'Men ' , value: 'men'  },
                      { title:  'Women', value: 'women'},
                      { title:  'Both' , value: 'both' }
                    ]}
                />
              </Grid>
              <Grid item xs={5}>
                <FormLabel component="legend">Interests</FormLabel>
                <Field name='interests' component={sel}/>
              </Grid>
              <Grid  item xs={10}>
                <FormLabel  component="legend">Bio</FormLabel>
                <Field
                  name="bio"
                  component={renderField}
                  type = "text"
                  rows='4'
                  variant='outlined'
                />
              </Grid> 
              <Grid item xs={5}>
              <FormLabel  component="legend">New password</FormLabel>
                  <Field
                      name="password"
                      component={renderField}
                      type = "password"
                      rows='1'
                  />
              </Grid>
              <Grid item xs={5}>
              <FormLabel  component="legend">Confirm new password</FormLabel>
                  <Field
                      name="confirmPassword"
                      component={renderField}
                      type = "password"
                      rows='1'
                  />
              </Grid>        
              <Grid item container justify='center' xs={3}>
                <Button  onClick={handleSubmit} className={classes.submit} fullWidth variant="contained" type="submit" color="primary" name="submit" value="ok" >Submit</Button>
              </Grid>
            </Grid>
        </form>
    </div>
    )
}

export default ProfileInfo;