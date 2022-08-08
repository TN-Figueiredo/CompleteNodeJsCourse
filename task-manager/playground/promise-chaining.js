require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("62f154723be02f1ea2191f28", { age: 1 })
//   .then(() => {
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => console.log(" result", result))
//   .catch((error) => console.log(error));

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("62f154803be02f1ea2191f2a", 2)
  .then((count) => console.log(count))
  .catch((error) => console.log(error));
