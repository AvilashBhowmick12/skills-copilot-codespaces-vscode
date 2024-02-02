// Import necessary modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Handle requests
router.get('/', commentController.comment_list); // List all comments
router.get('/create', commentController.comment_create_get); // Show form to create a comment

// You might also want to handle POST requests to create a comment
router.post('/create', commentController.comment_create_post); // Create a comment

// And maybe routes for updating and deleting comments
router.get('/:id/update', commentController.comment_update_get); // Show form to update a comment
router.post('/:id/update', commentController.comment_update_post); // Update a comment
router.get('/:id/delete', commentController.comment_delete_get); // Confirm deletion of a comment
router.post('/:id/delete', commentController.comment_delete_post); // Delete a comment

module.exports = router;
