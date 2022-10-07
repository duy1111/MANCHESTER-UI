import styles from './ContainerTrending.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TrendingItem from '~/components/Content/TrendingItem';

const cx = classNames.bind(styles);

function ContainerTrending() {
    const [clickPrev, setClickPrev] = useState(1);

    const handPrev = () => {
        if (clickPrev > 1) {
            setClickPrev(clickPrev - 1);
        }
    };
    const handNext = () => {
        if (clickPrev < 2) {
            setClickPrev(clickPrev + 1);
        }
    };
    return (
        <div className={cx('wrapper-trending')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <h2 tabIndex="-1" className={cx('trending-now')}>TRENDING NOW</h2>
                    <div tabIndex="-1" className={cx('theStore')}>
                        <p>Enter The Store</p>
                        <div className={cx('position')}></div>
                    </div>
                </div>
                <div className={cx('header-right')}>
                    <span className={cx('header-right__active', 'active')}></span>
                    <span
                        className={
                            (!!(clickPrev === 1) && cx('header-right__active')) ||
                            (!!(clickPrev === 2) && cx('header-right__active', 'active')) ||
                            (!!(clickPrev === 3) && cx('header-right__active', 'active'))
                        }
                    ></span>
                </div>
            </div>
            {/* match item */}
            <div
                className={(!!(clickPrev === 1) && cx('wrapper-item')) || (!!(clickPrev === 2) && cx('wrapper-item2'))}
            >
                <TrendingItem className={!!(clickPrev === 2) && cx('disable')} />
                <TrendingItem className={!!(clickPrev === 2) && cx('disable')} />
                <TrendingItem className={!!(clickPrev === 2) && cx('disable')} />
                <TrendingItem className={!!(clickPrev === 2) && cx('disable')} />

                <TrendingItem className={!!(clickPrev === 1) && cx('disable')} />
                <TrendingItem className={!!(clickPrev === 1) && cx('disable')} />
                <TrendingItem className={!!(clickPrev === 1) && cx('disable')} />
                <TrendingItem className={!!(clickPrev === 1) && cx('disable')} />
            </div>
            <Button
                small
                className={
                    (!!(clickPrev === 1) && cx('btn-prev', 'disable')) || (!!(clickPrev === 2) && cx('btn-prev'))
                }
                onClick={handPrev}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button
                small
                className={
                    (!!(clickPrev === 1) && cx('btn-next')) || (!!(clickPrev === 2) && cx('btn-next', 'disable'))
                }
                onClick={handNext}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </Button>
        </div>
    );
}

export default ContainerTrending;
