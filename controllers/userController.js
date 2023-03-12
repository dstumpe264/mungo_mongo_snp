const { Object } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
    // Get all Users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,

                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Get a single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) => 
                !user
                    ? res.status(404).json({ message: 'No user with the ID' })
                    :res.json({
                        user,

                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })
    },

    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // Delete a user and remove thoughts and reactions
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
            !user
            ? res.status(404).json({ message: 'No such user exists' })
            : res.json({ message: 'Student successfully deleted' })
            
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
}