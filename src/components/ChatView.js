import ChatList from './ChatList';
import Data from '../fake-chats.json';

const ChatView = () => {
  return (
    <div>
      <h1>This is our Chat containers</h1>
      <ChatList Chats={Data.chats} />
    </div>
  );
};

export default ChatView;
