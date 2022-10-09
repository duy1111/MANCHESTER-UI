import classNames from 'classnames/bind';
import styles from './Fans.module.scss';
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
                            <Link className={cx('OldTraffordItem')}>Get involved in your club</Link>
                            <Link className={cx('OldTraffordItem')}>Fans' Advisory Board</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>My United</Link>
                            <Link className={cx('OldTraffordItem')}>Fans' Forum</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Watch MUTV</Link>
                            <Link className={cx('OldTraffordItem')}>Club Charter</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Competitions</Link>
                            <Link className={cx('OldTraffordItem')}>Antony Competition</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Official Membership</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Supporters' Clubs</Link>
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
