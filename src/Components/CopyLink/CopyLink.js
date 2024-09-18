import React, { useState, useContext } from 'react';
import './CopyLink.css'; // Ensure this CSS file is included
import copy from "../../images/icons8-copy-24.png";
import check from "../../images/icons8-check-24.png";
import { MyContext } from "../../Context/ScoreProvider";

const CopyLinkButton = () => {
    const [copied, setCopied] = useState(false);
    const { invitationLink } = useContext(MyContext);

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(invitationLink).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        } else {
            // Fallback for browsers that don't support Clipboard API
            const textarea = document.createElement('textarea');
            textarea.value = invitationLink;
            document.body.appendChild(textarea);
            textarea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
            } catch (err) {
                console.error('Fallback: Failed to copy', err);
            }
            document.body.removeChild(textarea);
        }
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
