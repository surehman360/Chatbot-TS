"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/apiRoutes.tsaaaa
const express_1 = __importDefault(require("express"));
const openaiController_1 = require("../controllers/openaiController");
const conversationService_1 = require("../services/conversationService");
const router = express_1.default.Router();
router.post('/give-input', async (req, res) => {
    const userInput = req.body.userInput;
    (0, conversationService_1.addToConversation)('user', userInput);
    try {
        const latestResponse = await (0, openaiController_1.chatToAndFro)(conversationService_1.conversation);
        // Handle the case where the result is not as expected
        if (typeof latestResponse === 'string') {
            (0, conversationService_1.addToConversation)('assistant', latestResponse);
            res.json({ response: latestResponse });
        }
        else {
            res.status(500).json({ response: 'Unexpected result from OpenAI' });
        }
    }
    catch (error) {
        console.error('API Route Error:', error);
        res.status(500).json({ response: `Internal Server Error: ${error.message}`, });
    }
});
router.post('/history', (req, res) => {
    res.json({ history: conversationService_1.conversation });
});
router.post('/clear-array', (req, res) => {
    (0, conversationService_1.clearConversation)();
    res.json({ message: 'Conversation array cleared.' });
});
exports.default = router;
//# sourceMappingURL=apiRoutes.js.map