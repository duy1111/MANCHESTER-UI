import classNames from 'classnames/bind';
import styles from './HomeHeader.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Search as PopperWrapper } from '~/components/Search';
import Button from '~/components/Button';
import More from '~/components/Popper/More';
import MyUnited from '~/components/Popper/MyUnited';
const cx = classNames.bind(styles);
function HomeHeader() {
    const renderSearch = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <Tippy interactive placement="bottom" render={() => <h1>shfsdhfhds</h1>}>
                            <div className={cx('preview-search')}>
                                <FontAwesomeIcon
                                    className={cx('preview-search-icon')}
                                    icon={faSearch}
                                ></FontAwesomeIcon>
                                <input placeholder="WHAT ARE YOU LOOKING FOR?" spellCheck={false} />
                            </div>
                        </Tippy>
                        <Button className={cx('preview-search__btn')} outline>
                            SEARCH
                        </Button>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('header-left')}>
                <Link>
                    <div className={cx('logo')}></div>
                </Link>
                <div className={cx('menu-list')}>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>LATEST</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>MUTV</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>FIXTURES</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>TICKETS</div>
                    </Link>
                    <MyUnited>
                        <Link className={cx('item-wrapper')}>
                            <div className={cx('menu-item')}>MY UNITED</div>
                        </Link>
                    </MyUnited>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>FANS</div>
                    </Link>
                    <Link className={cx('item-wrapper')}>
                        <div className={cx('menu-item')}>PLAYERS</div>
                    </Link>
                    <>
                        <Link className={cx('item-wrapper')}>
                            <div className={cx('menu-item')}>OLD TRAFFORD</div>
                        </Link>
                    </>

                    <More>
                        <Link className={cx('item-wrapper')}>
                            <div className={cx('menu-item')}>MORE</div>
                        </Link>
                    </More>
                </div>
            </div>
            <div className={cx('header-right')}>
                <Tippy
                    interactive
                    delay={[600, 800]}
                    placement="bottom"
                    render={renderSearch}
                    offset={[0, -14]}
                    hideOnClick
                >
                    <div className={cx('search-wrapper')}>
                        <div className={cx('search-btn')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch}></FontAwesomeIcon>
                            <span className={cx('search')}>Search</span>
                        </div>
                    </div>
                </Tippy>
            </div>
        </header>
    );
}

export default HomeHeader;
