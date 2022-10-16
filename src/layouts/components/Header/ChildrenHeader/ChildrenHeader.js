import classNames from 'classnames/bind';
import styles from './ChildrenHeader.module.scss';


const cx = classNames.bind(styles);
function ChildrenHeader() {
    
    return (
        
        <header className={cx('wrapper')}>
            <div className={cx('wrapper-item')}>
                <div className={cx('item')}>LATEST</div>
                <div className={cx('item')}>MEN</div>
                <div className={cx('item')}>WOMEN</div>
                <div className={cx('item')}>UNDER-21S</div>
                <div className={cx('item')}>UNDER-18S</div>
                <div className={cx('item')}>CLUB</div>
            </div>
        </header>
    );
}

export default ChildrenHeader;
