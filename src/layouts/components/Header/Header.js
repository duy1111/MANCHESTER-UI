import classNames from 'classnames/bind';
import styles from './Header.css'
import HomeHeader from './HomeHeader';
import PrimaryHeader from './PrimaryHeader';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Header() {
    const[fixed,setFixed] = useState(false);
    const hideMenu = () => {
        if(window.scrollY>=46){
            setFixed(true)
        }else{
            setFixed(false)
        }
    }
    window.addEventListener('scroll', hideMenu)
    
    return <header className={fixed ? cx("wrapper active") : cx("wrapper")}>
        <PrimaryHeader/> 
        <HomeHeader/>
    </header>

}
export default Header;