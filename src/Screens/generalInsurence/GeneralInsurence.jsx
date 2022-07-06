import React from 'react'
import './generalInsurence.css'
export default function GeneralInsurence() {
    return (
        <div className='GeneralInsurence'>
            <div className="section-1">
                <div className="section-1-content">
                    <h1 className='section-title'>General Insurance</h1>
                    <p>General insurance refers to any type of insurance arrangement that is not specifically related to life insurance. All of these non-life insurance types fall under the umbrella of general insurance.</p>
                </div>
                <div className="section-1-image">
                    <img src='images/general-insurenece.svg' alt='' />
                </div>
            </div>
            <div className="mutualFund-header">
                <h1 className='section-title'>General Insurance</h1>
            </div>
            <div className="performance">
                <h2>Performance</h2>
                <div className="performance-row">
                    <div className="performance-col">
                        <p>Todays Low</p>
                        <h3>110.60</h3>
                    </div>
                    <img src='/images/gen-in-image1.svg' alt='' />
                    <div className="performance-col">
                        <p>Todays High</p>
                        <h3>115.45</h3>
                    </div>
                </div>
                <div className="performance-row">
                    <div className="performance-col">
                        <p>52W Low</p>
                        <h3>109.10</h3>
                    </div>
                    <img src='/images/gen-in-image2.svg' alt='' />
                    <div className="performance-col">
                        <p>52W High</p>
                        <h3>211.50</h3>
                    </div>
                </div>
            </div>
            <div className="general-insurence-row">
                <div className="general-insurence-row-col">
                    <p>Open Price</p>
                    <h3>110.60</h3>
                </div>
                <div className="general-insurence-row-col">
                    <p>Prev.Close</p>
                    <h3>110.20</h3>
                </div>
                <div className="general-insurence-row-col">
                    <p>Volume</p>
                    <h3>986348</h3>
                </div>
                <div className="general-insurence-row-col">
                    <p>Value</p>
                    <h3>11.24 cr</h3>
                </div>
            </div>
            <div className="section-2">
                <h1 className='section-title'>About General Insurance</h1>
                <h4>General insurance refers to any type of insurance arrangement that is not specifically related to life insurance. All of these non-life insurance types fall under the umbrella of general insurance.
                </h4>
                <h4>The economic value of the tangible assets must be safeguarded because they are vulnerable to deterioration. General insurance products are purchased for this purpose since they cover against unpredictable events such as damage or loss of the asset. In the same way that life insurance has a premium, so does general insurance.
                </h4>
            </div>
        </div>
    )
}
