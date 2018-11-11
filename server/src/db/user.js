const connect = require('./connect');

const tableExists = (callback) => {
	callback();
}


const cleanup = (callback) => {
	callback();
}


const setup = (callback) => {
	callback();
}

module.exports = {
	tableExists, cleanup, setup
};