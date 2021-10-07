import "./App.css";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import React, { useState } from "react";
import { database } from "./firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <div>{user ? <Chat /> : <SignIn />}</div>
    </div>
  );
}

function Chat() {
  // const dummy = useRef();

  const messagesRef = database.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(50);
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

    setFormValue("");

    // dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App crt">
      {messages &&
        messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      <footer>
        <label>{auth.currentUser.displayName}@terminal-chat &gt;</label>
        <form onSubmit={sendMessage}>
          <input
            className="crt"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
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
        {displayName[0].toLowerCase()}: {text}
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
