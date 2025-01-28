// script.js

const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined responses for basic questions
const responses = {
  "what is this platform?": "This platform is designed to provide solutions for healthcare, learning, and much more!",
  "how do i register?": "Click on the 'Sign Up' button at the top-right corner to register.",
  "what features are available?": "We offer features like appointment scheduling, educational tools, and a music player.",
  default: "I'm sorry, I didn't understand that. Could you rephrase your question?",
};

// Add a message to the chat
function addMessage(text, sender) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.innerText = text;
  messagesDiv.appendChild(message);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Handle user input and respond
function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    addMessage(userMessage, "user");

    // Bot response
    const botResponse =
      responses[userMessage.toLowerCase()] || responses.default;
    setTimeout(() => addMessage(botResponse, "bot"), 500);

    userInput.value = "";
  }
}

// Add event listeners
sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserInput();
});
