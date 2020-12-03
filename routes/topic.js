const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const {
    userInfo,
    allChats,
    chatConvo,
    newChategories,
    chategorySearchResults,
    chategoryTopics,
    recentSearch,
    profileChategory,
    userUpdate,
    chatMessage,
    addChategory,
    addTopic,
    newChat,
} = require("../controllers/topicController");

const auth = require("../middleware/auth");

// routes user to home page - userInfo will get user name, profile pic, profile chategores, and profile posts
router.get("/", auth, catchErrors(userInfo));

// get other user's profile info
router.get("/api/userdata/:id", auth, catchErrors(userInfo));

// get all logged in user's chats
router.get('/api/userchats', auth, catchErrors(allChats));

// get all messages by topic & user
router.get('/api/userchats/:id', auth, catchErrors(chatConvo));

// get all newly added Chategories
router.get('/api/newchategories', auth, catchErrors(newChategories));

// get all Chategories that match the search input
router.get('/api/allchategories/:searchtext', auth, catchErrors(chategorySearchResults));

// get all topics within one Chategory
router.get('/api/chategorytopics', auth, catchErrors(chategoryTopics));

// add recently submitted searches to recent search history
router.put('/api/recentsearch/:searchtext', auth, catchErrors(recentSearch));

// add Chategory to User profile
router.put('/api/profileChategory', auth, catchErrors(profileChategory));

// update user bio, profile pic, or user name
router.put('/api/userdata', auth, catchErrors(userUpdate));

// add message to chat convo
router.put('/api/chatmessage/:id', auth, catchErrors(chatMessage));

// create new chategory with topic
router.post('/api/newChategory', auth, catchErrors(addChategory));

// create new topic within existing chategory
router.post('/api/newtopic', auth, catchErrors(addTopic));

// create new chat convo with topic and user
router.post('/api/newchat/:id', auth, catchErrors(newChat));

module.exports = router;