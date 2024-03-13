import React, { useState } from 'react';

function UnitConverter() {
    const [americanValue, setAmericanValue] = useState('');
    const [metricValue, setMetricValue] = useState('');

    const handleAmericanChange = (e) => {
        const value = e.target.value;
        setAmericanValue(value);
        convertToMetric(value);
    };

    const convertToMetric = (value) => {
        // Perform the conversion here
        // For example, 1 inch = 2.54 centimeters
        const metricValue = value * 2.54;
        setMetricValue(metricValue);
    };

    return (
        <div>
            <h2>American to Metric Unit Converter</h2>
            <div>
                <label htmlFor="american">American Unit:</label>
                <input type="number" id="american" value={americanValue} onChange={handleAmericanChange} />
            </div>
            <div>
                <label htmlFor="metric">Metric Unit:</label>
                <input type="number" id="metric" value={metricValue} disabled />
            </div>
        </div>
    );
}

export default UnitConverter;
