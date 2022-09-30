import styles from './ContainerMain.css';
import classNames from 'classnames/bind';
import Content from '~/components/Content';

const cx = classNames.bind(styles);

function ContainerMain() {
    return (
        <div className={cx('grid wide wrapper')}>
            <div className={cx('row')}>
                <div className={cx('two-row col l-6')}>
                    <Content />
                </div>
                <div className={cx('two-row col l-6')}>
                    <Content />
                </div>
            </div>
            <div className={cx('four-row')}></div>
        </div>
    );
}

export default ContainerMain;
