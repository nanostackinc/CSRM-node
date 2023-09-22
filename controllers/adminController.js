const dataStudent = require("../json/data.json");

const viewStudent = async (req, res) => {
  // Membuat objek data yang akan dikirimkan ke tampilan
  //   console.log(dataStudent);
  const student = dataStudent.students;
  // Mengirimkan data ke tampilan
  res.render("admin/list-student/view_student", {
    student,
  });
};

module.exports = {
  viewStudent,
};
