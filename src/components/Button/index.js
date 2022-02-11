import React, {Component} from 'react';
import { classNames } from '../../utils';
import "./index.scss";

class Button extends Component {
    render() {
        const {text, iconName, className, ...rest} = this.props;
        const classes = classNames({ button: true, [className]: !!className })

        return (
            <button className={classes} {...rest}>
                <div className="button-wrapper">
                    {iconName && <i  className={"fa " + iconName} />}
                    {text}
                </div>
            </button>
        );
    }
}

export default Button;