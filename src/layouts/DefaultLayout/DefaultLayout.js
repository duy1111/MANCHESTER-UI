import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Header from '../components/Header';
//import Container from '../components/Container';
import Footer from '../components/Footer';
import { useState,useEffect } from 'react';

function DefaultLayout({ children }) {
    const [isLatest,setIsLatest] = useState(false)
    useEffect(() =>{
        console.log(children.type.name==="Latest");
        if(children.type.name==="Latest"){
            setIsLatest(true)
        }
    },[children.type.name])

    return (
        <div className={clsx(styles.wrapper)}>
            { isLatest ? <Header latest /> : <Header ></Header>}
            
            <div className={clsx(styles.container)}>
                {children}
                {/* <Container>
                    <div className={clsx(styles.content)}>{children}</div>
                </Container> */}
            </div>
            <Footer/>
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
