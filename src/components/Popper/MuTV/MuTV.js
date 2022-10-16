import classNames from 'classnames/bind';
import styles from './MuTV.module.scss';
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
                            <Link className={cx('OldTraffordItem')}>MUTV Home</Link>
                            <Link className={cx('OldTraffordItem')}>Men's Highlights</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Register for MUTV</Link>
                            <Link className={cx('OldTraffordItem')}>United Daily</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Subscribe to MUTV</Link>
                            <Link className={cx('OldTraffordItem')}>Premier League Collection</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>My List</Link>
                            <Link className={cx('OldTraffordItem')}>Women's Highlights</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>FAQs</Link>
                            <Link className={cx('OldTraffordItem')}>UTD Podcast</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Terms & Conditions</Link>
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
        <Tippy delay={[600, 800]} interactive placement="bottom" render={renderOldTrafford} offset={[0, -8]}>
            {children}
        </Tippy>
    );
}

export default MyUnited;
