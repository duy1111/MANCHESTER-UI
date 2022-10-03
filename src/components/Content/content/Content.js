import classNames from 'classnames/bind';
import styles from './Content.module.scss';
import Image from '../../Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare,faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Content({
    disabled = false,
    image,
    small = false,
    title,
    video = false,
    onClick,
    children,
    className,
    ...passProps
}) {
    const classes = cx('content-item', {
        [className]: className,
        video,
        small,
    });
    const [hideVideo, setHideVideo] = useState(false);
    useEffect (() =>{
        setHideVideo(video);
    },[video])
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    return (
        <div className={classes} {...props}>
            <div className={cx('wrapper-image')}>
                <Image
                    className={cx('image-content')}
                    src="https://static.bongda24h.vn/medias/original/2022/06/06/tieu-su-jadon-sancho_0606141633.jpg"
                ></Image>
            </div>
            <div className={cx('wrapper-info')}>
                {hideVideo && (
                    <div className={cx('icon-wrapper')}>
                        <FontAwesomeIcon className={cx('icon-play')} icon={faPlay}></FontAwesomeIcon>
                    </div>
                )}
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
