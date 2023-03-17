import React, { useState } from "react";
import "./MessageBox.css";
const MessageBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };
  return (
    <div className="msgbox">
        <div className="hes">
            <h3>send message</h3>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="frm">
          <label>
            Name:
            <input
              className="inpr"
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="frm">
          <label>Email:</label>
          <input
            className="inpr"
            placeholder="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="frm">
          <label>Message:</label>
          <textarea
            className="inpr t"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="frm">
          <button className="btn " type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default MessageBox;
