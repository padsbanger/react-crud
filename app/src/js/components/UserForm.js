/** @jsx React.DOM */

var React = require('react');

var UserForm = React.createClass({

  handleForm: function(e) {
    e.preventDefault();
    var newUser = {
      name: this.refs.name.getDOMNode().value,
      age: this.refs.age.getDOMNode().value
    };

    this.refs.userForm.getDOMNode().reset();

    this.props.onNewUser(newUser);

  },

  render: function() {
    var display = this.props.displayed ? 'block': 'none';
    var styles = {
      display: display
    };
    return (
      <form style={styles} ref="userForm" id="userForm" onSubmit={this.handleForm}>
        <div className="form-group">
          <input type="text" ref="name" className="form-control" placeholder="Name"/>
          <input type="number" ref="age" className="form-control" placeholder="Age"/>
          <button type="submit" className="btn btn-primary btn-block">Add user</button>
        </div>
      </form>
      );
  }
});

module.exports = UserForm;