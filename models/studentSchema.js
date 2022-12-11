// Exercise-3
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentScheam = new Schema({

    fName: {
        type: String,
        require: true
    },
    lName: {
        type: String,
        require: true
    },
    studentId: {
        type: String
    },
    studyIn: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

// Indexes
studentScheam.index({ stdeuntID: 1 });


module.exports = studentModel = mongoose.model('studentScheam', studentScheam)


