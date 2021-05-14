import { useUser } from "hooks";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { signOut, jwt, email } = useUser();

  const handleSignOut = () => {
    signOut({ jwt });
  };
  // navbar-dark bg-dark d
  return (
    <nav className={`${styles.navbar_container} navbar navbar-expand-lg`}>
      <a className={`${styles.navbar_item} navbar-brand`} href="/home">
        Rodolfo Cáceres
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto mx-3">
          <li className="nav-item dropdown">
            <a
              className={`${styles.navbar_item} nav-link dropdown-toggle`}
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {email}
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <button onClick={handleSignOut} className="dropdown-item">
                Sign out
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
