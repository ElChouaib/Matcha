import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import defaultImg from '../../image/default.jpg';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
import { Grid } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px',
    boxShadow: 3,
  },
  card: {
    maxWidth: 400,
    maxHeight:600,
    borderRadius : '20px',
    backgroundColor: '#E6EAEA',
  },
  cardMedia : {
    maxWidth: 400,
    maxHeight : 250,
  },
  cardHeader : {
    maxWidth: 400,
    maxHeight : 100,
  },
  cardContent : {
    maxWidth: 400,
    maxHeight : 200,
  },
  cardAction : {
    maxWidth: 400,
    maxHeight : 50,
  },
  avatarON: {
    backgroundColor: '#00FB0C',
    width: 15,
    height: 15,
  },
  avatarOF: {
    backgroundColor: '#e42416',
    width: 15,
    height: 15,
  },
  chip: {
    marginRight: '5px',
  },
}));

export default function ViewProfile(props) {
  const {user,images,interests} = props;
  const classes = useStyles();
  const value = user.rating;
  const params = {
    Swiper,
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl:  '.swiper-button-prev'
    },
    spaceBetween: 30 
  }
  return (
    <Grid container justify='center'>
    <Card  className={classes.card}>
      <CardHeader
      className={classes.cardHeader}
      action={ 
        <Box component="fieldset" mb={3} borderColor="transparent">
        <div className={classes.rating1}>
          <Rating
            name="read-only"
            value={value}
            precision={0.5}
            readOnly
          />
          
        </div>
        </Box>
        
        }
        avatar={
          <Avatar aria-label="recipe" className={user.isOnline === 1 ? classes.avatarON : classes.avatarOF}>
              
          </Avatar>
          
        }
        title={user.firstname +' ' + user.lastname + ' @'+user.username}
        subheader={user.isOnline === 1 ? 'Online' : 'Offline' + user.lastSignIn}
      >
     
      </CardHeader>
      
      <CardMedia
      className={classes.cardMedia}
        children={
            <ReactIdSwiperCustom {...params}>
                {
                    images.isImages ? images.images.map((tile) =>
                    <div key={tile.id}>
                        <img  style={{width: "100%",height:"250px"}} src={`http://localhost:5000/images/${tile.path}`} alt="images"/>
                    </div>
                    ) : <img  style={{width: "100%",height:"250px"}} src={defaultImg} alt="images"/>
                }
                </ReactIdSwiperCustom>
        }
      
      />
      <CardContent className={classes.cardContent}>
        <Typography >
          <strong>AGE :</strong>{user.age}
        </Typography>
        <Typography >
          <strong>GENDER :</strong>{user.gender}
        </Typography>
        <Typography >
          <strong>INTERESTED IN :</strong>{user.sexOrient}
        </Typography>
        <Typography component={'span'}>
          <strong>TAGS :</strong> {interests != null &&  interests.map((item, index) =><Chip key={index} className={classes.chip} label={item.value} />)}
        </Typography>
        <Typography >
          <strong>BIO :</strong> {user.bio} 
        </Typography>
      </CardContent>
      
    </Card>
    </Grid>
  );
}
