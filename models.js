'use strict';

const mongoose = require('mongoose');

// this is our schema to represent a blogpost
const blogpostSchema = mongoose.Schema({
    title: String,
    content: String,
    author: {
        firstName: String,
        lastName: String
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
        created: this._created
    };
};

const Blog = mongoose.model("Blog", blogpostSchema);

module.exports = {Blog};