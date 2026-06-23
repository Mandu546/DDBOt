import { useEffect, useState } from 'react';
import './LoadingScreen.scss';

const FEATURES = [
    { icon: '📈', label: 'Advanced Charts' },
    { icon: '🤖', label: 'Trading Bots' },
    { icon: '👥', label: 'Copy Trading' },
    { icon: '⚡', label: 'Manual Trader' },
];

const MESSAGES = [
    'Connecting to markets...',
    'Loading bot strategies...',
    'Preparing your workspace...',
    'Almost ready...',
];

type TLoadingScreenProps = {
    onComplete: () => void;
    isReady?: boolean;
};

const LoadingScreen = ({ onComplete, isReady = false }: TLoadingScreenProps) => {
    const [progress, setProgress] = useState(0);
    const [messageIndex, setMessageIndex] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                // If API is ready, accelerate to 100
                const increment = isReady && prev >= 80 ? 5 : 1.2;
                const next = prev + increment;
                const idx = Math.floor((Math.min(next, 99) / 100) * MESSAGES.length);
                setMessageIndex(Math.min(idx, MESSAGES.length - 1));
                if (next >= 100 && !done) {
                    clearInterval(interval);
                    setDone(true);
                    setTimeout(onComplete, 400);
                }
                return Math.min(next, 100);
            });
        }, 30);
        return () => clearInterval(interval);
    }, [onComplete, isReady, done]);

    return (
        <div className='dopra-loading'>
            {/* Logo */}
            <div className='dopra-loading__logo'>
                <img src='/dopra-logo.png' alt='Dopra' className='dopra-loading__logo-img' />
                <div className='dopra-loading__logo-text'>DOPRA</div>
                <div className='dopra-loading__tagline'>TRADE SMARTER. AUTOMATE BETTER.</div>
            </div>

            {/* Progress bar */}
            <div className='dopra-loading__progress-wrap'>
                <div className='dopra-loading__progress-bar'>
                    <div className='dopra-loading__progress-fill' style={{ width: `${progress}%` }} />
                </div>
                <div className='dopra-loading__progress-info'>
                    <span className='dopra-loading__message'>{MESSAGES[messageIndex]}</span>
                    <span className='dopra-loading__percent'>{Math.round(progress)}%</span>
                </div>
            </div>

            {/* Feature icons */}
            <div className='dopra-loading__features'>
                {FEATURES.map((f, i) => (
                    <div
                        key={i}
                        className={`dopra-loading__feature ${
                            progress > (i + 1) * 22 ? 'dopra-loading__feature--active' : ''
                        }`}
                    >
                        <div className='dopra-loading__feature-icon'>{f.icon}</div>
                        <div className='dopra-loading__feature-label'>{f.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LoadingScreen;
