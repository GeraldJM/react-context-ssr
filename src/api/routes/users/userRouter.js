import { Router } from 'express';
import mongoose, { Schema } from 'mongoose'
import User from '../../models/User';

const userRouter = Router()

userRouter.route('/')
  .get((req, res) => {
    User.find({}, (err, users) => err ? res.send(err) : res.send(users))
  })
  .post((req, res) => {
    let newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      isAdmin: req.body.isAdmin,
    })

    newUser.save((err) => {
      if (err) {
        res.send(err)
      }

      User.findOne({_id: newUser._id}, (err, user) => {
        if(err) {
          res.send(err)
        };
        res.send({
          status: 'success',
          addedUser: user
        });
      });
    })
  });

userRouter.route('/admins')
  .get((req, res) => {
    User.find({isAdmin: true}, (err, users) => err ? res.send(err) : res.send(users))
  })

export default userRouter;