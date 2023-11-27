"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearConversation = exports.addToConversation = exports.conversation = void 0;
// services/conversationService.ts
let conversation = [{ role: 'system', content: 'You are a helpful assistant.' }];
exports.conversation = conversation;
function addToConversation(role, content) {
    conversation.push({ role, content });
}
exports.addToConversation = addToConversation;
function clearConversation() {
    exports.conversation = conversation = [{ role: 'system', content: 'You are a helpful assistant.' }];
}
exports.clearConversation = clearConversation;
//# sourceMappingURL=conversationService.js.map