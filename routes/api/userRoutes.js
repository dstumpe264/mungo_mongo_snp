const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../../controllers/userController');

// /api/users
router
    .route('/')
    .get(getUsers)
    .post(createUser);

// /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser)
    .put(updateUser);

// // /api/users/:userId/
// router.route('/:userId/assignments').post(addAssignment);

// // /api/users/:userId/assignments/:assignmentId
// router.route('/:UserId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
