import { useDevice } from '@deriv-com/ui';
import './app-logo.scss';

export const AppLogo = () => {
    const { isDesktop } = useDevice();

    return (
        <a href='/' className='app-header__logo-link'>
            <img
                src='/dopra-logo.png'
                alt='Dopra'
                className='app-header__logo'
                style={{
                    height: isDesktop ? '40px' : '32px',
                    width: 'auto',
                    objectFit: 'contain',
                }}
            />
        </a>
    );
};
