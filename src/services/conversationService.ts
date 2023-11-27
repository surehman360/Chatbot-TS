// services/conversationService.ts
let conversation= [{ role: 'system', content: 'You are a helpful assistant.' }];

function addToConversation(role: string, content: string) {
  conversation.push({ role, content });
}

function clearConversation() {
  conversation = [{ role: 'system', content: 'You are a helpful assistant.' }];
}

export { conversation, addToConversation, clearConversation };
