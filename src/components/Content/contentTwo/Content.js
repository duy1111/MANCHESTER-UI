import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Image from '../../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShareSquare
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Content({ image, title }) {
    return (
        <div className={cx('content-item')}>
            <div className={cx('wrapper-image')}>
                <Image
                    className={cx('image-content')}
                    src="https://static.bongda24h.vn/medias/original/2022/06/06/tieu-su-jadon-sancho_0606141633.jpg"
                ></Image>
            </div>
            <div className={cx('wrapper-info')}>
                <div className={cx('info-top')}>
                <div className={cx('position')}></div>
                    <div className={cx('title')} tabIndex="-1">
                        <h2>EARLY TEAM NEWS FOR THE DERBY</h2>
                    </div>
                    <div className={cx('info')}>
                        <p>Manchester United have a blockbuster game to resume our Premier League programme,</p>
                    </div>
                </div>
                <div className={cx('info-bottom')}>
                    <div className={cx('info-bottom__left')}>
                        <p className={cx('time')}>3 h</p>
                        <div className={cx('split')}></div>
                        <div className={cx('type')}>news</div>
                    </div>
                    <div className={cx('info-bottom__right')}>
                        <FontAwesomeIcon icon={faShareSquare}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
