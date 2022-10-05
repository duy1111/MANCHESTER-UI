import classNames from 'classnames/bind';
import styles from './Header.css';
import HomeHeader from './HomeHeader';
import PrimaryHeader from './PrimaryHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const [fixed, setFixed] = useState(false);
    const hideMenu = () => {
        if (window.scrollY >= 20) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };
    window.addEventListener('scroll', hideMenu);

    return (
        <div className={cx('wrapper-header')}>
            <header className={fixed ? cx('wrapper active') : cx('wrapper')}>
                <PrimaryHeader />
                <HomeHeader />
            </header>
        </div>
    );
}
export default Header;
