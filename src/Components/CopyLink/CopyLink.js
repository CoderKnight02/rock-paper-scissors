import React, { useState } from 'react';
import './CopyLink.css'; // Ensure this CSS file is included
import copy from "../../images/icons8-copy-24.png";
import check from "../../images/icons8-check-24.png";

const CopyLinkButton = ({ link }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(link).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        });
    };

    return (
        <div className="copy-link-container">
            <input
                type="text"
                value={link}
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
