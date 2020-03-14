const queries = {
    SELECT : {
        GetUsers:           "SELECT DATE_FORMAT(users.lastSignIn, ' %b %d %Y at %T') as lastSignIn, \
                            id,firstname, lastname, username, gender, sexOrient, bio, age,birthday,rating,isOnline,latitude,longitude FROM users\
                            WHERE id != ? AND \
                            id NOT IN  (SELECT blocked_id FROM blockList  WHERE blocker_id = ?) AND \
                            id NOT IN  (SELECT blocker_id FROM blockList  WHERE blocked_id = ?) AND \
                            id NOT IN  (SELECT reported_id FROM reportList  WHERE reporter_id = ?) \
                            AND confirmed = 1 \
                            AND complete = 3 ",
        GetAllUsers:        "SELECT  DATE_FORMAT(users.lastSignIn, ' %b %d %Y at %T') as lastSignIn, \
                            id,firstname, username, lastname, gender, sexOrient, bio, age,birthday,rating,isOnline,latitude,longitude \
                            FROM users WHERE confirmed = 1 AND complete = 3",
        GetUserByEmail:     "SELECT users.*,DATE_FORMAT(users.birthday,'%Y-%m-%d') as transDate FROM users \
                            WHERE users.email = ?",
        GetUserById:        "SELECT users.*,DATE_FORMAT(users.birthday,'%Y-%m-%d') as transDate FROM users \
                            WHERE users.id = ?",
        GetUserByUsername:  "SELECT users.*,DATE_FORMAT(users.birthday,'%Y-%m-%d') as transDate FROM users \
                            WHERE users.username = ?",
        GetUserByToken:     "SELECT * FROM users WHERE verif_token = ?",
        GetUserByOmni:      "SELECT users.*,DATE_FORMAT(users.birthday,'%Y-%m-%d') as transDate FROM users \
                            WHERE users.omni_id = ?",
        GetImages :         "SELECT * FROM images WHERE user_id = ?",
        GetProfilePic :     "SELECT path FROM images WHERE user_id = ? AND isProfilePic = 1",
        GetInterests:       "SELECT interest FROM interests",
        GetStep:            "SELECT complete FROM users WHERE id = ?",
        CheckInter:         "SELECT COUNT(interest) as n FROM interests WHERE interest IN (?)",
        GetInterId :        "SELECT interest_id FROM interests WHERE interest = ?",
        InterCreatedNbr:    "SELECT COUNT(interest) as n FROM interests WHERE createdBy = ? ",
        getBlockUser :      "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT blocked_id FROM blockList WHERE blocker_id = ?)",
        getLikeUser :       "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT liked_id FROM likesList WHERE liker_id = ?)",
        getLikedBy :        "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT liker_id FROM likesList WHERE liked_id = ?)",
        getViewProfileList: "SELECT id,firstname,lastname FROM users WHERE  id  IN (SELECT viewer FROM viewProfileList WHERE viewed = ?) \
                            AND id NOT IN (SELECT blocked_id FROM blockList WHERE blocker_id = ?)\
                            AND id NOT IN (SELECT blocker_id FROM blockList WHERE blocked_id = ?)",
        getUserLikes:       "SELECT liker_id,liked_id FROM likesList WHERE liker_id=? OR liked_id=?",
        checkBlock:         "SELECT * FROM blockList WHERE (blocker_id = ? OR blocked_id = ?) AND (blocker_id = ? OR blocked_id = ?)",
        checkLike:          "SELECT * FROM likesList WHERE (liker_id = ? AND liked_id = ?)",
        getMatchs:          "SELECT users.id,users.firstname,users.lastname,images.path,users.isOnline FROM users,images \
                            WHERE users.id = images.user_id  AND images.isProfilePic = 1 AND images.user_id IN (?)",
        getMessages:        "SELECT messages.sender,images.path, messages.message FROM images,messages \
                            WHERE images.user_id = messages.sender \
                            AND images.isProfilePic = 1 \
                            AND (messages.sender = ? OR messages.receiver = ?) \
                            AND (messages.sender = ? OR messages.receiver = ?) ORDER BY messages.id ASC",
        GetUserInter:       "SELECT interest FROM interests INNER JOIN usersInterests ON interests.interest_id = usersInterests.iId \
                            WHERE usersInterests.uId = ?",
        CheckEditUsername:  "SELECT username from users where username = ? AND id != ?",
        CheckEditEmail:     "SELECT email from users where email = ? AND id != ?",
        getNotif:           "SELECT users.id, users.username, content, seen, type FROM notifications,users \
                            WHERE notifications.receiver = ? AND users.id = notifications.by ORDER BY notifications.id DESC",
    },
    INSERT : {
        AddImage:           'INSERT INTO images (user_id, path,isProfilePic) VALUES (?, ?, ?)',
        AddUser:            'INSERT INTO users (lastname, firstname, username, email, password,omni_id) VALUES (?, ?, ?, ?, ?,?)',
        CreateInterest:     "INSERT INTO interests (interest, createdBy) VALUES (?, ?)",
        InsertUserInter:    "INSERT INTO usersInterests (uId, iId) VALUES (?, ?)",
        blockUser :         "INSERT INTO blockList (blocker_id, blocked_id,date) VALUES (?, ?, NOW())",
        likeUser :          "INSERT INTO likesList (liker_id, liked_id, date) VALUES (?, ?, NOW())",
        reportUser :        "INSERT INTO reportList (reporter_id, reported_id,date) VALUES (?, ?, NOW())",
        viewProfileUser :   "INSERT INTO viewProfileList (viewer, viewed, date) VALUES (?,?,NOW())",
        insertMessage:      "INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)",
        insertNotif:        "INSERT INTO notifications (`by`, receiver, content, seen, type) VALUES (?, ?, ?, ?, ?)",
    },
    UPDATE : {
        Update:             'UPDATE users SET name = ?, email = ?, sex = ? WHERE id = ?',
        UpdateToken:        'UPDATE users SET verif_token = ? WHERE email = ?',
        ResetPassword:      'UPDATE users SET password = ? WHERE verif_token = ?',
        Confirmed:          'UPDATE users SET confirmed = 1 WHERE email = ?',
        notConfirmed:       'UPDATE users SET confirmed = 0 WHERE email = ?',
        UpdateInfo:         "UPDATE users SET gender = ?, sexOrient = ?, birthday = ?, age = ?, bio = ? WHERE id = ?",
        UpdateProfile:      "UPDATE users SET firstname = ?, lastname = ?, username = ?, email = ?, gender = ?, birthday = ?, age = ?, sexOrient = ?, bio = ? \
                            WHERE id = ?",
        UpdatePassword:     "UPDATE users SET password = ? WHERE id = ?",
        UpdateOnline:       "UPDATE users SET isOnline = 1 ,lastSignIn = null WHERE id = ?",
        UpdateOffline:      "UPDATE users SET isOnline = 0 ,lastSignIn = NOW() WHERE id = ?",
        UpdateStep:         "UPDATE users SET complete = ? WHERE id = ?",
        UpdateLocation:     "UPDATE users SET latitude = ? , longitude = ? WHERE id = ?",
        setProfilePic:      'UPDATE images SET IsProfilePic = 1 WHERE id = ? && user_id = ?',
        resetProfilePic :   'UPDATE images SET isProfilePic = 0 WHERE user_id = ?',
        setFirstProPic :    'UPDATE  images SET isProfilePic = 1 WHERE user_id = ? ORDER BY id ASC LIMIT 1',
        updateRating :      'UPDATE users SET rating = rating  + ?  WHERE id = ? AND rating < 5 AND rating > 0',
        openNotif:          'UPDATE notifications SET seen = 1',
    },
    DELETE : {
        delImages :         'DELETE FROM `images` WHERE id = ? && user_id = ?',
        DeleteUserInter:    "DELETE FROM `usersInterests` WHERE uId = ?",
        deblockUser :       "DELETE FROM blockList WHERE blocker_id = ? AND blocked_id = ?",
        dislikeUser :       "DELETE FROM likesList WHERE liker_id = ? AND liked_id = ?",
    },
}

module.exports = queries;