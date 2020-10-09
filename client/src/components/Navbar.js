import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';


const NavBar = () => {
 
    const history = useHistory();
    const { user, handleLogout } = useContext(AuthContext);

    const getRightNav = () => {
      if (user) {
        return (
          <>
          <div
            onClick={() => handleLogout(history)}
            style={{ color: "red" }}
            >
              LOG-OUT
          </div>
        </>
        );
      } else {
        return (
          <>
            <Link to="/register">REGISTER</Link>
            <span style={{ marginRight: '10px'}}></span>
            <Link to="/login">LOG-IN</Link>
          </>
        );
      }
    };

  return (
    <div style={styles.navbar}>
      <div>
      <Link to="/">Home</Link>
      <span style={{ marginRight: "10px" }}></span>
      {user && <Link to="/thingsDemo">Things</Link>}
    </div>
    <div>{getRightNav()}</div>
    </div>
  );
};

const styles = {
  navbar: {
    background: "black",
    padding: "10px",
  },
};

export default NavBar;
