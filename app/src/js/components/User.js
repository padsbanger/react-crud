/** @jsx React.DOM */

var React = require('react');

var User = React.createClass({
  render: function() {
    return(
      <li className="list-group-item">
        <span>{this.props.id}.</span> <span>Name: {this.props.name}</span> <span>Age: {this.props.age}</span>
      </li>
      );
  }
});

module.exports = User;