import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i class="topIcon fab fa-facebook-square"></i>
        <i class="topIcon fab fa-twitter-square"></i>
        <i class="topIcon fab fa-pinterest-square"></i>
        <i class="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem"> LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img
              className="topImage"
              src="https://i.ibb.co/CMh946P/IMG-0329-02-1.jpg"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>

            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i class="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
