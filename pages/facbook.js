import React from 'react';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <MessengerCustomerChat
    pageId="110501698558413"
    appId="692692862512802"
    htmlRef="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js"
  />,
  document.getElementById('demo')
);
