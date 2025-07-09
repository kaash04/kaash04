import React from 'react';

function ProjectTradingViewAPI() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>TradingView-API</h2>
                <a href="https://pypi.org/project/TradingView-API/" target='_blank' className='education-date'>Check it out on Pypi Package Manager</a>
            </div>
            <p className='educationPara'>
                <span style={{ color: '#D1A980' }}>Python library for real-time market data</span>, straight from TradingView. Handles websockets, tracks multiple symbols, and keeps the data flowing even when the markets don’t sleep. It’s <span style={{ color: '#D1A980' }}>open source, lives on PyPI</span>, and yep—I built it so you don’t have to.
            </p>
            <p className='educationPara'>
                Built this to automate trading experiments and make market data less of a headache. Now, <span style={{ color: '#725CAD' }}>my bots never miss a beat</span> (or a price spike).
            </p>
        </div>
    );
}

export default ProjectTradingViewAPI; 