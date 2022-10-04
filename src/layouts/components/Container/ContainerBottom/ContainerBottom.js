import styles from './ContainerBottom.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)
function ContainerBottom() {
    return ( 
        <div className={cx('wrapper')} >
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <h2 className={cx('matches')}>MATCHES</h2>
                    <div className={cx('all-matches')}>
                        <p>ALL MATCHES</p>
                        <div className={cx('position')}></div>
                    </div>
                </div>
                <div className={cx('header-right')}>
                    
                </div>
            </div>
        </div>
    );
}

export default ContainerBottom;