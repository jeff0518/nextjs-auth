import Link from "next/link";

import style from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={style.header}>
      <Link href="/">
        <div className={style.loge}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/auth">Login</Link>
          </li>
          <li>
            <Link href="profile">Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
