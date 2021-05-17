const asyncHandler = require("express-async-handler");

const accessChat = asyncHandler(async (req, res) => {
  const {} = req.body;

  res.send("create chat");
});

module.exports = { accessChat };
