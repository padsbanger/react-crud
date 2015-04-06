/** @jsx React.DOM */

var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var UserForm = require('./UserForm');
var UsersList = require('./UsersList');
var Firebase = require('firebase');

var Users = React.createClass({

  componentDidMount: function() {
    var ref = new Firebase('https://react-test123.firebaseio.com/users');
    ref.on('value', function(snap) {
      var items = [];

      snap.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.name();
        items.push(item);
      });

      this.setState({
        users: items
      });
    }.bind(this));
  },

  getInitialState: function() {
    return {
      users: [],
      formDisplayed: false
    };
  },

  onToggleForm: function() {
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewUser: function(newUser) {
    var ref = new Firebase('https://react-test123.firebaseio.com/users');
    ref.push(newUser);
  },

  onRemoveUser: function(user) {

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