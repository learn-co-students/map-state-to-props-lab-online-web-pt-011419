import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!<br />
          {this.props.users.length}
          {this.props.users.map(user => {
            return (
              <li>
                <p>{user.username}</p>
                <p>{user.hometown}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state)
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
