import React, {Component} from 'react';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="left">
                    <div>
                        <div>
                            hepsiburada
                            <span>.com</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                   <span>
                       <b>Link</b>
                        VOTE
                   </span>
                   Challenge
                </div>
            </div>
        );
    }
}

export default Header;