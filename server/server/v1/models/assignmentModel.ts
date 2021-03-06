import Mongoose, { metaData } from './meta';

const AutoIncrement = require('mongoose-sequence')(Mongoose);

const questionSchema = new Mongoose.Schema({
  // 문제 id
  questionId: Number,
  // 문제 내용
  questionContent: String,
  // 배점
  fullScore: Number,
});
const assignmentSchema = new Mongoose.Schema({
  // 과제 id
  assignmentId: {
    type: Number,
    unique: true,
  },
  // 교수 번호
  professorNumber: Number,
  // 학생 목록
  students: [Number],
  // 과제 이름
  assignmentName: String,
  // 과제 정보
  assignmentInfo: String,
  // 과제 상태
  assignmentState: Number,
  // 발행 날짜
  publishingTime: Date,
  // 마감 날짜
  deadline: Date,
  questions: [questionSchema],
  meta: metaData,
});

assignmentSchema.plugin(AutoIncrement, { inc_field: 'assignmentId' });
exports.AssignmentModel = Mongoose.model('Assignment', assignmentSchema);
