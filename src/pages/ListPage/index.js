import React, {Component} from 'react';
import {Button, ListItem, Pagination} from "../../components";
import {urls} from "../../routes";


import "./index.scss";
import {getArray, setArray} from "../../utils";

class ListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderType: 'desc',
            pagination: 5,
            currentPageIndex: 0,
            list: []
        }
    }

    componentDidMount() {
        this.getItemList();
    }

    getItemList = () => {
        const list = getArray();
        this.updateList(list);
    }

    handleOnClick = () => {
        this.props.navigate(urls.create);
    }

    handleUpVote = (elementIndex) => {
        const list = this.state.list;
        const selectedElement = list[elementIndex];
        const selectedPoint = selectedElement.point;

        selectedElement.point = (selectedPoint || 0) + 1;
        this.arrayUpdateAndSort(list);

    }
    handleDownVote = (elementIndex) => {
        const list = this.state.list;
        const selectedElement = list[elementIndex];
        const selectedPoint = selectedElement.point;

        selectedElement.point = (selectedPoint || 0) - 1;
        if (selectedElement.point < 0) selectedElement.point = 0;

        this.arrayUpdateAndSort(list);
    }
    handleDelete = (elementIndex) => {
        const list = this.state.list;
        list.splice(elementIndex, 1);
        this.arrayUpdateAndSort(list);
    }

    onChangePage = (pageIndex) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                currentPageIndex: pageIndex,
            }
        });
    }
    onClickLeftArrow = () => {
        const {currentPageIndex} = this.state;
        if (currentPageIndex > 0) {
            this.onChangePage(currentPageIndex - 1);
        }
    }
    onClickRightArrow = () => {
        const {currentPageIndex, list, pagination} = this.state;
        const totalPage = Math.ceil(list.length / pagination);
        const nextPageIndex = currentPageIndex + 1;
        if (nextPageIndex < totalPage) {
            this.onChangePage(nextPageIndex);
        }
    }
    onChangeSorting = (value) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                orderType: value
            }
        }, () => {
            setArray(this.state.list);
            this.sortByType();
        });
    }

    paginateList = (pageNumber) => {
        const list = this.state.list;
        const pageSize = this.state.pagination;
        return list.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize);
    }


    sortByAsc = () => {
        const list = this.state.list;
        const sortedList = list.sort((first, second) => {
            if (first.point > second.point) {
                return 1;
            }

            if (first.point < second.point) {
                return -1;
            }

            return 1;
        });
        this.updateList(sortedList);
    }
    sortByDesc = () => {
        const list = this.state.list;
        const sortedList = list.sort((first, second) => {
            if (first.point > second.point) {
                return -1;
            }

            if (first.point < second.point) {
                return 1;
            }

            return -1;
        });
        this.updateList(sortedList);
    }


    updateList = (list) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                list,
            }
        });
    }
    arrayUpdateAndSort = (list) => {
        setArray(list);
        this.sortByType();
        this.updateList(list);
    }
    sortByType = () => {
        if (this.state.orderType === 'asc') { this.sortByAsc(); }
        else { this.sortByDesc(); }
    }

    render() {
        const {list, currentPageIndex, pagination, orderType} = this.state;
        return (
            <div className="list-page">
                <Button className="add-button" text="SUBMIT A LINK" iconName="fa-plus" onClick={this.handleOnClick}/>


                <select
                    value={orderType}
                    className="sorting-select"
                    onChange={(e) => this.onChangeSorting(e.target.value)}
                >
                    <option value="desc">Most Voted (Z->A)</option>
                    <option value="asc">Most Voted (A->Z)</option>
                </select>
                {
                    this.paginateList(currentPageIndex)
                        .map((item, index) => <ListItem key={index}
                                                        item={item}
                                                        index={index}
                                                        upVote={this.handleUpVote}
                                                        downVote={this.handleDownVote}
                                                        delete={this.handleDelete}/>)
                }

                {list.length > 0 && (<Pagination totalPages={list.length / pagination}
                                                 currentPage={currentPageIndex}
                                                 onPageChange={this.onChangePage}
                                                 onClickLeftArrow={this.onClickLeftArrow}
                                                 onClickRightArrow={this.onClickRightArrow}/>)}
            </div>
        );
    }
}

export default ListPage