const conn = require('../Config/db_connection');
const queries = require("../Config/queries");
var jwt = require('jsonwebtoken');
const SELECT = queries.SELECT;
const INSERT = queries.INSERT;
const UPDATE = queries.UPDATE;
const DELETE = queries.DELETE;

module.exports = {
    Register :function  (lastname, firstname, username, email, password,omni_id) {
        conn.query(INSERT.AddUser, [lastname, firstname, username, email, password,omni_id],(err,res) => {
            if(err)
            {
                throw err;
            }
        });
    },
    getUsers: function (id) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetUsers, [id,id,id,id], (err,res) => {
                if(err)
                    reject(err);
                else
                {
                    resolve(JSON.parse(JSON.stringify(res)));
                }
            });
        })
    },
    getUser:  function  (type, value) {
        return new Promise ( (resolve, reject) =>  {
             conn.query(SELECT[type], value,(err,res) => {
                if(err)
                    reject(err);
                else
                {
                    const data = JSON.parse(JSON.stringify(res))[0];
                    
                    if(data)
                    {
                       this.getUserInterests(data.id)
                        .then(async (response) => {
                            interests  = response;
                            data.birthday = data.transDate;
                            data.interests = interests;
                            let token = await jwt.sign(data, 'MyChouaibKEY');
                            data.token = token;
                            resolve(data);
                        }).catch((error)  => {console.log(error)})
                    }else
                    {
                        resolve(null)
                    }
                }
            });
        })
    },
    update: function (type, value){
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE[type], value,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (JSON.parse(JSON.stringify(res)));
            });
        })
    },
    insert: function (type, value){
        return new Promise ((resolve, reject) => {
            conn.query(INSERT[type], value,(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            });
        })
    },
    select: function (type, value){
        return new Promise ((resolve, reject) => {
            conn.query(SELECT[type], value,(err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(JSON.stringify(res)));
            });
        })
    },
    delete: function (type, value){
        return new Promise ((resolve, reject) => {
            conn.query(DELETE[type], value,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (JSON.parse(JSON.stringify(res)));
            });
        })
    },
    ResetPassword : function (password, token) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.ResetPassword, [password, token],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res);
            });
        })
    },
    UpdateVerifToken : function (email, token) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.UpdateToken, [token, email],(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res);
            });
        })
    },
    Confirmed: function (email){
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.Confirmed, email,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res);
            });
        })
    },
    notConfirmed: function (email){
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.notConfirmed, email,(err,res) => {
                if(err)
                    reject (err);
                else
                    resolve (res);
            });
        })
    },

    getOptions: function () {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetInterests,(err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },
    createOption: function (option, id) {
        return new Promise ((resolve, reject) => {
            conn.query(INSERT.CreateInterest, [option, id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
    InterCreatedNbr: function (id) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.InterCreatedNbr, [id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },
    getStep: function (id) {
        //mabkinach khedmain biha////
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetStep, [id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
    getUserInterests : function (id) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetUserInter, [id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    let options = [];
                    Object.keys(resArray).forEach(function()
                    {
                        for (var i = 0; i < resArray.length; i++) {
                            options[i] = {
                                value: resArray[i].interest,
                                label: resArray[i].interest,
                            };
                        }
                    });
                    if(options.length > 0)
                        resolve(options);
                    else
                        resolve(null);
                }
            });
        })
    },
    checkInterests: function (inter) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.CheckInter, [inter], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },
    updateInfo: function (gender, sexOrient, birthday, age, bio, id) {
        return new Promise ((resolve, reject) => {
            conn.query(UPDATE.UpdateInfo, [gender, sexOrient, birthday, age, bio, id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
    getInterId : function (inter) {
        return new Promise ((resolve, reject) => {
            conn.query(SELECT.GetInterId, [inter], (err,res) => {
                if(err)
                    reject(err);
                else{
                    const resArray = JSON.parse(JSON.stringify(res))
                    resolve(resArray);
                }
            });
        })
    },
    insertUserInter: function (id, inter) {
        return new Promise ((resolve, reject) => {
            conn.query(INSERT.InsertUserInter, [id, inter], (err,res) => {
                if(err)
                    reject(err);
                else
                    resolve(res);
            });
        })
    },
    deleteUserInter: function (id) {
        return new Promise ((resolve, reject) => {
            conn.query(DELETE.DeleteUserInter, [id], (err,res) => {
                if(err)
                    reject(err);
                else{
                    resolve(res);
                }
            });
        })
    },
};