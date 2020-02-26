import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import defaultImg from '../../image/default.jpg';
import BlockIcon from '@material-ui/icons/Block';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    boxShadow: 3,
  },
  card: {
    maxWidth: 400,
    maxHeight:550,
    borderRadius : '20px',
    backgroundColor: '#E6EAEA',
  },
  cardMedia : {
    maxWidth: 400,
    maxHeight : 250,
  },
  cardHeader : {
    maxWidth: 400,
    maxHeight : 150,
  },
  cardContent : {
    maxWidth: 400,
    maxHeight : 100,
  },
  cardAction : {
    maxWidth: 400,
    maxHeight : 50,
  },
  avatarON: {
    backgroundColor: 'rgb(66, 183, 42)',
    width: 15,
    height: 15,
  },
  avatarOF: {
    backgroundColor: '#e42416',
    width: 15,
    height: 15,
  },
}));

export default function ViewProfile(props) {
  const {user,images,interests,handleBlock,handleLike,handleDislike,handleViewProfile} = props;
  const classes = useStyles();
  const value = user.rating;
  return (
    <div className={classes.root}>
    <Card className={classes.card}>
      <CardHeader
      className={classes.cardHeader}
      action={ 
        <Box component="fieldset" mb={3} borderColor="transparent">
        <div className={classes.rating1}> 
          <Rating
            name="read-only"
            value={value}
            precision={0.1}
            readOnly
          />
        </div>
        </Box>
        }
        avatar={
          <Avatar aria-label="recipe" className={user.isOnline === 1 ? classes.avatarON : classes.avatarOF}></Avatar> 
        }
        title={user.firstname +' ' +user.lastname}
        subheader={user.isOnline === 1 ? 'Online' : 'Last seen' + user.lastSignIn}
      >
      </CardHeader>
      <CardMedia
        className={classes.cardMedia}
        children={
          images.length !== 0 ? images.map((tile) =>
            <div key={tile.id}>
              {tile.isProfilePic === 1 &&
                <img style={{width: "100%",height:"250px"}} src={`http://localhost:5000/images/${tile.path}`} alt="images"/>
              }
            </div>
            ) : <img  style={{width: "100%",height:"250px"}} src={defaultImg} alt="images"/>
        }
      />
      <CardContent className={classes.cardContent}> 
        <Typography>
          Age : {user.age}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        {user.like === null &&
          <Tooltip title ="Like"><IconButton aria-label="Like" onClick={(e) => handleLike(user.id)}>
            <FavoriteBorderIcon color="secondary" />
          </IconButton></Tooltip>
        }
        {user.like === 'iLike' &&
          <Tooltip title ="Unlike"><IconButton aria-label="Unlike"  onClick={(e) => handleDislike(user.id)}>
            <FavoriteIcon  color="secondary"/>
          </IconButton></Tooltip>
        }
        {user.like === 'heLiked' &&
          <Tooltip title ="Like back"><IconButton aria-label="Like back"  onClick={(e) => handleLike(user.id)}>
            <SupervisedUserCircleOutlinedIcon color="primary"/>
          </IconButton></Tooltip>
        }
        {user.like === 'match' &&
          <Tooltip title ="Unmatch"><IconButton aria-label="Unmatch"  onClick={(e) => handleDislike(user.id)}>
            <SupervisedUserCircleRoundedIcon color="primary"/>
          </IconButton></Tooltip>
        }
        <Tooltip title ="Block"><IconButton aria-label="Block"  onClick={(e) => handleBlock(user.id)}>
          <BlockIcon  color="secondary"/>
        </IconButton></Tooltip>
        <Tooltip title ="View"><IconButton aria-label="View"  onClick={(e) => handleViewProfile(user,images,interests)}>
          <VisibilityIcon  color="primary"/>
        </IconButton></Tooltip>
        
      </CardActions>
    </Card> 
    </div>
  );
}