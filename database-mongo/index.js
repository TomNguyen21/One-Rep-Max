var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var workOutLogs = mongoose.Schema({
  date: String,
  weight: Number,
  reps: Number,
});

var Workouts = mongoose.model('Workouts', workOutLogs);

var selectAll = function(callback) {
  Workouts.find({}, function(err, logs) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, logs);
    }
  });
};

module.exports.selectAll = selectAll;