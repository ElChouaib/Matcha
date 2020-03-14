import React from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
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
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BlockIcon from '@material-ui/icons/Block';
import ReportIcon from '@material-ui/icons/Report';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 320,
    maxHeight: 600,
    borderRadius : '20px',
    border: 'solid',
    borderColor: 'black',
   
   backgroundColor: 'none'
  },
  cardMedia : {
    maxWidth: 320,
    maxHeight : 250,
  },
  cardHeader : {
    maxWidth: 320,
    maxHeight : 100,
  },
  cardContent : {
    maxWidth: 320,
    maxHeight : 200,
  },
  cardAction : {
    marginTop: 5,
    maxWidth: 320,
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

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function ViewProfile(props) {
  const {user,images,interests,handleBlock,handleLike,handleReport,handleDislike} = props;
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
    <Card  className={classes.card}>
      <CardHeader
      className={classes.cardHeader}
      action={ 
        <Box component="fieldset" mb={3} borderColor="transparent">
        <div className={classes.rating1}>
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
        avatar={
          <Avatar aria-label="recipe" className={user.isOnline === 1 ? classes.avatarON : classes.avatarOF}></Avatar> 
        }
        title={user.firstname +' ' + user.lastname + ' @'+user.username}
        subheader={user.isOnline === 1 ? 'Online' : 'Last seen :' + user.lastSignIn}
      >
      </CardHeader>
      <CardMedia
        className={classes.cardMedia}
        children={
            <ReactIdSwiperCustom {...params}>
                {
          images.length !== 0 ? images.map((tile) =>
            <div key={tile.id}>
              
                <img style={{width: "100%",height:"250px"}} src={`http://localhost:5000/images/${tile.path}`} alt="images"/>
            
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
      <CardActions className={classes.cardAction}>
      {user.like === null &&
          <Tooltip title ="Like"><IconButton aria-label="Like" onClick={(e) => handleLike(user.id)}>
            <FavoriteBorderIcon  color="secondary" />
          </IconButton></Tooltip>
        }
        {user.like === 'iLike' &&
          <Tooltip title ="Unlike"><IconButton aria-label="Unlike" onClick={(e) => handleDislike(user.id)}>
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
        <Tooltip title ="Report"><IconButton aria-label="Report"  onClick={(e) => handleReport(user.id)}>
        <ReportIcon  color="secondary"/>
        </IconButton></Tooltip>
      </CardActions>
    </Card>
  );
}