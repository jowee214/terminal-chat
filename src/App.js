import "./App.css";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import React, { useState, useRef } from "react";
import { database } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Helmet } from "react-helmet";

function App() {
  const [user] = useAuthState(auth);
  let username = user
    ? auth.currentUser.displayName.split(" ")[0].toLowerCase()
    : "unknown";
  return (
    <div className="App">
      <header>
        <Helmet>
          <title>terminal chat</title>
          <title>{username}@terminal-chat</title>
          <link
            rel="canonical"
            href="https://val8119.github.io/terminal-chat/"
          />
          <meta name="description" content="Terminal style chat room" />
          <meta
            name="keywords"
            content="React, Firebase, Chatroom, Chat, Terminal"
          />
          <meta name="author" content="val8119" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <meta name="description" content="Terminal style chat room" />

          <meta itemprop="name" content="terminal chat" />
          <meta itemprop="description" content="Terminal style chat room" />
          <meta
            itemprop="image"
            content="https://raw.githubusercontent.com/val8119/terminal-chat/master/etc/thumb.png"
          />

          <meta
            property="og:url"
            content="https://val8119.github.io/terminal-chat"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="terminal chat" />
          <meta property="og:description" content="Terminal style chat room" />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/val8119/terminal-chat/master/etc/thumb.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="terminal chat" />
          <meta name="twitter:description" content="Terminal style chat room" />
          <meta
            name="twitter:image"
            content="https://raw.githubusercontent.com/val8119/terminal-chat/master/etc/thumb.png"
          />
        </Helmet>
      </header>
      <div>{user ? <Chat /> : <SignIn />}</div>
    </div>
  );
}

function Chat() {
  const dummy = useRef();

  const messagesRef = database.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(75);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      displayName,
      uid,
    });
    // dummy.current.scrollIntoView({ behavior: "smooth" });
    setFormValue("");
  };

  return (
    <div className="App crt">
      <div className="ChatBox">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </div>
      <footer>
        <label>
          {auth.currentUser.displayName.split(" ")[0].toLowerCase()}
          @terminal-chat &gt;
        </label>
        <form onSubmit={sendMessage}>
          <input
            className="crt"
            id="TextBox"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            autofocus="true"
          ></input>
        </form>
        <button className="crt" onClick={() => auth.signOut()}>
          SIGN OUT
        </button>
      </footer>
    </div>
  );
}

function ChatMessage(props) {
  const { text, uid, displayName } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <p>
        {displayName.split(" ")[0].toLowerCase()}: {text}
      </p>
    </div>
  );
}

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <div className="SignIn crt">
      <button className="crt" onClick={signInWithGoogle}>
        SIGN IN
      </button>
    </div>
  );
}

export default App;

/*
<div className="App crt">
      <div className="message received">
        <p>user1: hello</p>
      </div>
      <div className="message received">
        <p>monkey69: hi</p>
      </div>
      <div className="message sent">
        <p>val: heyo</p>
      </div>
      <div className="message received">
        <p>helloworld: test</p>
      </div>
      <footer>
        <label>val@terminal-chat &gt; </label>
        <input className="crt"></input>
        <button className="crt">SIGN OUT</button>
      </footer>
    </div>
*/
