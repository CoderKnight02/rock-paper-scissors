import { io } from 'socket.io-client';
import React, { useState, useEffect } from "react";
import "./Footer.css";
import rules from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";

const socket = io('http://localhost:3000');


function Footer() {
  const [togglePopup, setTogglePopup] = useState(false);
  const [toggleInvitePopup, setToggleInvitePopup] = useState(false);
  const [invitationLink, setInvitationLink] = useState(false);

  // Function to request an invitation link
  const createInvitation = () => {
    setToggleInvitePopup(true)
    socket.emit('createInvitation');
  };

  // Listen for the generated invitation link
  useEffect(() => {
    socket.on('invitationLink', (link) => {
      setInvitationLink(link);
      setToggleInvitePopup(true); // Open the invite popup when the link is received
    });

    return () => {
      socket.off('invitationLink');
    };
  }, []);

  return (
    <footer className="footer">
      {togglePopup && (
        <div className="popup">
          <div className="popup-content">
            <header className="popup-header">
              <h2>Rules</h2>
              <button onClick={() => setTogglePopup(false)}>
                <img src={close} alt="close"></img>
              </button>
            </header>
            <img src={rules} alt="Rules of the Game"></img>
          </div>
        </div>
      )}

      {/* Invite Popup */}
      {toggleInvitePopup && (
        <div className="popup">
          <div className="popup-content">
            <header className="popup-header">
              <h2>Invite a Friend</h2>
              <button onClick={() => setToggleInvitePopup(false)}>
                <img src={close} alt="close"></img>
              </button>
            </header>
            <p>Here is your invitation link:</p>
            <a href={invitationLink} target="_blank" rel="noopener noreferrer">{invitationLink}</a>
          </div>
        </div>
      )}

      <button className="rules" onClick={() => setTogglePopup(true)}>Rules</button>
      <button className="invite" onClick={createInvitation}>Play With Friend</button>
    </footer>
  );
}

export default Footer;
