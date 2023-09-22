const viewStudent = async (req, res) => {
  // Membuat objek data yang akan dikirimkan ke tampilan

  // Mengirimkan data ke tampilan
  res.render("admin/list-student/view_listStudent");
};

module.exports = {
  viewStudent,
};
