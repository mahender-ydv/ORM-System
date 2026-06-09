const User = require("../models/User");
const Transaction = require("../models/Transaction");

const percentages = [5, 4, 3, 2, 1];

const distributeCommission = async (
  userId,
  amount
) => {
  const user = await User.findById(userId);

  user.wallet += amount;

  await user.save();

  await Transaction.create({
    receiver: user._id,
    sourceUser: user._id,
    amount,
    level: 0,
    commissionPercentage: 100,
    type: "DEPOSIT",
  });

  let parentId = user.parent;

  let level = 0;

  while (parentId && level < 5) {
    const parent = await User.findById(
      parentId
    );

    const commission =
      (amount * percentages[level]) / 100;

    parent.wallet += commission;

    await parent.save();

    await Transaction.create({
      receiver: parent._id,
      sourceUser: user._id,
      amount: commission,
      level: level + 1,
      commissionPercentage:
        percentages[level],
      type: "COMMISSION",
    });

    parentId = parent.parent;

    level++;
  }
};

module.exports = distributeCommission;