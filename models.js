'use strict';

const mongoose = require('mongoose');

// this is our schema to represent a blogpost
const blogpostSchema = mongoose.Schema({
    title: String,
    content: String,
    author: {
        firstName: String,
        lastName: String
    },
    created:{
        type: Date,
        // `Date.now()` returns the current unix timestamp as a number
        default: Date.now
      }

});

blogpostSchema.virtual("authorName").get(function() {
    return `${this.author.firstName} ${this.author.lastName}`;
});

blogpostSchema.methods.serialize = function() {
    return {
        title: this.title,
        content: this.content,
        author: this.author,
        created: this.created
    };
};

const Blog = mongoose.model("Blog", blogpostSchema);

module.exports = {Blog};