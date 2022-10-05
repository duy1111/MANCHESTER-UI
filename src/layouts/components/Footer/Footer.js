import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-main')}>
                <div className={cx('icon-btn')}>
                    <FontAwesomeIcon className={cx('icon-item')} icon={faYoutube}></FontAwesomeIcon>
                </div>
                <div className={cx('icon-btn')}>
                    <FontAwesomeIcon className={cx('icon-item')} icon={faFacebook}></FontAwesomeIcon>
                </div>
                <div className={cx('icon-btn')}>
                    <FontAwesomeIcon className={cx('icon-item')} icon={faTwitter}></FontAwesomeIcon>
                </div>
                <div className={cx('icon-btn')}>
                    <FontAwesomeIcon className={cx('icon-item')} icon={faInstagram}></FontAwesomeIcon>
                </div>
                <div className={cx('icon-btn')}>
                    <FontAwesomeIcon className={cx('icon-item')} icon={faTiktok}></FontAwesomeIcon>
                </div>
            </div>
            <div className={cx('footer-bottom')}>
                <div className={cx('footer-bottom__left')}>
                    <div className={cx('footer-bottom__left___item')}>Download the App</div>
                    <div className={cx('footer-bottom__left___item')}>Accessibility</div>
                    <div className={cx('footer-bottom__left___item')}>Contact Us</div>
                    <div className={cx('footer-bottom__left___item')}>Jobs & Careers</div>
                    <div className={cx('footer-bottom__left___item')}>Privacy</div>
                    <div className={cx('footer-bottom__left___item')}>Cookies</div>
                    <div className={cx('footer-bottom__left___item')}>Terms Of Use</div>
                    <div className={cx('footer-bottom__left___item')}>Terms & Conditions of Sale</div>
                    <div className={cx('footer-bottom__left___item')}>Anti-slavery</div>
                </div>
                <div className={cx('footer-bottom__right')}>
                    <div className={cx('footer-bottom__right___info')}>©2022 Manchester United FC Ltd</div>
                    <span className={cx('split')}></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
