import styles from './DefaultLayout.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Container from '../components/Container';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Container className={clsx}>
                    <div className={clsx(styles.content)}>{children}</div>
                </Container>
            </div>
            <Footer/>
        </div>
    );
}
DefaultLayout.prototype = {
    children: PropTypes.node.isRequired,
};
export default DefaultLayout;
