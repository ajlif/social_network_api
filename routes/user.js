const express = require('express');

const { userById , allUsers, getUser, updateUser, deleteUser, userPhoto, addFollowing, addFollower, removeFollowing, removeFollower,findPeople}  = require('../controllers/user');
const { requireSignin }  = require('../controllers/auth'); // apply as a mideelware in the router to verify sign in

const router = express.Router();

router.put('/user/follow',requireSignin, addFollowing, addFollower);
router.put('/user/unfollow',requireSignin, removeFollowing, removeFollower);

router.get('/users', allUsers);
router.get('/user/:userId',requireSignin, getUser); // anything captured after the / is : userId
router.put('/user/:userId',requireSignin, updateUser); //put : used to update
router.delete('/user/:userId',requireSignin, deleteUser);

//photos upload: i create a separate route to upload
router.get("/user/photo/:userId", userPhoto);

// who to follow
router.get('/user/findpeople/:userId',requireSignin, findPeople);

// any incoming request :(route containing userId) (example to enter to a person profile) ,
// userById will be executed the first
router.param("userId", userById);

module.exports = router;
