const studentModel = require('../models/studentSchema')

module.exports = {

    // create students
    createStudent: async (req, res) => {
        try {
            if (!req.body.fName && !req.body.lName && !req.body.studentId && !req.body.studyIn) {
                res.status(400).send({ message: "compelete the required fields" })
            }

            const studentDetails = new studentModel()
            studentDetails.fName = req.body.fName
            studentDetails.lName = req.body.lName
            studentDetails.studentId = req.body.studentId
            studentDetails.studyIn = req.body.studyIn
            console.table({ studentDetails })
            const savedStudentResponse = await studentDetails.save()
            console.log({ savedStudentResponse })
            res.status(200).send({ data: savedStudentResponse })    

        } catch (error) {
            res.status(400).send({ data: savedStudentResponse, message: "unable to proceed you request" })

        }

    },
    //  get all students details
    getStudents: async (req, res) => {
        try {

            const student = await studentModel.find({})
            const studentDetails = student.map((ele, index) => {
                return ({
                    fName: ele.fName,
                    lName: ele.lName,
                    studentId: ele.studentId,
                    createdAt: ele.createdAt,
                    updatedAt: ele.updatedAt

                })
            })
            console.table(studentDetails)
            res.status(200).send({ data: studentDetails })
        } catch (error) {
            res.status(400).send({ message: "Unable to create your request" })

        }

    },
    // update student
    updateStudent: async (req, res) => {
        try {
            if (!req.params.id) {
                res.status(400).send({ message: "Your reqeast are not fullfilled" })
            }
            const updatedStudent = await studentModel.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    fName: req.body.fName,
                    lName: req.body.lName,
                    studentId: req.body.studentId,
                    studyIn: req.body.studyIn,
                    updatedAt: new Date()
                }
            })
            console.log({ updatedStudent })
            res.status(200).send({ data: updatedStudent, message: "updated successfully" })
        } catch (error) {

            res.status(400).send({ message: "Unable to procced your request" })
        }
    },
    // delete student deatail based on id
    deleteStudent: async (req, res) => {

        try {
            console.log("resssss", req.params)
            // return
            if (!req.params.id) {
                res.status(400).send({ message: "Your reqeast are not fullfilled" })
            }
            const updatedStudentDeleted = await studentModel.deleteOne({ _id: req.params.id })
            console.log({ updatedStudentDeleted })
            res.status(200).send({ message: "student data deleted successfully" })
        } catch (error) {
            res.status(400).send({ message: "Unsuccessful request" })

        }
    }
}