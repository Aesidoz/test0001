const { User, Todo } = require("../models");
const createError = require("../utils/createError");

exports.createTodo = async (req, res, next) => {
  try {
    const { title, completed, dueDate, userId } = req.body;
    const user = await User.findOne({ where: { id: userId ?? 0 } });
    if (!user) {
      createError("User not foun", 400);
    }

    const todo = await Todo.create({ title, completed, dueDate, userId });
    res.status(201).json({ todo });
  } catch (err) {
    next(err);
  }
};
