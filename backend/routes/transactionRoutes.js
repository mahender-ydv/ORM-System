const router = require("express").Router();

const {
  depositMoney,
} = require(
  "../controllers/transactionController"
);

router.post("/deposit", depositMoney);

module.exports = router;