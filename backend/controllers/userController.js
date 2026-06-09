const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    const { name, parentId } = req.body;

    console.log("Hello req received")
    let level = 1;

    if (parentId) {
      const parent =
        await User.findById(parentId);

      level = parent.level + 1;
    }

    const user = await User.create({
      name,
      parent: parentId || null,
      level,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find().populate(
    "parent"
  );

  res.json(users);
};