
import styles from "./DefaultLayout.module.scss"
import clsx from "clsx";
import PropTypes from 'prop-types'
import Header from "../components/Header/Header";


function DefaultLayout({ children}) {
    return ( 
        <div className={clsx(styles.wrapper)}> 
    
            <Header/>
            <div className={clsx(styles.container)} >
                
                <div className={clsx(styles.content)}>
                    {children}
                </div>
            </div>
        </div>
     );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
}
export default DefaultLayout;