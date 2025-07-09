import React from 'react';

function ProjectPricePredictor() {
    return (
        <div className="education-section">
            <div className="education-header">
                <h2>Price Predictor</h2>
            </div>
            <p className='educationPara'>
                Stock market meets machine learning. <span style={{ color: '#D1A980' }}>Built an ensemble model</span> (XGBoost, CatBoost, LightGBM—yes, all the fancy ones) to predict if a stock’s going up or down. Lots of data cleaning, feature engineering, and a bit of hyperparameter magic.
            </p>
            <p className='educationPara'>
                Ran this on a decade of stock data, scored hundreds of stocks, and tried to outsmart the market. <span style={{ color: '#725CAD' }}>Sometimes I felt like a NSE wizard</span>, sometimes just a caffeinated data janitor.
            </p>
        </div>
    );
}

export default ProjectPricePredictor; 