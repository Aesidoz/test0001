const { sequelize, User } = require("./models");

// sequelize.sync({ force: true });

const run = async () => {
  try {
    const user = await User.create({
      username: "yahoo",
      password: "123456 ",
      email: "asd@gmail.com",
    });
  } catch (err) {
    console.log(err);
  }
};

run();
