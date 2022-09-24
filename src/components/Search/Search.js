import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Search.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Search;
