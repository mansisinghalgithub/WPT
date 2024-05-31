import express from "express";
import { fetchStudentById, fetchStudents, removeStudent, saveStudent, updateStudent } from "../controllers/StudentController.js";


const studentRouter = express.Router();

studentRouter.get('/',fetchStudents);
studentRouter.post('/',saveStudent);
studentRouter.get('/:id',fetchStudentById);
studentRouter.delete('/:id',removeStudent);
studentRouter.put('/:id',updateStudent);

export default studentRouter;