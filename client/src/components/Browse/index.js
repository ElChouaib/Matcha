import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import ViewProfile from './viewProfile';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Select from 'react-select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width:100,
    backgroundColor: theme.palette.secondary.main
  },
  rating: {
    maxWidth:400
  },
  margin: {
    height: theme.spacing(3),
  },
  card:{
    border: '2px solid',
    borderColor: '#E6EAEA',
  },
  
}));

export default function TitlebarGridList(props) {
  const classes = useStyles();
  const {selectOptions,handle, users,handleSubmit,handleBlock,handleLike,handleDislike,
        handleViewProfile,handleChangeAge,handleChangeLoc,handleChangeRating,
        handleChangeTags,handleChangeNbrTags,age,nbrTags,loc,rating} = props;
  
  const marks = [
    {value: 0,label: '0'},{value: 0.5,label: '0.5'},{value: 1,label: '1'},{value: 1.5,label: '1.5'},
    {value: 2,label: '2'},{value: 2.5,label: '2.5'},{value: 3,label: '3'},{value: 3.5,label: '3.5'},
    {value: 4,label: '4'},{value: 4.5,label: '4.5'},{value: 5,label: '5'},
  ];
  const marksTags = [
    {value: 0,label: '0'},{value: 1,label: '1'},{value: 2,label: '2'},
    {value: 3,label: '3'},{value: 4,label: '4'},{value: 5,label: '5'}
  ];
  const customStyles = {
    control: (base, state) => ({
        ...base,
        borderColor: state.isFocused ? "#3f51b5" : "#3f51b5",
        boxShadow: state.isFocused ? null : null,
      }),
    menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
        backgroundColor: '#DBDFF',
      }),
    menuList: base => ({
        ...base,
        padding: 0,
        height: '100px',
        overflowY: 'scroll'
      }),
  };

    return (
      <>
      <Card className={classes.card}>
        <CardHeader title="FILTER"  align="center"/>
        <CardContent>
          <Grid container item justify="center" spacing={2} xs={12}>
            <Grid item xs={6} className={classes.rating}>
              <div className={classes.margin} />
              <Tooltip title ="DESC"><IconButton aria-label="View"  onClick={(e) => handle("-rating")}>
                <KeyboardArrowDownIcon  color="primary"/>
              </IconButton></Tooltip>
              <Tooltip title ="ASC"><IconButton aria-label="View"  onClick={(e) => handle("rating")}>
                <ExpandLessIcon  color="primary"/>
              </IconButton></Tooltip>
              <Typography id="range-slider1" gutterBottom align="center">
                Rating
              </Typography>
              <Slider
                value={rating}
                onChange={handleChangeRating}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={0.2}
                marks={marks}
                min={0}
                max={5}
              /> 
            </Grid>

            <Grid item xs={6} className={classes.rating}>
              <div className={classes.margin} />
              <Tooltip title ="DESC"><IconButton aria-label="View"  onClick={(e) => handle("-age")}>
                <KeyboardArrowDownIcon  color="primary"/>
              </IconButton></Tooltip>
              <Tooltip title ="ASC"><IconButton aria-label="View"  onClick={(e) => handle("age")}>
                <ExpandLessIcon  color="primary"/>
              </IconButton></Tooltip>
              <Typography id="range-slider2" gutterBottom align="center">
                Age
              </Typography>
              <Slider
                value={age}
                onChange={handleChangeAge}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={1}
                min={18}
                max={120}
              />
            </Grid>

            <Grid item xs={6} className={classes.rating}>
              <div className={classes.margin} />
              <Tooltip title ="DESC"><IconButton aria-label="View"  onClick={(e) => handle("-distance")}>
                <KeyboardArrowDownIcon  color="primary"/>
              </IconButton></Tooltip>
              <Tooltip title ="ASC"><IconButton aria-label="View"  onClick={(e) => handle("distance")}>
                <ExpandLessIcon  color="primary"/>
              </IconButton></Tooltip>
              <Typography id="range-slider3" gutterBottom align="center">
                Localisation
              </Typography>
              <Slider
                value={loc}
                onChange={handleChangeLoc}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={1000}
                min={0}
                max={50000}
              /> 
            </Grid>

            <Grid item xs={6} className={classes.rating}>
              <div className={classes.margin} />
              <Tooltip title ="DESC"><IconButton aria-label="View"  onClick={(e) => handle("-nbrTags")}>
                <KeyboardArrowDownIcon  color="primary"/>
              </IconButton></Tooltip>
              <Tooltip title ="ASC"><IconButton aria-label="View"  onClick={(e) => handle("nbrTags")}>
                <ExpandLessIcon  color="primary"/>
              </IconButton></Tooltip>
              <Typography id="range-slider4" gutterBottom align="center">
                Common tags
              </Typography>
              <Slider
                value={nbrTags}
                onChange={handleChangeNbrTags}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                step={1}
                marks={marksTags}
                min={0}
                max={5}
              /> 
            </Grid>

            <Grid item xs={6} className={classes.rating}>
              <div className={classes.margin} />
              <Typography id="range-slider5" gutterBottom align="center">
                Tags
              </Typography>
              <Select
                  isMulti
                  isClearable={false}
                  onChange={handleChangeTags}
                  options={selectOptions}
                  styles={customStyles}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
        <Button type="submit" onClick={handleSubmit} color="primary" className={classes.submit} fullWidth variant="contained" >FILTER</Button>
        </CardActions>
      </Card>
    <div className={classes.root}>
          {users.isUsers === true && users.users && users.users.map(tile => (
            <GridList key={tile.user.id}>
              <ViewProfile key={tile.user.id}  user={tile.user} images={tile.images} interests={tile.interests}
              handleBlock={handleBlock} handleLike={handleLike} handleViewProfile={handleViewProfile} handleDislike={handleDislike}/>
            </GridList>
          ))}
          
          {(users.isUsers === false || users.users === null || users.length === 0 )&& <p>No User Found</p>}
      </div>
    </>
    );
}