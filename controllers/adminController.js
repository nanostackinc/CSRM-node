const dataStudent = require("../json/data.json");

const viewStudent = async (req, res) => {
  const relationData = dataStudent.relation;
  const student = dataStudent.students;
  // Mengirimkan data ke tampilan
  // console.log(relationData);
  res.render("admin/list-student/view_student", {
    student,
    relationData,
  });
};

const viewDashboard = async (req, res) => {
  res.render("admin/dashboard/view_dashboard");
};
const viewLaporan = async (req, res) => {
  res.render("error");
};

module.exports = {
  viewStudent,
  viewDashboard,
  viewLaporan,
};
