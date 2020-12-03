const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const topicController = require("../controllers/topicController");

const auth = require("../middleware/auth");

router.post("/", auth, catchErrors(topicController.createTopic));
router.get("/", auth, catchErrors(topicController.getAllTopics));
module.exports = router;