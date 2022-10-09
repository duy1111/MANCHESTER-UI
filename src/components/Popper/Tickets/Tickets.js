import classNames from 'classnames/bind';
import styles from './Tickets.module.scss';
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
                            <a href='https://tickets.manutd.com/screenloader.aspx?type=include&page=usercontent/documents/html/help.html' className={cx('OldTraffordItem')}>Matchday Hospitality</a>
                            <Link  className={cx('OldTraffordItem')}>Help & Away Game Info</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Match Tickets</Link>
                            <Link className={cx('OldTraffordItem')}>Seasonal Hospitality</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Official Membership</Link>
                            <Link className={cx('OldTraffordItem')}>Stadium Tour & Museum</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Touting</Link>
                            <Link className={cx('OldTraffordItem')}>MU Women Tickets</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Sign up to Ticket Alerts</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Accessibility</Link>
                        </div>
                    </div>

                    <div className={cx('wrapper-footer')}>
                        <div className={cx('wrapper-footer__latest')}>LATEST</div>
                        <div className={cx('wrapper-footer__item')}>
                            <Content video className={cx('footer__item')} />
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
