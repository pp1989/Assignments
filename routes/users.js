var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// Exercise-1
router.get('/filereader', require('../controller/fileReder').fileReaderMethod)
// Exercise-2
router.get('/user', require('../controller/fileReder').getUser)


// Exercise-3
router.get('/get-students', require('../controller/studentsService').getStudents)
router.post('/create-student', require('../controller/studentsService').createStudent)
router.put('/update-student/:id', require('../controller/studentsService').updateStudent)
router.delete('/delete-student/:id', require('../controller/studentsService').deleteStudent)



module.exports = router;
