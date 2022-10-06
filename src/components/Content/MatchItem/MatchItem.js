import classNames from 'classnames/bind';
import styles from './MatchItem.module.scss';
import Image from '../../Image';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function MatchItem({
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
    const classes = cx('wrapper', {
        [className]: className,
        
    });
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    return ( 
        <div className={classes} {...props}>
            <Image className={cx('tournaments-logo')} src="//assets.manutd.com/AssetPicker/images/0/0/4/255/327518/PremierLeague_logo_Black1506593679851.png" alt=""></Image>
            <div className={cx('info')}>
                <span>Thursday 06 October 2022</span>
                <span>23:45, GSP Stadium</span>
            </div>
            <div className={cx('wrapper-match')}>
                <Image src="//assets.manutd.com/AssetPicker/images/0/0/17/1/1114585/AC_Omonia_Crest_Comp_180x1801659710154224.png" className={cx('team')}></Image>
                <div className={cx('time')}>01:00</div>
                {/* <div className={cx('score')}>6:3</div> */}
                <Image src="//assets.manutd.com/AssetPicker/images/0/0/11/201/772402/Manchester_United_Crest_Comp_180x1801550591475296.png" className={cx('team')}></Image>
                
            </div>
            <div className={cx('wrapper-teamName')}>
                <div className={cx('teamName')}>Omonia Nicosia</div>
                <span className={cx('vs')}>VS</span>
                <div className={cx('teamName')}>Man Utd</div>
            </div>
            <Button primary outline className={cx('btn-active')}>
                MATCH REVIEW
            </Button>
        </div>
    );
}

export default MatchItem;