// routes/apiRoutes.tsaaaa
import express from 'express';
import { chatToAndFro } from '../controllers/openaiController';
import { addToConversation, clearConversation, conversation } from '../services/conversationService';

const router = express.Router();

router.post('/give-input', async (req, res) => {
    const userInput: string = req.body.userInput;

    addToConversation('user', userInput);

    try {
        const latestResponse = await chatToAndFro(conversation);

        // Handle the case where the result is not as expected
        if (typeof latestResponse === 'string') {
            addToConversation('assistant', latestResponse);
            res.json({ response: latestResponse });
        } else {
            res.status(500).json({ response: 'Unexpected result from OpenAI'});
        }
    } catch (error) {
        console.error('API Route Error:', error);
        res.status(500).json({ response: `Internal Server Error: ${error.message}`, });
    }
});
router.post('/history', (req, res) => {
    res.json({ history: conversation });
});
router.post('/clear-array', (req, res) => {
    clearConversation();
    res.json({ message: 'Conversation array cleared.' });
});

export default router;
