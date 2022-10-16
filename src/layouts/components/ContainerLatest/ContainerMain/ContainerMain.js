import styles from './ContainerMain.css';
import classNames from 'classnames/bind';
import Content from '~/components/Content/content';
//import ContainerTrending from './ContainerTrending';

const cx = classNames.bind(styles);

function ContainerMain() {
    return (
        <div className={cx('wrapper-main')}>
            <div className={cx('grid wide wrapper')}>
                <div className={cx('row')}>
                    <div className={cx(' col l-6 m-4')}>
                        <Content video />
                    </div>
                    <div className={cx(' col l-6 m-4')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-6 m-4')}>
                        <Content video />
                    </div>
                    <div className={cx(' col l-6 m-4')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-6 m-4')}>
                        <Content video />
                    </div>
                    <div className={cx(' col l-6 m-4')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <Content small />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerMain;
