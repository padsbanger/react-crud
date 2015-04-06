/** @jsx React.DOM */

var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var UserForm = require('./UserForm');
var UsersList = require('./UsersList');

var Users = React.createClass({
  getInitialState: function() {
    var usersList = [
      {id: '1', name: 'Michal', age: 12},
      {id: '2', name: 'Artyom', age: 25},
      {id: '3', name: 'Strielok', age: 34}
    ];
    return {
      users: usersList,
      formDisplayed: false
    };
  },

  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewUser: function(newUser) {
    var newUsers = this.state.users.concat([newUser]);
    this.setState({
      users: newUsers
    });
  },

  render: function() {
    return (
      <div className="container">
        <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
        <UserForm  displayed={this.state.formDisplayed} onNewUser={this.onNewUser}/>
        <UsersList users={this.state.users}/>
      </div>
      );
  }
});

module.exports = Users;