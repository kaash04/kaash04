import React from 'react';

function ProjectNewzy() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>Newzy</h2>
                <a href="https://github.com/kaash04/College-Notifications-Discord-Bot" target='_blank' className='education-date'>View source code</a>
            </div>
            <p className='educationPara'>
                <span style={{ color: '#D1A980' }}>Discord bot for college news and updates</span>. Delivers headlines, notifications, and even document links right to your DMs or favorite channel. <span style={{ color: '#725CAD' }}>No more missing out on important stuff (or memes)</span>.
            </p>
            <p className='educationPara'>
                Added features like <span style={{ color: '#D1A980' }}>notification history and quick-access links</span>, so you can catch up on news without scrolling through endless chats.
            </p>
        </div>
    );
}

export default ProjectNewzy; 