import classNames from 'classnames/bind';
import styles from './MyUnited.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Search as PopperWrapper } from '~/components/Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function MyUnited({ children }) {
    const renderMyUnited = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper className={cx('wrapper')}>
                    <div className={cx('renderMyUnited')}>
                        <Link className={cx('United-item')}>My Profile</Link>
                        <Link className={cx('United-item')}>Edit Profile</Link>
                        <Link className={cx('United-item')}>Preference Centre</Link>
                        <Link className={cx('United-item')}>Settings</Link>
                        <Link className={cx('United-item')}>Inbox</Link>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy delay={[600, 800]} interactive placement="bottom" render={renderMyUnited} offset={[0, -8]}>
            {children}
        </Tippy>
    );
}

export default MyUnited;
