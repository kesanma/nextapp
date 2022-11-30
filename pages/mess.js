import {
  MessengerChat,
  showMessenger,
  hideMessenger,
  showDialog,
  hideDialog,
  setMessengerHeight,
} from 'react-messenger-customer-chat';

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          showMessenger(true);
        }}
      >
        show messenger
      </button>
      <button
        onClick={() => {
          hideMessenger();
        }}
      >
        hide messenger
      </button>
      <button
        onClick={() => {
          showDialog();
        }}
      >
        show dialog
      </button>
      <button
        onClick={() => {
          hideDialog();
        }}
      >
        hide dialog
      </button>
      <button
        onclick={() => {
          setMessengerBottomSpacing(100);
        }}
      >
        set chat 100px in bottom spacing
      </button>

      <MessengerChat pageId="123456789101112" />
    </div>
  );
}
