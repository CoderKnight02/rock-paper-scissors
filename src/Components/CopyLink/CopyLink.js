import React, { useState, useContext } from 'react';
import './CopyLink.css'; // Ensure this CSS file is included
import copy from "../../images/icons8-copy-24.png";
import check from "../../images/icons8-check-24.png";
import { MyContext } from "../../Context/ScoreProvider";

const CopyLinkButton = () => {
    const [copied, setCopied] = useState(false);
    const { invitationLink } = useContext(MyContext);

    const handleCopy = () => {
        navigator.clipboard.writeText(invitationLink).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        });
    };

    return (
        <div className="copy-link-container">
            <input
                type="text"
                value={invitationLink}
                readOnly
                className="copy-link-input"
            />
            <button className={`copy-link-button ${copied ? 'copied' : ''}`} onClick={handleCopy} disabled={copied}>
                <img src={!copied ? copy : check} alt='copy' />
            </button>
        </div>
    );
};

export default CopyLinkButton;
