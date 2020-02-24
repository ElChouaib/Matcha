import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
   root: {
    width: '100%',
    maxWidth: 360,
    position: 'relative',
    overflow: 'auto',
   },
   large: {
     width: 75,
     height: 75,
     margin: 10
   },
}));

export default function Notif(props) {
   const classes = useStyles();
    const {notifList} = props;
   return (
    <>
    <Grid container justify="center">
        <List className={classes.root}>
            <Typography component="h1" variant="h4" align="center" color='primary'>
                Notifications
            </Typography>
            {notifList.length > 0 ? notifList.map((value, index) => (
                <ListItem key={index} button>
                    <ListItemAvatar>
                        <Avatar
                            className={classes.large}
                            alt='Avatar'
                            src={`http://localhost:5000/images/${value.by.profilePic}`}
                        />
                    </ListItemAvatar>
                    <ListItemText>{value.content}</ListItemText>
                </ListItem>
            )) : <p>No notifications</p>}
        </List>
    </Grid>
    </>
    );
}