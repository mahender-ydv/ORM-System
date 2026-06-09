const distributeCommission = require(
  "../services/commissionService"
);

exports.depositMoney = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    await distributeCommission(
      userId,
      Number(amount)
    );

    res.json({
      message:
        "Deposit successful and commission distributed",
    });
  } catch (err) {
    res.status(500).json(err);
  }
};