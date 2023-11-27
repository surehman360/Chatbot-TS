"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chatToAndFro = exports.openai = void 0;
// controllers/openaiController.ts
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({ apiKey: "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" });
exports.openai = openai;
async function chatToAndFro(messages) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
        });
        // Extract the relevant information from the completion
        const latestResponse = completion.choices[0].message.content;
        return latestResponse;
    }
    catch (error) {
        // Log the error and return an error response
        console.error('Error:', error.message);
        return { response: 'An error occurred.', timeTaken: 0 };
    }
}
exports.chatToAndFro = chatToAndFro;
//# sourceMappingURL=openaiController.js.map