import Talk from 'talkjs';
import { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    Talk.ready.then(() => {
      // rest of the code goes here
    });
  }, []);
}
const chatboxEl = useRef();

// ...
return (
  <main>
    <div ref={chatboxEl} />
  </main>
);
const chatbox = session.createChatbox();
chatbox.select(conversation);
chatbox.mount(chatboxEl.current);
// ...
<section>
  <button onClick={() => converse(jack)}>// ...</button>
  <button onClick={() => converse(mary)}>// ...</button>
</section>;
useEffect(() => {
  Talk.ready.then(() => {
    const session = new Talk.Session({
      appId: 'tWKLgMns',
      me: currentUser,
    });
  });
}, []);

const currentUser = new Talk.User({
  id: '1632',
  name: 'Kate Smith',
  email: 'katesmith@example.com',
  photoUrl: 'kate.jpeg',
  welcomeMessage: 'Hey there!',
  role: 'default',
});

const conversation = session.getOrCreateConversation(
  Talk.oneOnOneId(currentUser, otherUser)
);
conversation.setParticipant(currentUser);
conversation.setParticipant(otherUser);
function converse(user) {
  Talk.ready.then(() => {
    // ...
    const otherUser = new Talk.User(user);
    // ...
  });
}
const otherUser = new Talk.User({
  id: '1629',
  name: 'Jack White',
  email: 'jackwhite@example.com',
  photoUrl: 'jack.jpeg',
  welcomeMessage: 'Hi, how can I help?',
  role: 'default',
});
// ...
