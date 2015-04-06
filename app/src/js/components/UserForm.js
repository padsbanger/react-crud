/** @jsx React.DOM */

var React = require('react');

var UserForm = React.createClass({
  render: function() {
    return (
      <form id="userForm">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Name"/>
          <button className="btn btn-primary btn-block">Add user</button>
        </div>
      </form>
      );
  }
});

module.exports = UserForm;