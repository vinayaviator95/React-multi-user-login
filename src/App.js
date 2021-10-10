import React from "react";
import Form from "./Form";
import Admin from "./pages/Admin";
const App = () => {
  const [loggedUser, setLoggedUser] = React.useState({});
  const [authenticated, setAuthenticated] = React.useState(false);
  const loginUser = (loggedUser) => {
    setLoggedUser(loggedUser);
    setAuthenticated(true);
  };

  return (
    <div>
      {!authenticated ? (
        <Form loginUser={loginUser} />
      ) : (
        <Admin loggedUser={loggedUser} />
      )}
    </div>
  );
};

export default App;
