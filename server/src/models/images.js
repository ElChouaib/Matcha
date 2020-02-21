const conn = require('../Config/db_connection');
const queries = require("../Config/queries");
const INSERT = queries.INSERT;
const SELECT = queries.SELECT;
const DELETE = queries.DELETE;
const UPDATE = queries.UPDATE;
module.exports = {
    insertImage : function (value) {
        let isProfilePic = 0;
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetImages, [value.user_id],(errr,ress) => {
                if(ress)
                {
                    if(ress.length == 0)
                    {
                        isProfilePic = 1;

                    }
                    conn.query(INSERT.AddImage, [value.user_id,value.path,isProfilePic],(err,res) => {
                        if(err)
                        {
                            reject(err);
                        } 
                        else
                            resolve(true);
                    }); 
                }
            });  
        })            
    },
    getImages : function (user_id) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetImages, [user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            }); 
        })            
    },
    getProfilPic : function (user_id) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetProfilePic, [user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            }); 
        })            
    },
    delImages : function (data) {
        return new Promise ((resolve, reject) => {
            conn.query(DELETE.delImages, [data.img_id,data.user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    resolve(res);
                }
            }); 
        })            
    },
    setProfilePic : function (data) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.resetProfilePic, [data.user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    conn.query(UPDATE.setProfilePic, [data.img_id,data.user_id],(err,res) => {
                        if(err)
                            reject(err);
                        else
                            resolve(res);
                    }); 
                }
            }); 
        }) 
    },
    setFirstProfilePic : function (data) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.setFirstProPic, [data.user_id],(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    resolve(res);
                }
            }); 
        }) 
    }
};