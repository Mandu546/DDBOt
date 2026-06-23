import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '40px', color: 'white' }}>
            <h1>TradePulse</h1>
            <p>Institutional Trading Platform</p>

            <button onClick={() => navigate('/app')}>Enter App</button>
        </div>
    );
};

export default LandingPage;
