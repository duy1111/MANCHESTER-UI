import classNames from 'classnames/bind';
import styles from './TrendingItem.module.scss';
import Image from '../../Image';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function TrendingItem({
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
            <Image className={cx('image')} src="//images.footballfanatics.com/manchester-united/manchester-united-home-shirt-2022-23-with-antony-21-printing_ss4_p-13361384+u-3j3pzzu6h42hgyzlht4u+v-8c5999f478834ee8a529a49d7bfa937f.jpg?_hv=2&w=900" alt=""></Image>
            <div className={cx('info')}>
                Manchester United Home Shirt 2022-23 with Antony 21 printing
            </div>
            
            <Button primary outline className={cx('btn-active')}>
                SHOP NOW
            </Button>
        </div>
    );
}

export default TrendingItem;