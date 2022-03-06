const ChatList = ({ Chats }) => {
  return Chats.map((message) => (
    <section>
      <h3>{message.userName}</h3>
      <p>{message.text}</p>
    </section>
  ));
};

export default ChatList;
