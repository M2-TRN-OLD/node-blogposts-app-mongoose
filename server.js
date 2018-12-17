'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise - global.Promise;

//config.js is where we control constanct for entire app:  PORT, DATABASE_URL
const {PORT, DATABASE_URL} = require('./config');
const {Blog} = require('./models');