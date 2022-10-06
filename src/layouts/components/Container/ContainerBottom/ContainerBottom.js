import styles from './ContainerBottom.module.scss';
import classNames from 'classnames/bind';
import MatchItem from '~/components/Content/MatchItem';
import { useState } from 'react';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ContainerBottom() {
    const [clickPrev, setClickPrev] = useState(1);

    const handPrev = () => {
        if (clickPrev > 1) {
            setClickPrev(clickPrev - 1);
        }
    };
    const handNext = () => {
        if (clickPrev < 3) {
            setClickPrev(clickPrev + 1);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-left')}>
                    <h2 className={cx('matches')}>MATCHES</h2>
                    <div className={cx('all-matches')}>
                        <p>ALL MATCHES</p>
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
                    <span
                        className={
                            (!!(clickPrev === 1) && cx('header-right__active')) ||
                            (!!(clickPrev === 2) && cx('header-right__active')) ||
                            (!!(clickPrev === 3) && cx('header-right__active', 'active'))
                        }
                    ></span>
                </div>
            </div>
            <div
                className={
                    (!!(clickPrev === 1) && cx('wrapper-item')) ||
                    (!!(clickPrev === 2) && cx('wrapper-item2')) ||
                    (!!(clickPrev === 3) && cx('wrapper-item3'))
                }
            >
                <MatchItem
                    className={(!!(clickPrev === 2) && cx('disable')) || (!!(clickPrev === 3) && cx('disable'))}
                />
                <MatchItem
                    className={(!!(clickPrev === 2) && cx('disable')) || (!!(clickPrev === 3) && cx('disable'))}
                />
                <MatchItem
                    className={(!!(clickPrev === 2) && cx('disable')) || (!!(clickPrev === 3) && cx('disable'))}
                />
                <MatchItem
                    className={(!!(clickPrev === 2) && cx('disable')) || (!!(clickPrev === 3) && cx('disable'))}
                />
                <MatchItem />
                <MatchItem
                    className={(!!(clickPrev === 1) && cx('disable')) || (!!(clickPrev === 3) && cx('disable'))}
                />
                <MatchItem />
                <MatchItem />
                <MatchItem
                    className={(!!(clickPrev === 1) && cx('disable')) || (!!(clickPrev === 2) && cx('disable'))}
                />
                <MatchItem
                    className={(!!(clickPrev === 1) && cx('disable')) || (!!(clickPrev === 2) && cx('disable'))}
                />
            </div>
            <Button
                small
                className={
                    (!!(clickPrev === 1) && cx('btn-prev', 'disable')) ||
                    (!!(clickPrev === 2) && cx('btn-prev')) ||
                    (!!(clickPrev === 3) && cx('btn-prev', 'btn_click3'))
                }
                onClick={handPrev}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <Button
                small
                className={
                    (!!(clickPrev === 1) && cx('btn-next')) ||
                    (!!(clickPrev === 2) && cx('btn-next', 'btn_click3')) ||
                    (!!(clickPrev === 3) && cx('btn-next', 'disable'))
                }
                onClick={handNext}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </Button>
        </div>
    );
}

export default ContainerBottom;
