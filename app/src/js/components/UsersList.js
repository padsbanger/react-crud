/** @jsx React.DOM */

var React = require('react');
var User = require('./User');

var UsersList = React.createClass({


  render: function() {

    var userList = this.props.users.map(function(user) {
      return <User name={user.name} id={user.id} age={user.age} />;
    });
    return (
        <ul className="list-group">
          {userList}
        </ul>
      );
  }
});

module.exports = UsersList;