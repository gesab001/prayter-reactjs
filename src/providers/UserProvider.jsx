import React, { Component, createContext } from "react";
import { auth, generateUserDocument} from "../firebase";

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null,
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = JSON.stringify(userAuth);
      this.setState({ user });
	 // this.setState({privatePrayers});
	  console.log("userprovider"+this.state.user);
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;