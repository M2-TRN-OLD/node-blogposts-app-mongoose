'use strict';

exports.DATABASE_URL = 
  process.env.DATABASE_URL || 'mongodb://localhost/node-blogposts-app-mongoose/data';
exports.PORT = process.env.PORT || 8080;