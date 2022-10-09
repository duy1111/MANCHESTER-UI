import classNames from 'classnames/bind';
import styles from './OldTrafford.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Search as PopperWrapper } from '~/components/Search';
import { Link } from 'react-router-dom';
import Content from '~/components/Content/content';
const cx = classNames.bind(styles);
function MyUnited({ children }) {
    const renderOldTrafford = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('wrapper')}>
                    <div className={cx('OldTrafford')}>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Museum & Stadium Tours</Link>
                            <Link className={cx('OldTraffordItem')}>Things to do at Old Trafford</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Accessibility</Link>
                            <Link className={cx('OldTraffordItem')}>VAR at the stadium</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Conferences & Events</Link>
                            <Link className={cx('OldTraffordItem')}>Visiting Supporters' Guide</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Getting to Old Trafford</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Megastore</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Red Cafe</Link>
                        </div>
                    </div>

                    <div className={cx('wrapper-footer')}>
                        <div className={cx('wrapper-footer__latest')}>LATEST</div>
                        <div className={cx('wrapper-footer__item')}>
                            <Content video className={cx('footer__item')} />
                            <Content video className={cx('footer__item')} />
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive placement="bottom" render={renderOldTrafford} offset={[0, -8]}>
            {children}
        </Tippy>
    );
}

export default MyUnited;
