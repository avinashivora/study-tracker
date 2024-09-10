const mongoose = require("mongoose");

const studyRoomSchema = new mongoose.Schema({
  privacy: {
    type: String,
    enum: ["public", "private"],
    default: "private"
  },
  attendees: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    userName: {
      type: String
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    }
  }],
  roomName: {
    type: String,
    required: false
  },
  roomCode: {
    type: String,
    required: true,
    unique: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  roomOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  capacity: {
    type: Number,
    required: true,
    default: 10 // can be increased by the user
  },
  chatLink: {
    type: String,
    required: true
  },
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    content: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  expiresAt: {
    type: Date
  },
  joinLogs: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    joinedAt: {
      type: Date,
      default: Date.now
    },
    leftAt: {
      type: Date
    }
  }]
});

studyRoomSchema.index({ roomCode: 1 });

module.exports = mongoose.model("study_room", studyRoomSchema);