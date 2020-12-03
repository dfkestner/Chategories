const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const chatroomController = require("../controllers/chatroomController");

const auth = require("../middleware/auth");

router.post("/", auth, catchErrors(chatroomController.createChatroom));
router.get("/", auth, catchErrors(chatroomController.getAllChatrooms));
module.exports = router;