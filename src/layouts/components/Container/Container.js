import classNames from "classnames/bind";
import styles from './Container.module.scss'
import ContainerBottom from "./ContainerBottom";
import ContainerMain from "./ContainerMain";
const cx = classNames.bind(styles)
function Container() {
    return ( 
        <div className={cx('wrapper')}>
            <ContainerMain/>
            <ContainerBottom/>
        </div>
     );
}

export default Container;