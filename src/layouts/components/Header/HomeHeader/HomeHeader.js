import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';

import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function HomeHeader() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Link>
                    <div className={cx('logo')}></div>
                </Link>
                <div className={cx('menu-list')}>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>LATEST</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>MUTV</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>FIXTURES</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>TICKETS</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>MY UNITED</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>FANS</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>PLAYERS</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>OLD TRAFFORD</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>MORE</div>
                    </Link>
                </div>
            </div>
            <div className={cx('header-right')}></div>
        </header>
    );
}

export default HomeHeader;
