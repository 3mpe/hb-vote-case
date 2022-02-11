import React, {Component} from 'react';

import "./index.scss";
import {classNames} from "../../utils";
class Pagination extends Component {


    renderPageNumbers = () => {
        const {totalPages, currentPage, onPageChange} = this.props;
        const pageNumbers = [];
        for (let i = 0; i < totalPages; i++) {
           const className = classNames({ number: true, active: currentPage === i });
            pageNumbers.push(
                <button key={i}
                        className={className}
                        onClick={() => onPageChange(i)}>{i + 1}
                </button>
            );
        }
        return pageNumbers;
    }

    render() {
        const {totalPages} = this.props;
        return (
            <div className="pagination">

                <div className="left-arrow" onClick={() => { this.props.onClickLeftArrow(); }}>
                    <i className="fa fa-chevron-left" aria-hidden="true"/>
                </div>

                {
                    totalPages && totalPages > 0 && (
                       this.renderPageNumbers()
                    )
                }

                <div className="right-arrow" onClick={() => { this.props.onClickRightArrow(); }}>
                    <i className="fa fa-chevron-right" aria-hidden="true"/>
                </div>
            </div>
        );
    }
}

export default Pagination;