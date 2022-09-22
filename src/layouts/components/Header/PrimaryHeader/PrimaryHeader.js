import classNames from 'classnames/bind';
import styles from './PrimaryHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretUp } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function PrimaryHeader({ className }) {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <div className={cx('home-dropdown')}>
                    <span className={cx('wrapper-content')}>
                        <div className={cx('icon-header')}>
                            <FontAwesomeIcon icon={faGlobe} />
                        </div>
                        <span className={cx('language')}>EN</span>
                        <div className={cx('caret')}>
                            <FontAwesomeIcon icon={faCaretUp} />
                        </div>
                    </span>
                </div>
                <div className={cx('profile')}>
                    <div className={cx('avatar')} tabIndex="-1"></div>
                    <p className={cx('name')}>Hi Xuân Duy</p>
                </div>
            </div>
        </header>
    );
}

export default PrimaryHeader;
