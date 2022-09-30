import styles from './ContainerMain.css';
import classNames from 'classnames/bind';
import Content from '~/components/Content/contentTwo';
import ContentFour from '~/components/Content/contentFour';

const cx = classNames.bind(styles);

function ContainerMain() {
    return (
        <div>
            <div className={cx('grid wide wrapper')}>
                <div className={cx('row')}>
                    <div className={cx(' col l-6 m-4')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-6 m-4')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <ContentFour />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <ContentFour />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <ContentFour />
                    </div>
                    <div className={cx(' col l-3 m-4')}>
                        <ContentFour />
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx(' col l-12 ')}>
                        <Content />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx(' col l-6')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-6')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-3')}>
                        <ContentFour />
                    </div>
                    <div className={cx(' col l-3')}>
                        <ContentFour />
                    </div>
                    <div className={cx(' col l-3')}>
                        <ContentFour />
                    </div>
                    <div className={cx(' col l-3')}>
                        <ContentFour />
                    </div>
                </div>

                <div className={cx('row')}>
                    <div className={cx(' col l-12 ')}>
                        <Content />
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx(' col l-6')}>
                        <Content />
                    </div>
                    <div className={cx(' col l-6')}>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContainerMain;
