import React, { useState, useContext } from "react";
import "./Footer.css";
import rules from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";
import { MyContext } from "../../Context/ScoreProvider"; // Use MyContext instead
import CopyLink from '../CopyLink/CopyLink.js'
function Footer() {
  // States
  const [togglePopup, setTogglePopup] = useState(false);
  // const [toggleInvitePopup, setToggleInvitePopup] = useState(false)

  // From Context
  const { playComputer, setPlayComputer, navigate, setInvitationLink, toggleInvitePopup,
    setToggleInvitePopup, room, socket } = useContext(MyContext); // Use MyContext here

  const createInvitation = () => {
    setPlayComputer(prev => {
      const newPlayComputer = !prev;

      if (newPlayComputer) {
        // Navigate and hide invite popup when playComputer is set to true
        socket.emit('leave-room', room);
        navigate('/');
        setToggleInvitePopup(false);
      } else {
        // Ensure socket is defined before emitting
        if (socket && socket.connected) {
          socket.emit('create-room', (err, roomId) => {
            if (!err) {
              const invitationLink = `${window.location.origin}/#${window.location.pathname}/play/${roomId}`;
              setInvitationLink(invitationLink);
              navigate(`/play/${roomId}`);
            } else {
              setToggleInvitePopup(false);
              navigate('/');
              return true
            }
          });
          // Show invite popup after emitting
          setToggleInvitePopup(true);
        } else {
          setToggleInvitePopup(false);
          console.error('Socket is not initialized');
          alert('Sorry an error ocurred on our end, please try again later')
          navigate('/')
          return true;
        }
      }

      // Return new state
      return newPlayComputer;
    });
  };


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
      {toggleInvitePopup && (
        <div className="popup">
          <div className="popup-content">
            <header className="popup-header">
              <h2>wait for your friend to connect</h2>
              <button onClick={() => setToggleInvitePopup(false)}>
                <img src={close} alt="close"></img>
              </button>
            </header>
            <div className="loader"></div>
            <h2 className="share-text">Share this with your friend</h2>
            <CopyLink />
          </div>
        </div>
      )}
      <button className="invite" onClick={createInvitation}>
        Play With {playComputer ? "Friend" : "Computer"}
      </button>
      <button className="rules" onClick={() => setTogglePopup(true)}>
        Rules
      </button>
    </footer>
  );
}

export default Footer;
