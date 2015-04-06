/** @jsx React.DOM */

var React = require('react');

var ShowAddButton = React.createClass({
  render: function() {

  var classString, buttonText;

  if (this.props.displayed) {
    classString = 'btn btn-info btn-block';
    button = 'Cancel';
  } else {
    classString = 'btn btn-success btn-block';
    button = 'Create New User';
  }
    return (
        <button className={classString} onClick={this.props.onToggleForm}>{button}</button>
      );
  }
});

module.exports = ShowAddButton;