const express = require('express')
const usersModel = require('./usermodel')


exports.GetAllUsers = function()
{
    return new Promise((resolve,reject)=>
    {
        usersModel.find({},function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}
exports.GetUserByID = function(UserID)
{
    return new Promise((resolve,reject)=>
    {
        usersModel.findById(UserID,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
                
            }
        })
    })
}
exports.UpdateUser = function(UserID,UserNewData)
{
    return new Promise((resolve,reject)=>
    {
        usersModel.findByIdAndUpdate(UserID,UserNewData,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {   
                resolve("User Was Updated")
                
            }
        })
    })
}
exports.AddUser = function(newUserData)
{
    return new Promise((resolve,reject)=>
    {
        let newuser = new usersModel({
            name: newUserData.name,
            email: newUserData.email,
            city: newUserData.city,
            street: newUserData.street,
            zipcode: newUserData.zipcode,
            tasks : newUserData.tasks,
            posts : newUserData.posts,
          
        })
        newuser.save(function(err){
            if(err)
            {
                resolve(err)
            }
            else
            {
                resolve('New User Was Create')
            }
        })       
    })
}
exports.DeleteUser = function(UserID)
{
    return new Promise((resolve,reject)=>
    {
        usersModel.findByIdAndDelete(UserID,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("User Was Deleted")
                
            }
        })
    })
}