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