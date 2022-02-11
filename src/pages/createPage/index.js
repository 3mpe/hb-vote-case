import React, {Component} from 'react';
import {Button} from "../../components";


import "./index.scss"
import {urls} from "../../routes";
import {setItem, success} from "../../utils";

class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            link: null
        }
    }

    handleChangeInput = (field, event) => {
        this.setState((oldState)=> {
            return {
                ...oldState,
                [field]: event.target.value
            }
        })
    }

    handleSubmit = () => {
        if (!this.state.name || !this.state.link) return;

        const data = {
            ...this.state,
            time: new Date(),
            point: 0,
        }
        success(`${this.state.name} added`)
        setItem(data);
        this.props.navigate(urls.list);
    };


    render() {
        return (
            <div>
                <div className="back-navigation" onClick={() => this.props.navigate(urls.list)}>
                    <i className="fa fa-chevron-left" />
                    Return To List
                </div>
                <div className="create">


                    <h3>Add New Link</h3>
                    <div className="form">
                        <div className="form-group">
                            <label>Link Name</label>
                            <input type="text" onChange={(e) => this.handleChangeInput('name', e)} />
                        </div>
                        <div className="form-group">
                            <label>Link Url</label>
                            <input type="text" onChange={(e) => this.handleChangeInput('link', e)} />
                        </div>

                        <Button text="ADD" onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePage;