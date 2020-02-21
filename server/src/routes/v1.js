const express = require('express');
const router = express.Router();
const checkToken = require('../controllers/functions/checkToken');

const getOptions = require('../controllers/functions/getOptions');
const createOption = require('../controllers/functions/createOption');
const getActiveStep = require('../controllers/functions/getActiveStep');
const addInfo = require('../controllers/addInfo')
const getImages = require('../controllers/functions/getImages');
const deleteImages = require('../controllers/functions/delImages');
const setProfilePicture = require ('../controllers/functions/setProfilePicture')
const updateStep = require('../controllers/functions/updateStep');
const getLocation = require('../controllers/functions/getLocation');
const addLocation = require('../controllers/functions/addLocation');
const logout = require('../controllers/functions/logout');
const getUsers = require('../controllers/functions/getUsers');
const blockUser = require('../controllers/functions/blockUser');
const deblockUser = require('../controllers/functions/deblockUser');
const likeUser = require('../controllers/functions/likeUser');
const reportUser = require('../controllers/functions/reportUser');
const viewProfileUser = require('../controllers/functions/viewProfileUser');
const getBlockUser = require('../controllers/functions/getBlockUser');
const getLikeUser = require('../controllers/functions/getLikeUser');
const getMatchedUsers = require('../controllers/chat/matchs');
const loadMessages = require('../controllers/chat/loadMessages');
const sendMessages = require('../controllers/chat/sendMessage');
const editProfile = require('../controllers/editProfile');
const dislikeUser = require('../controllers/functions/dislikeUser');
const sortUsers = require('../controllers/functions/sortUsers');
const getNotif = require('../controllers/notif/getNotif');
const openNotif = require('../controllers/notif/openNotif');
const getViewProfileList = require('../controllers/functions/getViewProfileList');
const getLikedByList = require('../controllers/functions/getLikedBy');

router.use(async function (req,res,next) {
    const token = req.headers.authorization;
    if(token !== 'undefined')
    {
        const isValid = await checkToken(token);
        if(isValid)
            next();
        else
            console.log('Token is invalid'); 
    }else
        console.log('token is undefined')
    
})

router.post('/getOptions', getOptions);
router.post('/createOption', createOption);
router.post('/getActiveStep', getActiveStep);
router.post('/addInfo', addInfo);
router.post('/getImages',getImages);
router.post('/deleteImages',deleteImages);
router.post('/setProfilePicture',setProfilePicture);
router.post('/updateStep',updateStep);
router.post('/getLocation', getLocation);
router.post('/addLocation', addLocation);
router.post('/logout', logout);
router.post('/getUsers',getUsers);
router.post('/blockUser',blockUser);
router.post('/deblockUser',deblockUser);
router.post('/likeUser',likeUser);
router.post('/dislikeUser',dislikeUser);
router.post('/reportUser',reportUser);
router.post('/viewProfileUser',viewProfileUser);
router.post('/getBlockUser',getBlockUser);
router.post('/getViewProfileList',getViewProfileList);
router.post('/editProfile', editProfile);
router.post('/getLikeUser',getLikeUser);
router.post('/getMatchs', getMatchedUsers);
router.post('/loadMessages', loadMessages);
router.post('/sendMessage', sendMessages);
router.post('/sortUsers', sortUsers);
router.post('/getNotif', getNotif);
router.post('/openNotif', openNotif);
router.post('/getLikedByList', getLikedByList);

module.exports = router;