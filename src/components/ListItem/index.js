import React, { Component } from 'react';
import { Button } from "../index";
import { classNames, confirm } from '../../utils';


import './index.scss';
class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mouseOver: false
        }
    }

    handleOnMouseOver = () => {
        this.setState({mouseOver: true });
    }
    handleOnMouseLeave = () => {
        this.setState({mouseOver: false });
    }

    handleOnClickRemove = () => {
        confirm('Are you sure you want to remove this item?', () => {
            this.props.delete(this.props.index);
        });
    }

    handleOnClickUpVote = () => {
        this.props.upVote(this.props.index)
    }

    handleOnClickDownVote = () => {
        this.props.downVote(this.props.index);
    }

    render() {
        const { item } = this.props;
        const wrapperClass = classNames({
            'list-item': true,
            'list-item--mouse-over': this.state.mouseOver
        });

        return (
            <div
                className={wrapperClass}
                onMouseOver={this.handleOnMouseOver}
                onMouseLeave={this.handleOnMouseLeave}
            >
                <div className="point">
                    {item.point || 0}
                    <div className="text">POINTS</div>
                </div>
                <div className="list-item-content">
                    <div className="info">
                        <div className="title">{item.name}</div>
                        <a className="url" href={"#"}>({item.link})</a>
                    </div>

                    <div className="actions">
                        <Button text="Up Vote" iconName="fa-arrow-up" onClick={this.handleOnClickUpVote} />
                        <Button text="Down Vote" iconName="fa-arrow-down" onClick={this.handleOnClickDownVote} />
                    </div>
                </div>

                {
                    (this.state.mouseOver)
                        ? <div className="close-action" onClick={this.handleOnClickRemove}>
                            <i className="fa fa-remove" />
                          </div>
                        : null
                }
            </div>
        );
    }
}

export default ListItem;