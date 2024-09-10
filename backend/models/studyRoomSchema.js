const mongoose = require("mongoose");

const studyRoomSchema = new mongoose.Schema({
  roomType: {
    type: String,
    required: true,
    default : "private"
  },
  roomName : {
    type : String,
    required : false
  },
  roomCode : {
    type: String,
    required : true,
    unique : true
  },
  createdOn : {
    type : new Date,
    required : true
  },
  roomOwner : {
    ref : 'User',
    required : true
  },
  
});

module.exports = mongoose.model("study_room", studyRoomSchema);