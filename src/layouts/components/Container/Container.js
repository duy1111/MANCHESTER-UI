import classNames from "classnames/bind";
import styles from './Container.module.scss'
import ContainerMain from "./ContainerMain";
const cx = classNames.bind(styles)
function Container() {
    return ( 
        <div className={cx('wrapper')}>
            <ContainerMain/>
        </div>
     );
}

export default Container;