const asyncHandler = require("express-async-handler");

//@description     Create New Message
//@route           POST /api/Message/
//@access          Public
const sendMessage = asyncHandler(async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };
});

module.exports = { sendMessage };
