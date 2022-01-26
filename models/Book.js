const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'must provide name'],
		trim: true,
		maxlength: [45, 'name can not be more than 45 characters'],
	},
	author: {
		type: String,
		required: true,
	},
	pageCount: {
		type: Number,
		required: true,
	},
	publishingDate: {
		type: String,
		required: true,
	},
	printingNumber: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		trim: true,
	},
});
module.exports = mongoose.model('Book', BookSchema);
