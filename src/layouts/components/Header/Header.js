import classNames from 'classnames/bind';
import styles from './Header.css';
import HomeHeader from './HomeHeader';
import PrimaryHeader from './PrimaryHeader';
import { useState } from 'react';
import ChildrenHeader from './ChildrenHeader';

const cx = classNames.bind(styles);
function Header({latest=false, ...passProps}) {
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
                {latest && <ChildrenHeader/>}
            </header>
        </div>
    );
}
export default Header;
