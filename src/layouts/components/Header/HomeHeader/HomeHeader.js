import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';

const cx = classNames.bind(styles);
function HomeHeader() {
    return <header className={cx('wrapper')}></header>;
}

export default HomeHeader;
