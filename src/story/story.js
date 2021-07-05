import {Component} from "react";
import "./story.css";
export default class Story extends Component {
    constructor(props) {
        super(props);
        this.props = props
    }

    render() {
        return (
            <div className={"Story"}>
                <h3>{this.props.title}</h3>
                <h5>{this.props.overview}</h5>
                <p>{this.props.text}</p>
                <hr />
                <a href="">{this.props.author}</a>
            </div>
        );
    }
}
