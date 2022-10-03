import classNames from 'classnames/bind';
import styles from './More.modu.scss';
import Tippy from '@tippyjs/react/headless';
import { Search as PopperWrapper } from '~/components/Search';
const cx = classNames.bind(styles);
function More({ children }) {
    const renderMore = () => {
        return (
            <div tabIndex="-1" >
                <PopperWrapper>
                    <div className={cx('renderMore')}>
                        <div className={cx('more-row')}>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>Manchester United App</b>
                                </h4>
                                <p className={cx('more-item')}>Download the App</p>
                                <p className={cx('more-item')}>About the App</p>
                                <p className={cx('more-item')}>App FAQs</p>
                                <p className={cx('more-item')}>United Predictions</p>
                                <p className={cx('more-item')}></p>
                            </div>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>Club Information</b>
                                </h4>
                                <p className={cx('more-item')}>Jobs & Careers</p>
                                <p className={cx('more-item')}>Manchester United Soccer Schools</p>
                                <p className={cx('more-item')}>Brand Protection</p>
                                <p className={cx('more-item')}>Investor Relations</p>
                                <p className={cx('more-item')}>Safeguarding</p>
                                <p className={cx('more-item')}>All Red All Equal</p>
                                <p className={cx('more-item')}>Equality, Diversity and Inclusion</p>
                                <p className={cx('more-item')}>Corporate Social Responsibility</p>
                                <p className={cx('more-item')}>Contractor Liaison</p>
                            </div>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>Partners</b>
                                </h4>
                                <p className={cx('more-item')}>Global Partners</p>
                                <p className={cx('more-item')}>Financial Partners</p>
                                <p className={cx('more-item')}>Media Partners</p>
                                <p className={cx('more-item')}>Regional Partners</p>
                                <p className={cx('more-item')}>Soccer Schools</p>
                            </div>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>History</b>
                                </h4>
                                <p className={cx('more-item')}>History by Decade</p>
                                <p className={cx('more-item')}>Trophy Room</p>
                                <p className={cx('more-item')}>Munich Remembered</p>
                                <p className={cx('more-item')}>Legends</p>
                            </div>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>The Academy</b>
                                </h4>
                                <p className={cx('more-item')}>About The Academy</p>
                                <p className={cx('more-item')}>Academy Graduates</p>
                                <p className={cx('more-item')}>How To Watch</p>
                            </div>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>Charities</b>
                                </h4>
                                <p className={cx('more-item')}>MU Foundation</p>
                                <p className={cx('more-item')}>Other Charity Partners</p>
                            </div>
                            <div className={cx('more-column')}>
                                <h4 className={cx('more-item')}>
                                    <b>Help</b>
                                </h4>
                                <p className={cx('more-item')}>Help & FAQs</p>
                                <p className={cx('more-item')}>Accessibility</p>
                                <p className={cx('more-item')}>Contact Us</p>
                                <p className={cx('more-item')}>Website Feedback</p>
                            </div>
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive placement="bottom" render={renderMore} offset={[0, -8]}>
            {children}
        </Tippy>
    );
}

export default More;
