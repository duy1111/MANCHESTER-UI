import classNames from 'classnames/bind';
import styles from './Fixtures.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Search as PopperWrapper } from '~/components/Search';
import { Link } from 'react-router-dom';

import MatchItem from '~/components/Content/MatchItem';
const cx = classNames.bind(styles);
function MyUnited({ children }) {
    const renderOldTrafford = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('wrapper')}>
                    <div className={cx('OldTrafford')}>
                        
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Men</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Women</Link>
                            
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Under-21s</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Under-18s</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Legends Tables</Link>
                        </div>
                        <div className={cx('OldTrafford2')}>
                            <Link className={cx('OldTraffordItem')}>Add Fixtures to Calendar</Link>
                        </div>
                    </div>

                    <div className={cx('wrapper-footer')}>
                        <div className={cx('wrapper-footer__latest')}>LATEST</div>
                        <div className={cx('wrapper-footer__item')}>
                            <MatchItem video className={cx('footer__item')} />
                            <MatchItem video className={cx('footer__item')} />
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
