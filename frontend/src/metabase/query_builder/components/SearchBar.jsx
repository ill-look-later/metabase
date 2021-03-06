import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

export default class SearchBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    static propTypes = {
        filter: PropTypes.string.isRequired,
        onFilter: PropTypes.func.isRequired
    };

    handleInputChange() {
        this.props.onFilter(ReactDOM.findDOMNode(this.refs.filterTextInput).value);
    }

    render() {
        return (
            <input className="SearchBar" type="text" ref="filterTextInput" value={this.props.filter} placeholder="Search for" onChange={this.handleInputChange}/>
        );
    }
}
