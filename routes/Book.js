const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

router.route('/').post(async (req, res) => {
	const book = await Book.create(req.body);
	res.status(201).json({ book });
});
router.route('/').get(async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json(books);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
router.route('/:id').get(async (req, res) => {
	try {
		const book = await Book.findOne({ _id: req.params.id });
		res.status(200).json(book);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
router.route('/:id').put(async (req, res) => {
	try {
		const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
			new: true,
			runValidators: true,
		});
		if (!book) {
			res.status(404).json({ message: 'can not find the book' });
		}
		res.status(200).json(book);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
router.route('/:id').delete(async (req, res) => {
	try {
		const book = await Book.findOneAndDelete({ _id: req.params.id });
		if (!book) res.status(404).json({ message: 'can not find the book' });

		res.status(200).json({ message: 'the book was deleted' });
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
});
module.exports = router;
