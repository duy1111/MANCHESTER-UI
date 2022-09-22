import classNames from 'classnames/bind';
import styles from './PrimaryHeader.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCaretUp} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        
        title: '中文',
        to:'/zh'
    },
    {
        
        title: '日本語',
        to: '/ja',
    },
    {
        
        title: '한국어',
        to: '/ko',

    },
    {
        
        title: 'العربية',
        to: '/ar',

    },
    {
        
        title: 'Español',
        to: '/es',

    },
    {
        
        title: 'Français',
        to: '/fr',

    },
];
function PrimaryHeader({ className }) {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Menu
                    onChange={handleMenuChange}
                    items={MENU_ITEMS}
                >
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
                </Menu>
                <div className={cx('profile')}>
                    <div className={cx('avatar')} tabIndex="-1"></div>
                    <p className={cx('name')}>Hi Xuân Duy</p>
                </div>
            </div>
            <div className={cx('header-right')}>
                <Link className={cx('logo')}>
                    <img
                        className={cx('logo-item')}
                        src="//assets.manutd.com/AssetPicker/images/0/0/11/53/734543/Adidas_Comp_DarkBG_180xAuto1547460200382.png"
                        alt="Adidas"
                    />
                </Link>
                <Link className={cx('logo')}>
                    <img
                        className={cx('logo-item')}
                        src="//assets.manutd.com/AssetPicker/images/0/0/15/56/997598/TeamViewer-logo-white-header1625085576209.png"
                        alt="TeamViewer"
                        title=""
                    />
                </Link>
                <Link className={cx('logo')}>
                    <img
                        className={cx('logo-item')}
                        src="//assets.manutd.com/AssetPicker/images/0/0/16/73/1067276/TezosLogo_Horizontal_White1644483074005.png"
                        alt="Tezos"
                        title=""
                    />
                </Link>
                <Link className={cx('logo')}>
                    <img
                        className={cx('logo-item')}
                        src="//assets.manutd.com/AssetPicker/images/0/0/16/224/1106099/DXC_Logo_White1656502520956.png"
                        alt="DXC"
                        title=""
                    />
                </Link>
            </div>
        </header>
    );
}

export default PrimaryHeader;
