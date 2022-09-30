import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);
function Content({ image, title }) {
    return (
        <div className={cx('content-item')}>
            <Image className={cx('image-content')} src="https://static.bongda24h.vn/medias/original/2022/06/06/tieu-su-jadon-sancho_0606141633.jpg"></Image>
            <div className={cx('wrapper-info')}>
                <div className={cx('title')} tabIndex="-1">
                    <h2>EARLY TEAM NEWS FOR THE DERBY</h2>
                </div>
                <div className={cx('info')}>
                    <p>
                        Manchester United have a blockbuster game to resume our Premier League programme, 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Content;
