require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("62f12b1e1a949dd5e727557b")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed: false });
};

deleteTaskAndCount("62f14eae2309f0e595ef3cdd")
  .then((count) => console.log(count))
  .catch((error) => console.log(error));
