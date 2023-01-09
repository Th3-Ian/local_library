const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  // reference to associated book
  book: { type: Schema.Types.ObjectId, ref: 'Book', required: true },
  name: {
    type: String,
    required: true,
    enum: [
      'fiction',
      'non-fiction',
      'romance',
      'military',
      'history',
      'sci-fi',
      'self-help',
      'cook-book'
    ],
    minLength: 3,
    maxLength: 100
  }
});

GenreSchema.virtual('url').get(function () {
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model('Genre', GenreSchema);
