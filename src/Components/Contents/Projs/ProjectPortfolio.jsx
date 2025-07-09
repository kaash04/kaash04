import React from 'react';

function ProjectPortfolio() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>Portfolio</h2>
                <a href="https://kash04.vercel.app" target='_blank' className='education-date'>Visit Homepage</a>
            </div>
            <p className='educationPara'>
                This portfolio is proof <span style={{ color: '#D1A980' }}>I can make websites</span> (and maybe spend too much time tweaking them). It’s my digital playground—showcasing projects, skills, and a bit of personality.
            </p>
            <p className='educationPara'>
                Built, rebuilt, and restyled this site more times than I’ll admit. <span style={{ color: '#725CAD' }}>If you’re reading this, at least it worked</span>!
            </p>
        </div>
    );
}

export default ProjectPortfolio; 