import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Paginator = (props) => {

    const actualPath = props.currPath.slice(0, props.currPath.lastIndexOf('/') + 1);

    const prevUrl = `${actualPath}${props.currPage - 1}`;
    const nextUrl = `${actualPath}${props.currPage + 1}`;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <Link to={prevUrl} className="page-item">Previous</Link>
                <Link to={nextUrl} className="page-item">Next</Link>
            </ul>
        </nav>

    );
};

Paginator.propTypes = {
    currPage: PropTypes.number.isRequired
};

export default Paginator;