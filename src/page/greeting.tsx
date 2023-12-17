import { useEffect, useState } from "react";
import SignIn from "../component/signin";

const Greeting = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [signInRequired, setSignInRequired] = useState(false);
  useEffect(() => {
    // window.ipcRenderer.store.set("foo", "123");
    const token = window.ipcRenderer.store.get("token");
    if (token === undefined) setSignInRequired(true);
    console.log(token);
    setToken(token);
  });
  if (signInRequired) {
    return (
      <div>
        <SignIn />
      </div>
    );
  } else if (token) {
    return (
      <div>
        <h1>Account</h1>
      </div>
    );
  }
};
export default Greeting;
