import classNames from "classnames/bind";
import styles from './Container.module.scss'
//import ContainerBottom from "./ContainerBottom";
import ContainerMain from "./ContainerMain";
const cx = classNames.bind(styles)
function ContainerLatest() {
    return ( 
        <div className={cx('wrapper')}>
            <ContainerMain/>
            
        </div>
     );
}

export default ContainerLatest;