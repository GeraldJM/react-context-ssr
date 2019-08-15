import { Router } from 'express';
import mongoose, { Schema } from 'mongoose'
import User from '../../models/User';

const userRouter = Router()

userRouter.route('/')

  //  gets full list of users
  .get((req, res) => {
    User.find({}, (err, users) => {
      err ? res.send({
        transaction: 'find all users',
        result: 'failed', 
        error: saveErr
      }) 
      : res.send({
        transaction: 'find all users',
        result: 'success', 
        users: users
      })
    })
  })

  //  adds new user
  .post((req, res) => {
    let newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      isAdmin: req.body.isAdmin,
    });

    newUser.save((saveErr) => {
      saveErr ? res.send({
        transaction: 'add',
        result: 'failed', 
        error: saveErr
      })
      : User.findById(newUser._id, (findErr, user) => {
        findErr ? res.send({
          transaction: 'find user by id',
          result: 'failed', 
          error: findErr
        })
        : res.send({
          transaction: 'find user by id',
          result: 'success', 
          addedUser: user
        })
      });
    })
  });

userRouter.route('/:id')

  //  deletes user
  .delete((req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      err ? res.send({
        transaction: 'delete user',
        result: 'failed', 
        error: err
      })
      : res.send({
        transaction: 'delete user',
        result: 'success', 
        deletedUser: user
      })
    })
  })

  //  updates user
  .put((req, res) => {
    User.findById(req.params.id, (findErr, user) => {
      if(findErr) {
        res.send({
          transaction: 'find user',
          result: 'failed', 
          error: err
        })
      } else {
        let originalId = user._id;
        let props = [];

        User.schema.eachPath(p => props.push(p.toString()));

        for(let p of props) {
          if(p.toString() != '_id' || p.toString() != '__v') {
            if(user[p] != req.body[p]) {
              user[p] = req.body[p];
            }
          }
        }

        user._id = originalId;
        user.save((saveErr, updatedUser) => {
          saveErr ?
            res.send({
              transaction: 'update user',
              result: 'failed',
              error: saveErr
            })
          : res.send({
            transaction: 'update user',
            result: 'success',
            updatedUser
          })
        })
      }
    })
  })

export default userRouter;