import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import defaultImg from '../../image/default.jpg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    boxShadow: 3,
  },
  card: {
    maxWidth: 400,
    maxHeight:550,
    
    borderRadius   : '50px',
    backgroundColor: 'none',
    borderStyle: 'solid',
    borderColor: 'black',
  

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
    backgroundColor: 'red',
    width: 15,
    height: 15,
  },
 
  
}));

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function ViewProfile(props) {
  const {user,images,interests,handleViewProfile} = props;
  const classes = useStyles();
  const value = user.rating;
  return (
    <div className={classes.root}>
    <Button aria-label="View"  onClick={(e) => handleViewProfile(user,images,interests)}>
      <Card className={classes.card}>
      <CardHeader
      className={classes.cardHeader}
      
        avatar={
          <Avatar aria-label="recipe" className={user.isOnline === 1 ? classes.avatarON : classes.avatarOF}></Avatar> 
        }
        subheader={user.isOnline === 1 ? 'Online' : 'Seen at' + user.lastSignIn}
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
              {
        <Box component="fieldset" mb={3} borderColor="transparent">
        <div > 
        <StyledRating
        name="read-only"
            value={value}
            precision={0.1}
            readOnly
          icon={<FavoriteIcon fontSize="inherit" />}
        />
        </div>
        </Box>
        }
            </div>
            ) : <img  style={{width: "100%",height:"250px"}} src={defaultImg} alt="images"/>
            
        }

        
      />
      <CardContent className={classes.cardContent}> 
      </CardContent>
    </Card>
    </Button>
    </div>
  );
}