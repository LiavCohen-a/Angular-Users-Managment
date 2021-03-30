const usersBL = require('../models/usersBL');
const express = require('express');
const { json } = require('express');
const router = express.Router();


router.route('/').get(async function(req,resp)
    {
        let data = await usersBL.GetAllUsers()
        return resp.json(data)
    })
router.route('/:id').get(async function(req,resp)
    {
        let userID = req.params.id;
        let data = await usersBL.GetUserByID(userID)
        return resp.json(data)
    })
router.route('/').post(async function(req,resp)
    {
        let newUserData = req.body;
        let data = await usersBL.AddUser(newUserData)
        return resp.json(data)
    })
router.route('/:id').put(async function(req,resp)
    {
        let userID = req.params.id;
        let newUserData = req.body;
        let data = await usersBL.UpdateUser(userID,newUserData)
        return resp.json(data)
    })
router.route('/:id').delete(async function(req,resp)
    {
        let userID = req.params.id;
        let data = await usersBL.DeleteUser(userID)
        return resp.json(data)
    })
module.exports = router;