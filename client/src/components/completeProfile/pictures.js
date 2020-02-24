import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles(theme => ({
  card: {
   height :150,
    position : 'center',
  },
  input: {
    display: 'none',
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: theme.palette.secondary.main,
}, root: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  overflow: 'hidden',

},

gridList: {
  width: 500,
  height: 450,
},
titleBar: {
  background:
    'linear-gradient(to top, rgba(0,0,0,0.6) 0%, ' +
    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
},
delete : {
  background : 'none'
},
add : {
  display: 'none',
}
}));
const calcImages = (images) =>{
  let len = 0;
  if(images != null){
    len = images.length;
    if(len > 4){
      return false;
    }
  }
  return true;
  
}

const  Pictures = (props) => {
  const {fileChangedHandler,images,deletePicture,setProfilePicture} = props;
  const classes = useStyles();
  return (
    <Container>
    <CssBaseline />
      <Grid container  justify="center">
       <div className={calcImages(images.images) === false ? classes.add : ''}>
         <input accept="image/*" className={classes.input} id="icon-button-file" type="file"  onChange={fileChangedHandler}/>
         <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddAPhotoIcon  style={{fontSize : 70}} />
          </IconButton>
        </label>
        </div>
      
      </Grid>
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>

              {images.isImages  && images.images.map((tile) => {
                return (
                  <GridListTile  key={tile.id}>
                    <img src={`http://localhost:5000/images/${tile.path}`} alt='photos' />
                    <GridListTileBar
                      actionPosition="left"
                      className={classes.titleBar}
                      title={tile.isProfilePic === 1 && 'Profile picture'}
                      actionIcon={
                        <Tooltip title ="set profile pic"><IconButton aria-label="profilePic"  onClick={(e) => setProfilePicture(tile.id)}>
                          <CheckCircleSharpIcon  color="secondary"/>
                        </IconButton></Tooltip>
                        
                      }
                    />
                    <GridListTileBar
                      className={classes.delete}
                      titlePosition="top"
                      actionIcon={
                        images.images.length > 1 &&
                        <Tooltip title ="delete pic"><IconButton aria-label="deletePic"  onClick={(e) => deletePicture(tile.id,tile.isProfilePic)}>
                          <DeleteForeverSharpIcon  color="secondary"/>
                        </IconButton></Tooltip>  
                        
                      }
                    />
                  </GridListTile> 
                )}
              )}
            </GridList>
            
          </div>
    </Container>
  )
}
  
export default Pictures;